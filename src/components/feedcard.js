import React from 'react';
import { Row} from 'react-bootstrap';
import '../../src/app.css';
import './feedcard.css';
import { animated, useSprings } from 'react-spring';

const FeedCard = ({feed}) => {
    const {id, image, caption, date} = feed;
    return(
        <animated.div className="main-content-feedcard"  style={{backgroundImage: `url(${image})`}}>
            
            <animated.div className="main-content-feedcard-div" >
            
            <p className="main-content-feedcard-text">
            {caption}
            </p>

            <p className="main-content-feedcard-date">
            {date}
            </p>
            
            
            </animated.div>
            
            
            
        </animated.div>
    )
}


export default FeedCard;