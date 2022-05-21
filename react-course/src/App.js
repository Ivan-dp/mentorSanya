import React from 'react';
import { Parent, ToggleSquare } from './components/';
import './styles/index';

function App() {
  return (
    <div className="App">
      <Parent />
      <ToggleSquare className="square" style={{ backgroundColor: 'yellow' }}></ToggleSquare>
      <ToggleSquare className="square" style={{ backgroundColor: 'yellow' }}>
        <button style={{ backgroundColor: 'red' }}>Push Me!</button>
      </ToggleSquare>
    </div>
  );
}

export default App;
