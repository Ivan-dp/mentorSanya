import { Checkbox, List } from '@mantine/core';
import PropTypes from 'prop-types';
import { React } from 'react';
import { checkStyles } from '../functions';

const Item = (props) => {
  Item.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    funCheck: PropTypes.func.isRequired,
  };

  return (
    <List.Item className="todo-item">
      <Checkbox
        classNames={{
          input: 'todo-item__check',
          label: 'todo-item__label',
        }}
        styles={checkStyles(props.checked)}
        color="teal"
        defaultChecked={props.checked}
        label={props.id + '. ' + props.title}
        onChange={props.funCheck}
      />
    </List.Item>
  );
};

export { Item };
