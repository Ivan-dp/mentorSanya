import { React, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { itemsContext } from '../itemsContext';

const ItemPage = () => {
  const { id } = useParams();
  const { items } = useContext(itemsContext);

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
