import React, { Component } from 'react';
import styled from 'styled-components';

import { scroller } from 'react-scroll'
import { Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ethermaLogoImg from '../../Assets/etherma_logo.png';

const H1 = styled.h1`
  margin-bottom: 3rem;
  color: #004d99;
  font-size: 4rem;
`

const H2 = styled.h2`
  margin: 3.5rem 0 1rem 0;
  color: #004d99;
  font-size: 3rem;
`

const H3 = styled.h3`
  margin: 3rem 0 1rem 0;
  color: #004d99;
  font-size: 2rem;
`

const H4 = styled.h4`
  margin: 1rem 0 0 0;
  font-size: 1.5rem;
`

const Maintext = styled.p`
  font-size: 1.5rem;
`

const StyledImage = styled(Image)`
  width: 250px;
`

const BlockBorder = styled.section`
  display: block;
  height: 2px;
  background-color: #004d99;
  content: " ";
  width: 25vw;
  margin: 75px auto;
`

const LinkNoStyle = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`

const HeatTypeButton = styled.section`
  margin: 1rem 0;
  min-height: 4rem;
  width: 100%;
  background-color: #e6f2ff;
  align-items: center;
  justify-content: center;
  display: flex;  
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #cde5ff;
  }
`;

const HeatTypeButtonContent = styled.p`
  color: #004d99;
  font-size: 1rem;
  font-weight: 450;
  text-align: center;
  margin: 0 0.5rem;
