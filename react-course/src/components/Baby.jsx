// eslint-disable-next-line no-unused-vars
import { React, useState } from 'react';
import PropTypes from 'prop-types';

export const Baby = (props) => {
  Baby.propTypes = {
    square: PropTypes.string.isRequired,
    parentColor: PropTypes.string.isRequired,
    babyColor: PropTypes.string.isRequired,
  };
  return (
    <div className="square" style={{ backgroundColor: props.square.parentColor }}>
      <button style={{ backgroundColor: props.square.babyColor }}>Change</button>
    </div>
  );
};
