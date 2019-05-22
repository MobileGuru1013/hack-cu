import React from 'react';
import { Nav } from '../Nav/Nav';
import { Link } from 'react-router-dom';
import './header.css'

export const Header = () => (
  <div className='header'>
    <Link to='/'>
      <h1>BlockTweet</h1>
    </Link>
    <Nav />
  </div>
)