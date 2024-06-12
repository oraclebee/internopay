import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, NavDropdown, Container, Button, Form } from "react-bootstrap";
import Logo from "../Resources/Images/internopay_logo.png";
import "../Resources/ChatPage.css";
import { FaTimes } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigate = useNavigate();

  const handleNavLinkClick = () => {
    setIsCollapsed(true);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top" >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            alt="Internopay Logo"
            style={{ width: "150px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-controls="basic-navbar-nav"
        >
          {isCollapsed ? <IoMenuSharp size={20} /> : <FaTimes size={20} />}
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`mt-3 mt-lg-0 ${isCollapsed ? "d-none d-lg-block" : "d-block"}`}
        >
          <Nav className="mx-auto">
            <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>
              Live TV
            </NavLink>
            <NavLink to="/send_money" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>
              Send Money
            </NavLink>
            <NavDropdown title="Market" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/africoin" activeClassName="active" onClick={handleNavLinkClick}>
                Africoin
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/economics" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>
              Economics
            </NavLink>
            <NavLink to="/industries" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>
              Industries
            </NavLink>
            <NavLink to="/technology" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>
              Tech
            </NavLink>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/opinion" activeClassName="active" onClick={handleNavLinkClick}>
                Opinion
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/politics" activeClassName="active" onClick={handleNavLinkClick}>
                Politics
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/business-week" activeClassName="active" onClick={handleNavLinkClick}>
                Business Week
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/internopaygpt" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>
              Financial GPT
            </NavLink>
          </Nav>
          <Form>
            <Button variant="secondary" onClick={() => { navigate('login'); handleNavLinkClick(); }} size="sm" className="me-2 my-2 my-sm-0 d-block d-sm-inline">
              Sign In
            </Button>
            <Button variant="outline-primary" size="sm" className="me-2 my-2 my-sm-0 d-block d-sm-inline">
              Subscribe
            </Button>
            <Button variant="outline-primary" size="sm" className="me-2 my-2 my-sm-0 d-block d-sm-inline">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
