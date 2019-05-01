import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

class CommentSection extends Component {
  render() {
    return (
      <>
        <Row>
          {this.props.comments.map((comment, index) => (
            <Col
              xs="12"
              key={index}
              comment={comment}
              className="comment text-left"
            >
              <p>
                <strong>{comment.username}</strong> {comment.text}
              </p>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

CommentSection.defaultProps = {
  commentSection: []
};

export default CommentSection;
