import { React, useState } from 'react';
import { Post } from '../components';
import { getPostById } from '../functions';

const RequestInput = () => {
  const [start, setStart] = useState('');
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <form method="get">
        <label>
          Запрос поста по номеру:
          <h1>{start}</h1>
          <input
            type="text"
            name="start"
            value={start}
            onChange={(event) => setStart(event.target.value)}
          />
        </label>
        <input type="submit" value="Отправить" onClick={getPostById(start, start + 1, setPosts)} />
      </form>
      <div>
        <ul className="post-list">
          {posts.map((post) => (
            <Post post={post} key={post.id} id={post.id} title={post.title} body={post.body} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export { RequestInput };
