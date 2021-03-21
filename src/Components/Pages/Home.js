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

const LinkNoStyle = styled(Link)`
  text-decoration: none;
  font-size: 1.6rem;
  color: #004d99;
  transition: 0.2s;
  &:hover {
    color: #3399ff;
  }
  &:active {
    color: #3399ff;
  }
`;

export const Home = () => (
  <div>
    <H1>O nás</H1>
    <Maintext>
      Hľadáte teplo domova? Máte radi čerstvý vzduch, no musíte veľa vetrať?
      <br/>O Vaše pohodlie sa postarajú naše <LinkNoStyle to="/rekuperacie">rekuperácie</LinkNoStyle>
      , <LinkNoStyle to="/podlahove-vykurovanie">podlahové vykurovanie</LinkNoStyle>
      , <LinkNoStyle to="/infravykurovanie">infravykurovanie</LinkNoStyle> alebo <LinkNoStyle to="/infraziarice">infražiariče</LinkNoStyle>.
      <br/>Stačí nám napísať a s radosťou nájdeme riešenie, ktoré Vás poteší.
    </Maintext>
    <Button size="lg" href="/kontakty">Ozvite sa nám</Button>
  </div>
)