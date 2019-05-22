import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../Home/Home'
import { About } from '../About/About'
import { Bitcoin } from '../Bitcoin/Bitcoin'
import { Ethereum } from '../Ethereum/Ethereum'
import { Compare } from '../Compare/Compare'

export const Main = () => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/about' component={ About } />
    <Route path='/bitcoin' component={ Bitcoin } />
    <Route path='/ethereum' component={ Ethereum } />
    <Route path='/compare' component={ Compare } />
  </Switch>
)