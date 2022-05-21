import { React } from 'react';
import PropTypes from 'prop-types';

const ToggleSquare = ({ children, ...props }) => {
  ToggleSquare.propTypes = {
    children: PropTypes.object.isRequired,
  };

  return <div {...props}>{children}</div>;
};

export { ToggleSquare };
