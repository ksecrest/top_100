import React from 'react'
import Music_Icon from "./Images/Music_Icon.png" 

const Navbar = () => {
  const cssBlock = 'bb-navbar';
  return (
    <div className={cssBlock} role='navigation'>
      <div className={`${cssBlock}_link ${cssBlock}_link--logo` }>
        <img src={Music_Icon} alt="music notes" />
      </div>
      <a className={`${cssBlock}_link`} href='/'>Home</a>
      <a className={`${cssBlock}_link`} href='/about'>About</a>
      
      <a className={`${cssBlock}_link`} href='/billboards'>Billboards</a>
  </div>
  )
}

export default Navbar;

