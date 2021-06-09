import React from 'react'

const Navbar = () => {
  const cssBlock = 'bb-navbar';
  return (
    <div className={cssBlock} role='navigation'>
      <div className={`${cssBlock}_link ${cssBlock}_link--logo` }>
        <img src="/images/Music_Icon.png" alt="music notes"/>
      </div>
      <a className={`${cssBlock}_link`} href='/'>Home</a>
      <a className={`${cssBlock}_link`} href='/about'>About</a>
      
      <a className={`${cssBlock}_link`} href='/billboards'>Billboards</a>
  </div>
  )
}

export default Navbar;

