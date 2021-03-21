import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';

import { NavBar } from './Components/NavBar';
import { Layout } from './Components/Layout';

import { Home } from './Components/Pages/Home';
import { Recuperators } from './Components/Pages/Recuperators';
import { InfraHeaters } from './Components/Pages/InfraHeaters';
import { FloorHeaters } from './Components/Pages/FloorHeaters';
import { InfraLights } from './Components/Pages/InfraLights';
import { Contacts } from './Components/Pages/Contacts';

import backgroundImg from './Assets/clear_background.jpg'

const BackgroundWrapper = styled.section`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`

class App extends Component {
  render() {
    return (
      <BackgroundWrapper>
        <React.Fragment>
          <Router>
            <NavBar />
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/rekuperacie" component={Recuperators} />
                <Route path="/infravykurovanie" component={InfraHeaters} />
                <Route path="/podlahove-vykurovanie" component={FloorHeaters} />
                <Route path="/infraziarice" component={InfraLights} />
                <Route path="/kontakty" component={Contacts} />
                <Route component={Home} />
              </Switch>
            </Layout>
          </Router>
        </React.Fragment>
      </BackgroundWrapper>
    );
  }
}

export default App;
