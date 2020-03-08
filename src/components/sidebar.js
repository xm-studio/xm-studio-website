import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/app.css';


import CompassButton from '../resources/icons/svgr/CompassButton/index.jsx';
import PawprintButton from '../resources/icons/svgr/PawprintButton/index.jsx';
import BookstackButton from '../resources/icons/svgr/BookstackButton/index.jsx';
import ContactButton from '../resources/icons/svgr/ContactButton/index.jsx';
import TeamButton from '../resources/icons/svgr/TeamButton/index.jsx';

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
            
            
            <Link to="/feed"><CompassButton /><div class="sidebar-button-name">Feed</div></Link>
            <Link to="/projects"><PawprintButton /><div class="sidebar-button-name">Projects</div></Link>
            <Link to="/bookstack"><BookstackButton/><div class="sidebar-button-name">Book Stack</div></Link>
            <Link to="/team"><TeamButton/><div class="sidebar-button-name">Team</div></Link>
            <Link to="/contact"><ContactButton/><div class="sidebar-button-name">Contact</div></Link>

            <div className='main-header-desktop'>XM STUDIO<br/>RESEARCH + ARCHITECTURE
          </div>

        </div>
        );
    }   
    
    
}

export default Sidebar;