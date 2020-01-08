import React from 'react';
import {Row, Col, Container, Card, ListGroup, Button, Image} from 'react-bootstrap';
import './app.css';
import './custom.scss';


class XMProjects extends React.Component {
  render (){
    
    return(
      <Container >
        
        <Col className = "main-space-header">
          <Row className='main-header'>XM STUDIO<br/>RESEARCH + ARCHITECTURE
          </Row>
          <Row className='main-title'>Projects
          </Row>
        </Col>
      
        <Col className='main-content'>
      
        </Col>
      
      </Container>
    );
  
  }
}


export default XMProjects;