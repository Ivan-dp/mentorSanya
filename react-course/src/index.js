import { React, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { itemsContext } from './itemsContext';
import { todoItems } from './consts';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { randomId } from '@mantine/hooks';

function Main() {
  const [title, setTitle] = useState('');

  const reducer = (state = todoItems, action) => {
    console.log(state);
    switch (action.type) {
      case 'ADD_TASK':
        return [
          ...state,
          {
            id: randomId(),
            title: action.payload,
            checked: false,
          },
        ];
      case 'TOGGLE_TASK':
        return state.map((task) => {
          if (task.id === action.payload.id) return { ...task, checked: !task.checked };
          return task;
        });
      case 'DELETE_TASK':
        return state.filter((task) => action.payload.id !== task.id);
      default:
        return state;
    }
  };

  const store = createStore(reducer, composeWithDevTools());

  return (
    // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <itemsContext.Provider value={{ title, setTitle }}>
          <App />
        </itemsContext.Provider>
      </Provider>
    </BrowserRouter>
    // </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
