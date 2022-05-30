import { React, useState, useEffect } from 'react';
import { Post } from './';
import { getPosts } from '../functions/';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [posts1, setPosts1] = useState([]);

  useEffect(() => {
    getPosts(0, 37, setPosts);
  }, []);
  useEffect(() => {
    getPosts(76, 77, setPosts1);
  }, []);

  if (posts.length > 0) {
    return (
      <div>
        <ul className="post-list">
          {posts.map((post) => (
            <Post post={post} key={post.id} id={post.id} title={post.title} body={post.body} />
          ))}
          {posts1.map((post1) => (
            <Post post={post1} key={post1.id} id={post1.id} title={post1.title} body={post1.body} />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
};

export { PostList };
