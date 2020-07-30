/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelopeSquare,faPhoneAlt,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Common from './Common';

export default class Contact1 extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:"",
            email:"",
            phone:"",
            subject:"",
            message:""
    };
}
   
    handleChangeMessage = event =>{
        this.setState({
            message:event.target.value
        });
    }
    handleChangeName = event =>{
        this.setState({
            name:event.target.value
        });
    }
    handleChangeEmail= event =>{
        this.setState({
            email:event.target.value
        });
    }
    handleChangeSubject= event =>{
        this.setState({
            subject:event.target.value
        });
    }
    handleChangePhone= event =>{
        this.setState({
            phone:event.target.value
        });
    }

    handleSubmit = event =>{
        event.preventDefault();
    }
    render(){
        return( 
        <>
            <Common name="Contact"/>
{/* contact information start */}
            <div className="container mt-5">
                <div className="row">
                    <div class="col-lg-4 col-md-4 col-12">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{fontSize:"50px"}}/>
                            <div className="cont mt-3">
                            <p>A24, Kunal Nest Manik Colony,Pimpri Chinchwad<br/> Link Road,Opposite Ambika Super Shopee Front <br/> Near Darshan
                            Hall, Chinchwad, Pune, 411033</p>
                            </div>
                        </div> 
                    </div>

                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faPhoneAlt} style={{fontSize:"50px"}}/>
                            <div className="cont mt-3">
                            <p>+91 97669 38249</p>
                            <p> +9198505 34525</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="text-center">
                            <FontAwesomeIcon icon={faEnvelopeSquare} style={{fontSize:"50px"}}/>
                            <div className="cont mt-3">
                            <p>uday.patkar@bharatividyapeeth.edu</p>
                            <p> patkarudayc@gmail.com</p>
                            <p>support@udaypatkar.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* contact information end */}

{/* form start */}
            <div className="my-5">
                <h1 className="text-center" style={{color:"#16162D"}}>Contact Me</h1>
                <p className="text-center cont">Fields marked with an <span style={{color:"red"}}>*</span> are required</p>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-8 col-10 mx-auto">  

                    <form>
                    <div class="form-group mb-4 cont">
                        <label for="exampleFormControlInput1">Full Name<span style={{color:"red"}}>*</span></label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" 
                        name="fullname"
                        value={this.state.name}
                        onChange = {this.handleChangeName}
                        required/>
                    </div>

                    <div class="form-group mb-4 cont">
                        <label for="exampleFormControlInput1">Phone<span style={{color:"red"}}>*</span></label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" 
                        name="phone"
                        value={this.state.phone}
                        onChange = {this.handleChangePhone}
                        required/>
                    </div>

                    <div class="form-group mb-4 cont">
                        <label for="exampleFormControlInput1">Email address<span style={{color:"red"}}>*</span></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" 
                        name="email"
                        value={this.state.email}
                        onChange = {this.handleChangeEmail}
                        required/>
                    </div>

                    <div class="form-group mb-4 cont">
                        <label for="exampleFormControlInput1">Subject<span style={{color:"red"}}>*</span></label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" 
                        name="subject"
                        value={this.state.subject}
                        onChange = {this.handleChangeSubject}
                        required/>
                    </div>

                    <div class="form-group mb-4 cont">
                        <label for="exampleFormControlTextarea1">Any Suggestion</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"
                        style={{backgroundColor:"#F8F8F8",border: "2px solid #ccc"}}
                        name="msg"
                        value={this.state.message}
                        onChange = {this.handleChangeMessage}
                        required></textarea>
                    </div>

                    <div class="col-12 text-center">
                        <button type="submit" class="btn btn-secondary mb-2">Submit</button>
                    </div>
                    </form>

                    </div>
                </div>
            </div>
{/* form end */}
        </>
        )
    };
};