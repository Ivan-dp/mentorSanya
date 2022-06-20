import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { PostList } from './components';
import {
  Home,
  Info,
  NotFound,
  Posts,
  RequestInput,
  ToDo,
  ToggleSquare,
  NewPage,
  ItemPage,
} from './pages';
import { todoItems } from './consts';
import './styles/index';

function App() {
  let id = '0';
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
            <Link to="/requestinput" component={<RequestInput />}>
              issue 34
            </Link>
            <Link to="/todo" component={<ToDo />}>
              Todo List
            </Link>
            <Link to="/newpage" component={<NewPage />}>
              NewPage
            </Link>
            <Link to={'/newpage/' + id}>Issue 59</Link>
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
          <Route path="/newpage/*" element={<NewPage />} />
          <Route path={'/newpage/' + id} element={<ItemPage item={todoItems[id]} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
