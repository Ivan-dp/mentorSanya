import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, ToggleSquare, Posts, RequestInput, ToDo, NewPage } from '../pages';
import { PostList } from './';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/mentorSanya/" component={<Home />}>
          Home
        </Link>
        <Link to="/mentorSanya/info" component={<Info />}>
          Info
        </Link>
        <Link to="/mentorSanya/togglesquare" component={<ToggleSquare />}>
          Issue-25
        </Link>
        <Link
          to="/mentorSanya/posts"
          component={
            <Posts>
              <PostList />
            </Posts>
          }
        >
          Posts
        </Link>
        <Link to="/mentorSanya/requestinput" component={<RequestInput />}>
          issue 34
        </Link>
        <Link to="/mentorSanya/todo" component={<ToDo />}>
          Todo List
        </Link>
        <Link to="/mentorSanya/newpage" component={<NewPage />}>
          NewPage
        </Link>
        <Link to={'/mentorSanya/newpage/all/0'}>index 0</Link>
      </nav>
    </header>
  );
};

export { Header };
