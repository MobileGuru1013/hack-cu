import React, { Component } from 'react'
import { getPrices, allTwitter } from '../../api/apiCall'
import { cleanCryptoData, weekCryptoData } from '../../cleaner'
import { Chart } from 'react-google-charts'
import { LineChart } from 'react-chartkick'
import { compareData, compareTwitterEth, compareTwitWeekEth } from '../../normalize'
import logo from '../../eth-logo.png';
window.Chart = require('chart.js')

export class Ethereum extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount () {
    const twitterData = await allTwitter()
    const ethPrice = await getPrices('ETH')

    const cleanEth = cleanCryptoData(ethPrice)
    const weekEth = weekCryptoData(ethPrice)
    const weekEthData = weekCryptoData(ethPrice)
    const twitNormalized = compareTwitterEth(twitterData)
    const weekTwitNormalized = compareTwitWeekEth(twitterData)
    const compareEth = compareData(cleanEth)
    const weekEthComp = compareData(weekEthData)
    
    this.setState({
      current: cleanEth,
      week: weekEth,
      dayTwit: twitNormalized,
      weekTwit: weekTwitNormalized,
      compareEth: compareEth,
      compareEthWeek: weekEthComp
    })
  }

  render () {
    const compareDay = [
      { "name": "price", 
        "data": this.state.compareEth },
      { "name": "twitter sentiment",
        "data": this.state.dayTwit }
    ]

    const compareWeek = [
      { "name": "price", 
        "data": this.state.compareEthWeek },
      { "name": "twitter sentiment",
        "data": this.state.weekTwit }
    ]

    return (
      <div className="Ethereum">
        <img src={logo} />
        <div className='graph-container'>
        <LineChart data={compareDay}
             title='Ethereum sentiment on Twitter - 1 day (last 24 hrs)'
             xtitle='Time'
             ytitle='Positivity (twitter analysis)'
             min={null}
             max={null}
             library={{height: "500px"}} />
        <LineChart data={compareWeek}
             title='Ethereum sentiment on Twitter - 1 week (last 168 hrs)'
             xtitle='Time'
             ytitle='Positivity (twitter analysis)'
             min={null}
             max={null}
             library={{height: "500px"}} />
        {
          this.state.week &&
          <LineChart data={this.state.week}
               title='Ethereum price - 1 week (last 168 hrs)'
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
               title='Ethereum price - 1 day (last 24 hrs)'
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