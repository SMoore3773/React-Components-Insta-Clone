import React from 'react';
import './Comment.css';

const Comment = props => {
  // console.log(props.comment.username)
  return (
    <div className="comment-text">
      <span className="user">{props.comment.username}</span>
      {' '}
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};


export default Comment;
