import React from 'react';
import ReactDOM from 'react-dom';
//import './custom.scss';
import './index.css'
import { Route, HashRouter as Router} from 'react-router-dom';
import {Row,  Container} from 'react-bootstrap';
import Sidebar from "./components/sidebar.js";

import XMFeed from './xm_feed.js';
import XMProjects from './xm_projects.js';
import XMBookStack from './xm_bookstack.js';
import XMTeam from './xm_team.js';
import XMContact from './xm_contact.js';

import ARMFinal from './resources/Books/Research/ARMFinal.js';

export default class Routing extends React.Component{

  render(){
    return(<Router forceRefresh={true}>
      <Container >
        <Row className='base'>
          <Sidebar/>
          
            <Route exact path="/" component={XMFeed}/>
            <Route exact path="/feed" component={XMFeed}/>
            <Route exact path="/projects" component={XMProjects}/>
            <Route exact path="/bookstack" component={XMBookStack}/>
            <Route exact path="/team" component={XMTeam}/>
            <Route exact path="/contact" component={XMContact}/>
            <Route exact path="/bookstack/research/arm_final" component={ARMFinal}/>
        </Row>
      </Container>
    </Router>);
  }
  
}
    


ReactDOM.render(
    <Routing/>,
    document.getElementById('root')
);