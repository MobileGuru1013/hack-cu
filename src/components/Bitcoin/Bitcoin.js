import React, { Component } from 'react'
import { getPrices, allTwitter } from '../../api/apiCall'
import { ScatterChart } from 'react-chartkick';
import { cleanCryptoData, weekCryptoData } from '../../cleaner'
import { Chart } from 'react-google-charts'
import './Bitcoin.css'
import logo from '../../Bitcoin_logo.svg';
import { LineChart } from 'react-chartkick'
import { compareData, compareTwitterBit, compareTwitWeekBit } from '../../normalize'
window.Chart = require('chart.js')

export class Bitcoin extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount () {
    //also need: PROMISE.ALL
    //twitter mentions, twitter x price
    const twitterData = await allTwitter()
    const bitcoinPrice = await getPrices('BTC')

    const cleanBit = cleanCryptoData(bitcoinPrice)
    const weekBit = weekCryptoData(bitcoinPrice)
    const weekBitData = weekCryptoData(bitcoinPrice)
    const twitNormalized = compareTwitterBit(twitterData)
    const weekTwitNormalized = compareTwitWeekBit(twitterData)
    const compareBit = compareData(cleanBit)
    const weekBitComp = compareData(weekBitData)

    this.setState({
      current: cleanBit,
      week: weekBit,
      dayTwit: twitNormalized,
      weekTwit: weekTwitNormalized,
      compareBit: compareBit,
      compareBitWeek: weekBitComp
    })
  }

  render () {
    const compareDay = [
      { "name": "price", 
        "data": this.state.compareBit },
      { "name": "twitter sentiment",
        "data": this.state.dayTwit }
    ]

    const compareWeek = [
      { "name": "price", 
        "data": this.state.compareBitWeek },
      { "name": "twitter sentiment",
        "data": this.state.weekTwit }
    ]

    return (
      <div className="Bitcoin">
        <img src={logo} />
        <div className='graph-container'>
        <LineChart data={compareDay}
             title='Bitcoin sentiment on Twitter - 1 day (last 24 hrs)'
             xtitle='Time'
             ytitle='Positivity (twitter analysis)'
             min={null}
             max={null}
             library={{height: "500px"}} />
        <LineChart data={compareWeek}
             title='Bitcoin sentiment on Twitter - 1 week (last 168 hrs)'
             xtitle='Time'
             ytitle='Positivity (twitter analysis)'
             min={null}
             max={null}
             library={{height: "500px"}} />
      {
        this.state.week &&
        <LineChart data={this.state.week}
             title='Bitcoin price - 1 week (last 168 hrs)'
             xtitle='Time'
             ytitle='Price'
             min={null}
             max={null}
             width='100%'
             height='500px' />
      }
        <div className="content">
        {
          this.state.current &&
          <LineChart data={this.state.current}
               title='Bitcoin price - 1 day (last 24 hrs)'
               xtitle='Time'
               ytitle='Price'
               min={null}
               max={null}
               width='100%'
               height='500px' />
        }
          </div>
        </div>
      </div>
    )
  }
}