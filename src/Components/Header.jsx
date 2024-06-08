import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, NavDropdown, Container, Button, Row, Col } from "react-bootstrap";
import Logo from "../Resources/Images/internopay_logo.png";
import "../Resources/ChatPage.css"; // Import custom CSS for styling
import { FaTimes } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Row className="w-100 align-items-center">
          <Col xs={1} className="d-lg-none">
            <Navbar.Toggle
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-controls="basic-navbar-nav"
            >
              {isCollapsed ? <IoMenuSharp /> : <FaTimes />}
            </Navbar.Toggle>
          </Col>
          <Col xs={3} sm={1}>
            <Navbar.Brand as={Link} to="/">
              <img
                src={Logo}
                alt="Internopay Logo"
                className=""
                style={{ height: "30px", width: "100px" }}
              />
            </Navbar.Brand>
          </Col>
          <Col xs="auto" className="ms-auto">
            <Button variant="secondary" size="sm" className="me-2 p-2">
              Sign In
            </Button>
            <Button variant="outline-primary" size="sm" className="me-2 p-2">
              Subscribe
            </Button>
            <Button variant="outline-primary" size="sm">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Col>
          <Col sm={12} className="mx-auto">
            <Navbar.Collapse
              id="basic-navbar-nav"
              className={`mt-3 mt-lg-0 ${
                isCollapsed ? "d-none d-lg-block" : "d-block"
              }`}
            >
              <Nav className="mx-auto">
                <NavLink to="/" exact activeClassName="active" className="nav-link">
                  Live TV
                </NavLink>
                <NavDropdown title="Market" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={NavLink} to="/africoin" activeClassName="active">
                    Africoin
                  </NavDropdown.Item>
                </NavDropdown>
                <NavLink to="/economics" activeClassName="active" className="nav-link">
                  Economics
                </NavLink>
                <NavLink to="/industries" activeClassName="active" className="nav-link">
                  Industries
                </NavLink>
                <NavLink to="/technology" activeClassName="active" className="nav-link">
                  Tech
                </NavLink>
                <NavDropdown title="More" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={NavLink} to="/opinion" activeClassName="active">
                    Opinion
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/politics" activeClassName="active">
                    Politics
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={NavLink} to="/business-week" activeClassName="active">
                    Business Week
                  </NavDropdown.Item>
                </NavDropdown>
                <NavLink to="/internopaygpt" activeClassName="active" className="nav-link">
                  Financial GPT
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;
