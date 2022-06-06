import { Container, Grid, Input, List } from '@mantine/core';
import { React, useState } from 'react';
import { todoFormStyles, todoItems } from '../consts/';
import { addItem, checkStyles } from '../functions';
import { FilterByTabs, Item } from './';

const TodoList = () => {
  const [items, setItems] = useState(todoItems); // setItems должен прибавлять новый item={} в items=[...]
  const [task, setTask] = useState({
    id: '',
    title: '',
    checked: false,
  });
  const [filter, setFilter] = useState('all');

  return (
    <Container size={800} px={0}>
      <Grid>
        <form style={todoFormStyles}>
          <Grid.Col span={9}>
            <Input
              placeholder="Enter the task"
              value={task.title}
              onChange={(event) => {
                setTask({ id: items.length + '', title: event.target.value, checked: false });
                event.preventDefault();
              }}
            />
          </Grid.Col>

          <Grid.Col span={3}>
            <Input
              component="button"
              onClick={(event) => {
                addItem(event, items, task, setItems);
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
            {items
              .filter((item) => {
                switch (filter) {
                  case 'all':
                    return item;
                  case true:
                    return item.checked;
                  case false:
                    return !item.checked;
                }
              })
              .map((item) => (
                <Item
                  styleFunc={checkStyles(item.checked)}
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  checked={item.checked}
                  funCheck={() => (item.checked = !item.checked)}
                />
              ))}
          </List>
          <FilterByTabs
            funcAll={() => setFilter('all')}
            funcTrue={() => setFilter(true)}
            funcFalse={() => setFilter(false)}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export { TodoList };
