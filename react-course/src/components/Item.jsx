import { Checkbox, List } from '@mantine/core';
import PropTypes from 'prop-types';
import { React, useState } from 'react';

const Item = (props) => {
  const [check, setCheck] = useState(props.checked);
  console.log(check);
  Item.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  };

  function checkStyles() {
    if (check) {
      return {
        label: {
          textDecoration: 'line-through',
          color: '#cbc1c1',
          textTransform: 'uppercase',
        },
      };
    }
    return {
      label: {
        textTransform: 'uppercase',
      },
    };
  }

  return (
    <List.Item className="todo-item">
      <Checkbox
        classNames={{
          input: 'todo-item__check',
          label: 'todo-item__label',
        }}
        styles={checkStyles()}
        color="teal"
        defaultChecked={check}
        label={props.id + '. ' + props.title}
        onChange={() => setCheck(!check)}
      />
    </List.Item>
  );
};

export { Item };
