import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ScrollUpButton from "react-scroll-up-button";

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

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return(
    <Styles>
      <Navbar expanded={expanded} expand="xl" fixed='top'>
        <Container>
          <ScrollUpButton />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded((prevExpanded) => (prevExpanded = !prevExpanded))} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" onClick={() => setExpanded(false)}>
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
}