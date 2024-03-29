import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';

const Header = (props) => {

  const navBars = () => (
    <div className='bars'>
      <FontAwesome name="bars"
        onClick={props.onOpenNav}
        style={{
          color:'#dfdfdf',
          padding:'10px',
          cursor:'pointer',
          fontSize:'20px',
          marginTop:'7px'
        }}
        />
    </div>
  )

  const logo = () => (
      <Link to='/' className='logo'>
        <img alt='nba logo' src='/images/nba_logo.png'/>
      </Link>
)


  return (
    <header className='header'>
      <SideNav {...props}/>
      <div className='headerOpt'>
        {navBars()}
        {logo()}
      </div>
    </header>
  )
}

export default Header
