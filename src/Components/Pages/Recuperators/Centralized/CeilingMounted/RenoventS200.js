import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { Row, Col } from 'react-bootstrap';

const H1 = styled.h1`
  color: #004d99;
  margin-bottom: 2rem;
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
const H3 = styled.h3`
  margin: 3rem 0 1rem 0;
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

const Maintext = styled.p`
  text-align: justify;
  text-justify: inter-word;
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

const TabRow = styled(Row)`
  padding-top: 1.2rem;
`

const TabText = styled.p`
  @media (min-width: 320px) {
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`

const Comment = styled.span`
  font-size: 0.8rem;
  color: #004d99;
  margin: 0;
`

const TITLE = 'zdravy-domov | Rekuperácie'

export const RenoventS200 = () => (
  <div>
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
    <H1>Centrálne rekuperácie - podstropné</H1>
    <Maintext>Máte radi čerstvý vzduch, no musíte nonstop vetrať?<br/>Máte kúrenia vyše hlavy?<br/>O pohodlie Vášho domova sa postaráme!</Maintext>

    <H3>Renovent Sky 200</H3>
    <Maintext>
      Rekuperačné jednotky produktovej rady Renovent Sky sú určené na inštaláciu predovšetkým v horizontálnom smere na strop.
      Výrobcovi sa podarilo s Renovent Sky 200 uviesť na trh jednotku s prednosťami ako: kompaktné rozmery s výškou iba 20 cm, veľmi nízka
      hlučnosť a vysoký výkon až 200 m<sup>3</sup>/h vďaka širokým pripojovacím hrdlám DN160mm a nízkootáčkovým EC motorom.
      K Renovent Sky 200 je možné dodať praktický izolovaný kombinovaný rozdeľovací box, ktorý spĺňa i funkciu tlmiča hluku.
      Jednotky je tiež možné inštalovať vo vertikálnom smere na stenu. Jednotky SKY s konštantným prietokom vzduchu CONSTANT FLOW zabezpečujú
      rovnotlaké vetranie a spolu s protiprúdovým výmenníkom najvyššiu účinnosť rekuperácie tepla z odpadového vzduchu. Jednotky sú
      dodávané i vo verzii PLUS s rozšírenou elektronickou kartou s programovateľnými vstupmi. K dispozícii je logický vstup ON/OFF a napäťový
      vstup 0-10V, ktoré je možné využiť na ďalšie pripojenia, napríklad možnosť pripojenia senzorov CO<sub>2</sub> alebo zemného výmenníka.
      Produktová rada Renovent Sky štandardne obsahuje inteligentnú protimrazovú ochranu a obtokovú by-pass klapku.
    </Maintext>

    <H3>Info</H3>
    <Maintext>- výkon max. 200 m<sup>3</sup>/h pri 150 Pa</Maintext>
    <Maintext>- účinnosť až do 95%</Maintext>
    <Maintext>- 100% by-pass</Maintext>
    <Maintext>- programovateľný ovládač Air Control súčasťou dodávky</Maintext>
    <Maintext>- elektronická karta pre rozšírené pripojenia (verzia PLUS)</Maintext>
    <Maintext>- znížená hlučnosť</Maintext>
    <Maintext>- nízka vlastná spotreba energie</Maintext>
    <Maintext>- certifikovaný komponent pre pasívne domy</Maintext>
    
    <H3>Technické údaje</H3>
    <Row>
      <Col xs={4}></Col>
      <Col xs={4}><TabText><b>Renovent Sky 200</b></TabText></Col>
      <Col xs={4}><TabText><b>Renovent ESky 200 PLUS</b></TabText></Col>
    </Row>
    <TabRow>
      <Col xs={4}><TabText>Vzduchový výkon</TabText></Col>
      <Col xs={4}><TabText>Max. 200 m<sup>3</sup>/h</TabText></Col>
      <Col xs={4}><TabText>Max. 200 m<sup>3</sup>/h</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Typ výmenníka</TabText></Col>
      <Col xs={4}><TabText>Doskový protiprúdový</TabText></Col>
      <Col xs={4}><TabText>Doskový protiprúdový</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Účinnosť</TabText></Col>
      <Col xs={4}><TabText>95% (podľa PHI efektívna účinnosť 83-86% podľa konkrétneho typu)</TabText></Col>
      <Col xs={4}><TabText>95% (podľa PHI efektívna účinnosť 83-86% podľa konkrétneho typu)</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Ventilátory</TabText></Col>
      <Col xs={4}><TabText>EC s dozadu zahnutými lopatkami</TabText></Col>
      <Col xs={4}><TabText>EC s dozadu zahnutými lopatkami</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Regulácia ventilátorov</TabText></Col>
      <Col xs={4}><TabText>Vyvážená regulácia dodávky vzduchu zabezpečujúca požadované množstvo vzduchu nezávisle od vonkajších podmienok</TabText></Col>
      <Col xs={4}><TabText>Vyvážená regulácia dodávky vzduchu zabezpečujúca požadované množstvo vzduchu nezávisle od vonkajších podmienok</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Príkon (pri 70% vzduchového výkonu)</TabText></Col>
      <Col xs={4}><TabText>36W pri 125 m<sup>3</sup>/h (50 Pa)</TabText></Col>
      <Col xs={4}><TabText>36W pri 125 m<sup>3</sup>/h (50 Pa)</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Ochrana proti zamŕzaniu výmenníka</TabText></Col>
      <Col xs={4}><TabText>Automatická s elektrickým predohrevom</TabText></Col>
      <Col xs={4}><TabText>Automatická s elektrickým predohrevom</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Letný obtok (by-pass)</TabText></Col>
      <Col xs={4}><TabText>Automatický - 100% obtoková klapka</TabText></Col>
      <Col xs={4}><TabText>Automatický - 100% obtoková klapka</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Pripojovacie potrubie</TabText></Col>
      <Col xs={4}><TabText>&#8960; 160 mm</TabText></Col>
      <Col xs={4}><TabText>&#8960; 160 mm</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Rozmery V x Š x H</TabText></Col>
      <Col xs={4}><TabText>200 x 1000 x 660 mm</TabText></Col>
      <Col xs={4}><TabText>200 x 1000 x 660 mm</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Hmotnosť</TabText></Col>
      <Col xs={4}><TabText>24,5 kg</TabText></Col>
      <Col xs={4}><TabText>24,5 kg</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Pripojenie vlhkostného čidla</TabText></Col>
      <Col xs={4}><TabText>ÁNO</TabText></Col>
      <Col xs={4}><TabText>ÁNO</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Dohrev privádzaného vzduchu</TabText></Col>
      <Col xs={4}><TabText>&#8212;</TabText></Col>
      <Col xs={4}><TabText>ÁNO<sup><Comment>&nbsp;1)</Comment></sup></TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Programovateľné vstupy</TabText></Col>
      <Col xs={4}><TabText>&#8212;</TabText></Col>
      <Col xs={4}><TabText>ÁNO</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Ovládanie zemného kolektora</TabText></Col>
      <Col xs={4}><TabText>&#8212;</TabText></Col>
      <Col xs={4}><TabText>ÁNO<sup><Comment>&nbsp;1)</Comment></sup></TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Pripojenie čidla CO<sub>2</sub></TabText></Col>
      <Col xs={4}><TabText>&#8212;</TabText></Col>
      <Col xs={4}><TabText>ÁNO</TabText></Col>
    </TabRow>
    <TabRow>
      <Comment>
        1) Nie je možná spoločná kombinácia dohrevu vzduchu a regulácie zemného výmenníka z dôvodu jediného vstupu teplotného senzora
      </Comment>
    </TabRow>
  </div>
)