import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import Game from './components/Game'
import './index.css';

function App() {
  return (
    <div className="layout">
      <Game />
    </div>
  );
}

export default App;
