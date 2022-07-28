// eslint-disable-next-line no-unused-vars
import { React, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { itemsContext } from '../itemsContext';
import { Input, Button } from '@mantine/core';
// eslint-disable-next-line no-unused-vars
import { useSelector, useDispatch } from 'react-redux';

const ItemPage = () => {
  let list = useSelector((store) => store);

  const { id } = useParams();

  console.log(id);
  let element;
  for (element of list) {
    if (element.id === id) {
      console.log(element);
    }
    return element;
  }
  console.log(element);

  return (
    <div className="item-page">
      <div className="item-data">
        <h1>{element.id}</h1>
        <h3>{element.title}</h3>
        <h3 className="item-bool">{JSON.stringify(element.checked)}</h3>
      </div>
      <form className="todo-form" style={{ width: 250 }}>
        <Input
          style={{ width: 200 }}
          placeholder={element.title}
          value={element.title}
          onChange={(event) => {
            element.title = event.target.value;
          }}
        ></Input>
        <Input
          style={{ width: 50 }}
          component="button"
          onClick={(event) => {
            element.title = event.target.value;
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
};

export { ItemPage };
