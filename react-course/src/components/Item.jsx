import { List, Checkbox } from '@mantine/core';
import { React, useState } from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const [check, setCheck] = useState(props.checked);

  Item.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  };
  return (
    <List.Item className="todo-item">
      <Checkbox
        checked={check}
        label={props.id + '. ' + props.title}
        onChange={(event) => setCheck(event.currentTarget.checked)}
      />
    </List.Item>
  );
};

export { Item };
