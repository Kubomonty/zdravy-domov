import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components';

import ScrollToTop from './Components/ScrollToTop';
import { NavBar } from './Components/NavBar';
import { Layout } from './Components/Layout';

import { Home } from './Components/Pages/Home';
import { Recuperators } from './Components/Pages/Recuperators';
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
                  <Route path="/rekuperacie" render=
                    {(props) => (
                      <Recuperators {...props}
                        showRecImg={this.state.showRecImg}
                        onOpenRecImg={this.onOpenRecImg}
                        onCloseRecImg={this.onCloseRecImg}
                      />
                    )} 
                  />
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
