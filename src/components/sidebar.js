import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/app.css';


import CompassButton from '../resources/icons/svgr/CompassButton/index.jsx';
import PawprintButton from '../resources/icons/svgr/PawprintButton/index.jsx';
import BookstackButton from '../resources/icons/svgr/BookstackButton/index.jsx';
import ContactButton from '../resources/icons/svgr/ContactButton/index.jsx';
import TeamButton from '../resources/icons/svgr/TeamButton/index.jsx';
import Icon from '../resources/icons/js/FbButton.js';

class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.state={
        isActive:false
    }
}

play = () =>{
    const {isActive} = this.state;
    this.setState(prevState => ({isActive: !prevState.isActive}));

};
    

    render(){
      const{isActive} = this.state;
        return(
        <div className="main-sidebar">
            
            <Link to="/feed"><CompassButton /></Link>
            <Link to="/projects"><PawprintButton /></Link>
            <Link to="/bookstack"><BookstackButton/></Link>
            <Link to="/team"><TeamButton/></Link>
            <Link to="/contact"><ContactButton/></Link>
        </div>
        );
    }   
    
    
}

export default Sidebar;