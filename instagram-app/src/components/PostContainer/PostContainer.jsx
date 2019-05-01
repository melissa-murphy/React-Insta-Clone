import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardImg,
  CardTitle,
  CardBody,
  CardFooter,
  Input
} from 'reactstrap';
import { IconContext } from 'react-icons';
import { FiHeart, FiMoreHorizontal, FiMessageCircle } from 'react-icons/fi';

class PostContainer extends Component {
  render() {
    return (
      <>
        <Row>
          <Col xs={{ size: 6, offset: 3 }} className="my-4">
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

              <CardTitle className="text-left">
                <Row className="p-3">
                  <Col>
                    <Row>
                      <Col xs="1">
                        <IconContext.Provider value={{ size: '2rem' }}>
                          <FiHeart />
                        </IconContext.Provider>
                      </Col>
                      <Col>
                        <IconContext.Provider value={{ size: '2rem' }}>
                          <FiMessageCircle />
                        </IconContext.Provider>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="p-3">
                  <Col>{this.props.post.likes}<span> Likes</span></Col>
                </Row>
              </CardTitle>
              <CardBody>
                <CommentSection comments={this.props.post.comments} />
              </CardBody>
              <CardFooter>
                {/* Need to append more icon */}
                <Input type="text" name="text" placeholder="Add a comment..." />
                {/* <IconContext.Provider value={{ size: '2rem' }}>
                      <FiMoreHorizontal />
                    </IconContext.Provider> */}
              </CardFooter>
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
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      comments: PropTypes.arrayOf(PropTypes.object).isRequired
    })
  )
};

PostContainer.defaultProps = {
  postContainer: []
};

export default PostContainer;
