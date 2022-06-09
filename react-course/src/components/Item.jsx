import { Checkbox, List } from '@mantine/core';
import PropTypes from 'prop-types';
import { React, useState } from 'react';

const Item = (props) => {
  const [task, setTask] = useState(props.item);

  console.log(task.checked, task);

  Item.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
    checked: PropTypes.bool.isRequired,
  };

  return (
    <List.Item className="todo-item">
      <Checkbox
        classNames={{
          label: function () {
            return task.checked ? 'checked' : 'unchecked';
          },
        }}
        color="teal"
        defaultChecked={task.checked}
        label={task.id + '. ' + props.title}
        onChange={() => setTask(!task.checked)}
      />
    </List.Item>
  );
};

export { Item };
