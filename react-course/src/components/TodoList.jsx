import React from 'react';
import PropTypes from 'prop-types';

const TodoList = (props) => {
  TodoList.propTypes = {
    items: PropTypes.array.isRequired,
  };
  let items = [...props.items];
  console.log(items);
  return (
    <div>
      <form action="">
        <input type="text" />
        <button>+</button>
      </form>
      <ul className="todo-list">
        {items.map((item) => {
          <li key={item}>
            {item.id}. {item.title}
          </li>;
          console.log(item.title);
        })}
      </ul>
    </div>
  );
};

export { TodoList };
