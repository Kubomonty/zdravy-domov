import React from 'react'
import styled from 'styled-components';

const H1 = styled.h1`
  color: #004d99;
  font-size: 4rem;
`

const H2 = styled.h2`
  color: #004d99;
  font-size: 2rem;
`

const H3 = styled.h3`
  margin-top: 1.25rem;
  color: #004d99;
  font-size: 1.25rem;
`

const ContactGroup = styled.section`
  margin-top: 3rem;
`
const PrimaryMainText = styled.p `
font-size: 1.5rem;
margin: 0;
`

const Maintext = styled.p`
  font-size: 1.1rem;
  margin: 0;
`

export const Contacts = () => (
  <div>
    <H1>Kontakty</H1>
    <ContactGroup>
      <H2>Perháč Peter</H2>
      <PrimaryMainText>Tel.: 0915 289 939</PrimaryMainText>
      <PrimaryMainText>Email: perhac.peter@zdravy-domov.sk</PrimaryMainText>
    </ContactGroup>
    <ContactGroup>
      <H3>Bačo Ľubomír</H3>
      <Maintext>Tel.: 0918 013 523</Maintext>
      <Maintext>Email: baco.lubomir@zdravy-domov.sk</Maintext>
      <H3>Drábik Emil</H3>
      <Maintext>Tel.: 0944 639 463</Maintext>
      <Maintext>Email: drabik.emil@zdravy-domov.sk</Maintext>
    </ContactGroup>
  </div>
)