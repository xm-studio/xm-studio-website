import React from "react";
import {Row, Col, Container} from 'react-bootstrap';
import Flipbook from "../../../components/flipbook.js";
import PinchToZoom from 'react-pinch-and-zoom';

  class ARMFinal extends React.Component{
    
    render(){
      
      return (
        
        <Container >
          <Col className = "main-space-header">
            <Row className='main-header'>XM STUDIO<br/>RESEARCH + ARCHITECTURE > BOOK STACK ><br/>
            </Row>
            <Row className='main-book-title'>Representation tales of the Winton Gallery
            </Row>
          </Col>
          <Col className = "main-content-book-main">
          <PinchToZoom className = "main-content-book">
            
            
              <Flipbook className="magazine" imgpath="https://github.com/xm-studio/xm-studio-website/raw/website-creation/src/resources/Books/Research/ARM%20Final/" imgnum="6"/>
            
            
          </PinchToZoom>
          </Col>
        </Container>
        );
      }
  }
 
  export default ARMFinal;