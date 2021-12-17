import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';

import ScrollToTop from './Components/ScrollToTop';
import { NavBar } from './Components/NavBar';
import { Layout } from './Components/Layout';

import { Home } from './Components/Pages/Home';
import { DecentralizedRecuperators } from './Components/Pages/Recuperators/Decentralized/DecentralizedRecuperators';
import { Flair325 } from './Components/Pages/Recuperators/Centralized/WallMounted/Flair325';
import { Flair400 } from './Components/Pages/Recuperators/Centralized/WallMounted/Flair400';
import { RenoventE180 } from './Components/Pages/Recuperators/Centralized/WallMounted/RenoventE180';
import { RenoventE300 } from './Components/Pages/Recuperators/Centralized/WallMounted/RenoventE300';
import { RenoventE400 } from './Components/Pages/Recuperators/Centralized/WallMounted/RenoventE400';
import { RenoventE450 } from './Components/Pages/Recuperators/Centralized/WallMounted/RenoventE450';
import { RenoventS150 } from './Components/Pages/Recuperators/Centralized/CeilingMounted/RenoventS150';
import { RenoventS200 } from './Components/Pages/Recuperators/Centralized/CeilingMounted/RenoventS200';
import { RenoventS300 } from './Components/Pages/Recuperators/Centralized/CeilingMounted/RenoventS300';
import { InfraHeaters } from './Components/Pages/InfraHeaters';
import { FloorHeaters } from './Components/Pages/FloorHeaters';
import { InfraLights } from './Components/Pages/InfraLights';
import { Contacts } from './Components/Pages/Contacts';

import backgroundImg from './Assets/clear_background.jpg'
import 'react-image-lightbox/style.css';

const BackgroundWrapper = styled.section`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`

class App extends Component {  
  state = {
    showRecImg: false
  }

  onOpenRecImg = () => {
    this.setState({ showRecImg: true })
  }

  onCloseRecImg = () => {
    this.setState({ showRecImg: false })
  }

  render() {
    return (
      <BackgroundWrapper>
        <React.Fragment>
          <Router>
            <ScrollToTop>
              <NavBar />
              <Layout>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/decentralizovane-rekuperacie" render=
                    {(props) => (
                      <DecentralizedRecuperators {...props}
                        showRecImg={this.state.showRecImg}
                        onOpenRecImg={this.onOpenRecImg}
                        onCloseRecImg={this.onCloseRecImg}
                      />
                    )} 
                  />
                  <Route path="/centralizovane-rekuperacie/nastenne/flair-325" component={Flair325} />
                  <Route path="/centralizovane-rekuperacie/nastenne/flair-400" component={Flair400} />
                  <Route path="/centralizovane-rekuperacie/nastenne/renovent-excellent-180" component={RenoventE180} />                  
                  <Route path="/centralizovane-rekuperacie/nastenne/renovent-excellent-300" component={RenoventE300} />
                  <Route path="/centralizovane-rekuperacie/nastenne/renovent-excellent-400" component={RenoventE400} />
                  <Route path="/centralizovane-rekuperacie/nastenne/renovent-excellent-450" component={RenoventE450} />
                  <Route path="/centralizovane-rekuperacie/nastenne/renovent-sky-150" component={RenoventS150} />
                  <Route path="/centralizovane-rekuperacie/nastenne/renovent-sky-200" component={RenoventS200} />                  
                  <Route path="/centralizovane-rekuperacie/nastenne/renovent-sky-300" component={RenoventS300} />
                  <Route path="/infravykurovanie" component={InfraHeaters} />
                  <Route path="/podlahove-vykurovanie" component={FloorHeaters} />
                  <Route path="/infraziarice" component={InfraLights} />
                  <Route path="/kontakty" component={Contacts} />
                  <Route component={Home} />
                </Switch>
              </Layout>
            </ScrollToTop>
          </Router>
        </React.Fragment>
      </BackgroundWrapper>
    );
  }
}

export default App;
