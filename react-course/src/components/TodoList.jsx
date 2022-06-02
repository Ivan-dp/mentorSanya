import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Grid, Container, List } from '@mantine/core';
import { Item } from './Item.jsx';

const TodoList = (props) => {
  TodoList.propTypes = {
    items: PropTypes.array.isRequired,
  };

  const [items, setItems] = useState([...props.items]); // setItems должен прибавлять новый item={} в items=[...]
  const [item, setItem] = useState({});

  function addItem() {
    if (item.title.length > 0) {
      setItems([...items, item]);
    }
    console.log(item);
    return items;
  }
  console.log(items);

  return (
    <Container size={400} px={0}>
      <Grid>
        <Grid.Col span={9}>
          <Input
            placeholder="Enter the task"
            input={item.title}
            onChange={(event) => setItem({ id: items.length + '', title: event.target.value })}
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <Button
            onClick={() => {
              addItem();
            }}
          >
            +
          </Button>
        </Grid.Col>
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
