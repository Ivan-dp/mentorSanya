import React from 'react';
import { FuncWithNum } from './components/FuncWithNum';
// import { arrayNum } from './const/consts';
// import { renderOtherNumArrays } from './functions/renderOtherNumArrays';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      {/* <ul>{renderOtherNumArrays(arrayNum)}</ul> */}
      <FuncWithNum name="Ivan" />
    </div>
  );
}

export default App;
