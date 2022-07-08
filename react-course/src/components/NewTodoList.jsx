import { Checkbox, Container, Grid, Input, List, Group, Button } from '@mantine/core';
import { React, useState, useContext } from 'react';
import { X, ClearAll, ListCheck, Checklist, Edit, ListDetails } from 'tabler-icons-react';
import { checkStyles } from '../functions';
import { Link, Routes, Route } from 'react-router-dom';
import { itemsContext } from '../itemsContext';

const NewTodoList = () => {
  const { items, setItems } = useContext(itemsContext);
  const [task, setTask] = useState({});
  const { title, setTitle } = useContext(itemsContext);
  const [filter, setFilter] = useState('all');

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
    console.log(title);
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

  const newId = (arr) => {
    let ident;
    if (arr.length != 0) {
      ident = arr[arr.length - 1].id + 1;
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

  const editTitle = (event) => {
    setTitle(event.target.value);
    setTask({ id: newId(items), title: event.target.value, checked: false });
    event.preventDefault();
    console.log(title);
  };

  const enterTitle = (event) => {
    addItem(event);
    setTitle('');
    setTask({});
  };

  return (
    <Container>
      <Grid>
        <form className="todo-form">
          <Grid.Col span={10}>
            <Input
              placeholder="Enter the task"
              value={title}
              onChange={(event) => editTitle(event)}
            ></Input>
          </Grid.Col>
          <Grid.Col span={2}>
            <Input component="button" onClick={(event) => enterTitle(event)}></Input>
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
                    checked={item.checked}
                    label={item.id + '. ' + item.title}
                    onChange={() => handleComplete(item.id)}
                  />
                  <Group>
                    <Link to={'/mentorSanya/newpage/all/' + item.id}>
                      <Button color="teal" radius="xl" size="xs" compact variant="outline">
                        <Edit size={14} strokeWidth={1} color={'teal'} />
                      </Button>
                    </Link>
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
                  </Group>
                </List.Item>
              ))}
          </List>
          <Group>
            <Link to="/mentorSanya/newpage/all">
              <Button
                color="teal"
                size="xs"
                variant="outline"
                onClick={() => setFilter('all')}
                leftIcon={<Checklist size={16} strokeWidth={1.5} color={'teal'} />}
              >
                Все
              </Button>
            </Link>
            <Link to="/mentorSanya/newpage/completed">
              <Button
                color="teal"
                size="xs"
                variant="outline"
                onClick={() => setFilter('checked')}
                leftIcon={<ListCheck size={16} strokeWidth={1.5} color={'teal'} />}
              >
                Выполненые
              </Button>
            </Link>
            <Link to="/mentorSanya/newpage/uncompleted">
              <Button
                color="teal"
                size="xs"
                variant="outline"
                onClick={() => setFilter('unchecked')}
                leftIcon={<ListDetails size={16} strokeWidth={1.5} color={'teal'} />}
              >
                Не выполненые
              </Button>
            </Link>
            <Routes>
              <Route path="/mentorSanya/newpage/all" />
              <Route path="/mentorSanya/newpage/completed" />
              <Route path="/mentorSanya/newpage/uncompleted" />
            </Routes>
            <Button
              color="teal"
              size="xs"
              variant="outline"
              onClick={() => clearCompleted()}
              leftIcon={<ClearAll size={16} strokeWidth={1.5} color={'teal'} />}
            >
              Очистить выполненые
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export { NewTodoList };
