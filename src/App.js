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
import { NoMatch } from './Components/Pages/NoMatch';

import backgroundImg from './Assets/clear-background.jpg'

const BackgroundWrapper = styled.section`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: calc(100vh - 56px);
`

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BackgroundWrapper>
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
                <Route component={NoMatch} />
              </Switch>
            </Layout>
          </Router>
        </BackgroundWrapper>
      </React.Fragment>
    );
  }
}

export default App;
