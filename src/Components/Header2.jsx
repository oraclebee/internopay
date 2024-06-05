// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Logo from '../Resources/Images/internopay_logo.png';
// // Font Awesome icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

// function Header() {
//   return (
//     <>
//         <Navbar expand="lg" className="bg-body-tertiary">
//             <Container fluid>
//                 <Navbar.Brand href="#"><img src={Logo} alt="Internopay Logo" /></Navbar.Brand>
//                 <Navbar.Toggle aria-controls="navbarScroll" />
//                 <Navbar.Collapse id="navbarScroll">
//                 <Nav
//                     className="me-auto my-2 my-lg-0"
//                     style={{ maxHeight: '100px' }}
//                     navbarScroll
//                 >
//                     {/* <Nav.Link href="#action1">Home</Nav.Link>
//                     <Nav.Link href="#action2">Link</Nav.Link>
//                     <NavDropdown title="Link" id="navbarScrollingDropdown">
//                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action4">
//                         Another action
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action5">
//                         Something else here
//                     </NavDropdown.Item>
//                     </NavDropdown>
//                     <Nav.Link href="#" disabled>
//                     Link
//                     </Nav.Link> */}
//                 </Nav>
//                 <Form className="d-flex">
//                     <Button variant="outline-primary">Sign In</Button>
//                     <Button variant="outline-primary">Subscribe</Button>
//                     {/* <Form.Control
//                         type="search"
//                         placeholder="Search"
//                         className="me-2"
//                         aria-label="Search"
//                     /> */}
//                     <Button variant="outline-primary"><FontAwesomeIcon icon={faSearch}/></Button>
//                 </Form>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//         <Navbar expand="lg" className="bg-body-tertiary">
//             <Container fluid>
//                 {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
//                 <Navbar.Toggle aria-controls="navbarScroll" />
//                 <Navbar.Collapse id="navbarScroll">
//                 <Nav
//                     className="me-auto my-2 my-lg-0"
//                     style={{ maxHeight: '100px' }}
//                     navbarScroll
//                 >
//                     <Nav.Link href="#action1">Live TV</Nav.Link>
//                     <NavDropdown title="Market" id="navbarScrollingDropdown">
//                         <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action4">
//                             Another action
//                         </NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action5">
//                             Something else here
//                         </NavDropdown.Item>
//                     </NavDropdown>
//                     <Nav.Link href="#action2">Economics</Nav.Link>
//                     <Nav.Link href="#action2">Industries</Nav.Link>
//                     <Nav.Link href="#action2">Tech</Nav.Link>
//                     <Nav.Link href="#action2">Politics</Nav.Link>
//                     <Nav.Link href="#action2">Business Week</Nav.Link>
//                     <Nav.Link href="#action2">Opinion</Nav.Link>
//                     <NavDropdown title="More" id="navbarScrollingDropdown">
//                         <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action4">
//                             Another action
//                         </NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action5">
//                             Something else here
//                         </NavDropdown.Item>
//                     </NavDropdown>
                 
//                     {/* <Nav.Link href="#" disabled>
//                     Link
//                     </Nav.Link> */}
//                 </Nav>
//                 <Form className="d-flex">
//                     <NavDropdown title="Switch Edition" id="navbarScrollingDropdown">
//                         <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                         <NavDropdown.Item href="#action4">
//                             Another action
//                         </NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="#action5">
//                             Something else here
//                         </NavDropdown.Item>
//                     </NavDropdown>
//                 </Form>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     </>
//   );
// }

// export default Header;


// import React, { useState } from 'react';
// import Logo from '../Resources/Images/internopay_logo.png';
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBBtn,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem,
//   MDBCollapse,
// } from 'mdb-react-ui-kit';

// export default function Header() {
//   const [openBasic, setOpenBasic] = useState(false);

//   return (
//     <MDBNavbar expand='lg' light bgColor='light'>
//       <MDBContainer fluid>
//         <MDBNavbarBrand href='#'><img src={Logo} alt="Internopay Logo" /></MDBNavbarBrand>

//         <MDBNavbarToggler
//           aria-controls='navbarSupportedContent '
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setOpenBasic(!openBasic)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>

//         <MDBCollapse navbar open={openBasic}>
//           <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
//             <MDBNavbarItem>
//               <MDBNavbarLink active aria-current='page' href='#'>
//                 Home
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#'>Link</MDBNavbarLink>
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle tag='a' className='nav-link' role='button'>
//                   Dropdown
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu>
//                   <MDBDropdownItem link>Action</MDBDropdownItem>
//                   <MDBDropdownItem link>Another action</MDBDropdownItem>
//                   <MDBDropdownItem link>Something else here</MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
//                 Disabled
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>

//           <form className='d-flex input-group w-auto'>
//             <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
//             <MDBBtn color='primary'>Search</MDBBtn>
//           </form>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }





import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../Resources/Images/internopay_logo.png';
// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to='/'><img src={Logo} alt="Internopay Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    {/* <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link> */}
                </Nav>
                <Form className="d-flex">
                    <Button variant="outline-primary">Sign In</Button>
                    <Button variant="outline-primary">Subscribe</Button>
                    {/* <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    /> */}
                    <Button variant="outline-primary"><FontAwesomeIcon icon={faSearch}/></Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Live TV</Nav.Link>
                    <NavDropdown title="Market" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#action2">Economics</Nav.Link>
                    <Nav.Link href="#action2">Industries</Nav.Link>
                    <Nav.Link href="#action2">Tech</Nav.Link>
                    <Nav.Link href="#action2">Politics</Nav.Link>
                    <Nav.Link href="#action2">Business Week</Nav.Link>
                    <Nav.Link href="#action2">Opinion</Nav.Link>
                    <NavDropdown title="More" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/internopaygpt">InterNoPayGPT</Nav.Link>
                 
                    {/* <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link> */}
                </Nav>
                <Form className="d-flex">
                    <NavDropdown title="Switch Edition" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}

export default Header;