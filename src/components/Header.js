import React, {Component} from 'react';
import Navbar from './Navbar.js';
import Hero from './Hero.js';

function Header(){

  return (

    <header className='relative'>
    <Navbar logo='/img/logo.png'/>
      <Hero title='Delicious Sushi' subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '/>
    </header>


  )

}

export default Header;
