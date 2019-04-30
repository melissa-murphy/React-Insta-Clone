import React from "react";
import PropTypes from "prop-types";
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

class PostContainer extends React.Component {
  constructor() {
    super();
    console.log("PostContainer constructor is running");
  }

  componentDidMount() {
    console.log("CDM running");
  }

  render() {
    console.log("postContainer rendering");
    return (
      <>
        <Container className="mt-5">
          <Row>
            <Col sm={{ size: 6, offset: 3 }}>
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
  }
}

PostContainer.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.username
    })
  )
};

PostContainer.defaultProps = {
  dummyData: []
};

export default PostContainer;
