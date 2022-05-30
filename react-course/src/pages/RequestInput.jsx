import { React, useState } from 'react';
import { Post } from '../components';
import { getPostById } from '../functions';

const RequestInput = () => {
  const [start, setStart] = useState('');
  const [post, setPost] = useState({});

  function btn(e, id, state) {
    if (id > 0) {
      getPostById(id, state);
      e.preventDefault();
    }
  }

  console.log(post);
  console.log(post.userId);
  console.log(post.id);
  console.log(post.title);
  console.log(post.body);

  return (
    <div className="request-input">
      <form method="get" className="request-form">
        <label>
          <h4>Введите число от 1 до 100:</h4>
          <input
            type="text"
            name="start"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </label>
        <input type="submit" value="Отправить" onClick={(event) => btn(event, start, setPost)} />
      </form>
      <h1 style={{ position: 'absolute' }}>{start}</h1>
      <div>
        <ul className="post-list">
          <Post post={post} key={post.id} id={post.id} title={post.title} body={post.body} />
        </ul>
      </div>
    </div>
  );
};

export { RequestInput };
