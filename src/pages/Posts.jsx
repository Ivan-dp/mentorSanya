import React from 'react';
import PropTypes from 'prop-types';

const Posts = ({ children }) => {
  Posts.propTypes = {
    children: PropTypes.object.isRequired,
  };
  return (
    <div className="posts">
      <h1 className="some">Posts</h1>
      {children}
    </div>
  );
};

export { Posts };
