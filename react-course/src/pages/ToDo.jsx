import React from 'react';
import PropTypes from 'prop-types';

const ToDo = ({ children }) => {
  ToDo.propTypes = {
    children: PropTypes.array.isRequired,
  };
  return <div className="todo-page">{children}</div>;
};

export { ToDo };
