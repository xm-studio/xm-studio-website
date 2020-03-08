import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './app.css';
import './custom.scss';


class XMProjects extends React.Component {
  render (){
    
    return(
      <Col className="main-space">
        
        <Col className = "main-space-header">
          <Row className='main-header-mobile'>XM STUDIO<br/>RESEARCH + ARCHITECTURE
          </Row>
          <Row className='main-title'>Projects
          </Row>
        </Col>
      
        <Col className='main-content'>
      
        </Col>
      
      </Col>
    );
  
  }
}


export default XMProjects;