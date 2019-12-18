import React from 'react';
import { tween, styler, easing,  spring } from "popmotion";

class BookstackButton extends React.Component{
  constructor(props){
    super(props);
    this.compassRef = React.createRef();
  }

  componentDidUpdate(prevProps){
    const{isActive} = this.props;
    if(isActive !== prevProps.isActive){
      if(isActive){
        this.animateNeedle();
      }
      else{
        this.stopNeedleAnimation();
      }
      
    }
  }


  animatePaws = () => {
    const leftPalm = styler(this.compassRef.current.querySelector("#book"));

    const appear = tween({
      from: {pathLength :0},
      to:{pathLength :100},
      duration:1000,
      ease: easing.linear
    });

    this.needleRotation = appear.start(leftPalm.set);
    this.stopHover();
  };

  stopNeedleAnimation =()=>{
    this.needleRotation && this.needleRotation.stop();
  };
  
  hoverHandle = () =>{
    const book = styler(this.compassRef.current.querySelector("#book"));
    const scalePaws = spring({
      from:{scale:1},
      to:{scale:1.2},
      duration:200,
      ease: easing.linear
    });
    this.pawScaling = scalePaws.start(book.set);
  }

  stopHover = () =>{
    const book = styler(this.compassRef.current.querySelector("#book"));
    const scalePaws = spring({
      from:{scale:1.2},
      to:{scale:1},
      duration:200,
      ease: easing.linear
    });
    this.pawScaling = scalePaws.start(book.set);
  }

  render(){
    console.log("Helloooo");
    //const{play} = this.props;
    return(
      <div className="sidebar-button" onMouseOver={this.hoverHandle} onMouseOut={this.stopHover} onClick={this.animatePaws}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" >
      
        <g id="compassFull" ref={this.compassRef} >
          <g id="book">
            <path fill="none" stroke-width="6px" stroke="black" class="cls-1" d="M294.62,186.92v75a21.71,21.71,0,0,1-21.71,21.71H185.76l-38.85,28.58,12.85-28.58h-9A21.7,21.7,0,0,1,129,261.92v-75a21.7,21.7,0,0,1,21.7-21.71H272.91A21.71,21.71,0,0,1,294.62,186.92Z"/>
            <path fill="none" stroke-width="6px" stroke="black" class="cls-1" d="M373.6,242.21v75a21.72,21.72,0,0,1-21.71,21.71h-9l12.85,28.58-38.84-28.58H229.73A21.73,21.73,0,0,1,208,317.22V283.63h64.9a21.71,21.71,0,0,0,21.71-21.71V220.51h57.27A21.7,21.7,0,0,1,373.6,242.21Z"/>
            <line fill="none" stroke-width="6px" stroke="black" class="cls-1" x1="153.93" y1="192.1" x2="271.14" y2="192.1"/>
            <line fill="none" stroke-width="6px" stroke="black" class="cls-1" x1="153.93" y1="214.89" x2="271.14" y2="214.89"/>
            <line fill="none" stroke-width="6px" stroke="black" class="cls-1" x1="153.93" y1="237.69" x2="271.14" y2="237.69"/>
            <line fill="none" stroke-width="6px" stroke="black" class="cls-1" x1="153.93" y1="259.33" x2="208.44" y2="259.33"/>
          </g>
        </g>
      </svg>
      </div>
    );
  }
}

export default BookstackButton;