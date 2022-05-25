import React from 'react';

const Info = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
  return (
    <div className="info">
      <h1>Info</h1>
    </div>
  );
};

export { Info };
