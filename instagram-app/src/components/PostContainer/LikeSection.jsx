import React, { Component } from 'react';
import { CardTitle, Row, Col } from 'reactstrap';

// Icons
import { FiMessageCircle, FiHeart } from 'react-icons/fi';
import { IconContext } from 'react-icons';

class LikeSection extends Component {
  render() {
    return (
      <CardTitle className="text-left">
        <Row>
          <Col>
            <Row>
              <Col xs="1" onClick={this.addOnClick.bind(this)}>
                <IconContext.Provider value={{ size: '2rem' }}>
                  <FiHeart />
                </IconContext.Provider>
              </Col>
              <Col>
                <IconContext.Provider value={{ size: '2rem' }}>
                  <FiMessageCircle />
                </IconContext.Provider>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="p-3">
          <Col>
            {this.state.likes}
            <span> Likes</span>
          </Col>
        </Row>
      </CardTitle>
    );
  }
}

export default LikeSection;
