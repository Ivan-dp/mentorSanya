import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <h2>My links:</h2>
      <ul>
        <li>
          <Link to="/mentorSanya/">Home</Link>
        </li>
        <li>
          <Link to="/mentorSanya/info">Info</Link>
        </li>
        <li>
          <Link to="/mentorSanya/notfound">Not found</Link>
        </li>
        <li>
          <Link to="/mentorSanya/togglesquare"></Link>
        </li>
        <li>
          <Link to="/mentorSanya/posts">Posts</Link>
        </li>
        <li>
          <Link to="/mentorSanya/requestinput">Issue 34</Link>
        </li>
        <li>
          <Link to="/mentorSanya/todo">Todo list</Link>
        </li>
        <li>
          <Link to="/mentorSanya/newpage">New page</Link>
        </li>
        <li>
          <Link to="/mentorSanya/newpage/all/0">Index 0</Link>
        </li>
      </ul>
    </div>
  );
};

export { Home };
