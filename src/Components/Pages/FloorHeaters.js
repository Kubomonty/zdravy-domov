import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { scroller } from 'react-scroll'
import { Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ethermaLogoImg from '../../Assets/etherma_logo.png';

const H1 = styled.h1`
  margin-bottom: 3rem;
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
  margin: 3.5rem 0 1rem 0;
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
  margin: 1rem 0 0 0;
  
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

const TITLE = 'zdravy-domov | Podlahov?? vykurovanie'

export class FloorHeaters extends Component {
  render() {
    return(
      <div>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <H1 id='floor-top'>Podlahov?? vykurovanie</H1>
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
                <HeatTypeButtonContent>V??etky typy podl??h (do poteru)</HeatTypeButtonContent>
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
                <HeatTypeButtonContent>Lamin??t, korok a drevo (such?? zabudovanie)</HeatTypeButtonContent>
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
                <HeatTypeButtonContent>Univerz??lne</HeatTypeButtonContent>
              </HeatTypeButton>
            </LinkNoStyle>
          </Col>
        </Row>
        
        <BlockBorder />
        
        <H2 id='poter'>V??etky typy podl??h (do poteru)</H2>
        <H3>Prednosti</H3>
        <Maintext>+ ide??lny vykurovac?? syst??m pre n??zkoenergetick?? a pas??vne domy</Maintext>
        <Maintext>+ v??kon od 40 do 240 W/m<sup>2</sup></Maintext>
        <Maintext>+ flexibiln?? harmonikov?? uchyt??vac?? syst??m u??ah??uje pokl??dku</Maintext>
        <Maintext>+ jeden prip??jac?? k??bel</Maintext>
        <Maintext>+ takmer nemerate??n?? magnetick?? pole &lt; 25nT</Maintext>
        <Maintext>+ v??ber z r??znych v??konov umo????uje jednoduch?? pl??novanie a pokl??dku</Maintext>

        <H3>Info</H3>
        <Maintext><b>ETHERMA RS podlahov?? vykurovanie do bet??nov??ho poteru</b> m????e by?? pou??it?? na vykurovanie such??ch, vlhk??ch a dokonca aj mokr??ch priestorov. M????e by?? pou??it?? na ohrievanie podlahy, ako doplnkov??, alebo aj ako plnohodnotn?? akumula??n?? k??renie. Tento druh podlahov??ho k??renia je ide??lnym vykurovac??m syst??mom najm?? pre n??zkoenergetick?? a pas??vne domy. Je mo??n?? ho pou??i?? takmer nez??visle od zvolen??ho typu podlahov??ch kryt??n.</Maintext>
        <H4><b>Magnetick?? pole</b></H4>
        <Maintext>Ka??d?? elektrick?? vodi?? ktor??m prech??dza elektrick?? pr??d vytv??ra magnetick?? pole. Podlahov?? k??renia od ETHERMY s?? dvojp??lov?? vodi??e ktor??ch magnetick?? polia sa navz??jom ru??ia protismern??m tokom elektrick??ho pr??du. WHO odpor????a neprekro??i?? hrani??n?? hodnotu  100??T (10-4 Tesla). Na??e podlahov?? k??renia maj?? hodnoty vytvoren??ho magnetick??ho po??a od 5 do 25nT (10-9 Tesla). To je  4000 kr??t menej ako je povolen?? hrani??n?? hodnota WHO-a je to takmer nemerate??n??! Takto mal?? <b>magnetick?? pole zodpoved?? defin??cii biologicky priaznivej ???elektrosmog-free??? elektroin??tal??cii</b>.</Maintext>
        <H4><b>Dvojp??lov?? vykurovacia roho?? s ochrann??m opleten??m</b></H4>
        <Maintext>Podlahov?? k??renia ETHERMA Typ RS m????u by?? pou??it?? v z??vislosti od V????ho tarifu na elektrinu, ako akumula??n?? k??renie, ??iasto??ne akumula??n?? k??renie ale aj ako priamotop (v z??vislosti od h??bky zabudovania do poterov??ho bet??nu). ??peci??lny harmonikov?? uchyt??vac?? syst??m rie??i jednoduch??, pevn?? a presn?? pokl??dku vykurovacieho elementu. Ochrann?? vrstvy umo????uj?? pokl??dku aj v extr??mne vlhk??ch miestnostiach. Vysokohodnotn?? dip??lov?? syst??m je ukon??en?? len jedn??m prip??jac??m k??blom d????ky 3 m.</Maintext>
        <Maintext>Po dohode m????e by?? d????ka prip??jacieho k??bla upraven?? pod??a potreby z??kazn??ka.</Maintext>

        <H3>Pomoc pri v??bere / hlavn?? oblasti pou??itia</H3>
        <H4><b>100-120W/m<sup>2</sup></b></H4>
        <Maintext>Do ob??vac??ch miestnost?? s men??ou potrebou energi?? (dobre izolovan?? priestory) ??? ako priamotopn?? k??renie</Maintext>
        <H4><b>150-200W/m<sup>2</sup></b></H4>
        <Maintext>Do ob??vac??ch miestnost?? ??? ako priamotopn??, ??iasto??ne akumula??n??, alebo ako akumula??n?? k??renie</Maintext>
        <H4><b>240W/m<sup>2</sup></b></H4>
        <Maintext>Ako doplnkov?? k??renie pri nedostato??nosti podlahov??ho akumula??n??ho k??renia s polo??en??m v hornej vrstve poterov??ho bet??nu</Maintext>

        <BlockBorder />
        
        <H2 id='suche'>Lamin??t, korok a drevo (such?? zabudovanie)</H2>
        <H3>Prednosti</H3>
        <Maintext>+ ide??lna distrib??cia tepla</Maintext>
        <Maintext>+ pod pl??vaj??ce podlahy</Maintext>
        <Maintext>+ jednoduch??, r??chla a such?? mont????</Maintext>
        <Maintext>+ hr??bka iba 1,3 mm </Maintext>
        <Maintext>+ jeden prip??jac?? k??bel</Maintext>
        <Maintext>+ ??peci??lna povrchov?? f??lia</Maintext>
        <Maintext>+ takmer nemerate??n?? magnetick?? pole &lt; 25nT</Maintext>

        <H3>Info</H3>
        <Maintext><b>LAMINOTHERM</b> od ETHERMY je ??ahko pou??ite??n?? ako v novostavb??ch tak pri rekon??trukci??ch podl??h a k??renia pod <b>lamin??tov??, korkov?? alebo dreven?? podlahy</b>, tie?? ako plnohodnotn?? k??renie do be??ne zateplen??ch domov a bytov.<br/>Toto rie??enie podlahov??ho k??renia zabezpe???? pomerne <b>r??chle vyk??renie</b>, je <b>bez??dr??bov??</b> a jeho uvedenie do prev??dzky je ve??mi jednoduch??. Zosilnen?? hlin??kov?? tkanina garantuje <b>optim??lnu distrib??ciu tepla</b> a zabra??uje tvorbe hor??cich miest (Hot Spots) vznikaj??cich v d??sledku prekrytia ??asti k??renia n??bytkom. Jeho ve??kou v??hodou je <b>such?? polo??enie (bez potreby lepidla)</b> a jeho minim??lna hr??bka (1,3 mm) v??aka ktorej je mo??n?? ho ??ahko zabudova?? aj po??as rekon??trukci??.</Maintext>
        <H4><b>Magnetick?? pole</b></H4>
        <Maintext>Ka??d?? elektrick?? vodi?? ktor??m prech??dza elektrick?? pr??d vytv??ra magnetick?? pole. Podlahov?? k??renia od ETHERMY s?? dvojp??lov?? vodi??e ktor??ch magnetick?? polia sa navz??jom ru??ia protismern??m tokom elektrick??ho pr??du. WHO odpor????a neprekro??i?? hrani??n?? hodnotu  100??T (10-4 Tesla). Na??e podlahov?? k??renia maj?? hodnoty vytvoren??ho magnetick??ho po??a od 5 do 25nT (10-9 Tesla). To je  4000 kr??t menej ako je povolen?? hrani??n?? hodnota WHO-a je to takmer nemerate??n??! Takto mal?? <b>magnetick?? pole zodpoved?? defin??cii biologicky priaznivej ???elektrosmog-free??? elektroin??tal??cii</b>.</Maintext>
        
        <H3>In??tal??cia</H3>
        <Maintext>Laminotherm sa kladie priamo (vo??ne, alebo nalepen??) na protikro??ajov?? izol??ciu.</Maintext>
        <H4><b>Maxim??lna hr??bka podlahov??ch materi??lov pri pou??it?? LAMINOTHERM</b></H4>
        <Maintext>Korok 10mm<br/>Parkety 15mm<br/>Lamin??tov?? podlaha 9mm</Maintext>

        <BlockBorder />
        
        <H2 id='univerzal'>Univerz??lne</H2>
        <H3>Prednosti</H3>
        <Maintext>+ hr??bka iba 2,7 mm (v??aka tefl??novej ochrannej vrstve zn????en?? hr??bka izolantov pri vy????ej celkovej odolnosti!)</Maintext>
        <Maintext>+ samolepiaca roho?? (lep?? sa zo strany k??bla v??aka ??omu po polo??en?? roho?? chr??ni vykurovac?? k??bel)</Maintext>
        <Maintext>+ jeden prip??jac?? k??bel</Maintext>
        <Maintext>+ takmer nemerate??n?? magnetick?? pole &lt; 25nT</Maintext>
        <Maintext>+ vykurovacie elementy rovnomern?? spo??ahlivo uchyten?? (vykurovac?? element je k roho??i pri??it??, nie lepen?? ako u konkurencie, tak??e sa po polo??en?? nekr??ti)</Maintext>
        <Maintext>+ 3 r??zne ????rky: 30, 50, 100 cm</Maintext>

        <H3>Info</H3>
        <Maintext>Okrem ohrievania podlahy a vykurovania miestnost?? je model ETHERMA DS <b>vhodn?? aj na ohrev studen??ch stien</b> ??? najm?? pri potrebe eliminovania vplyvu tepeln??ch mostov. So svojou len 2,7mm hr??bkou vy??aduje ETHERMA DS len minim??lnu hr??bku materi??lu na jej zabudovanie. Roho?? je samolepiaca a spolu s dvojp??lovou technol??giou garantuje jednoduch?? polo??enie a zapojenie. Kvalitnou technol??giou ??itia je dosiahnut?? 100% spo??ahlivos??, jednoduchos?? zabudovania ako aj vysok?? stabilita vykurovacej roho??e po??as zabudov??vania.<br/><b>Po dohode vieme vyrobi?? vykurovacie roho??e presne pod??a Va??ej potreby ??? ve??kos??, v??kon, nap??tie, tvar.</b></Maintext>
        <H4><b>Magnetick?? pole</b></H4>
        <Maintext>Ka??d?? elektrick?? vodi?? ktor??m prech??dza elektrick?? pr??d vytv??ra magnetick?? pole. Podlahov?? k??renia od ETHERMY s?? dvojp??lov?? vodi??e ktor??ch magnetick?? polia sa navz??jom ru??ia protismern??m tokom elektrick??ho pr??du. WHO odpor????a neprekro??i?? hrani??n?? hodnotu  100??T (10-4 Tesla). Na??e podlahov?? k??renia maj?? hodnoty vytvoren??ho magnetick??ho po??a od 5 do 25nT (10-9 Tesla). To je  4000 kr??t menej ako je povolen?? hrani??n?? hodnota WHO-a je to takmer nemerate??n??! Takto mal?? <b>magnetick?? pole zodpoved?? defin??cii biologicky priaznivej ???elektrosmog-free??? elektroin??tal??cii</b>.</Maintext>
        
        <H3>Pomoc pri v??bere / hlavn?? oblasti pou??itia</H3>
        <H4><b>130W/m<sup>2</sup></b></H4>
        <Maintext>Temperovanie podl??h, alebo ako hlavn?? k??renie do n??zkoenergetick??ch obytn??ch domov</Maintext>
        <H4><b>160W/m<sup>2</sup></b></H4>
        <Maintext>Plnohodnotn?? k??renie do ??tandardne izolovan??ch budov, predov??etk??m do k??pe??n??, kuch????, predsien?? ??i zimn??ch z??hrad, ale aj do v??etk??ch miestnost?? obytn??ch priestorov</Maintext>
        <H4><b>200W/m<sup>2</sup></b></H4>
        <Maintext>Vykurovanie zle zateplen??ch miestnost??, alebo tie?? do miestnost?? kde je po??iadavka na r??chle vyk??renie, ako napr??klad obslu??n?? miestnosti pri saun??ch ??i wellness</Maintext>

        <H3>In??tal??cia</H3>
        <Maintext>Vykurovacie roho??e <b>ETHERMA typ DS</b> s?? vhodn?? pod kachli??ky, lamin??tov?? podlahy, parkety ??i dokonca pod koberec, ale bez oh??adu na typ podlahy musia by?? ulo??en?? do vrstvy lepidla. Po vyschnut?? lepidla je vhodn?? pri pou??it?? in??ch typov podl??h ako keramickej dla??by zalia?? e??te tenkou vrstvou niveliza??nej hmoty a m????ete polo??i?? Vami zvolen?? typ podlahy.</Maintext>
      </div>
    )
  }
}