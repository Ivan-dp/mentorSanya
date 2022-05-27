import { React, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { getPostById } from '../functions';
import { Post } from '../components';

const RequestInput = () => {
  // eslint-disable-next-line no-unused-vars
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <form>
        <label>
          Запрос поста по номеру:
          <h1>{start}</h1>
          <input type="text" value={start} onChange={(event) => setStart(event.target.value)} />
          <h1>{end}</h1>
          <input type="text" value={end} onChange={(event) => setEnd(event.target.value)} />
        </label>
        <input type="submit" value="Отправить" onClick={getPostById(start, end, setPosts)} />
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
