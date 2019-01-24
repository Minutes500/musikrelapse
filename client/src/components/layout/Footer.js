import React from "react";
import logo from '../../img/logo.png';

export default ()=>{
    return(
        <footer className="footer-area">
        <div className="container">
            <div className="row d-flex flex-wrap align-items-center">
                <div className="col-12 col-md-6">
      <img className="footerbrand" src={logo} alt={"logo"}/>
      <p className="copywrite-text">Converted and Made by Stanley and Danny</p>
      
      </div>
                  

                <div className="col-12 col-md-6">
                    <div className="footer-nav">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}