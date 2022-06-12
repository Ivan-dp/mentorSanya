import React from 'react';
import { PropTypes } from 'prop-types';

const ItemPage = (props) => {
  ItemPage.propTypes = {
    item: PropTypes.object.isRequired,
  };
  return (
    <div className="item-page">
      <h4>
        {props.item.id}. {props.item.title}
        {JSON.stringify(props.item)}
      </h4>
      <h3>{props.item.checked}</h3>
    </div>
  );
};

export { ItemPage };
