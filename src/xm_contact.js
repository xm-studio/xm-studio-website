import React from 'react';
import {Row, Col, Container, Card, ListGroup, Button, Image} from 'react-bootstrap';
import './app.css';
import './custom.scss';

import FlipContactCard from './components/flipcontactcard.js';


class XMContact extends React.Component {
  render (){
    
    return(
      <Col className = "main-space-inner">
              <Row className='main-header'>XM STUDIO<br/>RESEARCH + ARCHITECTURE
              </Row>
              <Row className='main-title'>Contact
              </Row>
              <Row className='main-content'>
                <Row className = 'main-content-text'>
                We are a studio that's founded on the clouds, as of now.
                 Do drop us a mail or a good phone call to schedule a meeting!
                              
                </Row>
                <Row className = 'main-content-text'>
                  <FlipContactCard name="Elangovan Sankaralingom" designation="CEO" tel="+919842144844" mail="elan@xm.studio"/>
                  <FlipContactCard name="Bhavatarini Kumaravel" designation="CFO" tel="+919585525188" mail="bava@xm.studio"/>
                </Row>
              </Row>
          </Col>  
    );
  
}
}


export default XMContact;