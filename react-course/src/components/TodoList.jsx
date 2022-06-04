import { Container, Grid, Input, List } from '@mantine/core';
import PropTypes from 'prop-types';
import { React, useState } from 'react';
import { Item } from './Item.jsx';
import { todoFormStyles } from '../consts/';

const TodoList = (props) => {
  TodoList.propTypes = {
    items: PropTypes.array.isRequired,
  };

  const [items, setItems] = useState([...props.items]); // setItems должен прибавлять новый item={} в items=[...]
  const [task, setTask] = useState({
    id: '',
    title: '',
  });

  function addItem(e) {
    if (task.title.length > 0) {
      setItems([...items, task]);
    }
    console.log(task);
    e.preventDefault();
  }
  console.log(items);

  return (
    <Container size={400} px={0}>
      <Grid>
        <form style={todoFormStyles}>
          <Grid.Col span={9}>
            <Input
              placeholder="Enter the task"
              value={task.title}
              onChange={(event) => {
                setTask({ id: items.length + '', title: event.target.value });
                event.preventDefault();
              }}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <Input
              component="button"
              onClick={(event) => {
                addItem(event);
                setTask({ title: '' });
              }}
            >
              +
            </Input>
          </Grid.Col>
        </form>
      </Grid>
      <Grid>
        <Grid.Col>
          <List listStyleType="none" className="todo-list">
            {items.map((item) => (
              <Item key={item.id} id={item.id} title={item.title} />
            ))}
          </List>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export { TodoList };
