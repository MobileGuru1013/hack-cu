import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export const Nav = () => (
  <div className='nav'>
    <NavLink to='/bitcoin'
             className='nav-link'
             activeClassName="selected">Bitcoin</NavLink>
    <NavLink to='/ethereum'
             className='nav-link'
             activeClassName="selected">Ethereum</NavLink>
    <NavLink to='/compare'
             className='nav-link'
             activeClassName="selected">Compare</NavLink>
    <NavLink to='/about'
             className='nav-link'
             activeClassName="selected">About</NavLink>
  </div>
)

  
