import { React, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { itemsContext } from './itemsContext';
import { todoItems } from './consts';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

function Main() {
  const [items, setItems] = useState(todoItems);
  const [title, setTitle] = useState('');

  const defaultItems = {
    value: items,
  };

  let lastId = defaultItems.value.length - 1;

  const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: { id },
  });

  const reducer = (state = defaultItems, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [
          ...state,
          {
            id: ++lastId,
            title: action.payload.title,
            checked: false,
          },
        ];
      default:
        return state;
    }
  };

  const store = createStore(reducer, composeWithDevTools());

  return (
    // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <itemsContext.Provider value={{ items, setItems, title, setTitle }}>
          <App />
        </itemsContext.Provider>
      </Provider>
    </BrowserRouter>
    // </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
