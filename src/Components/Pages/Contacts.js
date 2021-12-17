import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

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

const H2 = styled.h2`
  color: #004d99;
  
  @media (min-width: 320px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`

const H3 = styled.h3`
  margin-top: 1.25rem;
  color: #004d99;
  
  @media (min-width: 320px) {
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`

const ContactGroup = styled.section`
  margin-top: 3rem;
`

const PrimaryMainText = styled.p `
  margin: 0;

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

const Maintext = styled.p`
  margin: 0;

  @media (min-width: 320px) {
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`

const CompanyInfoText = styled.p `
  margin: 0;

  @media (min-width: 320px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`

const StyledLink = styled(Link)`
color: inherit;
  transition: color 0.3s;
  &:hover {
    color: #3399ff;
    text-decoration: none;
  }
  &:active {
    color: #3399ff;
    text-decoration: none;
  }
`
const TITLE = 'zdravy-domov | Kontakty'

export const Contacts = () => (
  <div>
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
    <H1>Kontakty</H1>
    <ContactGroup>
      <H2>Perháč Peter</H2>
      <PrimaryMainText>Tel.: 0915 289 939</PrimaryMainText>
      <PrimaryMainText>Email: perhac.peter@zdravy-domov.sk</PrimaryMainText>
    </ContactGroup>
    <ContactGroup>
      <H3>Drábik Emil</H3>
      <Maintext>Tel.: 0944 639 463</Maintext>
      <Maintext>Email: drabik.emil@zdravy-domov.sk</Maintext>
    </ContactGroup>
    <ContactGroup>
      <CompanyInfoText>DEM trade</CompanyInfoText>
      <CompanyInfoText>Rastislavova 23</CompanyInfoText>
      <CompanyInfoText>040 01, Košice</CompanyInfoText>
      <CompanyInfoText>IČO: 31737412</CompanyInfoText>
      <CompanyInfoText>DIČ: 2020985307</CompanyInfoText>
      <CompanyInfoText>
        <StyledLink to="/">zdravy-domov.sk</StyledLink>
      </CompanyInfoText>
    </ContactGroup>
  </div>
)