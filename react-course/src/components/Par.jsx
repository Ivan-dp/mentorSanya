import PropTypes from 'prop-types';

const Par = ({ children }) => {
  Par.propTypes = {
    children: PropTypes.object.isRequired,
  };

  return children;
};

export { Par };
