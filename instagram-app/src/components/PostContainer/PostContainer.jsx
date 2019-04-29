import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardHeader,
  CardFooter
} from "reactstrap";
import PropTypes from "prop-types";

const propTypes = {};

const PostContainer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader>hoobie doobie doo</CardHeader>
              <CardImg
                top
                width="100%"
                src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="Card image cap"
              />
              <CardBody>
                <CardSubtitle>icons</CardSubtitle>
              </CardBody>
              <CardFooter>
                <CommentSection />
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

PostContainer.propTypes = propTypes;

export default PostContainer;
