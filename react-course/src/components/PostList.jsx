import { React, useEffect } from 'react';
import { getPosts } from '../functions/getPosts';

const PostList = () => {
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <ul className="post-list"></ul>
    </div>
  );
};

export { PostList };
