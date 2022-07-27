import { Checkbox, Container, Grid, Input, List, Group, Button } from '@mantine/core';
import { React, useState } from 'react';
import { X, ClearAll, ListCheck, Checklist, Edit, ListDetails } from 'tabler-icons-react';
import { checkStyles } from '../functions';
import { Link, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const NewTodoList = () => {
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState('all');

  let list = useSelector((store) => store);
  const dispatch = useDispatch();

  console.log('list:');
  console.log(list);

  const addNewTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const addNewTask = (e) => {
    e.preventDefault();
    if (title) {
      dispatch({
        type: 'ADD_TASK',
        payload: title,
      });
    }
    setTitle('');
  };

  return (
    <Container>
      <Grid>
        <form className="todo-form">
          <Grid.Col span={10}>
            <Input
              placeholder="Enter the task"
              value={title}
              onChange={(event) => {
                addNewTitle(event);
              }}
            ></Input>
          </Grid.Col>
          <Grid.Col span={2}>
            <Input
              component="button"
              onClick={(event) => {
                addNewTask(event);
              }}
            ></Input>
          </Grid.Col>
        </form>
      </Grid>
      <Grid>
        <Grid.Col>
          <List center listStyleType="none" className="todo-list">
            {list
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
                    label={item.title}
                    onChange={() =>
                      dispatch({
                        type: 'TOGGLE_TASK',
                        payload: item.id,
                      })
                    }
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
                      onClick={() =>
                        dispatch({
                          type: 'DELETE_TASK',
                          payload: item.id,
                        })
                      }
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
              onClick={() => dispatch({ type: 'FILTER_TASK' })}
              leftIcon={<ClearAll size={16} strokeWidth={1.5} color={'teal'} />}
            >
              Очистить выполненные
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export { NewTodoList };
