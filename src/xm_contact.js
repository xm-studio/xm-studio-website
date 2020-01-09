import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './app.css';
import './custom.scss';

import FlipContactCard from './components/flipcontactcard.js';


class XMContact extends React.Component {
  render (){
    
    return(
            <Container >
        
        <Col className = "main-space-header">
          <Row className='main-header'>XM STUDIO<br/>RESEARCH + ARCHITECTURE
          </Row>
          <Row className='main-title'>Contact
          </Row>
        </Col>
      
        <Col className='main-content'>
        <Row className = 'main-content-text'>
          
          We are a studio that's founded in the clouds, as of now.
          Do drop us a mail or a good phone call to schedule a meeting!
        
      </Row>
      <Row className = 'main-content-text'>
        <FlipContactCard name="Elangovan Sankaralingom" designation="CEO" tel="+919842144844" mail="elan@xm.studio"/>
      </Row>
      <Row className = 'main-content-text'>
        <FlipContactCard name="Bhavatarini Kumaravel" designation="CFO" tel="+919585525188" mail="bava@xm.studio"/>
      </Row>
      <Row className = 'main-content-text'>
        <FlipContactCard name="Bhavatarini Kumaravel" designation="CFO" tel="+919585525188" mail="bava@xm.studio"/>
      </Row>
        </Col>
      
      </Container>
      
      
    );
  
}
}


export default XMContact;