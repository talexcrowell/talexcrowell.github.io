import React from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component{
  render(){
    return(
      <section className='nav-bar col-12'>
        <p className='nameplate'>T. Alex Crowell</p>
        <div className='nav-directionals'>
          <Link to ='/'><div className='nav-direction'>Home</div></Link>
          <Link to ='/about'><div className='nav-direction'>About Me</div></Link>
          <Link to ='/portfolio'><div className='nav-direction'>Portfolio</div></Link>
        </div> 
      </section>
    )
  }
}