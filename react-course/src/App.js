import { React } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { PostList } from './components';
import { Home, Info, NotFound, Posts, RequestInput, ToDo, ToggleSquare, NewPage } from './pages';
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
            <Link to="/posts">Posts</Link>
            <Link to="/requestinput">issue 34</Link>
            <Link to="/todo">Todo List</Link>
            <Link to="/items/*">NewPage</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/togglesquare" element={<ToggleSquare />} />
          <Route
            path="/posts"
            element={
              <Posts>
                <PostList />
              </Posts>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="requestinput" element={<RequestInput />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/items/*" element={<NewPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
