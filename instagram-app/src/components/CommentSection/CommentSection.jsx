import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

class CommentSection extends Component {

  render() {
    return (
      <>
        <Row>
          {this.props.comments.map((comment, index) => (
            <Col key={index} comment={comment} className='comment'>
              hoobie doobie
            </Col>
          ))}          
        </Row>
      </>
    );
  }
}

CommentSection.propTypes = {
  commentSection: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

CommentSection.defaultProps = {
  commentSection: []
};

export default CommentSection;
