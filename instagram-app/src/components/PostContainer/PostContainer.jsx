import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

import {
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

  componentDidMount() {
    console.log("CDM running");
  }

  render() {
    console.log("postContainer rendering");
    return (
          <Row className="postContainer my-5">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card>
                <CardHeader className="user-info">
                  {this.props.dummyData.username}
                </CardHeader>
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
                  {/* <CommentSection comments={this.props.dummyData.comments} /> */}
                </CardFooter>
              </Card>
            </Col>
          </Row>

      
    );
  }
}

PostContainer.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired
    })
  )
};

PostContainer.defaultProps = {
  dummyData: []
};

export default PostContainer;
