import React from "react";
// import PropTypes from "prop-types";
import //   Row,
//   Col,
//   Card,
//   CardImg,
//   CardBody,
//   CardSubtitle,
//   CardHeader,
//   CardFooter
"reactstrap";

class CommentSection extends React.Component {
  constructor() {
    super();
    console.log("CommentSection constructor is running");
  }

  componentDidMount() {
    console.log("CDM running");
  }

  render() {
    console.log("dummyData rendering");
    return <></>;
  }
}

// CommentSection.propTypes = {
//   dummyData: PropTypes.arrayOf(
//     PropTypes.shape({
//       username: PropTypes.username,
//       thumbnailUrl: PropTypes.thumbnailUrl,
//       likes: PropTypes.likes
//     })
//   )
// };

CommentSection.defaultProps = {
  dummyData: []
};

export default CommentSection;
