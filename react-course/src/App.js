import React, { useState } from 'react';

function App() {

  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("Текст в инпуте");

  // console.log(count);
  // console.log(setCount);
  // let likes = 0;

  function increment () {
    setLikes(likes + 1);
    // console.log(likes);
  }

  function decrement () {
    setLikes(likes - 1);
    // console.log(likes);
  }
  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input 
        type="text" 
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
