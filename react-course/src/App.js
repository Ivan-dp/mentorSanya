import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from "./components/Counter";
import RedSquare from './components/RedSquare';
import './styles/App.css';

function App() {
  const [value, setValue] = useState("Текст в инпуте");
  
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      <RedSquare/>
    </div>
  );
}

export default App;
