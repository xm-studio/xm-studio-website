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
            <path fill="none" stroke-width="6px" stroke="black" class="cls-1" d="M233,288a33,33,0,1,1-33-33A33,33,0,0,1,233,288Z"/>
            <path fill="none" stroke-width="6px" stroke="black" class="cls-1" d="M250,345.64a80.26,80.26,0,0,0-11.81,42.46H138.05c0-34.16,20.29-62.78,47.56-70.33a33,33,0,0,0,28.61,0C228.83,321.81,241.43,331.9,250,345.64Z"/>
            <path fill="none" stroke-width="6px" stroke="black" class="cls-1" d="M333.09,288a33,33,0,1,1-33-33A33.05,33.05,0,0,1,333.09,288Z"/>
            <path fill="none" stroke-width="6px" stroke="black" class="cls-1" d="M361.91,388.1H238.17A80.26,80.26,0,0,1,250,345.64c8.55-13.74,21.15-23.83,35.76-27.87a33,33,0,0,0,28.61,0C341.62,325.32,361.91,353.94,361.91,388.1Z"/>
            <path fill="none" stroke-width="6px" stroke="black" class="cls-1" d="M338,186a21.19,21.19,0,0,1-21.19,21.18h0c0,.15,0,.29,0,.43a16.16,16.16,0,0,1-28.66,10.25,35.43,35.43,0,0,1-57.65-2.23,21.18,21.18,0,0,1-38.27-11.87,23.72,23.72,0,1,1,3.2-42c-.09-.94-.14-1.88-.14-2.84A29.39,29.39,0,0,1,247,139.75a21.19,21.19,0,0,1,39.33,10.94c0,.29,0,.59,0,.88a21.17,21.17,0,0,1,26.14,13.65,20.41,20.41,0,0,1,4.38-.46A21.19,21.19,0,0,1,338,186Z"/>
            <circle fill="none" stroke-width="6px" stroke="black" class="cls-1" cx="348.76" cy="228.41" r="8"/>
            <circle fill="none" stroke-width="6px" stroke="black" class="cls-1" cx="151.2" cy="223.56" r="8"/>
            <circle fill="none" stroke-width="6px" stroke="black" class="cls-1" cx="353.36" cy="257.52" r="5.46"/>
            <circle fill="none" stroke-width="6px" stroke="black" class="cls-1" cx="146.6" cy="257.52" r="5.46"/>
          </g>
        </g>
      </svg>
      </div>
    );
  }
}

export default BookstackButton;