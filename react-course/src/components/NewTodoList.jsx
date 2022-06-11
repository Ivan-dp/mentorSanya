import { Checkbox, Container, Grid, Input, List, Group, Button } from '@mantine/core';
import { PropTypes } from 'prop-types';
import { React, useState } from 'react';
import { X } from 'tabler-icons-react';
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
  const [title, setTitle] = useState('');

  console.log(items);

  const handleComplete = (i) => {
    const newItems = [...items];
    if (newItems[i].checked === false) {
      newItems[i].checked = true;
    } else {
      newItems[i].checked = false;
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

  const clearCompleted = () => {
    const newItems = [];
    for (let i of items) {
      if (i.checked === false) {
        newItems.push(i);
      }
    }
    for (let i = 0; i < newItems.length; i += 1) {
      newItems[i].id = i;
    }
    return setItems([...newItems]);
  };

  const newId = () => {
    let ident;
    if (items.length != 0) {
      ident = items[items.length - 1].id + 1;
    } else {
      ident = 0;
    }
    console.log(ident);
    return ident;
  };

  const clearTask = () => {
    const newItems = [];
    for (let i of items) {
      if (i.checked !== null) {
        newItems.push(i);
      }
    }
    for (let i = 0; i < newItems.length; i += 1) {
      newItems[i].id = i;
    }
    return setItems([...newItems]);
  };

  return (
    <Container>
      <Grid>
        <form className="todo-form">
          <Grid.Col span={9}>
            <Input
              placeholder="Enter the task"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
                setTask({ id: newId(), title: title, checked: false });
                event.preventDefault();
              }}
            ></Input>
          </Grid.Col>
          <Grid.Col span={3}>
            <Input
              component="button"
              onClick={(event) => {
                addItem(event);
                setTitle('');
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
              .map((item) => (
                <List.Item
                  key={item.id}
                  className="todo-item"
                  styles={{ itemWrapper: { display: 'flex', justifyContent: 'space-between' } }}
                >
                  <Checkbox
                    classNames={{
                      label: 'todo-item__label',
                    }}
                    styles={checkStyles(item.checked)}
                    color="teal"
                    // defaultChecked={item.checked}
                    checked={item.checked}
                    label={item.id + '. ' + item.title}
                    onChange={() => handleComplete(item.id)}
                  />
                  <Button
                    color="teal"
                    radius="xl"
                    size="xs"
                    compact
                    variant="outline"
                    onClick={() => {
                      item.checked = null;
                      clearTask();
                    }}
                  >
                    <X size={14} strokeWidth={1} color={'#700032'} />
                  </Button>
                </List.Item>
              ))}
          </List>
          <Group>
            <Button color="teal" size="xs" variant="outline" onClick={() => setFilter('all')}>
              Все
            </Button>
            <Button color="teal" size="xs" variant="outline" onClick={() => setFilter('checked')}>
              Выполненые
            </Button>
            <Button color="teal" size="xs" variant="outline" onClick={() => setFilter('unchecked')}>
              Не выполненые
            </Button>
            <Button color="teal" size="xs" variant="outline" onClick={() => clearCompleted()}>
              Очистить выполненые
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export { NewTodoList };
