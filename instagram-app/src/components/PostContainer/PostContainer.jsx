import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardHeader,
  CardFooter
} from "reactstrap";


class PostContainer extends React.Component {


};

PostContainer.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.username
    })
  )
};

PostContainer.propTypes = PropTypes;

export default PostContainer;
