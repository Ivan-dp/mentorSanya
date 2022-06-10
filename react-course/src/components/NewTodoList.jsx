import { Checkbox, Container, Grid, Input, List, Group, Button } from '@mantine/core';
import { PropTypes } from 'prop-types';
import { React, useState } from 'react';

import { checkStyles } from '../functions';

const NewTodoList = (props) => {
  NewTodoList.propTypes = {
    items: PropTypes.array.isRequired,
  };

  const [items, setItems] = useState(props.items);
  const [task, setTask] = useState({
    id: '',
    title: '',
    checked: false,
  });
  const [filter, setFilter] = useState('all');

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

  function addItem(e) {
    if (task.title.length > 0) {
      setItems([...items, task]);
    }
    console.log(task);
    e.preventDefault();
  }

  return (
    <Container>
      <Grid>
        <form className="todo-form">
          <Grid.Col span={9}>
            <Input
              placeholder="Enter the task"
              value={task.title}
              onChange={(event) => {
                setTask({ id: items.length + '', title: event.target.value, checked: false });
                event.preventDefault();
              }}
            ></Input>
          </Grid.Col>
          <Grid.Col span={3}>
            <Input
              component="button"
              onClick={(event) => {
                addItem(event);
                setTask({ title: '' });
              }}
            ></Input>
          </Grid.Col>
        </form>
      </Grid>
      <Grid>
        <Grid.Col>
          <List center listStyleType="none" className="todo-list">
            {items
              .filter((item) => {
                if (filter === 'checked') {
                  return item.checked;
                } else if (filter === 'unchecked') {
                  return !item.checked;
                } else {
                  return item;
                }
              })
              .map((item, index) => (
                <List.Item key={index} className="todo-item">
                  <Checkbox
                    classNames={{
                      label: 'todo-item__label',
                    }}
                    styles={checkStyles(item.checked)}
                    color="teal"
                    // defaultChecked={item.checked}
                    checked={item.checked}
                    label={item.id + '. ' + item.title}
                    onChange={() => handleComplete(index)}
                  />
                </List.Item>
              ))}
          </List>
          <Group>
            <Button size="xs" variant="outline" onClick={() => setFilter('all')}>
              Все
            </Button>
            <Button size="xs" variant="outline" onClick={() => setFilter('checked')}>
              Выполненые
            </Button>
            <Button size="xs" variant="outline" onClick={() => setFilter('unchecked')}>
              Не выполненые
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export { NewTodoList };
