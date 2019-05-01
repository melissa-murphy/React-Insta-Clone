import React from "react";
import PostContainer from "./PostContainer";
import PropTypes from "prop-types";

function PostItems(props) {
  return (
    <div>
      {props.dummyData.map((post , index) => (
        <PostContainer key={index} post={post} />
      ))}
    </div>
  );
}

PostItems.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object)
};

export default PostItems;
