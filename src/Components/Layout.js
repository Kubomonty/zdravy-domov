import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const StyledContainer = styled(Container)`  
  padding: 1.5rem 4rem 4rem 4rem;
  min-height: calc(100vh - 112px);
  background-color: rgba(255, 255, 255, 0.9);
  
  @media (min-width: 1200px) {
    margin-top: 56px;
  }
`

const Footer = styled.section`
  padding: 0.5rem 2rem;
  min-height: 56px;
  background-color: #e6f2ff;
  width: 100%;
`

const FooterRow = styled(Row)`
  padding: 10px 8px 0 8px;
`

const FooterText = styled.p`
  margin: 0;
  padding: 0 0 0.6rem 0;
  font-weight: 400;
  color: #004d99;
  
  @media (min-width: 320px) {
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #3399ff;
    text-decoration: none;
  }
  &:active {
    color: #3399ff;
    text-decoration: none;
  }
`;

export const Layout = (props) => (
  <div>
    <StyledContainer>
      {props.children}
    </StyledContainer>
    <Footer>
      <Container>
        <FooterRow>
          <Col md={4}>
            <Row className="d-flex justify-content-md-start align-items-center">
              <FooterText>DEM trade,&nbsp;</FooterText>
              <FooterText>Rastislavova 23,&nbsp;</FooterText>
              <FooterText>040 01 Košice</FooterText>
            </Row>
          </Col>
          <Col md={4}>
            <Row className="d-flex justify-content-md-center align-items-center">
              <FooterText>IČO: 31737412,&nbsp;</FooterText>
              <FooterText>DIČ: 2020985307</FooterText>
            </Row>
          </Col>
          <Col md={4}>
            <Row className="d-flex justify-content-md-end align-items-center">
              <FooterText><StyledLink to="/">ZDRAVY-DOMOV.SK</StyledLink></FooterText>
            </Row>
          </Col>
        </FooterRow>
      </Container>
    </Footer>
  </div>
)