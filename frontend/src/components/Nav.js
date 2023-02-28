import React, { useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Axios from '../utilities/Axios';
import { useAuth } from '../utilities/AuthContext';

const NavBar=()=> {
  const {currentUser,logout} = useAuth();

  return (
    <Navbar bg="light" variant="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/">Home</Link>
        </Nav>
        <Nav>
          <NavDropdown title="Loggedin user" id="basic-nav-dropdown">
            {currentUser && 
            
                <NavDropdown.Item>
                    <Link onClick={logout}>Logout</Link> 
                </NavDropdown.Item>
            }

            {!currentUser && (<>
                <NavDropdown.Item>
                <Link to="/signup">Signup</Link> 
                </NavDropdown.Item>
                <NavDropdown.Item>
                <Link to="/login">Login</Link> 
                </NavDropdown.Item>
            </>)}
               
       

          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar;