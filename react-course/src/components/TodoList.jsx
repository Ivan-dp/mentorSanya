import React from 'react';
import PropTypes from 'prop-types';

const TodoList = (props) => {
  TodoList.propTypes = {
    children: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    map: PropTypes.function.isRequired,
    prop: PropTypes.object.isRequired,
  };
  return (
    <ul className="todo-list">
      {props.map((prop) => {
        <li>
          {prop.id}. {prop.title}
        </li>;
      })}
    </ul>
  );
};

export { TodoList };
