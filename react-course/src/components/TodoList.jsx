import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Grid, Container, List } from '@mantine/core';
import { Item } from './Item.jsx';

const TodoList = (props) => {
  TodoList.propTypes = {
    items: PropTypes.array.isRequired,
  };
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
          <List listStyleType="none" className="todo-list">
            {props.items.map((item) => (
              <Item key={item.id} id={item.id} title={item.title} />
            ))}
          </List>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export { TodoList };
