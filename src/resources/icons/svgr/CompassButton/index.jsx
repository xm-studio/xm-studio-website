import React from 'react';
import { tween, styler, easing, spring } from "popmotion";

class CompassButton extends React.Component{
  constructor(props){
    super(props);
    this.compassRef = React.createRef();
  }

  componentDidUpdate(prevProps){
    const{isActive} = this.props;
    if(isActive !== prevProps.isActive){
      if(isActive){
        this.hoverHandle();
      }
      else{
        this.stopHover();
      }
      
    }
  }


  animateNeedle = () => {
    const needle = styler(this.compassRef.current.querySelector("#needle"));
    const rotateNeedle = tween({
      
      from: {rotate :0},
      to:{rotate:360},
      duration:600,
      loop:1,
      ease: easing.linear
    });

    this.needleRotation = rotateNeedle.start(needle.set);
    this.stopHover();
  };

  stopNeedleAnimation =()=>{
    this.needleRotation && this.needleRotation.stop();
  };
  
  hoverHandle = () =>{
    const compass = styler(this.compassRef.current.querySelector("#compass"));
    const scaleNeedle = spring({
      from:{scale:1},
      to:{scale:1.2},
      duration:200,
      ease: easing.linear
    });
    this.needleScaling = scaleNeedle.start(compass.set);
  }

  stopHover = () =>{
    const compass = styler(this.compassRef.current.querySelector("#compass"));
    const scaleNeedle = spring({
      from:{scale:1.2},
      to:{scale:1},
      duration:200,
      ease: easing.linear
    });
    this.needleScaling = scaleNeedle.start(compass.set);
  }

  render(){
    console.log("Helloooo");
    //const{play} = this.props;
    return(
      <div className="sidebar-button" onMouseOver={this.hoverHandle} onMouseOut={this.stopHover} onClick={this.animateNeedle}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" >
      
        <g id="compassFull" ref={this.compassRef} >
          <g id="compass">
          <circle class="compass_circle" cx="251.56" cy="260.92" r="121.23" fill="rgba(0,0,0,0)" stroke-width="6px" stroke="black"/>
          <g id="needle">
            <polygon class="compass_needle" fill="none" stroke-width="6px" stroke="black" points="315.88 196.6 291.31 236.35 266.75 276.11 227 300.67 187.24 325.23 211.81 285.48 236.37 245.73 276.12 221.16 315.88 196.6"/>
            <line class="compass_needle" fill="none" stroke-width="6px" stroke="black" x1="266.75" y1="276.11" x2="236.37" y2="245.73"/>
          </g>
          </g>
        </g>
      </svg>
      </div>
    );
  }
}

export default CompassButton;