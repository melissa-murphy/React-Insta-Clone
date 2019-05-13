import React from 'react';
import { CardHeader, Row, Col } from 'reactstrap';

const PostHeader = props => {
  return (
    <>
      <CardHeader classname="post-header">
        <Row>
          <Col xs="2">
            <img src={props.thumbnailUrl} alt="post header" />
          </Col>
          <Col xs="10">
            <strong>{props.username}</strong>
          </Col>
        </Row>
      </CardHeader>
    </>
  );
};

export default PostHeader;
