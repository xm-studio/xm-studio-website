import React from 'react';
import {Row, Container} from 'react-bootstrap';
import './app.css';
import './custom.scss';

import Sidebar from "./components/sidebar.js";

import { Route,  HashRouter as Router} from 'react-router-dom';

import XMFeed from './xm_feed.js';
import XMProjects from './xm_projects.js';
import XMBookStack from './xm_bookstack.js';
import XMTeam from './xm_team.js';
import XMContact from './xm_contact.js';

class App extends React.Component {
  render (){
    let width = window.screen.width;

    //PC Screen
    if(width>768){
      return(
          <Router forceRefresh={true}>
        <Container fluid>
          <Row className='base'>
            <Sidebar/>
            
                <div>
                    <Route path="/" component={XMFeed} />
                    <Route path="/feed" component={XMFeed} />
                    <Route path="/projects" component={XMProjects} />
                    <Route path="/bookstack" component={XMBookStack} />
                    <Route path="/team" component={XMTeam} />
                    <Route path="/contact" component={XMContact} />
                </div>
            
          </Row>
        </Container></Router>
      );
    }

    //Mobile Screen
    else{
      return(
        <Container fluid>
          <Row className='base'>
          <Router forceRefresh={true}>
                <div>
                    <Route path="/" component={XMFeed} />
                    <Route path="/feed" component={XMFeed} />
                    <Route path="/projects" component={XMProjects} />
                    <Route path="/bookstack" component={XMBookStack} />
                    <Route path="/team" component={XMTeam} />
                    <Route path="/contact" component={XMContact} />
                </div>
            </Router>
            <Sidebar/>
          </Row>
        </Container>
      );
    }
  }
}


export default App;