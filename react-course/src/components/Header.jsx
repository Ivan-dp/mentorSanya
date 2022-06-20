import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, ToggleSquare, Posts, RequestInput, ToDo, NewPage } from '../pages';
import { PostList } from './';

const Header = () => {
  const id = 0;
  return (
    <header>
      <nav>
        <Link to="/" component={<Home />}>
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
  );
};

export { Header };
