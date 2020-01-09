import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './app.css';
import './custom.scss';
import { Link } from 'react-router-dom';

import BookShelf from './components/bookshelf.js';

class XMBookStack extends React.Component {



  render (){
    
    return(
      <Container >
        
        <Col className = "main-space-header">
          <Row className='main-header'>XM STUDIO<br/>RESEARCH + ARCHITECTURE
          </Row>
          <Row className='main-title'>Book Stack
          </Row>
        </Col>
      
        <Col className='main-content'>
        <Link to="/bookstack/prototyping_workshop"><BookShelf shelfName="Academic research"/></Link>
          
          <BookShelf shelfName="Academic design"/>
          <BookShelf shelfName="Academic essays"/>
          <BookShelf shelfName="Miscellaneous"/>
        </Col>
      
      </Container>
    );
  
} 
}


export default XMBookStack;