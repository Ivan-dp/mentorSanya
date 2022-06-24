import { React, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { itemsContext } from '../itemsContext';
import { Input, Button } from '@mantine/core';

const ItemPage = () => {
  const { id } = useParams();
  const { items } = useContext(itemsContext);
  const { title, setTitle } = useContext(itemsContext);

  if (id >= items.length) {
    return <h1>Некорректно введён номер</h1>;
  } else {
    return (
      <div className="item-page">
        <h4>
          {items[id].id}. {items[id].title} is {JSON.stringify(items[id].checked)}
        </h4>
        <form className="todo-form" style={{ width: 250 }}>
          <Input
            style={{ width: 200 }}
            placeholder={items[id].title}
            value={title}
            onChange={(event) => {
              setTitle((items[id].title = event.target.value));
            }}
          ></Input>
          <Input
            style={{ width: 50 }}
            component="button"
            onClick={(event) => {
              setTitle(event.target.value);
              event.preventDefault();
            }}
          ></Input>
        </form>
        <Link to="/mentorSanya/newpage/all">
          <Button color="teal" variant="outline">
            Go Back
          </Button>
        </Link>
      </div>
    );
  }
};

export { ItemPage };
