import { Container, Grid, Input, List } from '@mantine/core';
import PropTypes from 'prop-types';
import { React, useState } from 'react';
import { Item } from './Item.jsx';
import { todoFormStyles } from '../consts/';

const TodoList = (props) => {
  TodoList.propTypes = {
    items: PropTypes.array.isRequired,
  };

  const [items, setItems] = useState(props.items); // DONE
  const [title, setTitle] = useState(items.title);

  // function addItem(e) {
  //   if (title.length > 0) {
  //     setItems([...items, task]);
  //   }
  //   console.log(task);
  //   e.preventDefault();
  // }
  console.log(items);
  return (
    <Container size={400} px={0}>
      <Grid>
        <form style={todoFormStyles}>
          <Grid.Col span={9}>
            <Input
              placeholder="Enter the task"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
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
          <List center listStyleType="none" className="todo-list">
            {items.map((item) => (
              <Item key={item.id} item={item} title={title} />
            ))}
          </List>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export { TodoList };
