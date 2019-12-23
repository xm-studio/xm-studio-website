import React from 'react';
import {Row, Col, Container, Card, ListGroup, Button, Image} from 'react-bootstrap';
import './app.css';
import './custom.scss';



class XMTeam extends React.Component {
  render (){
    
    return(
      <Container>
      <Col className = "main-space-inner">
        <Row className='main-header'>XM STUDIO<br/>RESEARCH + ARCHITECTURE
        </Row>
        <Row className='main-title'>Team
        </Row>
      </Col>
      <Col className='main-content'>

      </Col>
      </Container>
    );
  
}
}


export default XMTeam;