import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const H1 = styled.h1`
  color: #004d99;
  margin-top: 2rem;

  @media (min-width: 320px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`

const Maintext = styled.p`
  text-align: justify;
  text-justify: inter-word;
  margin: 1.5rem 0;
  @media (min-width: 320px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
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

  @media (min-width: 320px) {
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
  font-size: 26px;
  font-weight: 360;
  color: #ffffff;
  transition: color 0.3s;
  &:hover {
    color: #ffffff;
    text-decoration: none;
  }
  &:active {
    color: #ffffff;
    text-decoration: none;
  }

  @media (min-width: 320px) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const TITLE = 'zdravy-domov | O nás'

export const Home = () => (
  <div>
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
    <H1>O nás</H1>
    <Maintext>
      Firma DEM trade s.r.o. vznikla ako krbárska firma s kamennými predajňami v Michalovciach a Košiciach. Počas stavieb krbov sme však často dostávali otázky na kúrenie. Rozhodli sme sa teda rozšíriť náš sortiment o príbuzné kúrenie a o rekuperácie a začali sa venovať zdravému bývaniu a zdravému domovu.
      <br/>Pretože zdravý domov, je základ. 
      <br/>
      <br/>O Vaše pohodlie sa postarajú naše <StyledLink to="#">rekuperácie</StyledLink>
      , <StyledLink to="/podlahove-vykurovanie">podlahové vykurovanie</StyledLink>
      , <StyledLink to="/infravykurovanie">infravykurovanie</StyledLink> alebo <StyledLink to="/infraziarice">infražiariče</StyledLink>.
      <br/>Stačí nám napísať a s radosťou nájdeme riešenie, ktoré Vás poteší.
    </Maintext>
    <br/>
    <Button size="lg">
      <ButtonLink to="/kontakty">Ozvite sa nám</ButtonLink>
    </Button>
  </div>
)