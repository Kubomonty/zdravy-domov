import React from 'react';
import styled from 'styled-components';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const H1 = styled.h1`
  color: #004d99;
  font-size: 4rem;
`

const Maintext = styled.p`
  font-size: 1.5rem;
  margin: 1.5rem 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.6rem;
  color: #004d99;
  transition: 0.3s;
  &:hover {
    color: #3399ff;
    text-decoration: none;
  }
  &:active {
    color: #3399ff;
    text-decoration: none;
  }
`;

export const Home = () => (
  <div>
    <H1>O nás</H1>
    <Maintext>
      Firma DEM trade s.r.o. vznikla ako krbárska firma s kamennými predajňami v Michalovciach a Košiciach. Počas stavieb krbov sme však často dostávali otázky na kúrenie. Rozhodli sme sa teda rozšíriť náš sortiment o príbuzné kúrenie a o rekuperácie a začali sa venovať zdravému bývaniu a zdravému domovu.
      <br/>Pretože zdravý domov, je základ. 
      <br/>
      <br/>O Vaše pohodlie sa postarajú naše <StyledLink to="/rekuperacie">rekuperácie</StyledLink>
      , <StyledLink to="/podlahove-vykurovanie">podlahové vykurovanie</StyledLink>
      , <StyledLink to="/infravykurovanie">infravykurovanie</StyledLink> alebo <StyledLink to="/infraziarice">infražiariče</StyledLink>.
      <br/>Stačí nám napísať a s radosťou nájdeme riešenie, ktoré Vás poteší.
    </Maintext>
    <Button size="lg" href="/kontakty">Ozvite sa nám</Button>
  </div>
)