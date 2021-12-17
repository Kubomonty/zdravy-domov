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

const TITLE = 'zdravy-domov | Infražiariče'

export const InfraLights = () => (
  <div>
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>
    <H1>Infražiariče</H1>

    <StyledImage src={solamagicLogoImg}/>

    <H3>Info</H3>
    <Maintext><b>Komfort a zdravie</b><br/>Sálavé teplo z infraohrievačov SOLAMAGIC® zodpovedá infraspektru slnka. Vďaka tomu Vám zabezpečí dokonalú tepelnú pohodu. Infražiareniu je navyše pripisovaný terapeutický účinok.</Maintext>
    <Maintext><b>Efektivita</b><br/>Infražiariče SOLAMAGIC® sa vyznačujú najvyššou efektivitou výroby a distribúcie tepla, za čo vďačia Philips HeLen žiarivkám a dvojitému reflektoru SOLAMAGIC® . Doprajú Vám tepelnú pohodu tam kde ju potrebujete a vtedy keď ju potrebujete. Úspory na energiu tak môžu dosiahnuť rádovo 10-tky %. Vo výnimočných prípadoch až 90%.</Maintext>
    <Maintext><b>Odolnosť</b><br/>Produkty SOLAMAGIC® sú vyrobené z nehrdzavejúcich materiálov odolných voči vlhkosti a chladu. Overené aj v extrémnych škandinávskych podmienkach!</Maintext>
    <Maintext><b>Bezpečnosť</b><br/>Infražiariče SOLAMAGIC® majú vysokú ochranu voči špliechajúcej vode IP 24-65. Sú vyrobené z nehrdzavejúcich materiálov hliníka a ušľachtilej ocele. Naše infražiariče disponujú špeciálnou izoláciou, ktorá Vás chráni pred popálením. Mriežka z ušľachtilej ocele bráni dotyku s vykurovacím elementom. Model S1 má navyše svietivosť stlmenú až o 92%!</Maintext>
    <Maintext><b>Rýchlosť</b><br/>Produkty SOLAMAGIC® nemajú nahrievaciu fázu. Efektívne sálajú teplo od prvej sekundy po ich zapnutí!</Maintext>
    <Maintext><b>Výkon</b><br/>Výkon je dobré rozdeliť do viacerých menších infražiaričov rovnomerne rozložených v priestore ktorý treba ohrievať. Odporúčame Vám aby ste nás oslovili ohľadom výpočtu potrebného výkonu a ideálneho umiestnenia.</Maintext>

    <H3>Pomoc pri výbere a hlavné oblasti použitia</H3>
    <Maintext>
      <b>Interiér</b><br/>
      230V / 500W<br/>
      Trieda ochrany: IP24<br/>
      vykúriteľná plocha : cca 4 m<sup>2</sup><br/>
      montáž: stena, strop<br/>
      min. výška montáže 1700 mm<br/>
      min. vzdialenosť od ohrievanej plochy 600 mm<br/>
      prevádzkové náklady cca 6 cent/hod<br/>
      <br/>
      230V / 500W<br/>
      Trieda ochrany: IP24<br/>
      vykúriteľná plocha : cca 7 m<sup>2</sup><br/>
      montáž: stena, strop<br/>
      min. výška montáže 1700 mm<br/>
      min. vzdialenosť od ohrievanej plochy 600 mm<br/>
      prevádzkové náklady cca 11 cent/hod<br/>
    </Maintext>
    <Maintext>
      <b>Interiér / Exteriér</b><br/>
      230V / 1400W<br/>
      Trieda ochrany: IP24<br/>
      vykúriteľná plocha : cca 12 m<sup>2</sup><br/>
      montáž: stena, strop, stojan<br/>
      min. výška montáže 2225 mm<br/>
      min. vzdialenosť od ohrievanej plochy 600 mm<br/>
      prevádzkové náklady cca 16 cent/hod<br/>
      <br/>
      230V / 2000W<br/>
      Trieda ochrany: IP24 - IP65<br/>
      vykúriteľná plocha : cca 16 m<sup>2</sup><br/>
      montáž: stena, strop, stojan<br/>
      min. výška montáže 2225 mm<br/>
      min. vzdialenosť od ohrievanej plochy 700 mm<br/>
      prevádzkové náklady cca 7-22 cent/hod<br/>
      <br/>
      230V / 2800W<br/>
      Trieda ochrany: IP24, IP34<br/>
      vykúriteľná plocha : cca 20 m<sup>2</sup><br/>
      montáž: stena, strop, stojan<br/>
      min. výška montáže 2225 mm<br/>
      min. vzdialenosť od ohrievanej plochy 600, 700 mm<br/>
      prevádzkové náklady cca 22-31 cent/hod<br/>
    </Maintext>
    <Maintext>
      <b>Exteriér / Haly / Terasy</b><br/>
      400V / 2800W<br/>
      Trieda ochrany: IP24, IP34<br/>
      vykúriteľná plocha : cca 12-30 m<sup>2</sup><br/>
      montáž: stena, strop, stojan<br/>
      min. vzdialenosť od ohrievanej plochy 600, 700 mm<br/>
      prevádzkové náklady cca 44 cent/hod<br/>
      <br/>
      230V / 5600W<br/>
      Trieda ochrany: IP24<br/>
      vykúriteľná plocha : cca 30 m<sup>2</sup><br/>
      montáž: stojan<br/>
      min. vzdialenosť od ohrievanej plochy 600 mm<br/>
      prevádzkové náklady cca 64 cent/hod<br/>
      <br/>
      400V / 5600W<br/>
      Trieda ochrany: IP34<br/>
      vykúriteľná plocha : cca 20-35 m<sup>2</sup><br/>
      montáž: stena, strop, stojan<br/>
      min. vzdialenosť od ohrievanej plochy 700 mm<br/>
      prevádzkové náklady cca 61-62 cent/hod<br/>
    </Maintext>

    <H3>Porovnanie technológií v exteriéri</H3>
    <Row>
      <Col xs={3}></Col>
      <Col xs={3}><TabText><b>Solamagic Eco+ 1,4kW</b></TabText></Col>
      <Col xs={3}><TabText><b>Kremíkové infražiariče 2kW</b></TabText></Col>
      <Col xs={3}><TabText><b>plynový ohrievač 4kW</b></TabText></Col>
    </Row>
    <Row>
      <Col xs={3}></Col>
      <Col xs={3}><TabImage src={solamagicHeat} /></Col>
      <Col xs={3}><TabImage src={siliconHeat} /></Col>
      <Col xs={3}><TabImage src={gasHeat} /></Col>
    </Row>
    <TabRow>
      <Col xs={3}><TabTitle><b>Prevádzkové<br/>náklady</b></TabTitle></Col>
      <Col xs={3}><TabText>Cca 12 m<sup>2</sup> vykúrite s SM ECO+ 1,4 kW už za 0,14 €/hod (v závislosti od Vašej tarify na elektrinu)</TabText></Col>
      <Col xs={3}><TabText>Cca 12 m<sup>2</sup> vykúrite s 2kW už za 0,22 €/hod (v závislosti od Vašej tarify na elektrinu)</TabText></Col>
      <Col xs={3}><TabText>Cca 12 m<sup>2</sup> vykúrite plynovým žiaričom o sile cca 4 kW, za hodinu spotrebujete cca 0,4kg propán butanu (pri súčasných cenách je to náklad 0,60 €/hod)</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={3}><TabTitle><b>Efektivita</b></TabTitle></Col>
      <Col xs={3}><TabText>92% energie je účelne použitých na ohriatie miesta určenia</TabText></Col>
      <Col xs={3}><TabText>Cca 60% energie je účelne použitých na ohriatie miesta určenia</TabText></Col>
      <Col xs={3}><TabText>Cca 40% energie je účelne použitých na ohriatie miesta určenia</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={3}><TabTitle><b>Nahrievanie</b></TabTitle></Col>
      <Col xs={3}><TabText>Kúri hneď po zapnutí, na 90% výkonu sa dostane za 1 sekundu</TabText></Col>
      <Col xs={3}><TabText>Potrebuje fázu nahrievania, na 90% výkonu sa dostane za cca 30 sekúnd</TabText></Col>
      <Col xs={3}><TabText>Potrebuje fázu nahrievania, na 90% výkonu sa dostane za cca 5 minút</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={3}><TabTitle><b>Bezpečnosť<br/>prevádzky</b></TabTitle></Col>
      <Col xs={3}><TabText>Zdrojom je elektrická zásuvka, žiadne obavy o bezpečnosť, odpadajú starosti so zaobstarávaním paliva</TabText></Col>
      <Col xs={3}><TabText>Zdrojom je elektrická zásuvka, žiadne obavy o bezpečnosť, odpadajú starosti so zaobstarávaním paliva</TabText></Col>
      <Col xs={3}><TabText>Pri kúrení plynom je potrebná veľká opatrnosť pri prevádzke, treba vždy vopred zabezpečiť plný zásobník</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={3}><TabTitleShort><b>CO<sub>2</sub></b></TabTitleShort></Col>
      <Col xs={3}><TabText>Žiadne priame emisie CO<sub>2</sub></TabText></Col>
      <Col xs={3}><TabText>Žiadne priame emisie CO<sub>2</sub></TabText></Col>
      <Col xs={3}><TabText>Priama emisia CO<sub>2</sub></TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={3}><TabTitle><b>Variabilita<br/>použitia</b></TabTitle></Col>
      <Col xs={3}><TabText>Možnosť montáže na stenu, na strop, alebo umiestnenie na stojane, použitie v interiéri aj v exteriéri</TabText></Col>
      <Col xs={3}><TabText>Možnosť montáže na stenu, na strop, alebo umiestnenie na stojane, použitie v interiéri aj v exteriéri</TabText></Col>
      <Col xs={3}><TabText>Možnosť umiestnenie len na stojane, použitie výlučne v exteriéri</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={3}><TabTitle><b>Spôsob<br/>ohrevu</b></TabTitle></Col>
      <Col xs={3}><TabText>Ohrieva ľudí priamo sálaním, vďaka tomu nie sú straty spôsobované odviatim teplého vzduchu</TabText></Col>
      <Col xs={3}><TabText>Väčšinovým podielom ohrieva ľudí priamo sálaním, vďaka čiastočnému priamemu ohrevu vzduchu sú straty spôsobované odviatim teplého vzduchu</TabText></Col>
      <Col xs={3}><TabText>Priamo ohrieva vzduch a až teplý vzduch ohrieva Vás, nastávajú veľké tepelné straty, teplý vzduch je ľahko odvievaný vetrom</TabText></Col>
    </TabRow>
    <TabRow>
      <Col xs={3}><TabTitleShort><b>Citlivosť<br/>voči vetru</b></TabTitleShort></Col>
      <Col xs={3}><TabText>Žiadna</TabText></Col>
      <Col xs={3}><TabText>Vysoká</TabText></Col>
      <Col xs={3}><TabText>Veľmi vysoká</TabText></Col>
    </TabRow>

    <Maintext>Pre detailné informácie o produktoch nás <StyledLink to="/kontakty">neváhajte kontaktovať</StyledLink></Maintext>

  </div>
)