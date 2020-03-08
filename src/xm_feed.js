import React from 'react';

import {Row, Col} from 'react-bootstrap';
import './app.css';
import './custom.scss';
import MainFeed from './components/mainfeed.js';

class XMFeed extends React.Component {


  render (){
    
      return(
      <Col className="main-space">
        
        <Col className = "main-space-header">
          <Row className='main-header-mobile'>XM STUDIO<br/>RESEARCH + ARCHITECTURE
          </Row>
 
          <Row className='main-title'>Feed
          </Row>
        </Col>
      
        <div>
          <MainFeed/>
              
        </div>
      
      </Col>
      );
    
  }
}


export default XMFeed;