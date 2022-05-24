import { React, useEffect } from 'react';
import { getPosts, get77 } from '../functions';

const PostList = () => {
  useEffect(() => {
    getPosts();
    get77();
  }, []);
  return (
    <div>
      <ul className="post-list"></ul>
    </div>
  );
};

export { PostList };
