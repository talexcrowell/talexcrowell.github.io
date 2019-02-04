import React from 'react';

export default class AboutMe extends React.Component{
  render(){
    return(
      <section className='about' id='about'>
        <h2>About Me</h2> 
        <p className='about-description'>
        My name is Alex Crowell and I'm a software engineer and security nerd. 
        I'm always looking for opportunities to learn and to share my knowledge to keep 
        improving myself and others into becoming better developers.
        </p>
        <p className='about-description'>
        I was born and raised in Albuquerque, New Mexico and attended University of New Mexico where I graduated with my Bachelor's of Science in Biology. 
        After a few years of different jobs, I felt the need to discover more about me and how I can use that to help others. 
        As a long time user of the internet and witnessing its evolution within today's society, I decided to enter the the world of web development and cyber security.
        My passion has made me realize I want to help protect people by educating them on understanding and utlizing digital resources, and protecting themselves with common security practices on accessing a potential resource.
        </p>
        <p className='about-description'>
        Thank you for visiting my portfolio and please feel free to contact me if you have any questions :)  
        </p>

      </section>
    )
  }
}