import React from 'react';
import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';

const ItemPage = (props) => {
  ItemPage.propTypes = {
    item: PropTypes.object.isRequired,
  };

  // eslint-disable-next-line no-unused-vars
  const id = useParams();
  return (
    <div className="item-page">
      <h4>
        {props.item.id}. {props.item.title} is {JSON.stringify(props.item.checked)}
      </h4>
    </div>
  );
};

export { ItemPage };
