import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { scroller } from 'react-scroll'
import { Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import pranaLogoImg from '../../../../Assets/prana_logo_ret.png';
import smartfanLogoImg from '../../../../Assets/smartfan_logo.png';
import smartfanS from '../../../../Assets/smartfan_s.jpg';
import Lightbox from 'react-image-lightbox';

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
  margin-bottom: 1rem;
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

const H4 = styled.h4`
  margin: 1.2rem 0 0.8rem 0;
  
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

const Comment = styled.span`
  font-size: 0.8rem;
  color: #004d99;
  margin: 0;
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

const TITLE = 'zdravy-domov | Rekuper??cie'

export class DecentralizedRecuperators extends Component {
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
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <H1>Decentralizovan?? Rekuper??cie</H1>
        <Maintext>M??te radi ??erstv?? vzduch, no mus??te nonstop vetra???<br/>M??te k??renia vy??e hlavy?<br/>O pohodlie V????ho domova sa postar??me!</Maintext>
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
        <Maintext>V??born?? pomer ceny a kvality na trhu</Maintext>

        <H3>Prednosti</H3>
        <Maintext>+ st??ly pr??sun ??erstv??ho vzduchu</Maintext>
        <Maintext>+ regul??cia vlhkosti</Maintext>
        <Maintext>+ zdrav?? mikrokl??ma v miestnosti</Maintext>
        <Maintext>+ zabra??uje vzniku plesn?? a zahmleniu okien</Maintext>
        <Maintext>+ Spotreba energie od 4 Wh do 310 Wh (v z??vislosti na vybranom modeli). Vetrac?? syst??m meden??ho tepeln??ho v??menn??ka zabezpe??uje trvalo vysok?? ????innos?? a?? 96% (trieda ??spory energie A +), ??o zaru??uje vysok?? ??rove?? ??spory energie</Maintext>
        <Maintext>+ MEDEN?? V??MENN??K TEPLA - me?? sa vyzna??uje vynikaj??cim prenosom tepla a p??sob?? ako pr??rodn?? antiseptikum (m?? maxim??lne bl??zke vlastnosti striebru), vznik?? tu prostredie zabezpe??uj??ce dezinfekciu vzduchu (v??rusy a bakt??rie str??caj?? ??ivotaschopnos??), ods??van?? tepl?? vzduch prech??dza meden??m tepeln??m v??menn??kom a pren????a teplo na ??erstv?? vzduch pr??diaci z vonku, pri??om tu nedoch??dza k premie??aniu pr??dov</Maintext>
        <Maintext>+ KOMPAKTN?? ROZMERY - priemer p??zdra pracovn??ho modulu - 150, 200, 250, 340 mm, d????ka je volite??n?? v z??vislosti na hr??bke obvodovej steny</Maintext>
        <Maintext>+ JEDNODUCH?? OVL??DANIE - v??etky modely maj?? dia??kov?? ovl??danie, stmieva?? (reostat) a ovl??danie pomocou mobilnej aplik??cie pre Android a iOS</Maintext>
        <Maintext>+ ??ivotnos?? a?? 15 rokov</Maintext>

        <H3>Kateg??rie</H3>
        <Maintext>Rekuper??tory Prana pon??kame v troch triedach: Basic (Standard), Premium a Premium plus</Maintext>
        <H4>Basic (Standard)</H4>
        <Maintext>Kateg??ria ??tandard pon??ka nasledovn?? konfigur??ciu<br/>
          - Samostatne riaden?? motory<br/>
          - D??tum a ??as<br/>
          - ??asova?? vypnutia<br/>
          - Podpora Bluetooth<br/>
          - Funkcia "Mini-vykurovanie"<sup><Comment>&nbsp;1)</Comment></sup><br/>
          - Zimn?? funkcia<sup><Comment>&nbsp;2)</Comment></sup>
        </Maintext>
        <H4>Premium</H4>
        <Maintext>
          Kateg??ria Premium obsahuje okrem v??etk??ho ??o kateg??ria standard aj<br/>
          - Senzor vlhkosti vzduchu<br/>
          - Stanovenie stavu filtra<br/>
          - Sn??ma?? atmosf??rickeho tlaku<br/>
          - Re??im AUTO<sup><Comment>&nbsp;3)</Comment></sup>, AUTO PLUS<sup><Comment>&nbsp;4)</Comment></sup><br/>
          - Teplota odv??dzan??ho vzduchu pred rekuper??ciou v ??C (senzor 1)<br/>
          - Teplota priv??dzan??ho vzduchu po rekuper??ci?? v ??C (senzor 2)
        </Maintext>
        <H4>Premium plus</H4>
        <Maintext>
          Kateg??ria Premium plus obsahuje okrem v??etk??ho ??o kateg??ria Premium aj<br/>
          - ??idlo oxidu uhli??it??ho<br/>
          - Ukazovate?? ??rovne ????innosti<br/>
          - Senzor kvality vzduchu, VOC<br/>
          - TTeplota priv??dzan??ho vzduchu pred rekuper??ciou v ??C (senzor 3)<br/>
          - Teplota odpadn??ho vzduchu po rekuper??ci?? v ??C (senzor 4)
        </Maintext>

        <StyledRow>
          <Comment>
            1) Funkcia "Mini-vykurovanie"  Umo????uje roz????ri?? teplotn?? rozsah syst??mu PRANA na -25 ?? C (-30 ?? C). T??to funkcia sa zap??na a vyp??na pomocou dia??kov??ho ovl??da??a alebo zo smartphonu pomocou aplik??cie pro Android a iOS. Pri pr??ci v extr??mnych teplot??ch zabra??uje n??mraze ventil??tora v??menn??ku tepla a rekuper??tora. V no??nom re??ime naviac zvy??uje teplotu priv??dzan??ho vzduchu o 3 a?? 4 ?? C<br/>
            2) Zimn?? funkcia je ur??en?? k zamedzeniu n??mrazy odtoku kondenz??tu v chladnom obdob?? alebo k odmrazovaniu, ak d??jde k n??mraze. Aby sa zabr??nilo n??mraze a zaistila sa spr??vna funkcia tepeln??ho v??menn??ka pri vonkaj??ej teplote pod nulou, je pou??itie ???Zimnej funkcie??? povinn??<br/>
            3) Re??im ???Auto??? zais??uje efekt??vny chod v??menn??ku tepla a pohodlie v mastnostiach bez z??sahu ??loveka v??aka senzorom teploty, vlhkosti vzduchu, hladiny CO2eq, VOC (indik??toru kvality vzduchu), atmosf??rick??ho tlaku, indik??toru zne??istenia filtra a ??al????ch<br/>
            4) Re??im ???Auto Plus??? Rekuper??tor pracuje na podobnom algoritme, ako pri re??ime "AUTO", ale s obmedzen??mi r??chlos??ami ventil??torov. Maxim??lne pr??pustn?? ot????ky motoru 3. Tento re??im sa odpor????a pou????va?? v noci
          </Comment>
        </StyledRow>

        <H3>Modely</H3>
        <H4>Prana 150</H4>
        <Maintext>Rekupera??n?? jednotka pre jednu miestnos?? do 60 m<sup>2</sup></Maintext>
        <Maintext>
          ????innos?? do 95%<br/>
          Priemer 160 mm, mont????ny otvor 162 mm<br/>
          Pr??tok ??? 105 m<sup>3</sup>/h, odtok ??? 97 m<sup>3</sup>/h, v re??ime NOC / minimum 12 m<sup>3</sup>/h<br/>
          Spotreba elektriny 4 ??? 68 W/h, mini-ohrev 55 W/h<br/>
          Hmotnos?? 4,4 kg<br/>
          Nap??janie 220V<br/>
        </Maintext>
        <Maintext>
          Pr??tok a odtok s????asne<br/>
          Ovl??danie pomocou dia??kov??ho ovl??da??a alebo mobilnej aplik??cie<br/>
          Zni??uje vlhkos?? a hladinu CO2<br/>
          Horizont??lna in??tal??cia<br/>
          Ide??lne pre rekon??trukcie ale aj novostavby<br/>
          Tich?? prev??dzka ??? re??im ???Noc???<br/>
          6 stup??ov nastavenia intenzity podsvietenia displeja<br/>
          Re??im ???Noc???, ???Vetranie??? a ??al????ch 8 stup??ov umo????uj?? plynule a pohodlne nastavenie<br/>
          Sp??nkov?? ??asova?? ??? nastavenie vypnutia v intervale od 10 min??t do 9 hod??n<br/>
          Vstavan?? mini-ohrev pre zv????enie teploty priv??dzan??ho vzduchu<br/>
          Zimn?? re??im pre pohodlne pou??itie pri teplot??ch
        </Maintext>
        <Maintext>Minim??lna d????ka 450 mm</Maintext>
        <H4>Prana 200G</H4>
        <Maintext>Rekupera??n?? jednotka pre jednu miestnos?? do 60 m<sup>2</sup></Maintext>
        <Maintext>
          ????innos?? do 96%<br/>
          Priemer 210 mm, mont????ny otvor 212 mm<br/>
          Pr??tok ??? 108 m<sup>3</sup>/h, odtok ??? 100 m<sup>3</sup>/h, v re??ime NOC / minimum 12 m<sup>3</sup>/h<br/>
          Spotreba elektriny 4 ??? 68 W/h, mini-ohrev 55 W/h<br/>
          Hmotnos?? 5,8 kg<br/>
          Nap??janie 220V
        </Maintext>
        <Maintext>Minim??lna d????ka 440 mm</Maintext>
        <H4>Prana 200C</H4>
        <Maintext>Rekupera??n?? jednotka pre jednu miestnos?? do 120 m<sup>2</sup></Maintext>
        <Maintext>
          ????innos?? do 93%<br/>
          Priemer 210 mm, mont????ny otvor 212 mm<br/>
          Pr??tok ??? 185 m<sup>3</sup>/h, odtok ??? 177 m<sup>3</sup>/h v re??ime NOC / minimum 21 m<sup>3</sup>/h<br/>
          Spotreba elektriny 4??? 91 W/h, mini-ohrev 55 W/h<br/>
          Hmotnos?? 6,0 kg<br/>
          Nap??janie 220V
        </Maintext>
        <Maintext>Minim??lna d????ka 500 mm</Maintext>

        <BlockBorder />

        <H2 id='smartfan'>SmartFan?? S</H2>
        <Maintext>
          Najmen????, najtich???? a naj????innej???? decentralizovan?? vetrac?? syst??m obytn??ch priestorov vo svojej triede.
        </Maintext>
        <StyledImage src={smartfanS} fluid onClick={this.onOpenRecImg} />
        {this.props.showRecImg && (
          <Lightbox mainSrc={smartfanS} onCloseRequest={this.onCloseRecImg} />
        )}
        <H3>Technick?? ??daje</H3>
        <Row>
          <Col xs={6}><Maintext>Miera tepelnej ????innosti</Maintext></Col>
          <Col xs={6}><Maintext>a?? 91%</Maintext></Col>
        </Row>
        <Row>
          <Col xs={6}><Maintext>Enargetick?? trieda</Maintext></Col>
          <Col xs={6}><Maintext>A+</Maintext></Col>
        </Row>
        <br/>
        <Row>
          <Col xs={4}></Col>
          <Col xs={8}>
            <Row>
              <Col xs={3}><TabText>Stupe?? 1</TabText></Col>
              <Col xs={3}><TabText>Stupe?? 2</TabText></Col>
              <Col xs={3}><TabText>Stupe?? 3</TabText></Col>
              <Col xs={3}><TabText>Stupe?? 4</TabText></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <StyledRow>
              <TabText>Prietokov?? objem v re??ime Eco/vyvetranie [m<sup>3</sup>/h]<sup><Comment>&nbsp;5)</Comment></sup></TabText>
              
            </StyledRow>
          </Col>
          <Col xs={8}>
            <Row>
              <Col xs={3}><TabText>18</TabText></Col>
              <Col xs={3}><TabText>28</TabText></Col>
              <Col xs={3}><TabText>38</TabText></Col>
              <Col xs={3}><TabText>46</TabText></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <StyledRow>
              <TabText>Hladina akustick??ho tlaku [dB(A)]</TabText>
            </StyledRow>
          </Col>
          <Col xs={8}>
            <Row>
              <Col xs={3}><TabText>11</TabText></Col>
              <Col xs={3}><TabText>19</TabText></Col>
              <Col xs={3}><TabText>28</TabText></Col>
              <Col xs={3}><TabText>33</TabText></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <StyledRow>
              <TabText>Pr??kon [W]<sup><Comment>&nbsp;6)</Comment></sup></TabText>
              
            </StyledRow>
          </Col>
          <Col xs={8}>
            <Row>
              <Col xs={3}><TabText>0,8</TabText></Col>
              <Col xs={3}><TabText>1,4</TabText></Col>
              <Col xs={3}><TabText>2,6</TabText></Col>
              <Col xs={3}><TabText>4,0</TabText></Col>
            </Row>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs={6}>
            <TabText>Normovan?? rozdiel akustick??ch tlakov Dn;w[dB]</TabText>
          </Col>
          <Col xs={6}>
            <TabText>44,99 (s volite??nou zvukovoizola??nou s??pravou)</TabText>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <StyledRow>
              <TabText>Priemer jadrov??ho otvoru [mm]</TabText>
            </StyledRow>
          </Col>
          <Col xs={6}>
            <TabText>162</TabText>
          </Col>
        </Row>
        <StyledRow>
          <Comment>
            5) v p??rovej prev??dzke<br/>
            6) bez sie??ov??ho zdroja
          </Comment>
        </StyledRow>
      </div>
    )
  }
}