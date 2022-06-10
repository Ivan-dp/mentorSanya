import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { List, Checkbox } from '@mantine/core';
import { checkStyles } from '../functions';

const NewItem = (props) => {
  const [check, setCheck] = useState(props.item.checked);

  NewItem.propTypes = {
    item: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
  };

  console.log(props.items);

  return (
    <List.Item className="todo-item">
      <Checkbox
        classNames={{
          input: 'todo-item__check',
          label: 'todo-item__label',
        }}
        styles={checkStyles(check)}
        color="teal"
        defaultChecked={check}
        // checked={check}
        label={props.item.id + '. ' + props.item.title}
        onChange={() => setCheck(!check)}
      />
    </List.Item>
  );
};

export { NewItem };
