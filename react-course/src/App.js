import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from "./components/Counter";
import './styles/App.css';

function App() {
  const [value, setValue] = useState("Текст в инпуте");
  
  return (
    <div className="App">
      <ClassCounter/>
    </div>
  );
}

export default App;
