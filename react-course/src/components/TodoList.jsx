import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Grid, Container } from '@mantine/core';

const TodoList = (props) => {
  TodoList.propTypes = {
    items: PropTypes.array.isRequired,
  };
  let items = [...props.items];
  console.log(items);
  return (
    <Container size={400} px={0}>
      <Grid>
        <Grid.Col span={9}>
          <Input placeholder="Enter the task" />
        </Grid.Col>
        <Grid.Col span={3}>
          <Button>+</Button>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col>
          <ul className="todo-list">
            {items.map((item) => (
              <li key={item}>
                {item.id}. {item.title}
              </li>
            ))}
          </ul>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export { TodoList };
