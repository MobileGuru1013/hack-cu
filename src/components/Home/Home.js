import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export const Home = () => {

  return (
    <div className='home'>\
      <div className='intro'>
        <h1>BlockTweet</h1>
        <Link to='/about'>
          <h2 className='explore'>Explore</h2>
        </Link>
      </div>
    </div>
  )
}