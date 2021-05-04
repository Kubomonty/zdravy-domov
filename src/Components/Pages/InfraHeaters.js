import React from 'react'
import styled from 'styled-components';

import { Row, Col, Image } from 'react-bootstrap';

import nanoheatLogoImg from '../../Assets/nano_heat_logo.svg';

const H1 = styled.h1`
  color: #004d99;
  font-size: 4rem;
  margin-bottom: 2rem;
`
const H3 = styled.h3`
  margin: 3rem 0 1rem 0;
  color: #004d99;
  font-size: 2rem;
`

const Maintext = styled.p`
  font-size: 1.5rem;
`

const TabText = styled.p`
  font-size: 1.2rem;
`

const StyledImage = styled(Image)`
  width: 300px;
`

export const InfraHeaters = () => (
  <div>
    <H1>Infravykurovanie</H1>
    <StyledImage src={nanoheatLogoImg}/>
    <H3>Prednosti</H3>
    <Maintext>+ niekoľkonásobná úspora energií (vďaka infra-technológii a samoregulačným vlastnostiam)</Maintext>
    <Maintext>+ bezúdržbová a bezporuchová prevádzka</Maintext>
    <Maintext>+ životnosť až 80 000 vykurovacích hodín</Maintext>
    <Maintext>+ nemecká TUV certifikácia</Maintext>
    <Maintext>+ minimálne magnetické pole</Maintext>
    <Maintext>+ samoregulačné vlastnosti</Maintext>
    <Maintext>+ jednoduchá, rýchla a maximálne bezpečná montáž priamo na reflexnú izoláciu pod poter prilepením tepelne odolnou páskou</Maintext>
    <Maintext>+ rovné, nekrútiace sa a presné položenie</Maintext>
    <H3>Info</H3>
    <Maintext><b>Samoregulačná vykurovacia infrarohož NANO-HEAT</b> je zložená z dvoch vodičov, ktoré sú prepojené vykurovacími karbónovými infratyčami. Karbónové infratyče produkujú dnes vyhľadávané sálavé teplo, čím zabezpečia maximálnu tepelnú pohodu, ale zároveň šetria náklady na energie. Teplo v prostredí vykurovanom infratechnológiou je vnímané o 2 - 3 °C teplejšie, než naozaj je. Vďaka tejto skutočnosti vieme ušetriť cca 18 % nákladov na energie. Sálavé teplo produkované infratyčami ďalej urýchli vysušenie stien. Suché steny majú nižšiu tepelnú vodivosť, prepustia menej tepla, čím prichádza k ďalšej úspore. <b>Navyše sa na suchých stenách netvoria plesne!</b></Maintext>
    <Maintext>V karbónových tyčiach je zmes karbónu a ďalších 7 prvkov. Vďaka tejto vykurovacej zmesi (japonský patent) má rohož NANO-HEAT samoregulačné vlastnosti. Vďaka týmto vlastnostiam a produkcii sálavého tepla dosiahnete v porovnaní s konvekčným kúrením úsporu nákladov 30 - 35 %. Nominálny výkon tejto NANO-HEAT rohože je 130 Watt na bežný meter. Postupným ohrievaním klesá výkon rohože až na cca 60 Watt. Vďaka efektu, pri ktorom výkon s pribúdajúcou teplotou prostredia klesá, neprichádza k zbytočnému prekúreniu. Táto skutočnosť vie priniesť ďalšiu úsporu 10 - 15 % oproti iným infra-technológiám. Na meniacu sa teplotu prostredia reaguje každá infratyč samostatne. Vďaka tomu sa minimalizuje pravdepodobnosť vzniku prehriatych miest z dôvodu zmeny umiestnenia nábytku!</Maintext>
    <H3>Technické údaje</H3>
    <Row>
      <Col sm={6} xs={12}><TabText>Napätie</TabText></Col>
      <Col sm={6} xs={12}><TabText>230V</TabText></Col>
    </Row>
    <Row>
      <Col sm={6} xs={12}><TabText>Výkon</TabText></Col>
      <Col sm={6} xs={12}><TabText>130 W/bm</TabText></Col>
    </Row>
    <Row>
      <Col sm={6} xs={12}><TabText>Teplotná odolnosť</TabText></Col>
      <Col sm={6} xs={12}><TabText>do 90 °C</TabText></Col>
    </Row>
    <Row>
      <Col sm={6} xs={12}><TabText>Max. pracovná teplota</TabText></Col>
      <Col sm={6} xs={12}><TabText>60 °C</TabText></Col>
    </Row>
    <Row>
      <Col sm={6} xs={12}><TabText>Izolácia</TabText></Col>
      <Col sm={6} xs={12}><TabText>Polypropylén</TabText></Col>
    </Row>
    <Row>
      <Col sm={6} xs={12}><TabText>Trieda ochrany</TabText></Col>
      <Col sm={6} xs={12}><TabText>IP68</TabText></Col>
    </Row>
    <Row>
      <Col sm={6} xs={12}><TabText>Ochranné opratrenia</TabText></Col>
      <Col sm={6} xs={12}><TabText>FI - istič 30 mA</TabText></Col>
    </Row>
    <Row>
      <Col sm={6} xs={12}><TabText>Pripojenie</TabText></Col>
      <Col sm={6} xs={12}><TabText>bez pripájacieho kábla</TabText></Col>
    </Row>
    <Row>
      <Col sm={6} xs={12}><TabText>Max. dĺžka rohože pri 16 A istení</TabText></Col>
      <Col sm={6} xs={12}><TabText>23 bm</TabText></Col>
    </Row>
  </div>
)