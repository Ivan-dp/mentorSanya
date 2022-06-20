import React from 'react';
import { ItemPage } from './';
import { todoItems } from '../consts';

const Issue59 = () => {
  return (
    <div>
      <ItemPage items={todoItems[0]} />
    </div>
  );
};

export { Issue59 };
