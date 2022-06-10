import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Container, Grid, Input, List } from '@mantine/core';
import { NewItem } from './';

const NewTodoList = (props) => {
  NewTodoList.propTypes = {
    items: PropTypes.array.isRequired,
  };

  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState(props.items);

  return (
    <Container>
      <Grid>
        <form className="todo-form">
          <Grid.Col span={9}>
            <Input placeholder="Enter the task"></Input>
          </Grid.Col>
          <Grid.Col span={3}>
            <Input component="button"></Input>
          </Grid.Col>
        </form>
      </Grid>
      <Grid>
        <Grid.Col>
          <List center listStyleType="none" className="todo-list">
            {items.map((item) => (
              <NewItem key={item.id} item={item} items={items} />
            ))}
          </List>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export { NewTodoList };
