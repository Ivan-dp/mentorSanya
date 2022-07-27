import React from 'react';
import { MyRoutes, Header } from './components';
import './styles';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <MyRoutes />
      </div>
    </>
  );
}

export default App;
