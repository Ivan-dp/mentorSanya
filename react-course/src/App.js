import { React } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { PostList } from './components';
import { Home, Info, NotFound, Posts, ToggleSquare } from './pages';
import './styles/index';

function App() {
  return (
    <>
      <div className="App">
        <header>
          <nav>
            <Link to="/home" component={<Home />}>
              Home
            </Link>
            <Link to="/info" component={<Info />}>
              Info
            </Link>
            <Link to="/togglesquare" component={<ToggleSquare />}>
              Issue-25
            </Link>
            <Link
              to="/posts"
              component={
                <Posts>
                  <PostList />
                </Posts>
              }
            >
              Posts
            </Link>
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
        </Routes>
      </div>
    </>
  );
}

export default App;
