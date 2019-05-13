import React from 'react';
import Post from './Post';

const PostContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map(post => (
        <Post key={post.imgUrl} post={post} />
      ))}
    </div>
  );
};

export default PostContainer
