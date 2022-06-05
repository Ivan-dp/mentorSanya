import { Button, Group } from '@mantine/core';
import { PropTypes } from 'prop-types';
import { React, useState } from 'react';

const SortByTabs = (props) => {
  const [list, setList] = useState(props.all);
  SortByTabs.propTypes = {
    all: PropTypes.array.isRequired,
  };
  //   console.log(list);
  return (
    <Group>
      <Button
        variant="outline"
        onClick={() => {
          setList(props.all);
          console.log(list);
        }}
      >
        Все
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          setList(props.all.filter((item) => item.checked === true));
          console.log(list);
        }}
      >
        Выполненые
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          setList(props.all.filter((item) => item.checked === false));
          console.log(list);
        }}
      >
        Не выполненые
      </Button>
    </Group>
  );
};

export { SortByTabs };
