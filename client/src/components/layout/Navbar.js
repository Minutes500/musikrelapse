import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../../classy-nav.css";
import logo from '../../img/logo.png';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import {clearCurrentProfile} from "../../actions/profileActions";


class Navbar extends Component{
    onLogoutClick(e){
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
          }
    
    render(){
        const {isAuthenticated} = this.props.auth;
        // Regsitered Nav
        const authLinks =(
          <div className="classy-menu">

          <div className="classycloseIcon">
          <div className="cross-wrap"><span className="top"/><span className="bottom"/></div>
          </div>

                      <div className="classynav">
                      <ul>
                       
                       <li> <a 
            href="/" 
            onClick={this.onLogoutClick.bind(this)} 
            className="nav-link">Logout</a></li>
                      </ul>
                      </div>
    </div>
);
    
        
        //Guest Nav
              const guestLinks =(
          
                <div className="classy-menu">

                                                    <div className="classycloseIcon">
                                                    <div className="cross-wrap"><span className="top"/><span className="bottom"/></div>
                                                    </div>

                                                                <div className="classynav">
                                                                <ul>
                                                                  <li><Link to="/">Home</Link></li>
                                                                  <li><Link to="/contact">Contact</Link></li>
                                                                  <li><Link to="/login">Login</Link></li>
                                                                  <li><Link to="/register">Register</Link></li>
                                                                </ul>
                                                                </div>
                                              </div>
                );
              
         return(
          <div className="header-area">
               
               <div className="oneMusic-main-menu">
          <div className="class-nav-container breakpoint-off">
      <div className="container">
      <div className="classy-navbar justify-content-between " id="oneMusicNav">
      <Link className="nav-brand" to="/"><img src={logo} alt={"logo"} /></Link>
      <div className = "classy-navbar-toggler">
                                    <span className="navbarToggler"><span></span><span></span><span></span></span>
                                    </div>

          {isAuthenticated ? authLinks : guestLinks }
          </div>
          </div>
       </div>
      </div>
    </div>
    
  
        )
    }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}


const mapStateToProps =(state) =>({
  auth: state.auth
})

export default connect(mapStateToProps,{logoutUser, clearCurrentProfile})(Navbar)
  