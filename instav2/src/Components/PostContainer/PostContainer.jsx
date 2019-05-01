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
              <CardHeader>user icon and name</CardHeader>

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
            
        })
    )
};

PostContainer.defaultProps = {
  postContainer: []
};

export default PostContainer;
