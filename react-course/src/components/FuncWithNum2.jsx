import React from 'react';
import PropTypes from 'prop-types';

export const FuncWithNum2 = (props) => {
  FuncWithNum2.propTypes = {
    arg1: PropTypes.string.IsRequired,
    arg2: PropTypes.string.IsRequired,
    func: PropTypes.string.IsRequired,
  };
  return (
    <div className="square yellow">
      <h3>arg1: {props.arg1}</h3>
      <h3>arg2: {props.arg2}</h3>
      <h1>Result: {props.func(props.arg1, props.arg2)}</h1>
    </div>
  );
};
