/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import {Link,Switch,Route} from "react-router-dom";
import {$} from 'jquery';
import styled from "styled-components";
export default class Navbar extends Component {
    // componentDidMount=()=>{
    //     $(document).ready(function(){
    //         $(window).scroll(function(){
    //             var scroll = $(window).scrollTop();
    //             if (scroll > 0) {
    //               $(".black").css("background" , "white");
    //             }
          
    //             else{
    //                 $(".black").css("background" , "darkblue");  	
    //             }
    //         })
    //       })
    //     }
    render() {
        return (
            <NavbarContainer>
                <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">Udhay</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav ml-auto">
                  
              <Link to="/">
              <a className="nav-item nav-link " href="#">Home </a> 
              </Link>
            
              <Link to="/Professionals">
              <a className="nav-item nav-link " href="#">Professionals </a>
              </Link>
                
              <Link to="/Religious">
              <a className="nav-item nav-link" href="#">Religious</a>
              </Link>
                
              <Link to="/News">
              <a className="nav-item nav-link" href="#">News</a>
              </Link>
              
              <Link to="/Gallery">
              <a className="nav-item nav-link" href="#">Gallery</a>
              </Link>
                
              <Link to="/About">
              <a className="nav-item nav-link" href="#">About</a>
              </Link>
                  
              <Link to="/Contact">
              <a className="nav-item nav-link active" href="#">Contact us</a>
              </Link>
    </div>
  </div>
</nav>
                
            </NavbarContainer>
        )
    }
}
//NabarContainer

const NavbarContainer = styled.div`
background: var(--dark-blue);
.nav-link{
    &:hover{
        background:var(--light-green);
    }
}
`;