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

export default class Routing extends React.Component{

  constructor(){
    super();
    this.state={title:"Default"};
    this.updateTitle=this.updateTitle.bind(this);
  }

  updateTitle(_State){
    this.setState({title:_State.title});
  }

  render(){
    return(<Router forceRefresh={true}>
      <Container >
        <Row className='base'>
          <Sidebar/>
          
            <Route exact path="/" component={XMFeed} updateParentTitle={this.updateTitle}/>
            <Route path="/feed" component={XMFeed} updateParentTitle={this.updateTitle}/>
            <Route path="/projects" component={XMProjects} updateParentTitle={this.updateTitle}/>
            <Route path="/bookstack" component={XMBookStack} updateParentTitle={this.updateTitle}/>
            <Route path="/team" component={XMTeam} updateParentTitle={this.updateTitle}/>
            <Route path="/contact" component={XMContact} updateParentTitle={this.updateTitle}/>
          
        </Row>
      </Container>
    </Router>);
  }
  
}
    


ReactDOM.render(
    <Routing/>,
    document.getElementById('root')
);