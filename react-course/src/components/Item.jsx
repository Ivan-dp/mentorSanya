import { Checkbox, List } from '@mantine/core';
import PropTypes from 'prop-types';
import { React, useState } from 'react';

const Item = (props) => {
  Item.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    funCheck: PropTypes.func.isRequired,
    styleFunc: PropTypes.object.isRequired,
  };
  // eslint-disable-next-line no-unused-vars
  const [bool, setBool] = useState(props.checked);

  return (
    <List.Item className="todo-item">
      <Checkbox
        styles={props.styleFunc}
        color="teal"
        defaultChecked={props.checked}
        label={props.id + '. ' + props.title}
        onChange={props.funCheck}
      />
    </List.Item>
  );
};

export { Item };
