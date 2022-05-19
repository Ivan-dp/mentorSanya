// eslint-disable-next-line no-unused-vars
import { React } from 'react';
import PropTypes from 'prop-types';

export const Baby = (props) => {
  Baby.propTypes = {
    className: PropTypes.string.isRequired,
    func: PropTypes.string.isRequired,
    parentColor: PropTypes.string.isRequired,
    babyColor: PropTypes.string.isRequired,
  };
  console.log(props.parentColor, props.babyColor, props.func);
  return (
    <div className={'square ' + props.className} style={{ backgroundColor: props.parentColor }}>
      <button
        style={{ backgroundColor: props.babyColor }}
        onClick={() => props.func(props.babyColor)}
      >
        Change
      </button>
    </div>
  );
};
