import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
  .container {
    padding: 0;
  }

  .navbar {
    background-color: #e6f2ff;
  }

  .navbar-brand {
    margin: -4px 0 0 0;
    padding: 0 0.5rem;
    color: #004d99;
    font-size: 24px;
    font-weight: 320;
    transition: color 0.3s;
    &:hover {
      color: #3399ff;
    }
  }

  .navbar-nav .nav-link {
    font-size: 18px;
    font-weight: 500;
    color: #004d99;
    transition: color 0.3s;
    &:hover {
      color: #3399ff;
    }
  }

  .navbar-toggler {
    border: 0;
  }
`;

export const NavBar = () => (
  <Styles>
    <Navbar expand="xl" fixed='top'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item><Nav.Link as={Link} to="/">Domov</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/rekuperacie">Rekuperácie</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/infravykurovanie">Infravykurovanie</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/podlahove-vykurovanie">Podlahové vykurovanie</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/infraziarice">Infražiariče</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} to="/kontakty">Kontakty</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand as={Link} to="/">zdravy-domov.sk</Navbar.Brand>
      </Container>
    </Navbar>
  </Styles>
)