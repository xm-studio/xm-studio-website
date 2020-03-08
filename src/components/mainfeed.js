import React, {useRef} from 'react';
import { Row} from 'react-bootstrap';
import '../../src/app.css';
import FeedCard from './feedcard.js';
import feeddata from '../resources/Feed/feeddata.js';
import { animated, useSprings } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import clamp from 'lodash-es/clamp';

function MainFeed(){
    const index = useRef(0)
    const [props, set] = useSprings(feeddata.feeds.length, i=>({x:i*window.innerWidth, sc:1, display: 'block'}));
    const bind=useGesture(({down, delta: [xDelta], direction:[xDir], distance, cancel})=>{
      if(down&&distance>window.innerWidth/2)
        cancel((index.current=clamp(index.current+(xDir>0 ?-1 : 1),0,feeddata.feeds.length-1)));
      set(i=>{
        if(i<index.current-1||i>index.current+1) return {display:'none'};
        const x=(i-index.current)*window.innerWidth + (down?xDelta:0);
        const sc = down ? 1-distance/window.innerWidth/2:1;
        
        return {x,sc, display: 'block'};
      }
      )
    })
  


    
    return props.map(({x,display,sc},i)=>(
      <animated.div className="main-content-feed" {...bind()} key={i} style={{transform: x.interpolate(x=>`translate3d(${x}px,0,0)`)}}>
            <FeedCard style={{transform: sc.interpolate(s=> `scale(${s})`)}}  feed = {feeddata.feeds[i]}/>
        </animated.div>
    )
        
    )
}

export default MainFeed;