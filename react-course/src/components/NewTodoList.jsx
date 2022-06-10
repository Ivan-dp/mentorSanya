import { Checkbox, Container, Grid, Input, List } from '@mantine/core';
import { PropTypes } from 'prop-types';
import { React, useState } from 'react';

import { checkStyles } from '../functions';

const NewTodoList = (props) => {
  NewTodoList.propTypes = {
    items: PropTypes.array.isRequired,
  };

  const [items, setItems] = useState(props.items);
  console.log(items);

  const handleComplete = (index) => {
    const newItems = [...items];
    if (newItems[index].checked === false) {
      newItems[index].checked = true;
    } else {
      newItems[index].checked = false;
    }
    return setItems(newItems);
  };

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
            {items.map((item, index) => (
              <List.Item key={index} className="todo-item">
                <Checkbox
                  classNames={{
                    label: 'todo-item__label',
                  }}
                  styles={checkStyles(item.checked)}
                  color="teal"
                  defaultChecked={item.checked}
                  label={item.id + '. ' + item.title}
                  onChange={() => handleComplete(index)}
                />
              </List.Item>
            ))}
          </List>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export { NewTodoList };
