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
          <Col xs={{ size: 6, offset: 3 }} >
            <Card>
              <CardHeader>
                <Row>
                  <Col xs="2">
                    <img
                      className="img-thumbnail rounded-circle"
                      src={this.props.post.thumbnailUrl}
                      alt={this.props.post.username}
                    />
                  </Col>
                  <Col xs="10" className="text-left mt-3">
                    <strong>{this.props.post.username}</strong>
                  </Col>
                </Row>
              </CardHeader>

              <CardImg src={this.props.post.imageUrl} alt="User Post" />

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

//
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
