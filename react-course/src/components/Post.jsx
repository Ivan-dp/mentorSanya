import React from 'react';
import { PropTypes } from 'prop-types';

const Post = (props) => {
  Post.propTypes = {
    post: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  };
  if (props.id > 0) {
    return (
      <li className="post" key={props.id}>
        <h4>
          {props.id}. {props.title}
        </h4>
        <p>{props.body}</p>
      </li>
    );
  }
  return <h1>Loading...</h1>;
};

export { Post };
