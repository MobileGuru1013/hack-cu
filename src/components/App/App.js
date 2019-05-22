import React, { Component } from 'react'
import './App.css'

//components:
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
window.Chart = require('chart.js');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />  
      </div>
    )
  }
}

export default App