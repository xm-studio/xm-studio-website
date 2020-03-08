import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './app.css';
import './custom.scss';
import { Link } from 'react-router-dom';

import AcademicResearchShelf from './resources/Books/Shelves/AcademicResearchShelf.js';
import BookShelf from './components/bookshelf.js';

class XMBookStack extends React.Component {



  render (){
    
    return(
      <Col className="main-space" >
        
        <Col className = "main-space-header">
          <Row className='main-header-mobile'>XM STUDIO<br/>RESEARCH + ARCHITECTURE
          </Row>
          <Row className='main-title'>Book Stack
          </Row>
        </Col>
      
        <Col className='main-content'>
          <AcademicResearchShelf/>
          <BookShelf shelfName="Academic design"/>
          <BookShelf shelfName="Academic essays"/>
        </Col>
      
      </Col>
    );
  
} 
}


export default XMBookStack;