import React from 'react';
import { tween, styler, easing,  spring } from "popmotion";

class BookstackButton extends React.Component{
  constructor(props){
    super(props);
    this.bookRef = React.createRef();
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
    const leftPalm = styler(this.bookRef.current.querySelector("#book"));

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
    const book = styler(this.bookRef.current.querySelector("#book"));
    const scalePaws = spring({
      from:{scale:1},
      to:{scale:1.2},
      duration:200,
      ease: easing.linear
    });
    this.pawScaling = scalePaws.start(book.set);
  }

  stopHover = () =>{
    const book = styler(this.bookRef.current.querySelector("#book"));
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
      
        <g id="compassFull" ref={this.bookRef} >
          <g id="book">
            <rect fill="none" stroke-width="6px" stroke="black" class="cls-1" x="124.55" y="162.41" width="123.37" height="197.02"/>
            <line fill="none" stroke-width="6px" stroke="black" class="cls-1" x1="147.65" y1="195.74" x2="224.82" y2="195.74"/>
            <line fill="none" stroke-width="6px" stroke="black" class="cls-1" x1="147.65" y1="222.28" x2="224.82" y2="222.28"/>
            <line fill="none" stroke-width="6px" stroke="black" class="cls-1" x1="147.65" y1="248.82" x2="224.82" y2="248.82"/>
            <line fill="none" stroke-width="6px" stroke="black" class="cls-1" x1="147.65" y1="275.36" x2="224.82" y2="275.36"/>
            <line fill="none" stroke-width="6px" stroke="black" class="cls-1" x1="147.65" y1="328.44" x2="224.82" y2="328.44"/>
            <line fill="none" stroke-width="6px" stroke="black" class="cls-1" x1="147.65" y1="301.9" x2="224.82" y2="301.9"/>
            <rect fill="none" stroke-width="6px" stroke="black" class="cls-1" x="247.92" y="162.41" width="123.37" height="197.02"/>
            <line fill="none" stroke-width="6px" stroke="black" class="cls-1" x1="271.02" y1="195.74" x2="348.19" y2="195.74"/>
            <line fill="none" stroke-width="6px" stroke="black" class="cls-1" x1="271.02" y1="222.28" x2="348.19" y2="222.28"/>
            <line fill="none" stroke-width="6px" stroke="black" class="cls-1" x1="271.02" y1="248.82" x2="348.19" y2="248.82"/>
            <line fill="none" stroke-width="6px" stroke="black" class="cls-1" x1="271.02" y1="275.36" x2="348.19" y2="275.36"/>
            <line fill="none" stroke-width="6px" stroke="black" class="cls-1" x1="271.02" y1="328.44" x2="348.19" y2="328.44"/>
            <line fill="none" stroke-width="6px" stroke="black" class="cls-1" x1="271.02" y1="301.9" x2="348.19" y2="301.9"/>
          </g>
        </g>
      </svg>
      </div>
    );
  }
}

export default BookstackButton;