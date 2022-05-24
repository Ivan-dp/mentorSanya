import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h3>PAGE IS NOT FOUND</h3>
      <p>
        Go to <Link to="/home">HOME</Link>
      </p>
    </div>
  );
};

export { NotFound };
