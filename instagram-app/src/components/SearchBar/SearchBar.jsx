import React from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";

import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import instagramLogo from "../../assets/img/instagram.png";

const propTypes = {};

const SearchBar = () => {
  return (
    <>
      <Container className="pt-3">
        <Row>
          <Col>
            <IconContext.Provider value={{ size: "4rem" }}>
              <FaInstagram />
            </IconContext.Provider>
          </Col>
          <Col className="border-left border-dark">
            <img
              className="img img-fluid"
              src={instagramLogo}
              alt="Instagram"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

SearchBar.propTypes = propTypes;
Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
};
Row.propTypes = {
  noGutters: PropTypes.bool,
  // see https://reactstrap.github.io/components/form Form Grid with Form Row
  form: PropTypes.bool
};

export default SearchBar;
