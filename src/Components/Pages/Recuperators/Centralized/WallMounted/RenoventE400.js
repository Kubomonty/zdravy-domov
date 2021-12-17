import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { Row, Col, Image } from 'react-bootstrap';

import brinkLogoImg from '../../../../../Assets/brink_logo.png';

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

const StyledImage = styled(Image)`
  width: 25vw;
  margin-top: 1.5rem;
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

export const RenoventE400 = () => (
  <div>
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
    <H1>Centrálne rekuperácie - nástenné</H1>
    
    <StyledImage src={brinkLogoImg}/>

    <H3>Renovent Excellent 400</H3>
    <Maintext>
      Rekuperačné jednotky Renovent s konštantným prietokom vzduchu CONSTANT FLOW zabezpečujú rovnotlaké vetranie a spolu s protiprúdovým výmenníkom
      najvyššiu účinnosť rekuperácie tepla z odpadového vzduchu. Produktová rada Renovent Excellent je k dispozícii vo verzii pravostrannej i ľavostrannej
      so 4 hornými pripojeniami alebo s 2 hornými a 2 dolnými pripojeniami. Okrem štandardnej verzie, Renovent Excellent sa vyrába vo verzii PLUS.
      Modely PLUS sú vybavené rozšírenou elektronickou kartou s programovateľnými vstupmi. K dispozícii je logický vstup ON/OFF a napäťový vstup 0-10V,
      ktoré je možné využiť na ďalšie pripojenia, napríklad možnosť pripojenia senzorov CO<sub>2</sub> alebo zemného výmenníka. V štandarnej výbave
      Renovent Excellent je inteligentná protimrazová ochrana a obtoková by-pass klapka.
    </Maintext>

    <H3>Info</H3>
    <Maintext>- výkon max. 400 m<sup>3</sup>/h pri 150 Pa</Maintext>
    <Maintext>- účinnosť až do 95%</Maintext>
    <Maintext>- inteligentná protimrazová ochrana s predohrevom</Maintext>
    <Maintext>- 100% by-pass</Maintext>
    <Maintext>- EC motory s vyváženou reguláciou</Maintext>
    <Maintext>- programovateľná regulácia</Maintext>
    <Maintext>- znížená hlučnosť</Maintext>
    <Maintext>- nízka vlastná spotreba energie</Maintext>
    <Maintext>- certifikovaný komponent pre pasívne domy</Maintext>
    <Maintext>- rozšírená elektronická doska (verzia PLUS)</Maintext>
    
    <H3>Technické údaje</H3>
    <Row>
      <Col xs={4}></Col>
      <Col xs={4}><TabText><b>Renovent Excellent 400</b></TabText></Col>
      <Col xs={4}><TabText><b>Renovent Excellent 400 PLUS</b></TabText></Col>
    </Row>
    <TabRow>
      <Col xs={4}><TabText>Vzduchový výkon</TabText></Col>
      <Col xs={4}><TabText>Max. 400 m<sup>3</sup>/h</TabText></Col>
      <Col xs={4}><TabText>Max. 400 m<sup>3</sup>/h</TabText></Col>
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
      <Col xs={4}><TabText>Nízkootáčkové EC s dozadu zahnutými lopatkami (úspornejšie a tichšie)</TabText></Col>
      <Col xs={4}><TabText>Nízkootáčkové EC s dozadu zahnutými lopatkami (úspornejšie a tichšie)</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Regulácia ventilátorov</TabText></Col>
      <Col xs={4}><TabText>Vyvážená regulácia dodávky vzduchu zabezpečujúca požadované množstvo vzduchu nezávisle od vonkajších podmienok</TabText></Col>
      <Col xs={4}><TabText>Vyvážená regulácia dodávky vzduchu zabezpečujúca požadované množstvo vzduchu nezávisle od vonkajších podmienok</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Príkon (pri 70% vzduchového výkonu)</TabText></Col>
      <Col xs={4}><TabText>64W pri 280 m<sup>3</sup>/h (50 Pa)</TabText></Col>
      <Col xs={4}><TabText>64W pri 280 m<sup>3</sup>/h (50 Pa)</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Spotreba podľa PHI</TabText></Col>
      <Col xs={4}><TabText>0,29 Wm<sup>3</sup></TabText></Col>
      <Col xs={4}><TabText>0,29 Wm<sup>3</sup></TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Ochrana proti zamŕzaniu výmenníka</TabText></Col>
      <Col xs={4}><TabText>Automatická s elektrickým predohrevom, predohrev 1000W je súčasťou dodávky</TabText></Col>
      <Col xs={4}><TabText>Automatická s elektrickým predohrevom, predohrev 1000W je súčasťou dodávky</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Letný obtok (by-pass)</TabText></Col>
      <Col xs={4}><TabText>Automatický - 100% obtoková klapka</TabText></Col>
      <Col xs={4}><TabText>Automatický - 100% obtoková klapka</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Pripojovacie potrubie</TabText></Col>
      <Col xs={4}><TabText>&#8960; 180 mm</TabText></Col>
      <Col xs={4}><TabText>&#8960; 180 mm</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Rozmery V x Š x H</TabText></Col>
      <Col xs={4}><TabText>765 x 675 x 564 mm</TabText></Col>
      <Col xs={4}><TabText>765 x 675 x 564 mm</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Hmotnosť</TabText></Col>
      <Col xs={4}><TabText>38 kg</TabText></Col>
      <Col xs={4}><TabText>38 kg</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Pripojenie vlhkostného čidla</TabText></Col>
      <Col xs={4}><TabText>ÁNO</TabText></Col>
      <Col xs={4}><TabText>ÁNO</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Dohrev privádzaného vzduchu</TabText></Col>
      <Col xs={4}><TabText>&#8212;</TabText></Col>
      <Col xs={4}><TabText>ÁNO (možnosť prídavného predohrevu/dohrevu)<sup><Comment>&nbsp;1)</Comment></sup></TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Programovateľné vstupy</TabText></Col>
      <Col xs={4}><TabText>&#8212;</TabText></Col>
      <Col xs={4}><TabText>ÁNO</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Ovládanie zemného kolektora</TabText></Col>
      <Col xs={4}><TabText>&#8212;</TabText></Col>
      <Col xs={4}><TabText>ÁNO</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Pripojenie čidla CO<sub>2</sub></TabText></Col>
      <Col xs={4}><TabText>&#8212;</TabText></Col>
      <Col xs={4}><TabText>ÁNO</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Entalpický výmenník</TabText></Col>
      <Col xs={4}><TabText>ÁNO (možnosť doplnenia)<sup><Comment>&nbsp;2)</Comment></sup></TabText></Col>
      <Col xs={4}><TabText>ÁNO (možnosť doplnenia)<sup><Comment>&nbsp;2)</Comment></sup></TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={4}><TabText>Certifikáty</TabText></Col>
      <Col xs={4}><TabText>DIBt, TNO - EN308, EUROVENT, PHI</TabText></Col>
      <Col xs={4}><TabText>DIBt, TNO - EN308, EUROVENT, PHI</TabText></Col>
    </TabRow>
    <TabRow>
      <Comment>
        1) Vstavaný predohrev v štandardnej výbave, možnosť prídavného predohrevu alebo dohrevu<br/>
        2) Možnosť dokúpenia a výmeny za entalpický výmenník
      </Comment>
    </TabRow>
  </div>
)