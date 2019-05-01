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
  Form,
  InputGroup,
  InputGroupAddon,
  Input
} from 'reactstrap';
import { IconContext } from 'react-icons';
import { FiHeart, FiMoreHorizontal, FiMessageCircle } from 'react-icons/fi';

class PostContainer extends Component {
  state = {
    likes: 0,
    userInput: ''
  };

  componentDidMount() {
    this.setState({
      likes: this.props.post.likes
    });
  }
  addOnClick = () => {
    console.log('Click to add fired');
    this.setState({
      likes: this.state.likes + 1
    });
  };
  addNewComment = event => {
    event.preventDefault();
    this.setState({
      userInput: ''
    });
  };
  handleChange = event => {
    event.preventDefault();
    this.setState({
      userInput: event.target.value
    });
  };

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
              <CardFooter>
                {/* -------------------form start */}
                <Form>
                  <InputGroup>
                    <Input
                      type="text"
                      name="text"
                      placeholder="Add a comment..."
                    />
                    <InputGroupAddon
                      onClick={this.addNewComment}
                      className="pl-3 my-auto"
                      addonType="append"
                    >
                      <IconContext.Provider value={{ size: '1.4rem' }}>
                        <FiMoreHorizontal />
                      </IconContext.Provider>
                    </InputGroupAddon>
                  </InputGroup>
                </Form>
                {/* ------------------form end */}
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
