/* eslint-disable no-restricted-globals */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import stats from './components/stats';

function App() {
  return (
    <div className="App">
      <h1 className="welcome-header">Dungeons and Dragons Character/NPC Generator</h1>
      <button className="start-gen-btn" onClick={() => window.location.reload()}>Generate Character</button>
      <div className="top-right-items">
        <h1 className="race-header">Race:</h1>
        <div id="race-text" className="race-def"></div>
        <h1 className="name-header">Name:</h1>
        <div id="name-text" className="name-def"></div>
        <div id="surname-text" className="name-def"></div>
        ${stats}
      </div>
    </div>
  );
}

export default App;
