import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import solamagicLogoImg from '../../Assets/solamagic_logo.png';
import solamagicHeat from '../../Assets/solamagic_heat.jpg';
import siliconHeat from '../../Assets/silicon_heat.jpg';
import gasHeat from '../../Assets/gas_heat.jpg';

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
  margin: 1.5rem 0;

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
  align-items: start;

  @media (min-height: 320px) {
    min-height: 40vh;
  }

  @media (min-height: 480px) {
    min-height: 30vh;
  }

  @media (min-height: 768px) {
    min-height: 20vh;
  }
`

const TabText = styled.p`
  margin: 1.5rem 0;

  @media (min-width: 320px) {
    font-size: 0.6rem;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`

const TabTitle = styled(TabText)`
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 0;
  
  @media (min-width: 320px) {
    font-size: 0.8rem;
    transform: rotate(270deg) translatey(-25vw) translatex(-5vh);
  }

  @media (min-width: 460px) {
    font-size: 0.9rem;
    transform: rotate(270deg) translatey(-15vw) translatex(-5vh);
  }

  @media (min-width: 768px) {  
    font-size: 1rem;  
    transform: rotate(270deg) translatex(-5vh);
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem; 
    transform: rotate(270deg) translatex(-4vh);
    text-align: center;
  }

  @media (min-height: 320px) {
    min-width: 40vh;
  }

  @media (min-height: 480px) {
    min-width: 30vh;
  }

  @media (min-height: 768px) {
    min-width: 20vh;
  }
`

const TabTitleShort = styled(TabTitle)`
  @media (min-width: 1024px) {
    font-size: 1.1rem; 
    transform: rotate(270deg) translatex(-2vh);
    text-align: center;
}
`

const StyledImage = styled(Image)`
  width: 25vw;
`

const TabImage = styled(Image)`
  width: 100%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #004d99;
  transition: 0.3s;
  &:hover {
    color: #3399ff;
    text-decoration: none;
  }
  &:active {
    color: #3399ff;
    text-decoration: none;
  }

  @media (min-width: 320px) {
    font-size: 1.1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
`;

const TITLE = 'zdravy-domov | Infra??iari??e'

export const InfraLights = () => (
  <div>
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
    <H1>Infra??iari??e</H1>

    <StyledImage src={solamagicLogoImg}/>

    <H3>Info</H3>
    <Maintext><b>Komfort a zdravie</b><br/>S??lav?? teplo z infraohrieva??ov SOLAMAGIC?? zodpoved?? infraspektru slnka. V??aka tomu V??m zabezpe???? dokonal?? tepeln?? pohodu. Infra??iareniu je navy??e pripisovan?? terapeutick?? ????inok.</Maintext>
    <Maintext><b>Efektivita</b><br/>Infra??iari??e SOLAMAGIC?? sa vyzna??uj?? najvy????ou efektivitou v??roby a distrib??cie tepla, za ??o v??a??ia Philips HeLen ??iarivk??m a dvojit??mu reflektoru SOLAMAGIC?? . Dopraj?? V??m tepeln?? pohodu tam kde ju potrebujete a vtedy ke?? ju potrebujete. ??spory na energiu tak m????u dosiahnu?? r??dovo 10-tky %. Vo v??nimo??n??ch pr??padoch a?? 90%.</Maintext>
    <Maintext><b>Odolnos??</b><br/>Produkty SOLAMAGIC?? s?? vyroben?? z nehrdzavej??cich materi??lov odoln??ch vo??i vlhkosti a chladu. Overen?? aj v extr??mnych ??kandin??vskych podmienkach!</Maintext>
    <Maintext><b>Bezpe??nos??</b><br/>Infra??iari??e SOLAMAGIC?? maj?? vysok?? ochranu vo??i ??pliechaj??cej vode IP 24-65. S?? vyroben?? z nehrdzavej??cich materi??lov hlin??ka a u????achtilej ocele. Na??e infra??iari??e disponuj?? ??peci??lnou izol??ciou, ktor?? V??s chr??ni pred pop??len??m. Mrie??ka z u????achtilej ocele br??ni dotyku s vykurovac??m elementom. Model S1 m?? navy??e svietivos?? stlmen?? a?? o 92%!</Maintext>
    <Maintext><b>R??chlos??</b><br/>Produkty SOLAMAGIC?? nemaj?? nahrievaciu f??zu. Efekt??vne s??laj?? teplo od prvej sekundy po ich zapnut??!</Maintext>
    <Maintext><b>V??kon</b><br/>V??kon je dobr?? rozdeli?? do viacer??ch men????ch infra??iari??ov rovnomerne rozlo??en??ch v priestore ktor?? treba ohrieva??. Odpor????ame V??m aby ste n??s oslovili oh??adom v??po??tu potrebn??ho v??konu a ide??lneho umiestnenia.</Maintext>

    <H3>Pomoc pri v??bere a hlavn?? oblasti pou??itia</H3>
    <Maintext>
      <b>Interi??r</b><br/>
      230V / 500W<br/>
      Trieda ochrany: IP24<br/>
      vyk??rite??n?? plocha : cca 4 m<sup>2</sup><br/>
      mont????: stena, strop<br/>
      min. v????ka mont????e 1700 mm<br/>
      min. vzdialenos?? od ohrievanej plochy 600 mm<br/>
      prev??dzkov?? n??klady cca 6 cent/hod<br/>
      <br/>
      230V / 500W<br/>
      Trieda ochrany: IP24<br/>
      vyk??rite??n?? plocha : cca 7 m<sup>2</sup><br/>
      mont????: stena, strop<br/>
      min. v????ka mont????e 1700 mm<br/>
      min. vzdialenos?? od ohrievanej plochy 600 mm<br/>
      prev??dzkov?? n??klady cca 11 cent/hod<br/>
    </Maintext>
    <Maintext>
      <b>Interi??r / Exteri??r</b><br/>
      230V / 1400W<br/>
      Trieda ochrany: IP24<br/>
      vyk??rite??n?? plocha : cca 12 m<sup>2</sup><br/>
      mont????: stena, strop, stojan<br/>
      min. v????ka mont????e 2225 mm<br/>
      min. vzdialenos?? od ohrievanej plochy 600 mm<br/>
      prev??dzkov?? n??klady cca 16 cent/hod<br/>
      <br/>
      230V / 2000W<br/>
      Trieda ochrany: IP24 - IP65<br/>
      vyk??rite??n?? plocha : cca 16 m<sup>2</sup><br/>
      mont????: stena, strop, stojan<br/>
      min. v????ka mont????e 2225 mm<br/>
      min. vzdialenos?? od ohrievanej plochy 700 mm<br/>
      prev??dzkov?? n??klady cca 7-22 cent/hod<br/>
      <br/>
      230V / 2800W<br/>
      Trieda ochrany: IP24, IP34<br/>
      vyk??rite??n?? plocha : cca 20 m<sup>2</sup><br/>
      mont????: stena, strop, stojan<br/>
      min. v????ka mont????e 2225 mm<br/>
      min. vzdialenos?? od ohrievanej plochy 600, 700 mm<br/>
      prev??dzkov?? n??klady cca 22-31 cent/hod<br/>
    </Maintext>
    <Maintext>
      <b>Exteri??r / Haly / Terasy</b><br/>
      400V / 2800W<br/>
      Trieda ochrany: IP24, IP34<br/>
      vyk??rite??n?? plocha : cca 12-30 m<sup>2</sup><br/>
      mont????: stena, strop, stojan<br/>
      min. vzdialenos?? od ohrievanej plochy 600, 700 mm<br/>
      prev??dzkov?? n??klady cca 44 cent/hod<br/>
      <br/>
      230V / 5600W<br/>
      Trieda ochrany: IP24<br/>
      vyk??rite??n?? plocha : cca 30 m<sup>2</sup><br/>
      mont????: stojan<br/>
      min. vzdialenos?? od ohrievanej plochy 600 mm<br/>
      prev??dzkov?? n??klady cca 64 cent/hod<br/>
      <br/>
      400V / 5600W<br/>
      Trieda ochrany: IP34<br/>
      vyk??rite??n?? plocha : cca 20-35 m<sup>2</sup><br/>
      mont????: stena, strop, stojan<br/>
      min. vzdialenos?? od ohrievanej plochy 700 mm<br/>
      prev??dzkov?? n??klady cca 61-62 cent/hod<br/>
    </Maintext>

    <H3>Porovnanie technol??gi?? v exteri??ri</H3>
    <Row>
      <Col xs={3}></Col>
      <Col xs={3}><TabText><b>Solamagic Eco+ 1,4kW</b></TabText></Col>
      <Col xs={3}><TabText><b>Krem??kov?? infra??iari??e 2kW</b></TabText></Col>
      <Col xs={3}><TabText><b>plynov?? ohrieva?? 4kW</b></TabText></Col>
    </Row>
    <Row>
      <Col xs={3}></Col>
      <Col xs={3}><TabImage src={solamagicHeat} /></Col>
      <Col xs={3}><TabImage src={siliconHeat} /></Col>
      <Col xs={3}><TabImage src={gasHeat} /></Col>
    </Row>
    <TabRow>
      <Col xs={3}><TabTitle><b>Prev??dzkov??<br/>n??klady</b></TabTitle></Col>
      <Col xs={3}><TabText>Cca 12 m<sup>2</sup> vyk??rite s SM ECO+ 1,4 kW u?? za 0,14 ???/hod (v z??vislosti od Va??ej tarify na elektrinu)</TabText></Col>
      <Col xs={3}><TabText>Cca 12 m<sup>2</sup> vyk??rite s 2kW u?? za 0,22 ???/hod (v z??vislosti od Va??ej tarify na elektrinu)</TabText></Col>
      <Col xs={3}><TabText>Cca 12 m<sup>2</sup> vyk??rite plynov??m ??iari??om o sile cca 4 kW, za hodinu spotrebujete cca 0,4kg prop??n butanu (pri s????asn??ch cen??ch je to n??klad 0,60 ???/hod)</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={3}><TabTitle><b>Efektivita</b></TabTitle></Col>
      <Col xs={3}><TabText>92% energie je ????elne pou??it??ch na ohriatie miesta ur??enia</TabText></Col>
      <Col xs={3}><TabText>Cca 60% energie je ????elne pou??it??ch na ohriatie miesta ur??enia</TabText></Col>
      <Col xs={3}><TabText>Cca 40% energie je ????elne pou??it??ch na ohriatie miesta ur??enia</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={3}><TabTitle><b>Nahrievanie</b></TabTitle></Col>
      <Col xs={3}><TabText>K??ri hne?? po zapnut??, na 90% v??konu sa dostane za 1 sekundu</TabText></Col>
      <Col xs={3}><TabText>Potrebuje f??zu nahrievania, na 90% v??konu sa dostane za cca 30 sek??nd</TabText></Col>
      <Col xs={3}><TabText>Potrebuje f??zu nahrievania, na 90% v??konu sa dostane za cca 5 min??t</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={3}><TabTitle><b>Bezpe??nos??<br/>prev??dzky</b></TabTitle></Col>
      <Col xs={3}><TabText>Zdrojom je elektrick?? z??suvka, ??iadne obavy o bezpe??nos??, odpadaj?? starosti so zaobstar??van??m paliva</TabText></Col>
      <Col xs={3}><TabText>Zdrojom je elektrick?? z??suvka, ??iadne obavy o bezpe??nos??, odpadaj?? starosti so zaobstar??van??m paliva</TabText></Col>
      <Col xs={3}><TabText>Pri k??ren?? plynom je potrebn?? ve??k?? opatrnos?? pri prev??dzke, treba v??dy vopred zabezpe??i?? pln?? z??sobn??k</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={3}><TabTitleShort><b>CO<sub>2</sub></b></TabTitleShort></Col>
      <Col xs={3}><TabText>??iadne priame emisie CO<sub>2</sub></TabText></Col>
      <Col xs={3}><TabText>??iadne priame emisie CO<sub>2</sub></TabText></Col>
      <Col xs={3}><TabText>Priama emisia CO<sub>2</sub></TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={3}><TabTitle><b>Variabilita<br/>pou??itia</b></TabTitle></Col>
      <Col xs={3}><TabText>Mo??nos?? mont????e na stenu, na strop, alebo umiestnenie na stojane, pou??itie v interi??ri aj v exteri??ri</TabText></Col>
      <Col xs={3}><TabText>Mo??nos?? mont????e na stenu, na strop, alebo umiestnenie na stojane, pou??itie v interi??ri aj v exteri??ri</TabText></Col>
      <Col xs={3}><TabText>Mo??nos?? umiestnenie len na stojane, pou??itie v??lu??ne v exteri??ri</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={3}><TabTitle><b>Sp??sob<br/>ohrevu</b></TabTitle></Col>
      <Col xs={3}><TabText>Ohrieva ??ud?? priamo s??lan??m, v??aka tomu nie s?? straty sp??sobovan?? odviatim tepl??ho vzduchu</TabText></Col>
      <Col xs={3}><TabText>V??????inov??m podielom ohrieva ??ud?? priamo s??lan??m, v??aka ??iasto??n??mu priamemu ohrevu vzduchu s?? straty sp??sobovan?? odviatim tepl??ho vzduchu</TabText></Col>
      <Col xs={3}><TabText>Priamo ohrieva vzduch a a?? tepl?? vzduch ohrieva V??s, nast??vaj?? ve??k?? tepeln?? straty, tepl?? vzduch je ??ahko odvievan?? vetrom</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={3}><TabTitleShort><b>Citlivos??<br/>vo??i vetru</b></TabTitleShort></Col>
      <Col xs={3}><TabText>??iadna</TabText></Col>
      <Col xs={3}><TabText>Vysok??</TabText></Col>
      <Col xs={3}><TabText>Ve??mi vysok??</TabText></Col>
    </TabRow>

    <Maintext>Pre detailn?? inform??cie o produktoch n??s <StyledLink to="/kontakty">nev??hajte kontaktova??</StyledLink></Maintext>

  </div>
)