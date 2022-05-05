import React from 'react';

export const FuncWithNum = (props) => {
  // eslint-disable-next-line react/prop-types
  // let result = props.func();
  console.log(props.number);
  console.log(props.func);
  return (
    <h1>
      {props.number}; {props.func}
    </h1>
  );
};
