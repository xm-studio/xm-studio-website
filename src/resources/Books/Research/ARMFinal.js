import React from "react";
import $ from 'jquery';

import {Row, Col, Container, Table} from 'react-bootstrap';


import Flipbook from "../../../components/flipbook.js";
import "../../../components/turn.css";

import testpage from './ARM Final/Book_Page_0.jpg';

const options = {
    width: 500,
    height: 400,
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
    './ARM Final/Book_Page_0.jpg',
    './ARM Final/Book_Page_1.jpg',
    './ARM Final/Book_Page_2.jpg',
    './ARM Final/Book_Page_3.jpg',
    './ARM Final/Book_Page_4.jpg',
    './ARM Final/Book_Page_5.jpg',
    './ARM Final/Book_Page_6.jpg'
  ];
  
  class ARMFinal extends React.Component{

    renderPages(length){
      let pages =[];
      var allpages = require("./ARM Final/");
      for(let i=0;i<parseInt(length);i++){
        
        pages.push(<Col className="main-content-text">
        <img src={allpages[i]} height = "20" alt="" />
        hello
      </Col>);
      }
      return pages;
    }
    
    render(){
      
      return (
        
        <Container >
          <Col className = "main-space-header">
            <Row className='main-header'>XM STUDIO<br/>RESEARCH + ARCHITECTURE > BOOK STACK
            </Row>
            <Row className='main-title'>Book Stack
            </Row>
          </Col>
          <Col >
            <Flipbook options={options} className="magazine">
            
              {pages.map((page, index) => (
                <div key={index} className="page">
                  <img src={require('./ARM Final/Book_Page_0.jpg')} alt="" />
                </div>
              ))}
            </Flipbook>
          </Col>
          <Col className="main-content-text">
          {this.renderPages(6)}
          </Col>
        </Container>
        );
      }
  }
 
  export default ARMFinal;