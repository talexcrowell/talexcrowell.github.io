import React from 'react';

export default class NavBar extends React.Component{
  render(){
    return(
      <section className='nav-bar'>
        <ul className='nav-directionals'>
          <li className='nav-nameplate'>T. Alex Crowell</li>
          <li className='nav-direction'><a href='#'><i className='resume'/></a></li>
          <li className='nav-direction'><a href='mailto:talexcrowell@gmail.com'><i className='email'/></a></li>
          <li className='nav-direction-right'><a href='#contact'>Contact</a></li>
          <li className='nav-direction-right'><a href='#about'>About Me</a></li>
          <li className='nav-direction-right'><a href='#portfolio'>Portfolio</a></li>
        </ul> 
      </section>
    )
  }
}