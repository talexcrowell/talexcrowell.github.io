import React from 'react';

export default class AboutMe extends React.Component{
  render(){
    return(
      <section className='about' id='about'>
        <h2>About Me</h2> 
        <p className='about-description'>
        My name is Alex Crowell and I'm a software engineer and security nerd. 
        I'm always looking for opportunities to learn and to share my knowledge. 
        I hope to continually improve my skills and help others to become better developers.
        </p>
        <p className='about-description'>
        I was born and raised in Albuquerque, New Mexico and attended University of New Mexico where I graduated with my Bachelor's of Science in Biology. 
        After a few years of different jobs, I felt the need to discover more about myself and how I can use technology to help others. 
        This led me to enter the the world of web development and cyber security.
        I am passionate about protecting people in their everyday use of digital resources.
        </p>
        <p className='about-description'>
        Thank you for visiting my portfolio and please feel free to contact me if you have any questions :)  
        </p>

      </section>
    )
  }
}