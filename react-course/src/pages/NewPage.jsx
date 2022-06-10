import React from 'react';
import { NewTodoList } from '../components';
import { todoItems } from '../consts';

const NewPage = () => {
  return (
    <div>
      <NewTodoList items={todoItems} />
    </div>
  );
};

export { NewPage };
