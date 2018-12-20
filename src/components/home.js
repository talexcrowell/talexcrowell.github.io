import React from 'react';

export default class Home extends React.Component{
  render(){
    return(
      <section className='home col-12'> 
        <img className='profile-pic' src="https://i.imgur.com/MnWoUqF.jpg" alt="Profile"/>
        <p className='home-description'>Hello! My name is Alex Crowell and I'm a software engineer and security nerd. 
          I'm always looking for opportunities to learn and to share my knowledge to keep 
          improving myself. Thank you for visiting my site and please explore :)
        </p>
      </section>
    )
  }
}