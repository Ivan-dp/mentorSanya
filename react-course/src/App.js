import { React } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { PostList, TodoList } from './components';
import { todoItems } from './consts';
import { Home, Info, NotFound, Posts, RequestInput, ToggleSquare, ToDo } from './pages';
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
            <Link to="/requestinput" component={<RequestInput />}>
              issue 34
            </Link>
            <Link
              to="/todo"
              component={
                <ToDo>
                  <TodoList>{todoItems}</TodoList>
                </ToDo>
              }
            >
              Todo List
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
          <Route path="requestinput" element={<RequestInput />} />
          <Route
            path="/todo"
            element={
              <ToDo>
                <TodoList>{todoItems}</TodoList>
              </ToDo>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
