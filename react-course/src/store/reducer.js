import * as actions from './actionTypes';

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.TASK_ADD:
      return [
        ...state,
        {
          id: ++lastId,
          title: action.payload.title,
          completed: false,
        },
      ];
    default:
      return state;
  }
}
