import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Custom styles (if needed)

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/">⚡ FUTURE WHEELS</Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
            <Nav.Link as={Link} to="/models" className="nav-item">Models</Nav.Link>
            <Nav.Link as={Link} to="/about-evs" className="nav-item">About EV</Nav.Link>

            {/* Dropdown Menu */}
            <NavDropdown title="More" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/charging-station">Charging Stations</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/battery-tech">Battery Technology</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ev-news">EV News</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
