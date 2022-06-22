import React from 'react';
// import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';
import { todoItems } from '../consts';

const ItemPage = () => {
  // ItemPage.propTypes = {
  //   item: PropTypes.object.isRequired,
  // };

  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  console.log(id);
  const items = todoItems;
  return (
    <div className="item-page">
      <h4>
        {items[id].id}. {items[id].title} is {JSON.stringify(items[id].checked)}
      </h4>
    </div>
  );
};

export { ItemPage };
