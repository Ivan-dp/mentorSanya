import { Button, Group } from '@mantine/core';
import { PropTypes } from 'prop-types';
import { React } from 'react';

const SortByTabs = (props) => {
  SortByTabs.propTypes = {
    // all: PropTypes.array.isRequired,
    funcAll: PropTypes.func.isRequired,
    funcTrue: PropTypes.func.isRequired,
    funcFalse: PropTypes.func.isRequired,
  };

  return (
    <Group>
      <Button variant="outline" onClick={props.funcAll}>
        Все
      </Button>
      <Button variant="outline" onClick={props.funcTrue}>
        Выполненые
      </Button>
      <Button variant="outline" onClick={props.funcFalse}>
        Не выполненые
      </Button>
    </Group>
  );
};

export { SortByTabs };
