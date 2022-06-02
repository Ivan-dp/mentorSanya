import { List } from '@mantine/core';
import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  Item.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };
  return (
    <List.Item>
      {props.id}. {props.title}
    </List.Item>
  );
};

export { Item };
