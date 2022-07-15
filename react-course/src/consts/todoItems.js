import { randomId } from '../functions';

const todoItems = [
  {
    id: randomId(),
    title: 'Съесть деда',
    checked: true,
  },
  {
    id: randomId(),
    title: 'Съесть окрошку',
    checked: false,
  },
];

export { todoItems };
