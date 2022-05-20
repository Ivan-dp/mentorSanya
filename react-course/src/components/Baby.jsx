import { React } from 'react';
import PropTypes from 'prop-types';

const Baby = (props) => {
  Baby.propTypes = {
    func: PropTypes.func.isRequired,
    parentColor: PropTypes.string.isRequired,
    babyColor: PropTypes.string.isRequired,
  };
  return (
    <div className="square" style={{ backgroundColor: props.parentColor }}>
      <button
        style={{ backgroundColor: props.babyColor }}
        onClick={() => props.func(props.babyColor)}
      >
        Change
      </button>
    </div>
  );
};

export { Baby };
