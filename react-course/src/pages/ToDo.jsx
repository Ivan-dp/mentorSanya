import React from 'react';
import { TodoList } from '../components';
import { todoItems } from '../consts';

const ToDo = () => {
  return (
    <div className="todo-page">
      <TodoList items={todoItems} />
    </div>
  );
};

export { ToDo };
