// eslint-disable-next-line no-unused-vars
import { React, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Input, Button } from '@mantine/core';
import { useSelector } from 'react-redux';

const ItemPage = () => {
  let list = useSelector((store) => store);

  const { listid } = useParams();

  // console.log(listid);
  let element;

  for (let i = 0; i < list.length; i++) {
    if (list[i].id === listid) {
      // console.log(list[i]);
      element = list[i];
    }
  }

  // console.log(element);
  const [title, setTitle] = useState(element.title);

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
          value={title}
          onChange={(event) => {
            setTitle((element.title = event.target.value));
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
};

export { ItemPage };
