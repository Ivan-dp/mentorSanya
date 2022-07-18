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
