import React, { Component } from 'react';
import styled from 'styled-components';

import { scroller } from 'react-scroll'
import { Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import pranaLogoImg from '../../Assets/prana_logo_ret.png';
import smartfanLogoImg from '../../Assets/smartfan_logo.png';
import smartfanS from '../../Assets/smartfan_s.jpg';
import Lightbox from 'react-image-lightbox';

const H1 = styled.h1`
  color: #004d99;
  font-size: 4rem;
`

const H2 = styled.h2`
  margin-bottom: 1rem;
  color: #004d99;
  font-size: 3rem;
`

const H3 = styled.h3`
  margin: 3rem 0 1rem 0;
  color: #004d99;
  font-size: 2rem;
`

const H4 = styled.h4`
  margin: 1.2rem 0 0.8rem 0;
  font-size: 1.5rem;
`

const TabText = styled.p`
  font-size: 1.2rem;
`

const Maintext = styled.p`
  font-size: 1.5rem;
`

const Comment = styled.p`
  font-size: 0.8rem;
  color: #004d99;
`
const StyledImage = styled(Image)`
  cursor: pointer;
`

const BlockBorder = styled.section`
  display: block;
  height: 2px;
  background-color: #004d99;
  content: " ";
  width: 25vw;
  margin: 75px auto;
`

const StyledRow = styled(Row)`
  padding: 0 15px;
`

const RecuperatorCompany = styled.section`
  margin: 0;
  border-style: solid;
  border-color: #004d99;
  border-width: 1px;
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
`;

const RecuperatorCompanyLogo = styled.img`
  width: 100%;
  height: auto;
  transform: scale(0.85);
  transition: transform 0.3s;
  &:hover {
    transform: scale(0.8);
    opacity: 1;
  }
`;

export class Recuperators extends Component {
  onOpenRecImg = () => {
    this.props.onOpenRecImg()
  }

  onCloseRecImg = () => {
    this.props.onCloseRecImg()
  }
  
  clickClose = () => {
    console.log('close')
  }

  render() {
    return(
      <div>
        <H1>Rekuperácie</H1>
        <Maintext>Máte radi čerstvý vzduch, no musíte nonstop vetrať?<br/>Máte kúrenia vyše hlavy?<br/>O pohodlie Vášho domova sa postaráme!</Maintext>
        <BlockBorder />
        <Row>
          <Col>
            <Link
              to="#"
              onClick={() => scroller.scrollTo('prana', {
                smooth: true,
                offset: -70,
                duration: 500,
            })}>
              <RecuperatorCompany>
                <RecuperatorCompanyLogo src={pranaLogoImg} />
              </RecuperatorCompany>
            </Link>
          </Col>
          <Col>
            <Link
              to="#"
              onClick={() => scroller.scrollTo('smartfan', {
                smooth: true,
                offset: -70,
                duration: 500,
            })}>
              <RecuperatorCompany>
                <RecuperatorCompanyLogo src={smartfanLogoImg} />
              </RecuperatorCompany>
            </Link>
          </Col>
        </Row>

        <BlockBorder />

        <H2 id='prana'>Prana recuperators</H2>
        <Maintext>Výborný pomer ceny a kvality na trhu</Maintext>

        <H3>Prednosti</H3>
        <Maintext>+ stály prísun čerstvého vzduchu</Maintext>
        <Maintext>+ regulácia vlhkosti</Maintext>
        <Maintext>+ zdravá mikroklíma v miestnosti</Maintext>
        <Maintext>+ zabraňuje vzniku plesní a zahmleniu okien</Maintext>
        <Maintext>+ Spotreba energie od 4 Wh do 310 Wh (v závislosti na vybranom modeli). Vetrací systém medeného tepelného výmenníka zabezpečuje trvalo vysokú účinnosť až 96% (trieda úspory energie A +), čo zaručuje vysokú úroveň úspory energie</Maintext>
        <Maintext>+ MEDENÝ VÝMENNÍK TEPLA - meď sa vyznačuje vynikajúcim prenosom tepla a pôsobí ako prírodné antiseptikum (má maximálne blízke vlastnosti striebru), vzniká tu prostredie zabezpečujúce dezinfekciu vzduchu (vírusy a baktérie strácajú životaschopnosť), odsávaný teplý vzduch prechádza medeným tepelným výmenníkom a prenáša teplo na čerstvý vzduch prúdiaci z vonku, pričom tu nedochádza k premiešaniu prúdov</Maintext>
        <Maintext>+ KOMPAKTNÉ ROZMERY - priemer púzdra pracovného modulu - 150, 200, 250, 340 mm, dĺžka je voliteľná v závislosti na hrúbke obvodovej steny</Maintext>
        <Maintext>+ JEDNODUCHÉ OVLÁDANIE - všetky modely majú diaľkové ovládanie, stmievač (reostat) a ovládanie pomocou mobilnej aplikácie pre Android a iOS</Maintext>
        <Maintext>+ životnosť až 15 rokov</Maintext>

        <H3>Kategórie</H3>
        <Maintext>Rekuperátory Prana ponúkame v troch triedach: Basic (Standard), Premium a Premium plus</Maintext>
        <H4>Basic (Standard)</H4>
        <Maintext>Kategória štandard ponúka nasledovnú konfiguráciu<br/>
          - Samostatne riadené motory<br/>
          - Dátum a čas<br/>
          - Časovač vypnutia<br/>
          - Podpora Bluetooth<br/>
          - Funkcia "Mini-vykurovanie"<br/>
          - Zimná funkcia
        </Maintext>
        <H4>Premium</H4>
        <Maintext>
          Kategória Premium obsahuje okrem všetkého čo kategória standard aj<br/>
          - Senzor vlhkosti vzduchu<br/>
          - Stanovenie stavu filtra<br/>
          - Snímač atmosférickeho tlaku<br/>
          - Režim AUTO, AUTO PLUS<br/>
          - Teplota odvádzaného vzduchu pred rekuperáciou, °C (senzor 1)<br/>
          - Teplota odvádzaného vzduchu pred rekuperáciou, °C (senzor 2)
        </Maintext>
        <H4>Premium plus</H4>
        <Maintext>
          Kategória Premium plus obsahuje okrem všetkého čo kategória Premium aj<br/>
          - Čidlo oxidu uhličitého<br/>
          - Ukazovateľ úrovne účinnosti<br/>
          - Senzor kvality vzduchu, VOC<br/>
          - Teplota odvádzaného vzduchu pred rekuperáciou, °C (senzor 3)<br/>
          - Teplota odvádzaného vzduchu pred rekuperáciou, °C (senzor 4)
        </Maintext>

        <H3>Modely</H3>
        <H4>Prana 150</H4>
        <Maintext>Rekuperačná jednotka pre jednu miestnosť do 60 m2</Maintext>
        <Maintext>
          Účinnosť do 95%<br/>
          Priemer 160 mm, montážny otvor 162 mm<br/>
          Prítok – 105 m3/h, odtok – 97 m3/h<br/>
          Spotreba elektriny 4 – 68 W/h, mini-ohrev 55 W/h<br/>
          Hmotnosť 4,4 kg<br/>
          Napájanie 220V<br/>
        </Maintext>
        <Maintext>
          Prítok a odtok súčasne<br/>
          Ovládanie pomocou diaľkového ovládača alebo mobilnej aplikácie<br/>
          Znižuje vlhkosť a hladinu CO2<br/>
          Horizontálna inštalácia<br/>
          Ideálne pre rekonštrukcie ale aj novostavby<br/>
          Tichá prevádzka – režim „Noc“<br/>
          6 stupňov nastavenia intenzity podsvietenia displeja<br/>
          Režim „Noc“, „Vetranie“ a ďalších 8 stupňov umožňujú plynule a pohodlne nastavenie<br/>
          Spánkový časovač – nastavenie vypnutia v intervale od 10 minút do 9 hodín<br/>
          Vstavaný mini-ohrev pre zvýšenie teploty privádzaného vzduchu<br/>
          Zimný režim pre pohodlne použitie pri teplotách
        </Maintext>
        <Maintext>Minimálna dĺžka 455 mm</Maintext>
        <H4>Prana 200G</H4>
        <Maintext>Rekuperačná jednotka pre jednu miestnosť do 60 m2</Maintext>
        <Maintext>
          Účinnosť do 93%<br/>
          Priemer 210 mm, montážny otvor 212 mm<br/>
          Prítok – 135 m3/h, odtok – 125 m3/h<br/>
          Spotreba elektriny 7 – 32 W/h, mini-ohrev 55 W/h<br/>
          Hmotnosť 5,8 kg<br/>
          Napájanie 220V
        </Maintext>
        <Maintext>Minimálna dĺžka 440 mm</Maintext>
        <H4>Prana 200C</H4>
        <Maintext>Rekuperačná jednotka pre jednu miestnosť do 120 m2</Maintext>
        <Maintext>
          Účinnosť do 93%<br/>
          Priemer 210 mm, montážny otvor 212 mm<br/>
          Prítok – 235 m3/h, odtok – 220 m3/h<br/>
          Spotreba elektriny 12 – 54 W/h, mini-ohrev 55 W/h<br/>
          Hmotnosť 6,0 kg<br/>
          Napájanie 220V
        </Maintext>
        <Maintext>Minimálna dĺžka 500 mm</Maintext>

        <BlockBorder />

        <H2 id='smartfan'>SmartFan® S</H2>
        <Maintext>
          Najmenší, najtichší a najúčinnejší decentralizovaný vetrací systém obytných priestorov vo svojej triede.
        </Maintext>
        <StyledImage src={smartfanS} fluid onClick={this.onOpenRecImg} />
        {this.props.showRecImg && (
          <Lightbox mainSrc={smartfanS} onCloseRequest={this.onCloseRecImg} />
        )}
        <H3>Technické údaje</H3>
        <Row>
          <Col sm={6} xs={12}><Maintext>Miera tepelnej účinnosti</Maintext></Col>
          <Col sm={6} xs={12}><Maintext>až 91%</Maintext></Col>
        </Row>
        <Row>
          <Col sm={6} xs={12}><Maintext>Enargetická trieda</Maintext></Col>
          <Col sm={6} xs={12}><Maintext>A+</Maintext></Col>
        </Row>
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
  }
}