`;

export class FloorHeaters extends Component {
  render() {
    return(
      <div>
        <H1 id='floor-top'>Podlahové vykurovanie</H1>
        <StyledImage src={ethermaLogoImg}/>
        <BlockBorder />
        <Row>
          <Col md={4}>
            <LinkNoStyle
              to="#"
              onClick={() => scroller.scrollTo('poter', {
                smooth: true,
                offset: -70,
                duration: 500,
              })}>
              <HeatTypeButton>
                <HeatTypeButtonContent>Všetky typy podláh (do poteru)</HeatTypeButtonContent>
              </HeatTypeButton>
            </LinkNoStyle>
          </Col>
          <Col md={4}>
            <LinkNoStyle
              to="#"
              onClick={() => scroller.scrollTo('suche', {
                smooth: true,
                offset: -70,
                duration: 500,
              })}>
              <HeatTypeButton>
                <HeatTypeButtonContent>Laminát, korok a drevo (suché zabudovanie)</HeatTypeButtonContent>
              </HeatTypeButton>
            </LinkNoStyle>
          </Col>
          <Col md={4}>
          <LinkNoStyle
              to="#"
              onClick={() => scroller.scrollTo('univerzal', {
                smooth: true,
                offset: -70,
                duration: 500,
              })}>
              <HeatTypeButton>
                <HeatTypeButtonContent>Univerzálne</HeatTypeButtonContent>
              </HeatTypeButton>
            </LinkNoStyle>
          </Col>
        </Row>
        
        <BlockBorder />
        
        <H2 id='poter'>Všetky typy podláh (do poteru)</H2>
        <H3>Prednosti</H3>
        <Maintext>+ ideálny vykurovací systém pre nízkoenergetické a pasívne domy</Maintext>
        <Maintext>+ výkon od 40 do 240 W/m<sup>2</sup></Maintext>
        <Maintext>+ flexibilný harmonikový uchytávací systém uľahčuje pokládku</Maintext>
        <Maintext>+ jeden pripájací kábel</Maintext>
        <Maintext>+ takmer nemerateľné magnetické pole &lt; 25nT</Maintext>
        <Maintext>+ výber z rôznych výkonov umožňuje jednoduché plánovanie a pokládku</Maintext>

        <H3>Info</H3>
        <Maintext><b>ETHERMA RS podlahové vykurovanie do betónového poteru</b> môže byť použité na vykurovanie suchých, vlhkých a dokonca aj mokrých priestorov. Môže byť použité na ohrievanie podlahy, ako doplnkové, alebo aj ako plnohodnotné akumulačné kúrenie. Tento druh podlahového kúrenia je ideálnym vykurovacím systémom najmä pre nízkoenergetické a pasívne domy. Je možné ho použiť takmer nezávisle od zvoleného typu podlahových krytín.</Maintext>
        <H4><b>Magnetické pole</b></H4>
        <Maintext>Každý elektrický vodič ktorým prechádza elektrický prúd vytvára magnetické pole. Podlahové kúrenia od ETHERMY sú dvojpólové vodiče ktorých magnetické polia sa navzájom rušia protismerným tokom elektrického prúdu. WHO odporúča neprekročiť hraničnú hodnotu  100µT (10-4 Tesla). Naše podlahové kúrenia majú hodnoty vytvoreného magnetického poľa od 5 do 25nT (10-9 Tesla). To je  4000 krát menej ako je povolená hraničná hodnota WHO-a je to takmer nemerateľné! Takto malé <b>magnetické pole zodpovedá definícii biologicky priaznivej „elektrosmog-free“ elektroinštalácii</b>.</Maintext>
        <H4><b>Dvojpólová vykurovacia rohož s ochranným opletením</b></H4>
        <Maintext>Podlahové kúrenia ETHERMA Typ RS môžu byť použité v závislosti od Vášho tarifu na elektrinu, ako akumulačné kúrenie, čiastočne akumulačné kúrenie ale aj ako priamotop (v závislosti od hĺbky zabudovania do poterového betónu). Špeciálny harmonikový uchytávací systém rieši jednoduchú, pevnú a presnú pokládku vykurovacieho elementu. Ochranné vrstvy umožňujú pokládku aj v extrémne vlhkých miestnostiach. Vysokohodnotný dipólový systém je ukončený len jedným pripájacím káblom dĺžky 3 m.</Maintext>
        <Maintext>Po dohode môže byť dĺžka pripájacieho kábla upravená podľa potreby zákazníka.</Maintext>

        <H3>Pomoc pri výbere / hlavné oblasti použitia</H3>
        <H4><b>100-120W/m<sup>2</sup></b></H4>
        <Maintext>Do obývacích miestností s menšou potrebou energií (dobre izolované priestory) – ako priamotopné kúrenie</Maintext>
        <H4><b>150-200W/m<sup>2</sup></b></H4>
        <Maintext>Do obývacích miestností – ako priamotopné, čiastočne akumulačné, alebo ako akumulačné kúrenie</Maintext>
        <H4><b>240W/m<sup>2</sup></b></H4>
        <Maintext>Ako doplnkové kúrenie pri nedostatočnosti podlahového akumulačného kúrenia s položením v hornej vrstve poterového betónu</Maintext>

        <BlockBorder />
        
        <H2 id='suche'>Laminát, korok a drevo (suché zabudovanie)</H2>
        <H3>Prednosti</H3>
        <Maintext>+ ideálna distribúcia tepla</Maintext>
        <Maintext>+ pod plávajúce podlahy</Maintext>
        <Maintext>+ jednoduchá, rýchla a suchá montáž</Maintext>
        <Maintext>+ hrúbka iba 1,3 mm </Maintext>
        <Maintext>+ jeden pripájací kábel</Maintext>
        <Maintext>+ špeciálna povrchová fólia</Maintext>
        <Maintext>+ takmer nemerateľné magnetické pole &lt; 25nT</Maintext>

        <H3>Info</H3>
        <Maintext><b>LAMINOTHERM</b> od ETHERMY je ľahko použiteľný ako v novostavbách tak pri rekonštrukciách podláh a kúrenia pod <b>laminátové, korkové alebo drevené podlahy</b>, tiež ako plnohodnotné kúrenie do bežne zateplených domov a bytov.<br/>Toto riešenie podlahového kúrenia zabezpečí pomerne <b>rýchle vykúrenie</b>, je <b>bezúdržbové</b> a jeho uvedenie do prevádzky je veľmi jednoduché. Zosilnená hliníková tkanina garantuje <b>optimálnu distribúciu tepla</b> a zabraňuje tvorbe horúcich miest (Hot Spots) vznikajúcich v dôsledku prekrytia časti kúrenia nábytkom. Jeho veľkou výhodou je <b>suché položenie (bez potreby lepidla)</b> a jeho minimálna hrúbka (1,3 mm) vďaka ktorej je možné ho ľahko zabudovať aj počas rekonštrukcií.</Maintext>
        <H4><b>Magnetické pole</b></H4>
        <Maintext>Každý elektrický vodič ktorým prechádza elektrický prúd vytvára magnetické pole. Podlahové kúrenia od ETHERMY sú dvojpólové vodiče ktorých magnetické polia sa navzájom rušia protismerným tokom elektrického prúdu. WHO odporúča neprekročiť hraničnú hodnotu  100µT (10-4 Tesla). Naše podlahové kúrenia majú hodnoty vytvoreného magnetického poľa od 5 do 25nT (10-9 Tesla). To je  4000 krát menej ako je povolená hraničná hodnota WHO-a je to takmer nemerateľné! Takto malé <b>magnetické pole zodpovedá definícii biologicky priaznivej „elektrosmog-free“ elektroinštalácii</b>.</Maintext>
        
        <H3>Inštalácia</H3>
        <Maintext>Laminotherm sa kladie priamo (voľne, alebo nalepený) na protikročajovú izoláciu.</Maintext>
        <H4><b>Maximálna hrúbka podlahových materiálov pri použití LAMINOTHERM</b></H4>
        <Maintext>Korok 10mm<br/>Parkety 15mm<br/>Laminátová podlaha 9mm</Maintext>

        <BlockBorder />
        
        <H2 id='univerzal'>Univerzálne</H2>
        <H3>Prednosti</H3>
        <Maintext>+ hrúbka iba 2,7 mm (vďaka teflónovej ochrannej vrstve znížená hrúbka izolantov pri vyššej celkovej odolnosti!)</Maintext>
        <Maintext>+ samolepiaca rohož (lepí sa zo strany kábla vďaka čomu po položení rohož chráni vykurovací kábel)</Maintext>
        <Maintext>+ jeden pripájací kábel</Maintext>
        <Maintext>+ takmer nemerateľné magnetické pole &lt; 25nT</Maintext>
        <Maintext>+ vykurovacie elementy rovnomerné spoľahlivo uchytené (vykurovací element je k rohoži prišitý, nie lepený ako u konkurencie, takže sa po položení nekrúti)</Maintext>
        <Maintext>+ 3 rôzne šírky: 30, 50, 100 cm</Maintext>

        <H3>Info</H3>
        <Maintext>Okrem ohrievania podlahy a vykurovania miestností je model ETHERMA DS <b>vhodný aj na ohrev studených stien</b> – najmä pri potrebe eliminovania vplyvu tepelných mostov. So svojou len 2,7mm hrúbkou vyžaduje ETHERMA DS len minimálnu hrúbku materiálu na jej zabudovanie. Rohož je samolepiaca a spolu s dvojpólovou technológiou garantuje jednoduché položenie a zapojenie. Kvalitnou technológiou šitia je dosiahnutá 100% spoľahlivosť, jednoduchosť zabudovania ako aj vysoká stabilita vykurovacej rohože počas zabudovávania.<br/><b>Po dohode vieme vyrobiť vykurovacie rohože presne podľa Vašej potreby – veľkosť, výkon, napätie, tvar.</b></Maintext>
        <H4><b>Magnetické pole</b></H4>
        <Maintext>Každý elektrický vodič ktorým prechádza elektrický prúd vytvára magnetické pole. Podlahové kúrenia od ETHERMY sú dvojpólové vodiče ktorých magnetické polia sa navzájom rušia protismerným tokom elektrického prúdu. WHO odporúča neprekročiť hraničnú hodnotu  100µT (10-4 Tesla). Naše podlahové kúrenia majú hodnoty vytvoreného magnetického poľa od 5 do 25nT (10-9 Tesla). To je  4000 krát menej ako je povolená hraničná hodnota WHO-a je to takmer nemerateľné! Takto malé <b>magnetické pole zodpovedá definícii biologicky priaznivej „elektrosmog-free“ elektroinštalácii</b>.</Maintext>
        
        <H3>Pomoc pri výbere / hlavné oblasti použitia</H3>
        <H4><b>130W/m<sup>2</sup></b></H4>
        <Maintext>Temperovanie podláh, alebo ako hlavné kúrenie do nízkoenergetických obytných domov</Maintext>
        <H4><b>160W/m<sup>2</sup></b></H4>
        <Maintext>Plnohodnotné kúrenie do štandardne izolovaných budov, predovšetkým do kúpeľní, kuchýň, predsiení či zimných záhrad, ale aj do všetkých miestností obytných priestorov</Maintext>
        <H4><b>200W/m<sup>2</sup></b></H4>
        <Maintext>Vykurovanie zle zateplených miestností, alebo tiež do miestností kde je požiadavka na rýchle vykúrenie, ako napríklad obslužné miestnosti pri saunách či wellness</Maintext>

        <H3>Inštalácia</H3>
        <Maintext>Vykurovacie rohože <b>ETHERMA typ DS</b> sú vhodné pod kachličky, laminátové podlahy, parkety či dokonca pod koberec, ale bez ohľadu na typ podlahy musia byť uložené do vrstvy lepidla. Po vyschnutí lepidla je vhodné pri použití iných typov podláh ako keramickej dlažby zaliať ešte tenkou vrstvou nivelizačnej hmoty a môžete položiť Vami zvolený typ podlahy.</Maintext>
      </div>
    )
  }
}