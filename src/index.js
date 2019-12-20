import React from 'react';
import ReactDOM from 'react-dom';
//import './custom.scss';
import './index.css'
import { Route, HashRouter as Router} from 'react-router-dom';
import {Row, Col, Container} from 'react-bootstrap';
import Sidebar from "./components/sidebar.js";

import XMFeed from './xm_feed.js';
import XMProjects from './xm_projects.js';
import XMBookStack from './xm_bookstack.js';
import XMTeam from './xm_team.js';
import XMContact from './xm_contact.js';

const routing = (
    <Router forceRefresh={true}>
        <Container >
          <Row className='base'>
            <Sidebar/>
            <Col className="main-space">
              <Route exact path="/" component={XMFeed} />
              <Route path="/feed" component={XMFeed} />
              <Route path="/projects" component={XMProjects} />
              <Route path="/bookstack" component={XMBookStack} />
              <Route path="/team" component={XMTeam} />
              <Route path="/contact" component={XMContact} />
            </Col>
          </Row>
        </Container>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
);