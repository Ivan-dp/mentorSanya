import { React } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { todoItems } from './consts';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { randomId } from '@mantine/hooks';

function Main() {
  const reducer = (state = todoItems, action) => {
    console.log(state);
    switch (action.type) {
      case 'ADD_TASK':
        return [
          ...state,
          {
            id: randomId(),
            content: action.payload,
            completed: false,
          },
        ];
      case 'TOGGLE_TASK':
        return state.map((task) => {
          if (task.id === action.payload) return { ...task, completed: !task.completed };
          return task;
        });
      case 'DELETE_TASK':
        return state.filter((task) => action.payload !== task.id);
      case 'FILTER_TASK':
        return state.filter((task) => task.completed === false);
      default:
        return state;
    }
  };

  const store = createStore(reducer, composeWithDevTools());

  return (
    // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    // </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
