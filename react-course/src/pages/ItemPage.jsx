import React from 'react';
import { PropTypes } from 'prop-types';

const ItemPage = (props) => {
  ItemPage.propTypes = {
    item: PropTypes.object.isRequired,
  };
  return (
    <div className="item-page">
      <h4>
        {props.item.id}. {props.item.title} is {JSON.stringify(props.item.checked)}
      </h4>
    </div>
  );
};

export { ItemPage };
