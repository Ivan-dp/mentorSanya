import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from "./components/Counter";
import RedSquare from './components/RedSquare';
import Arr1, {copyArr1} from './components/Arr1';
import {arrayColor, ArrOfObj} from './functions/ArrOfObj';
import { ColoredSquares } from './components/ColoredSquares';
import './styles/App.css';

function App() {
  // const [value, setValue] = useState("Текст в инпуте");

  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* TODO тут можно писать штуки, чтоб не забывать что-нибудь*/}
      {/* <RedSquare/> */}
      <ul>{Arr1}</ul>
      {/* {JSON.stringify(ColoredSquares)} */}
      {/* <ul>{ColoredSquares}</ul> */}
      {/* <ColoredSquares/> */}
    </div>
  );
}

// console.log(ArrOfObj(arrayColor, copyArr1));

// console.log(ColoredSquares);

export default App;
