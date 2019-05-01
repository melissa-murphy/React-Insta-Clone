import React, { Component } from 'react';
import PropTypes, { number, string } from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardImg,
  CardTitle,
  CardBody,
  CardFooter
} from 'reactstrap';

class PostContainer extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <Card>
              <CardHeader>{ this.props.post.username }</CardHeader>

              <CardImg />

              <CardTitle>#likes #comments</CardTitle>
              <CardBody>comments here</CardBody>
              <CardFooter>like and comment</CardFooter>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

PostContainer.propTypes = {
    postContainer: PropTypes.arrayOf(
        PropTypes.shape({
            username: string.isRequired,
            thumbnailUrl: string.isRequired,
            imageUrl: string.isRequired,
            likes: number.isRequired
        })
    )
};

PostContainer.defaultProps = {
  postContainer: []
};

export default PostContainer;
