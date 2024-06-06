import React from 'react';
import '../Resources/ChatPage.css'; // Import custom CSS for styling
import Logo from '../Resources/Images/internopay_logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, NavDropdown, Container, Button, Form } from 'react-bootstrap';

function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand as={Link} to='/'>
                        <img src={Logo} alt="Internopay Logo" className='internopay-logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <FontAwesomeIcon icon={faBars} />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* Your Nav Links Here */}
                            <Nav.Link href="#action1">Live TV</Nav.Link>
                            <NavDropdown title="Market" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Africoin</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action2">Economics</Nav.Link>
                            <Nav.Link href="industries">Industries</Nav.Link>
                            <Nav.Link href="#action2">Tech</Nav.Link>
                            <NavDropdown title="More" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Opinion</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Politics
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Business Week
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/internopaygpt">Financial GPT</Nav.Link>
                        </Nav>
                        <Form className="d-flex form-but">
                                {/* Your Search and Sign In Buttons Here */}
                                <Button variant="outline-primary">Sign In</Button>
                                <Button variant="outline-primary">Subscribe</Button>
                                <Button variant="outline-primary"><FontAwesomeIcon icon={faSearch} /></Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;