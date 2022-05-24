import React from 'react';
import { Link } from 'react-router-dom';
import { PostList } from '../components';
import { Info, NotFound, ToggleSquare, Posts } from './';

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <h2>My links:</h2>
      <ul>
        <li>
          <Link to="/info" component={<Info />}>
            Info
          </Link>
        </li>
        <li>
          <Link to="/notfound" component={<NotFound />}>
            Not found
          </Link>
        </li>
        <li>
          <Link to="/togglesquare" component={<ToggleSquare />}>
            Issue 25
          </Link>
        </li>
        <li>
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
        </li>
      </ul>
    </div>
  );
};

export { Home };
