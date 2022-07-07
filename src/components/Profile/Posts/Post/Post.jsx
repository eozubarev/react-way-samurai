import React from 'react';

const Post = (props) => {
  return (
    <div>
        <div>{props.message} <span>Likes: {props.likesCount}</span></div>
    </div>
  )
}

export default Post