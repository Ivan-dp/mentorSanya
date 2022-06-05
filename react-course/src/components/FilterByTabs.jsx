import { Button, Group } from '@mantine/core';
import { PropTypes } from 'prop-types';
import { React } from 'react';

const FilterByTabs = (props) => {
  FilterByTabs.propTypes = {
    funcAll: PropTypes.func.isRequired,
    funcTrue: PropTypes.func.isRequired,
    funcFalse: PropTypes.func.isRequired,
  };

  return (
    <Group>
      <Button size="xs" variant="outline" onClick={props.funcAll}>
        Все
      </Button>
      <Button size="xs" variant="outline" onClick={props.funcTrue}>
        Выполненые
      </Button>
      <Button size="xs" variant="outline" onClick={props.funcFalse}>
        Не выполненые
      </Button>
    </Group>
  );
};

export { FilterByTabs };
