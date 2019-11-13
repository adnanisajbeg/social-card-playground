import React from 'react';
import logo from './logo.svg';
import './App.css';

class Card extends React.Component {
  render() {
    return (
        <div className="github-profile">
          <img src="https://placehold.it/75" />
          <div className="info">
            <div className="name">Name here...</div>
            <div className="company">Company here...</div>
          </div>
        </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="header">Test project - Github social card</div>
      <Card />
    </div>
  );
}

export default App;
