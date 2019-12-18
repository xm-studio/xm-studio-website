import React from 'react';
import {Row, Col, Container, Card, ListGroup, Button, Image} from 'react-bootstrap';
import './app.css';
import './custom.scss';


class XMBookStack extends React.Component {
  render (){
    
    return(
      <Col className = "main-space-inner">
              <Col className='main-header'>XM Studio | Book Stack
              </Col>
              <Col className='main-content'></Col>
          </Col>  
    );
  
} 
}


export default XMBookStack;