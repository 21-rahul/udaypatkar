import React, { Component } from 'react';
import pintro from "../images/image.jpg"
// import "../App.css";
import {Link,Redirect} from "react-router-dom";
import Common from './Common';

export default class Religious extends Component {  
    render() {
        return (
          <>
          <Common name="Religious"/>
          <div>
                <div className="container my-5">
                <div className="row">
                    <div class="col-lg-3 col-md-4 col-12">
                        <div class="gallery">
                            <a target="_blank" href="../images/image.jpg">
                              <img src={pintro} alt="Forest" width="600" height="400"/>
                            </a>
                            <div class="desc">Add a description of the image here</div>
                          </div>
                    </div>

                    <div class="col-lg-3 col-md-4 col-12">
                        <div class="gallery">
                            <a target="_blank" href="../images/image.jpg">
                              <img src={pintro} alt="Forest" width="600" height="400"/>
                            </a>
                            <div class="desc">Add a description of the image here</div>
                          </div>
                    </div>

                    <div class="col-lg-3 col-md-4 col-12">
                        <div class="gallery">
                            <a target="_blank" href="../images/image.jpg">
                              <img src={pintro} alt="Forest" width="600" height="400"/>
                            </a>
                            <div class="desc">Add a description of the image here</div>
                          </div>
                    </div>

                    <div class="col-lg-3 col-md-4 col-12">
                        <div class="gallery">
                            <a target="_blank" href="../images/image.jpg">
                              <img src={pintro} alt="Forest" width="600" height="400"/>
                            </a>
                            <div class="desc">Add a description of the image here</div>
                          </div>
                    </div>
                </div>
            </div>
            </div>
           </>
        )
    }
}
