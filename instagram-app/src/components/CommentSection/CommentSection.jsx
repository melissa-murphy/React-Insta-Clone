import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

class CommentSection extends Component {

  render() {
    return (
      <>
        <Row>
          
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
