import { Checkbox, List } from '@mantine/core';
import PropTypes from 'prop-types';
import { React } from 'react';

const Item = (props) => {
  Item.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    funCheck: PropTypes.func.isRequired,
  };

  function checkStyles() {
    if (props.checked) {
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
  console.log(props.checked);

  return (
    <List.Item className="todo-item">
      <Checkbox
        classNames={{
          input: 'todo-item__check',
          label: 'todo-item__label',
        }}
        styles={checkStyles()}
        color="teal"
        defaultChecked={props.checked}
        label={props.id + '. ' + props.title}
        onChange={props.funCheck}
      />
    </List.Item>
  );
};

export { Item };
