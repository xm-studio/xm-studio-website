import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import "./turn.js";
import Img from 'react-image';

import "./turn.css";

class Flipbook extends React.Component {
  static defaultProps = {
    style: {},
    className: "",
    options: {    
      width: window.innerWidth*0.85,
      height: window.innerWidth*0.6,
      autoCenter: true,
      display: "double",
      acceleration: true,
      elevation: 50,
      
      gradients: !$.isTouch,
      when: {
        turned: function(e, page) {
          console.log("Current view: ", $(this).turn("view"));
        }
      }}
  };

  componentDidMount() {
    if (this.el) {
      $(this.el).turn(Object.assign({}, this.props.options));
    }
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    if (this.el) {
      $(this.el)
        .turn("destroy")
        .remove();
    }
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  handleKeyDown = event => {
    if (event.keyCode === 37) {
      $(this.el).turn("previous");
    }
    if (event.keyCode === 39) {
      $(this.el).turn("next");
    }
  };

  renderPages(path, length){
    let pages =[];
    for(let i=0;i<parseInt(length);i++){
      let filename = path.concat('Book_Page_',(i+1).toString(),'.jpg');
      pages.push(<div key={i} className="page">
      <Img src={filename} alt="" />
    </div>);
    }
    return pages;
  }

  render() {
    
    return (
      <div
        className={this.props.className}
        style={Object.assign({}, this.props.style)}
        ref={el => (this.el = el)}
      >
        {this.renderPages(this.props.imgpath,this.props.imgnum)}
      </div>
    );
  }
}

export default Flipbook;