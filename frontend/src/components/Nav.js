import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../utilities/AuthContext';

const NavBar=()=> {
    const navigate = useNavigate();
    const {currentUser,logout} = useAuth();

    const Logout=()=>{
      logout();
      navigate('/login');
    }

  return (
    <Navbar bg="light" variant="light" expand="lg">
    <Container>
      <Navbar.Brand> <Link to='/'>React-Bootstrap</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </Nav>
        <Nav>
          <NavDropdown title="Loggedin user" id="basic-nav-dropdown">
            {currentUser ? (
            <>
                <NavDropdown.Item onClick={Logout}>
                  Logout
                </NavDropdown.Item>
            </>) : (<>
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