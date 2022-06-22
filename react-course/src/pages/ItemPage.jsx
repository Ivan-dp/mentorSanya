import React from 'react';
import { useParams } from 'react-router-dom';
import { todoItems } from '../consts';

const ItemPage = () => {
  const { id } = useParams();
  console.log(id);
  const items = todoItems;

  if (id >= items.length) {
    return <h1>Некорректно введён номер</h1>;
  } else {
    return (
      <div className="item-page">
        <h4>
          {items[id].id}. {items[id].title} is {JSON.stringify(items[id].checked)}
        </h4>
      </div>
    );
  }
};

export { ItemPage };
