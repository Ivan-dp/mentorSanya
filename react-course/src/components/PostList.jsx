import React from 'react';
import PropTypes from 'prop-types';

const PostList = ({ children }) => {
  PostList.propTypes = {
    children: PropTypes.object.isRequired,
  };
  return <div className="post-list">{children}</div>;
};

export { PostList };
