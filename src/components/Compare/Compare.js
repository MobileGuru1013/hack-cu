import React, { Component } from 'react'
import { getPrices, allTwitter } from '../../api/apiCall'
import { cleanCryptoData, weekCryptoData } from '../../cleaner'
import { LineChart } from 'react-chartkick'
import { compareData, compareTwitterBit, compareTwitWeekBit, compareTwitterEth, compareTwitWeekEth } from '../../normalize'
window.Chart = require('chart.js')

export class Compare extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ethereum: [],
      bitcoin: [],
      ethWeek: [],
      bitWeek: []
    }
  }

  async componentDidMount () {
    const ethPrice = await getPrices('ETH')
    const bitcoinPrice = await getPrices('BTC')
    const twitterData = await allTwitter()
    //day twitter comp
    //week twitter comp

    const cleanEth = cleanCryptoData(ethPrice)
    const cleanBitcoin = cleanCryptoData(bitcoinPrice)

    const compareEth = compareData(cleanEth)
    const compareBit = compareData(cleanBitcoin)

    const weekEthData = weekCryptoData(ethPrice)
    const weekBitData = weekCryptoData(bitcoinPrice)
    const weekEthComp = compareData(weekEthData)
    const weekBitComp = compareData(weekBitData)

    const twitEthNormalized = compareTwitterEth(twitterData)
    const weekTwitEthNormalized = compareTwitWeekEth(twitterData)
    const twitBitNormalized = compareTwitterBit(twitterData)
    const weekTwitBitNormalized = compareTwitWeekBit(twitterData)



    this.setState({
      ethereum: compareEth,
      bitcoin: compareBit,
      ethWeek: weekEthComp,
      bitWeek: weekBitComp,
      twitEth: twitEthNormalized,
      twitBit: twitBitNormalized,
      twitEthWeek: weekTwitEthNormalized,
      twitBitWeek: weekTwitBitNormalized
    })
  }

  render () {
    const dayData = [
      { "name": "bitcoin", 
        "data": this.state.bitcoin },
      { "name": "ethereum",
        "data": this.state.ethereum }
    ]

    const weekData = [
      { "name": "bitcoin", 
        "data": this.state.bitWeek },
      { "name": "ethereum",
        "data": this.state.ethWeek }
    ]

    const twitDay = [
      { "name": "bitcoin", 
        "data": this.state.twitEth },
      { "name": "ethereum",
        "data": this.state.twitBit }
    ]

    const twitWeek = [
      { "name": "bitcoin", 
        "data": this.state.twitBitWeek },
      { "name": "ethereum",
        "data": this.state.twitEthWeek }
    ]

    return (
      <div className="compare">
        <div className="content">
        <LineChart data={twitDay}
             title='Ethereum vs Bitcoin sentiment on Twitter - 1 day (last 24 hrs)'
             xtitle='Time'
             ytitle='Positivity (twitter analysis)'
             min={null}
             max={null}
             library={{height: "500px"}} />
        <LineChart data={twitWeek}
             title='Ethereum vs Bitcoin sentiment on Twitter - 1 week (last 168 hrs)'
             xtitle='Time'
             ytitle='Positivity (twitter analysis)'
             min={null}
             max={null}
             library={{height: "500px"}} />
        <h2>Comparison Analysis</h2>
        <div className="content graph-container">
          <LineChart data={dayData}
                     title='Price (normalized) for comparison - 1 day (past 24 hrs)'
                     xtitle='Time'
                     ytitle='Price'
                     min={0}
                     max={1}
                     width='100%'
                     height='500px' />
          <LineChart data={weekData}
                     title='Price (normalized) for comparison - 1 week (past 168 hrs)'
                     xtitle='Time'
                     ytitle='Price'
                     min={0}
                     max={1}
                     width='100%'
                     height='500px' />
          </div>
        </div>
      </div>
    )
  }
}