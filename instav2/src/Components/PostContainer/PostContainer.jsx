import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

class PostContainer extends Component {
  render() {
    return <>
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        flippy floppy
                    </CardHeader>
                </Card>
            </Col>
        </Row>
    </>;
  }
}

export default PostContainer;
