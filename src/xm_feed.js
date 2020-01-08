import React from 'react';
import {Row, Col, Container, Card, ListGroup, Button, Image} from 'react-bootstrap';
import './app.css';
import './custom.scss';

import Anim from './resources/SiteUnderConstruction.gif';

class XMFeed extends React.Component {
  render (){
    
      return(
      <Container >
        
        <Col className = "main-space-header">
          <Row className='main-header'>XM STUDIO<br/>RESEARCH + ARCHITECTURE
          </Row>
          <Row className='main-title'>Feed
          </Row>
        </Col>
      
        <Col className='main-content'>
      
        </Col>
      
      </Container>
      );
    
  }
}


export default XMFeed;