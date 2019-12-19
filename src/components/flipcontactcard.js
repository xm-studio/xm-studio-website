import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../../src/app.css';
import './flipcontactcard.css';

class FlipContactCard extends React.Component {
    render (){
        
        return(
            <Row className="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front" flex>
                        
                        <Col className="flip-card-front-text"><p>{this.props.name}<br/><span className="subtle-text">{this.props.designation}</span></p></Col>
                        
                    </div>
                    <div class="flip-card-back">
                        <Col className="flip-card-back-text"><p><span className="highlight-text-3">Phone</span>&nbsp;&nbsp;&nbsp;<a className="contact" href={"tel:"+this.props.tel}>{this.props.tel}</a>
                    <br/>
                    <span className="highlight-text-3">Mail</span>&nbsp;&nbsp;&nbsp;<a className="contact" href={"mailto:"+this.props.mail} target="_top">{this.props.mail}</a></p></Col>
                    </div>
                </div>
            </Row>    
        );
    }
}
export default FlipContactCard;
