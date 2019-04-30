import React from "react";
import PostContainer from "./PostContainer";
import PropTypes from "prop-types";

function PostItems(props) {
  return (
    <div>
      {props.dummyData.map((item, index) => (
        <PostContainer key={index} item={item} />
      ))}
    </div>
  );
}

PostItems.propTypes = {
  dummyData: PropTypes.arrayOf(PropTypes.object)
};

export default PostItems;
