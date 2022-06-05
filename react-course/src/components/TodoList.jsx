import { Container, Grid, Input, List } from '@mantine/core';
import { React, useState } from 'react';
import { todoFormStyles, todoItems } from '../consts/';
import { sortTodoItems, addItem } from '../functions';
import { Item, SortByTabs } from './';

const TodoList = () => {
  const [items, setItems] = useState(todoItems); // setItems должен прибавлять новый item={} в items=[...]
  const [task, setTask] = useState({
    id: '',
    title: '',
    checked: false,
  });
  const list = [...items];

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
            {items.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                title={item.title}
                checked={item.checked}
                funCheck={() => {
                  item.checked = !item.checked;
                  console.log(item.id, item.title, item.checked);
                }}
              />
            ))}
          </List>
          <SortByTabs
            // all={items}
            funcAll={() => {
              sortTodoItems(list, 'all', setItems);
            }}
            funcTrue={() => {
              sortTodoItems(list, true, setItems);
            }}
            funcFalse={() => {
              sortTodoItems(list, false, setItems);
            }}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export { TodoList };
