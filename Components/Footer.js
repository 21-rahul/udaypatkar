import React, { Component } from 'react'
import styled from "styled-components";
export default class Footer extends Component {
    render() {
        return (
            <div class="col-12">
                <div class="footer-inside text-center">
                <hr class="hrtag"/>
                <h5>Made with &nbsp;<i class="fa fa-heart" style={{color:"red"}}></i>&nbsp;at&nbsp;<a href="https://www.hspmsolutions.com/" style={{margin:"auto",padding:"0"}}>HSPM Solutions LLP</a></h5>
                </div>
            </div>
        )
    }
}
