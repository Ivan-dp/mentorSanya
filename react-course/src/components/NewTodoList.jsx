import { Checkbox, Container, Grid, Input, List, Group, Button } from '@mantine/core';
import { PropTypes } from 'prop-types';
import { React, useState } from 'react';
import { X, ClearAll, ListDetails, ListCheck, Checklist } from 'tabler-icons-react';
import { checkStyles } from '../functions';
import { Link, Routes, Route } from 'react-router-dom';
import { ItemPage } from '../pages/';

const NewTodoList = (props) => {
  NewTodoList.propTypes = {
    items: PropTypes.array.isRequired,
  };

  const [items, setItems] = useState(props.items);
  const [task, setTask] = useState({});
  const [title, setTitle] = useState('');
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

  const editTitle = (event) => {
    setTitle(event.target.value);
    setTask({ id: newId(), title: event.target.value, checked: false });
    event.preventDefault();
    console.log(title);
  };

  const enterTitle = (event) => {
    addItem(event);
    setTitle('');
    setTask({});
  };

  return (
    <>
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
                      // defaultChecked={item.checked}
                      checked={item.checked}
                      label={item.id + '. ' + item.title}
                      onChange={() => handleComplete(item.id)}
                    />
                    <Group>
                      <Button
                        style={{ alignSelf: 'flex-end' }}
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
                      <Link to={'/items/' + item.id} component={<ItemPage item={item} />}>
                        <Button color="teal" size="xs" compact radius="xl" variant="outline">
                          Подробнее
                        </Button>
                      </Link>
                      <Routes>
                        <Route path={'/' + item.id} element={<ItemPage item={item} />}></Route>
                      </Routes>
                    </Group>
                  </List.Item>
                ))}
            </List>
            <Group>
              <Link to="/items/all">
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
              <Link to="/items/completed">
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
              <Link to="/items/uncompleted">
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
      <Routes>
        <Route path="/items/all" />
        <Route path="/items/completed" />
        <Route path="/items/uncompleted" />
        {/* <Route path={'/items/' + task.id} element={<ItemPage item={task} />}></Route> */}
      </Routes>
    </>
  );
};

export { NewTodoList };
