import React from 'react';
import PropTypes from 'prop-types';

export const FuncWithNum = (props) => {
  FuncWithNum.propTypes = {
    result: PropTypes.string.IsRequired,
    number: PropTypes.string.IsRequired,
    func: PropTypes.string.IsRequired,
  };
  return (
    <div className="result square">
      <p>ID: {props.result.id}</p>
      <h3>Number: {props.result.number}</h3>
      <h1>Result: {props.result.func(props.result.number)}</h1>
    </div>
  );
};
