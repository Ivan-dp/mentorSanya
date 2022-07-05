import { React, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { itemsContext } from './itemsContext';
import { todoItems } from './consts';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

function Main() {
  const [items, setItems] = useState(todoItems);
  const [title, setTitle] = useState('');

  const defaultTitle = { 
    title: '',
  };

  const reducer = (state = defaultItem, action) => {
    switch(action.type) {
      case 
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
