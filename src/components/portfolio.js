import React from 'react';

export default class Portfolio extends React.Component{
  render(){
    return(
      <section className='portfolio' id='portfolio'>
        <h2>Projects</h2>
          <div className='project'>
          <div className='project-description'>
            <a className='live-link' href='https://the-friend-zone-app.herokuapp.com' target='_blank' rel='noopener noreferrer'><h3>The Friend Zone</h3></a>
            <a className='github-repo' href='https://github.com/the-friendzone-app' target='_blank' rel='noopener noreferrer'><i className='github'/></a>
            <p>The Friend Zone is an approach to social media to help people build platonic friendships through the comfort of basic anonymity.</p>
            <p>It was created with a team of developers where I took the role of Project Manager. Each member developed a separate feature that was reviewed and refactored with the developer team's decisions and criticisms throughout the project.</p>
            <p>The Friend Zone is an ongoing project with plans for adding new features to improve user experience and continue making the Friend Zone a safe, comfortable online community.</p>
          </div>
          <img className='project-img' src='https://i.imgur.com/mTl1PZX.png' alt='The Friend Zone' ></img>
          <div className='tech-stack'>
            <h4 className='tech-title'>Tech Stack</h4>
            <h4>Front-End:</h4>
            <p className='tech'>React</p>
            <p className='tech'>Redux</p>
            <p className='tech'>CSS</p>
            <p className='tech'>socket.io</p>
            <p className='tech'>Enzyme</p>
            <p className='tech'>Jest</p>
            <h4>Back-End:</h4>
            <p className='tech'>Node</p>
            <p className='tech'>Express</p>
            <p className='tech'>MongoDB</p>
            <p className='tech'>Mongoose</p>
            <p className='tech'>Passport</p>
            <p className='tech'>Express</p>
            <p className='tech'>JWT</p>
            <p className='tech'>Mocha</p>
            <p className='tech'>Chai</p>
          </div>
        </div>   
        <div className='project'>
          <div className='project-description'>
            <a className='live-link' href='https://noted-client.herokuapp.com' target='_blank' rel='noopener noreferrer'><h3>Noted</h3></a>
            <a className='github-repo' href='https://github.com/thinkful-ei25/noted-client-sean-alex' target='_blank' rel='noopener noreferrer'><i className='github'/></a>
            <p>Noted is an application focused on helping users learn musical notation and improve their skills as a classical musician.</p>
            <p>The learning experience comes from utilizing a spaced repetition algorithm and allowing users to be exposed more frequently to questions they may have missed.</p>
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
            <div className='project-description'>
              <a className='live-link' href='https://overwatch-buddy.herokuapp.com/'><h3>Overwatch Buddy</h3></a>
              <a className='github-repo' href='https://github.com/talexcrowell/ow-team-app-client' target='_blank' rel='noopener noreferrer'><i className='github'/></a>
              <p>Overwatch Buddy is an application that allows users to customize, build, and save teams using Heroes from Blizzard's Overwatch.</p> 
              <p>It is a tool to help users get further insight into the mechanics of Overwatch team builds by providing firm number statistics for each team build and allows users to add notes to give personal opinions and plan for future builds. Planned features</p>
            </div>
            <img className='project-img' src='https://i.imgur.com/90Xi74t.png' alt='Overwatch Buddy' ></img>
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
              <p className='tech'>Mocha</p>
              <p className='tech'>Chai</p>
            </div>
          </div>
      </section>
    )
  }
}