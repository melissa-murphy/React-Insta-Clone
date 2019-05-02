import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSectionContainer';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardImg,
  CardTitle,
  CardBody
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
      <>
        <Row className="post-border">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card>
              <PostHeader />>
              <CardImg
                className="post-image-wrapper"
                src={this.props.post.imageUrl}
                alt="User Post"
              />
              <LikeSection />
              <CommentSection />
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

//
Post.propTypes = {
  Post: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired
    })
  )
};

Post.defaultProps = {
  Post: []
};

export default Post;
