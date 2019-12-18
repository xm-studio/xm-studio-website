import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../../src/app.css';

class MainSpace extends React.Component {


    render (){
        
        return(
            <Col className="main-space">
                <Col className='main-header'>XM Studio | {this.props.heading}
                </Col>
                <Col className='main-content'></Col>
            </Col>     
        );
    }
}

export default MainSpace;