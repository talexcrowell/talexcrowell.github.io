import React, { Component } from 'react';
import Home from './components/home';
import NavBar from './components/nav-bar';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header col-12">
            <NavBar />
          </header>
          <main className='main'>
          <Home />
          </main>
        </div>
    );
  }
}

export default App;
