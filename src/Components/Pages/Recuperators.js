import React from 'react';
import styled from 'styled-components';

import { scroller } from 'react-scroll';
import { Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import pranaLogoImg from '../../Assets/prana_logo_ret.png';
import smartfanLogoImg from '../../Assets/smartfan_logo.png';
import smartfanS from '../../Assets/smartfan_s.jpg';

const H1 = styled.h1`
  color: #004d99;
  font-size: 4rem;
`
const H2 = styled.h2`
  color: #004d99;
  font-size: 3rem;
`

const H3 = styled.h3`
  margin-top: 2rem;
  color: #004d99;
  font-size: 2rem;
`

const TabText = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
`

const Maintext = styled.p`
  font-size: 1.5rem;
  margin: 1.5rem 0;
`

const Comment = styled.p`
  font-size: 0.8rem;
  margin: 1.5rem 0;
  color: #004d99;
`

const BlockBorder = styled.section`
  display: block;
  height: 2px;
  background-color: #004d99;
  content: " ";
  width: 25vw;
  margin: 50px auto;
`

const StyledRow = styled(Row)`
  padding: 0 15px;
`

const LinkNoStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;
  &:hover {
    color: #e67e22;
  }
  &:active {
    color: #b05d14;
  }
`;

const RecuperatorCompany = styled.section`
  margin: 0;
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
`;

const RecuperatorCompanyLogo = styled.img`
  width: 100%;
  height: auto;
  transform: scale(0.85);
  transition: transform 0.5s, opacity 0.5s;
  &:hover {
    transform: scale(0.8);
    opacity: 1;
  }
`;

const SmartfanImg = styled(Image)`
  margin-bottom: 35px;
`;

export const Recuperators = () => (
  <div>
    <H1>Rekuperácie</H1>
    <Maintext>Máte radi čerstvý vzduch, no musíte nonstop vetrať?<br/>Máte kúrenia vyše hlavy?<br/>O pohodlie Vášho domova sa postaráme!</Maintext>
    <BlockBorder />
    <Row>
      <Col>
        <LinkNoStyle
          onClick={() => scroller.scrollTo('prana', {
            smooth: true,
            offset: -70,
            duration: 500,
        })}>
          <RecuperatorCompany>
            <RecuperatorCompanyLogo src={pranaLogoImg} />
          </RecuperatorCompany>
        </LinkNoStyle>
      </Col>
      <Col>
        <LinkNoStyle
          onClick={() => scroller.scrollTo('smartfan', {
            smooth: true,
            offset: -70,
            duration: 500,
        })}>
          <RecuperatorCompany>
            <RecuperatorCompanyLogo src={smartfanLogoImg} />
          </RecuperatorCompany>
        </LinkNoStyle>
      </Col>
    </Row>
    <BlockBorder />
    <H2 id='prana'>Prana recuperators</H2>
    <H3>Decentralizovaná rekuperácia</H3>
    <Maintext>
      Tuto je par riadkov<br/>
      ktore sa venuju rekuperaciam<br/>
      od znacky prana recuperators typu Decentralizovaná rekuperácia
    </Maintext>
    <H3>Centrálna rekuperácia</H3>
    <Maintext>
      Tuto je par riadkov<br/>
      ktore sa venuju rekuperaciam<br/>
      od znacky prana recuperators typu Centrálna rekuperácia
    </Maintext>
    <BlockBorder />
    <H2 id='smartfan'>SmartFan® S</H2>
    <Maintext>
      Najmenší, najtichší a najúčinnejší decentralizovaný vetrací systém obytných priestorov vo svojej triede.
    </Maintext>
    <SmartfanImg src={smartfanS} fluid />
    <H3>Technické údaje</H3>
    <Row>
      <Col sm={6} xs={12}><Maintext>Miera tepelnej účinnosti</Maintext></Col>
      <Col sm={6} xs={12}><Maintext>až 91%</Maintext></Col>
    </Row>
    <Row>
      <Col sm={6} xs={12}><Maintext>Enargetická trieda</Maintext></Col>
      <Col sm={6} xs={12}><Maintext>A+</Maintext></Col>
    </Row>
    <br/>
    <Row>
      <Col sm={6} xs={12}></Col>
      <Col sm={6} xs={12}>
        <Row>
          <Col sm={3}><p>Stupeň 1</p></Col>
          <Col sm={3}><p>Stupeň 2</p></Col>
          <Col sm={3}><p>Stupeň 3</p></Col>
          <Col sm={3}><p>Stupeň 4</p></Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col sm={6} xs={12}>
        <StyledRow>
          <TabText>Prietokový objem v režime Eco/vyvetranie [m³/h]</TabText>
          <Comment>&nbsp;1)</Comment>
        </StyledRow>
      </Col>
      <Col sm={6} xs={12}>
        <Row>
          <Col sm={3}><TabText>18</TabText></Col>
          <Col sm={3}><TabText>28</TabText></Col>
          <Col sm={3}><TabText>38</TabText></Col>
          <Col sm={3}><TabText>46</TabText></Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col sm={6} xs={12}>
        <StyledRow>
          <TabText>Hladina akustického tlaku [dB(A)]</TabText>
        </StyledRow>
      </Col>
      <Col sm={6} xs={12}>
        <Row>
          <Col sm={3}><TabText>11</TabText></Col>
          <Col sm={3}><TabText>19</TabText></Col>
          <Col sm={3}><TabText>28</TabText></Col>
          <Col sm={3}><TabText>33</TabText></Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col sm={6} xs={12}>
        <StyledRow>
          <TabText>Príkon [W]</TabText>
          <Comment>&nbsp;2)</Comment>
        </StyledRow>
      </Col>
      <Col sm={6} xs={12}>
        <Row>
          <Col sm={3}><TabText>0,8</TabText></Col>
          <Col sm={3}><TabText>1,4</TabText></Col>
          <Col sm={3}><TabText>2,6</TabText></Col>
          <Col sm={3}><TabText>4,0</TabText></Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col sm={6} xs={12}>
        <TabText>Normovaný rozdiel akustických tlakov Dn;w[dB]</TabText>
      </Col>
      <Col sm={6} xs={12}>
        <TabText>44,99 (s voliteľnou zvukovoizolačnou súpravou)</TabText>
      </Col>
    </Row>
    <Row>
      <Col sm={6} xs={12}>
        <StyledRow>
          <TabText>Priemer jadrového otvoru [mm]</TabText>
        </StyledRow>
      </Col>
      <Col sm={6} xs={12}>
        <TabText>162</TabText>
      </Col>
    </Row>
    <StyledRow>
      <Comment>1) v párovej prevádzke  2) bez sieťového zdroja</Comment>
    </StyledRow>
  </div>
)