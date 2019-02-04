import React from 'react';

export default class Portfolio extends React.Component{
  render(){
    return(
      <section className='portfolio' id='portfolio'>
      <h2>Projects</h2> 
      <div className='project'>
      <div className='project-description col-6'>
        <a className='live-link' href='https://noted-client.herokuapp.com'><h3>Noted</h3></a>
        <a className='live-link' href='https://noted-client.herokuapp.com'>Github</a>
        <p>Noted is an application focused on helping users learn musical notation and improve their skills as musician.</p>
        <p>The learning experience comes from utilizing a spaced repetition algorithm and allowing users to be exposed more frequently to questions they may have missed to help them learn </p>
      </div>
      <img className='project-img' src='https://i.imgur.com/0rtvoY8.png' alt='Noted' ></img>
      <div className='tech-stack'>
        <h4 className='tech-title'>Tech Stack</h4>
        <h4>Front-End:</h4>
        <p className='tech'>React</p>
        <p className='tech'>Redux</p>
        <p className='tech'>CSS</p>
        <h4>Back-End:</h4>
        <p className='tech'>Node</p>
        <p className='tech'>Express</p>
        <p className='tech'>MongoDB</p>
        <p className='tech'>Mongoose</p>
        <p className='tech'>Passport</p>
        <p className='tech'>Express</p>
        <p className='tech'>JWT</p>
      </div>
    </div>
        <div className='project'>
          <img className='project-img' src='https://i.imgur.com/90Xi74t.png' alt='Overwatch Buddy' ></img>
          <div className='project-description'>
            <a className='live-link' href='https://overwatch-buddy.herokuapp.com/'><h3>Overwatch Buddy</h3></a>
            <p>Overwatch Buddy is an application that allows users to customize, build, and save teams using Heroes from Blizzard's Overwatch.</p> 
            <p>It is a tool to help users get further insight into the mechanics of Overwatch team builds by providing firm number statistics for each team build and allows users to add notes to give personal opinions and plan for future builds. Planned features</p>
          </div>
          <div className='tech-stack'>
            <h4 className='tech-title'>Tech Stack</h4>
            <h4>Front-End:</h4>
            <p className='tech'>React</p>
            <p className='tech'>Redux</p>
            <p className='tech'>CSS</p>
            <h4>Back-End:</h4>
            <p className='tech'>Node</p>
            <p className='tech'>Express</p>
            <p className='tech'>MongoDB</p>
            <p className='tech'>Mongoose</p>
            <p className='tech'>Passport</p>
            <p className='tech'>Express</p>
            <p className='tech'>JWT</p>
          </div>
        </div>
      </section>
    )
  }
}