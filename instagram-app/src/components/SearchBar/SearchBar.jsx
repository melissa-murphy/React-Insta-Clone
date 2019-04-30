import React from "react";
import { Container, Row, Col, Input } from "reactstrap";
// import PropTypes from "prop-types";

import { FaInstagram } from "react-icons/fa";
import { FiCompass, FiHeart, FiUser } from "react-icons/fi";
import { IconContext } from "react-icons";
import instagramLogo from "../../assets/img/instagram.png";

const propTypes = {};

const SearchBar = () => {
  return (
    <>
      <Container className="pt-3">
        <Row className="py-5 border-top border-bottom border-secondary">
          <Col xs="1">
            <IconContext.Provider value={{ size: "3rem" }}>
              <FaInstagram />
            </IconContext.Provider>
          </Col>
          <Col xs="2" className="border-left border-dark">
            <img
              className="img img-fluid"
              src={instagramLogo}
              alt="Instagram"
            />
          </Col>
          <Col xs="6" className="pt-1">
            <Input type="search" name="search" placeholder="Search" />
          </Col>
          <Col xs="1">
            <IconContext.Provider value={{ size: "3rem" }}>
              <FiCompass />
            </IconContext.Provider>
          </Col>
          <Col xs="1">
            <IconContext.Provider value={{ size: "3rem" }}>
              <FiHeart />
            </IconContext.Provider>
          </Col>
          <Col xs="1">
            <IconContext.Provider value={{ size: "3rem" }}>
              <FiUser />
            </IconContext.Provider>
          </Col>
          <hr />
        </Row>
      </Container>
    </>
  );
};

SearchBar.propTypes = propTypes;

export default SearchBar;
