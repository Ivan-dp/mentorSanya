import { React, useState } from 'react';
import PropTypes from 'prop-types';

export const FuncWithNum = (props) => {
  const [toggle, setToggle] = useState(true);
  const { result } = props;
  console.log({ result });

  FuncWithNum.propTypes = {
    result: PropTypes.string.IsRequired,
    number: PropTypes.string.IsRequired,
    func: PropTypes.string.IsRequired,
  };

  if (toggle) {
    return (
      <button onClick={() => setToggle(false)} className="square coral">
        <p>ID: {props.result.id}</p>
        <h3>Number: {props.result.number}</h3>
        <h1>Result: {props.result.func(props.result.number)}</h1>
      </button>
    );
  } else {
    return <></>;
  }
};
