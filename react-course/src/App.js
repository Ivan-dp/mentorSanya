import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { FuncWithNum } from './components/FuncWithNum';
// import { arrayNum } from './const/consts';
// import { renderOtherNumArrays } from './functions/renderOtherNumArrays';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      {/* <ul>{renderOtherNumArrays(arrayNum)}</ul> */}
      <FuncWithNum
        number={5}
        func={() => {
          return this.number * 2;
        }}
      />
    </div>
  );
}

export default App;
