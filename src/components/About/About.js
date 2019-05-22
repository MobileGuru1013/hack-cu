import React from 'react'
import './About.css'

export const About = () => {
  return (
    <div className='about-container'>
      <div className='about'>
      <h2>About Our Project</h2>
      <p>Coming into HackCU, we knew we wanted to use Google Sentiment Analysis with social media. When we were here we became excited about the challenges proposed by OppenheimerFunds and Twitter, so we decided to focus on a market sentiment analysis.</p>
      <p>Every hour we collect the most popular tweets in four categories: "bitcoin", "ethereum", "blockchain", and "crypto". We package those tweets up and send them through the Google Natural Language API to get a sentiment score and magnitude for each category. Our React front-end queries the backend API of scores and plots them against hour by hour bitcoin and ethereum price data.</p>
      <p>Our team was composed of two front-end developers and two back-end developers. On the back-end, we built a Rails API to serve data to the front-end. We host the backend on Heroku and using Heroku Scheduler, we make hourly calls to the Twitter API. We send this tweet data through the Google Natural Language sentiment analyzer and create normalized values based on sentiment (-1 negative to 1 positive) and magnitude (degree of certainty).</p>
      </div>
      <h2>Team Members</h2>
      <h4>Backend Devs</h4>
      <p>Max Stackhouse: <a href="https://github.com/Maxscores">Github</a></p>
      <p>Tyler Madsen: <a href="https://github.com/tylermarshal">Github</a></p>
      <h4>Frontend Devs</h4>
      <p>Bruce Chung: <a href="https://github.com/brucekchung">Github</a></p>
      <p>Michelle Hoffman: <a href="https://github.com/michellehoffman">Github</a></p>

    </div>
  )
}