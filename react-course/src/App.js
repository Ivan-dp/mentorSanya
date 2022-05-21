import React from 'react';
import { Par, Toggle } from './components/';
import './styles/index';

function App() {
  return (
    <div className="App">
      <Par>
        <div className="square" style={{ backgroundColor: 'pink' }}></div>
      </Par>
      <Par>
        <div className="square" style={{ backgroundColor: 'red' }}>
          <Toggle>
            <button>Push ME!</button>
          </Toggle>
        </div>
      </Par>
    </div>
  );
}

export default App;
