import PropTypes from 'prop-types';

const Toggle = ({ children }) => {
  Toggle.propTypes = {
    children: PropTypes.object.isRequired,
  };

  return children;
};

export { Toggle };
