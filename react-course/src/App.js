import React from 'react';
import { ColorValueList } from './components/ColorValueList';
import './styles/App.css';

function App() {

  return (
    <div className="App">
      <ul>{ColorValueList}</ul>
    </div>
  );
}

export default App;
