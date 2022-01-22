/* eslint-disable no-restricted-globals */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { stats } from './components/stats';

function App() {
  stats();
  return (
    <div className="App">
      <h1 className="welcome-header">Dungeons and Dragons Character/NPC Generator</h1>
      <button className="start-gen-btn" onClick={location.reload}>Generate Character</button>
      <div className="top-right-items">
        <h1 className="race-header">Race:</h1>
        <div id="race-text" className="race-def"></div>
        <h1 className="name-header">Name:</h1>
        <div id="name-text" className="name-def"></div>
        <div id="surname-text" className="name-def"></div>
      </div>
      <h1>Strength</h1>
      <div id="str-text" className="stat-def"></div>
      <h1>Dexterity</h1>
      <div id="dex-text" className="stat-def"></div>
      <h1>Constitution</h1>
      <div id="con-text" className="stat-def"></div>
      <h1>Intelligence</h1>
      <div id="int-text" className="stat-def"></div>
      <h1>Wisdom</h1>
      <div id="wis-text" className="stat-def"></div>
      <h1>Charisma</h1>
      <div id="cha-text" className="stat-def"></div>
    </div>
  );
}

export default App;
