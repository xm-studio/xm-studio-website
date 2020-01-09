import React from "react";
import $ from 'jquery';

import {Row, Col, Container} from 'react-bootstrap';


import Flipbook from "../../../components/flipbook.js";
import "../../../components/turn.css";

const options = {
    width: 400,
    height: 300,
    autoCenter: true,
    display: "double",
    acceleration: true,
    elevation: 50,
    
    gradients: !$.isTouch,
    when: {
      turned: function(e, page) {
        console.log("Current view: ", $(this).turn("view"));
      }
    }
  };
  
  const pages = [
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg"
  ];
  
  class PrototypingWorkshopBook extends React.Component{
      render(){
        return (
                  <Container >
        
        <Col className = "main-space-header">
          <Row className='main-header'>XM STUDIO<br/>RESEARCH + ARCHITECTURE > BOOK STACK
          </Row>
          <Row className='main-title'>Book Stack
          </Row>
        </Col>
      
        <Col className='main-content'>
        <Flipbook options={options} className="magazine">
              {pages.map((page, index) => (
                <div key={index} className="page">
                  <img src={page} alt="" />
                </div>
              ))}
            </Flipbook>
        </Col>
      
      </Container>
            
          );
      }
    
  }
 
  export default PrototypingWorkshopBook;