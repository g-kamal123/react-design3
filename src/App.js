// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Adventure from './components/Adventure';
import Console from './components/Console';
import Playground from './components/Playground';

function App() {
  return (
    <div className="App">
      <div id='print'>
      <Console />
      <Playground />
      <Adventure />
      </div>
      
    </div>
  );
}

export default App;
