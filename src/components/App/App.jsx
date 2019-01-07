import React, { Component } from 'react';
import './App.scss';
import Dogs from '../Dogs/Dogs';

class App extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <header className="App-header">
          <h1>Dangerous Dogs of ATX</h1>
        </header>
        <main className='App-main'>
          <Dogs />
        </main>
        <footer className='App-footer'>Dangerous Dogs of ATX</footer>
      </div>
    );
  }
}

export default App;
