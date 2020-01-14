import React from "react";
import $ from 'jquery';

import {Row, Col, Container, Table} from 'react-bootstrap';


import Flipbook from "../../../components/flipbook.js";
import "../../../components/turn.css";

import testpage from './ARM Final/Book_Page_0.jpg';

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
    './ARM Final/Book_Page_0.jpg',
    './ARM Final/Book_Page_1.jpg',
    './ARM Final/Book_Page_2.jpg',
    './ARM Final/Book_Page_3.jpg',
    './ARM Final/Book_Page_4.jpg',
    './ARM Final/Book_Page_5.jpg',
    './ARM Final/Book_Page_6.jpg'
  ];
  
  class ARMFinal extends React.Component{

    renderPages(path, length){
      let pages =[];
      for(let i=0;i<parseInt(length);i++){
        let filename = path.concat('Book_Page_',(i+1).toString(),'.jpg');
        pages.push(<div key={i} className="page">
        <img src={filename} alt="" />
      </div>);
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
            
            {this.renderPages("https://github.com/xm-studio/xm-studio-website/raw/website-creation/src/resources/Books/Research/ARM%20Final/",6)}

            </Flipbook>
          </Col>
        </Container>
        );
      }
  }
 
  export default ARMFinal;