import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ScrollUpButton from "react-scroll-up-button";

import zdravyDomovFullLogo from '../Assets/zdravy_domov-full_logo.png';

const Styles = styled.div`
  .container {
    padding: 0;
  }

  .navbar {
    background-color: #e6f2ff;
  }

  .navbar-brand {
    padding: 0.5rem 0;
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
`
const StyledImage = styled(Image)`
  @media (min-width: 320px) {
    width: 25vw;
  }

  @media (min-width: 768px) {
    width: 15vw;
  }

  @media (min-width: 1024px) {
    width: 10vw;
  }

  @media (min-width: 1440px) {
    width: 6vw;
  }
`

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const fixedTop = window.innerWidth >= 1200 ? 'top' : false;

  return(
    <Styles>
      <Navbar expanded={expanded} expand="xl" fixed={fixedTop}>
        <Container>
          <ScrollUpButton />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded((prevExpanded) => (prevExpanded = !prevExpanded))}/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item onClick={() => setExpanded(false)}><Nav.Link as={Link} to="/">Domov</Nav.Link></Nav.Item>
              <Nav.Item>
                <NavDropdown title="Rekuperácie">
                  <NavDropdown.Header>Decentralizované rekuperácie</NavDropdown.Header>
                  <NavDropdown.Item onClick={() => setExpanded(false)}><Nav.Link as={Link} to="/decentralizovane-rekuperacie">Prana a SmartFan</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Divider/>
                  <NavDropdown.Header>Centrálne rekuperácie - nástenné</NavDropdown.Header>
                  <NavDropdown.Item onClick={() => setExpanded(false)}><Nav.Link as={Link} to="/centralizovane-rekuperacie/nastenne/flair-325">Flair 325</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setExpanded(false)}><Nav.Link as={Link} to="/centralizovane-rekuperacie/nastenne/flair-400">Flair 400</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setExpanded(false)}><Nav.Link as={Link} to="/centralizovane-rekuperacie/nastenne/renovent-excellent-180">Renovent Excellent 180</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setExpanded(false)}><Nav.Link as={Link} to="/centralizovane-rekuperacie/nastenne/renovent-excellent-300">Renovent Excellent 300</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setExpanded(false)}><Nav.Link as={Link} to="/centralizovane-rekuperacie/nastenne/renovent-excellent-400">Renovent Excellent 400</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setExpanded(false)}><Nav.Link as={Link} to="/centralizovane-rekuperacie/nastenne/renovent-excellent-450">Renovent Excellent 450</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Header>Centrálne rekuperácie - podstropné</NavDropdown.Header>
                  <NavDropdown.Item onClick={() => setExpanded(false)}><Nav.Link as={Link} to="/centralizovane-rekuperacie/nastenne/renovent-sky-150">Renovent Sky 150</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setExpanded(false)}><Nav.Link as={Link} to="/centralizovane-rekuperacie/nastenne/renovent-sky-200">Renovent Sky 200</Nav.Link></NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setExpanded(false)}><Nav.Link as={Link} to="/centralizovane-rekuperacie/nastenne/renovent-sky-300">Renovent Sky 300</Nav.Link></NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item onClick={() => setExpanded(false)}><Nav.Link as={Link} to="/infravykurovanie">Infravykurovanie</Nav.Link></Nav.Item>
              <Nav.Item onClick={() => setExpanded(false)}><Nav.Link as={Link} to="/podlahove-vykurovanie">Podlahové vykurovanie</Nav.Link></Nav.Item>
              <Nav.Item onClick={() => setExpanded(false)}><Nav.Link as={Link} to="/infraziarice">Infražiariče</Nav.Link></Nav.Item>
              <Nav.Item onClick={() => setExpanded(false)}><Nav.Link as={Link} to="/kontakty">Kontakty</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand as={Link} to="/">
            <StyledImage src={zdravyDomovFullLogo}/>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Styles>
  )
}