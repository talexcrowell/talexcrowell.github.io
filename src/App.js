import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Home from './components/home';
import './App.css';
import NavBar from './components/nav-bar';
import AboutMe from './components/about-me';
import Portfolio from './components/portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header col-12">
            <NavBar />
          </header>
          <main className='main'>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
