// eslint-disable-next-line no-unused-vars
import { React, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Input, Button, Checkbox } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';

const ItemPage = () => {
  let list = useSelector((store) => store);

  const { listid } = useParams();
  const dispatch = useDispatch();

  // console.log(listid);
  let element;

  for (let i = 0; i < list.length; i++) {
    if (list[i].id === listid) {
      // console.log(list[i]);
      element = list[i];
    }
  }

  // console.log(element);
  const [title, setTitle] = useState(element.content);

  return (
    <div className="item-page">
      <div className="item-data">
        <h1>{element.id}</h1>
        <h3>{element.content}</h3>
        <Checkbox
          color="teal"
          label={JSON.stringify(element.completed)}
          checked={element.completed}
          onChange={() =>
            dispatch({
              type: 'TOGGLE_TASK',
              payload: element.id,
            })
          }
        />
      </div>
      <form className="todo-form" style={{ width: 250 }}>
        <Input
          style={{ width: 200 }}
          placeholder={element.content}
          value={title}
          onChange={(event) => {
            setTitle((element.content = event.target.value));
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
