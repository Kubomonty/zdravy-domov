import React from 'react'
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const H1 = styled.h1`
  color: #004d99;
  font-size: 4em;
`

const Maintext = styled.p`
  font-size: 1.5em;
  margin: 1.5em 0;
`

export const Home = () => (
  <div>
    <H1>O nás</H1>
    <Maintext>Máte radi čerstvý vzduch, no musíte nonstop vetrať?<br/>Máte kúrenia vyše hlavy?<br/>O pohodlie Vášho domova sa postaráme!</Maintext>
    <Button size="lg" href="/kontakty">Ozvite sa nám</Button>
  </div>
)