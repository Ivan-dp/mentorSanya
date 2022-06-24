import { React, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { itemsContext } from './itemsContext';
import { todoItems } from './consts';

function Main() {
  const [items, setItems] = useState(todoItems);
  return (
    // <React.StrictMode>
    <BrowserRouter>
      <itemsContext.Provider value={{ items, setItems }}>
        <App />
      </itemsContext.Provider>
    </BrowserRouter>
    // </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
