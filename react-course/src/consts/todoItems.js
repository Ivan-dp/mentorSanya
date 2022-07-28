import { randomId } from '@mantine/hooks';

const todoItems = [
  {
    id: randomId(),
    content: 'Съесть деда',
    completed: true,
  },
  {
    id: randomId(),
    content: 'Съесть окрошку',
    completed: false,
  },
];

export { todoItems };
