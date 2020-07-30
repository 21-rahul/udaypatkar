import React, { Component } from 'react';
import Footer from "./Footer";
import pintro from "../images/image.jpg"
// import "../App.css";
import Common from './Common';
import {Link,Redirect} from "react-router-dom";

export default class About extends Component {  
    render() {
        return (
          <>
          <Common name="About"/>
          <div style={{backgroundColor:"#EAFAF9"}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                    <dl>
                    <dd><p>Name: Uday Chandrakant Patkar</p></dd>
                    <dd><p>Date of Birth:&nbsp;July 12, 1981</p></dd>
                    </dl>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                    <h3>Education</h3>
                    <ul className="list-unstyled">
                   <li> <p>Primary and Secondary Education Jaihind High School, Devpur Dhule</p></li>
                   <li> <p>Diploma in Industrial Electronics: S. S. V P. S, College, Devpur Dhule</p></li>
                   <li> <p>B. E. Computer Engineering: S. S. B. T E. College, Bhambhori, Jalgaon</p></li>
                   <li> <p>Post Graduate Diploma in Business Management B. M. R., College, Wakad, Pune</p></li>
                   <li> <p>M.Tech. Income Tax., Bharati University Opinion Engineering College, Katraj</p></li>
                   <li> <p>Ph.D. started at Rajasthan Tilak University of Maharashtra</p></li>
                   <li> <p>Passed 5 exams in Sanskrit language.</p></li>
                   <li> <p>Passed 5 exams of Philosophy University in Thane,</p></li>
                   <li> <p>3 Passed the exam of smooth music.</p></li>
                   <li> <p>3 Papers published internationally</p></li>
                   <li> <p>2 year old Shrihari Kirtanotajik Sabha completes the annual course of Pune school and first-class</p></li>
                   <li> <p>Well known as Narrator / Writer, Writer, Interpreter, Speaker, Nardian Artist</p></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
           </>
        )
    }
}
