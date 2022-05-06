import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { FuncWithNum } from './components/FuncWithNum';
// eslint-disable-next-line import/no-unresolved
import { FuncWithNum2 } from './components/FuncWithNum2';
import './styles/App.css';

function App() {
  const [results] = useState([
    {
      id: 1,
      number: 20,
      func: function (x) {
        return x / 2;
      },
    },
    {
      id: 2,
      number: 5,
      func: function (x) {
        return x * 2;
      },
    },
    {
      id: 3,
      number: 8,
      func: function (x) {
        return x + 2;
      },
    },
    {
      id: 4,
      number: 12,
      func: function (x) {
        return x - 2;
      },
    },
    {
      id: 5,
      number: 32,
      func: function (x) {
        return x % 11;
      },
    },
  ]);

  return (
    <div className="App">
      {results.map((result) => (
        <FuncWithNum result={result} key={result.id} number={result.number} func={result.func} />
      ))}
      <FuncWithNum2
        key={1}
        arg1={3}
        arg2={19}
        func={function (x, y) {
          return x + y;
        }}
      />
    </div>
  );
}

export default App;
