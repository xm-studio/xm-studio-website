import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import '../../../app.css';
import '../../../custom.scss';
import { Link } from 'react-router-dom';


import '../../../components/bookshelf.css';

class AcademicResearchShelf extends React.Component {

  render (){
    
    return(
      <Row>
            <div className="book-shelf">
                <Link to="/bookstack/research/arm_final"><img src="https://github.com/xm-studio/xm-studio-website/raw/website-creation/src/resources/Books/Research/ARM%20Final/Book_Page_1.jpg" alt="ARM Final"/></Link>
                <Link to="/bookstack/research/discrete_element_assemblies"><img src="https://github.com/xm-studio/xm-studio-website/raw/website-creation/src/resources/Books/Research/Discrete%20Element%20Assemblies/Book_Page_01.jpg" alt="Discrete Element Assemblies"/></Link>
                <Link to="/bookstack/research/cellular_automata"><img src="https://github.com/xm-studio/xm-studio-website/raw/website-creation/src/resources/Books/Research/Cellular%20Automata/Book_Page_01.jpg" alt="Cellular Automata"/></Link>
                <img src="https://github.com/xm-studio/xm-studio-website/raw/website-creation/src/resources/Books/Research/Cellular%20Automata/Book_Page_01.jpg" alt="Cellular Automata"/>
                <img src="https://github.com/xm-studio/xm-studio-website/raw/website-creation/src/resources/Books/Research/Cellular%20Automata/Book_Page_01.jpg" alt="Cellular Automata"/>

            
            </div> 
            <div className="book-shelf-base">

            </div>
            <div className="book-shelf-name">
                ACADEMIC RESEARCH
            </div>
            </Row>
    );
  
} 
}


export default AcademicResearchShelf;