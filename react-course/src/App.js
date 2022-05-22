import { React } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Home, Info, NotFound, ToggleSquare } from './pages';
import './styles/index';

function App() {
  return (
    <>
      <div className="App">
        <header>
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/info">Info</Link>
            <Link to="/togglesquare">Issue-25</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/togglesquare" element={<ToggleSquare />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
