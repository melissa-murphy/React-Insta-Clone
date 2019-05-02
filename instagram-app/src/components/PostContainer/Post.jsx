import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardImg,
  CardTitle,
  CardBody,
  CardFooter,
  Form,
  InputGroup,
  InputGroupAddon,
  Input
} from 'reactstrap';
import { IconContext } from 'react-icons';
import { FiHeart, FiMoreHorizontal, FiMessageCircle } from 'react-icons/fi';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }
  addOnClick = () => {
    console.log('Click to add fired');
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };
  

  render() {
    return (
      <div className="post-border">
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader>
                <Row>
                  <Col xs="2">
                    <img
                      className=""
                      src={this.props.post.thumbnailUrl}
                      alt={this.props.post.username}
                    />
                  </Col>
                  <Col xs="10" className="">
                    <strong>{this.props.post.username}</strong>
                  </Col>
                </Row>
              </CardHeader>

              <CardImg src={this.props.post.imageUrl} alt="User Post" />

              <CardTitle className="text-left">
                <Row>
                  <Col>
                    <Row>
                      <Col xs="1" onClick={this.addOnClick.bind(this)}>
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
                  <Col>
                    {this.state.likes}
                    <span> Likes</span>
                  </Col>
                </Row>
              </CardTitle>
              <CardBody>
                <CommentSection comments={this.props.post.comments} />
              </CardBody>

            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

//
Post.propTypes = {
  Post: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      comments: PropTypes.arrayOf(PropTypes.object).isRequired
    })
  )
};

Post.defaultProps = {
  Post: []
};

export default Post;
