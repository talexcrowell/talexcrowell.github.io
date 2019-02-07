import React from 'react';

export default class NavBar extends React.Component{
  render(){
    return(
      <section className='nav-bar'>
        <ul className='nav-directionals'>
          <li className='nav-nameplate'>T. Alex Crowell</li>
          <li className='nav-direction'><a href={process.env.PUBLIC_URL + '/resources/resumeTAC.pdf'} download><i className='nav-resume'/></a></li>
          <li className='nav-direction'><a href='mailto:talexcrowell@gmail.com'><i className='nav-email'/></a></li>
          <li className='nav-direction-right'><a href='#contact'>Contact</a></li>
          <li className='nav-direction-right'><a href='#about'>About Me</a></li>
          <li className='nav-direction-right'><a href='#portfolio'>Portfolio</a></li>
        </ul> 
      </section>
    )
  }
}