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
        <div className="item-data">
          <h1>{items[id].id}</h1>
          <h3>{items[id].title}</h3>
          <h3 className="item-bool">{JSON.stringify(items[id].checked)}</h3>
        </div>
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
        <Link className="item-back-link" to="/mentorSanya/newpage/all">
          <Button color="teal" variant="outline">
            Go Back
          </Button>
        </Link>
      </div>
    );
  }
};

export { ItemPage };
