import React from "react";

import fileinput1 from "../../../ximg/fileinput1.svg";
import fileinput2 from "../../../ximg/fileinput2.svg";
import logo1 from "../../imgs/logo1.svg";
import logo2 from "../../imgs/logo2.svg";
import logo3 from "../../imgs/logo3.svg";
import logo4 from "../../imgs/logo4.svg";
import logo5 from "../../imgs/logo5.svg";
import upload from "../../imgs/upload.svg";

import "../signup.scss";
function signup2() {
    const signup3page = ()=> {
        document.getElementById("signup2").style.display = "none";
        document.getElementById("signup3").style.display = "grid";
    } 

    const signup4page = ()=> {
        document.getElementById("signup3").style.display = "none";
        document.getElementById("signup4").style.display = "grid";
    }

    const signup5page = ()=> {
        document.getElementById("signup4").style.display = "none";
        document.getElementById("signup5").style.display = "grid";
    }

    const signup6page = ()=> {
        document.getElementById("bfologin").style.display = "none";
        document.getElementById("aftlogin").style.display = "grid";
    }
    return ( 
        <>
        <div className="signupbg" id="signup2">
            <div className="signup">
                <div className="title">More About You</div>
                <div className="innerbox">
                    <div className="smalltitle">
                        Account created successfully
                    </div>
                    <div className="sub">To start investing in startups, you need verify your account. Our regulator, asks for this information to keep your rights protected.</div>
                    <div className="inputs">
                        <div className="place">
                            EMPLOYMENT STATUS <div className="comp">*</div>
                        </div>
                        <select placeholder="Select One">
                            <option value="x">Select one</option>
                        </select>
                        <div className="place">
                            WEALTH SOURCE <div className="comp">*</div>
                        </div>
                        <select placeholder="Select One">
                            <option value="x">Select one</option>
                        </select>
                    </div>
                    <div className="nextbtn" onClick={signup3page}>Next</div>
                </div>
            </div>
        </div>

        <div className="signupbg" id="signup3">
            <div className="signup">
                <div className="title">Identity Verification</div>
                <div className="innerbox">
                    <div className="smalltitle">
                        The document must be an official photo ID.
                    </div>
                    <div className="inputs">
                        <div class="fileinput1" type="file"><img src={fileinput1}/>Use Camera</div>
                        The document must be an official photo ID.
                    </div>
                    <div className="inputs">
                        <div class="fileinput2" type="file"><img src={fileinput2}/>Use Camera</div>
                        The document must be an official photo ID.
                    </div>
                    <div className="nextbtn" onClick={signup4page}>Next</div>
                </div>
            </div>
        </div>

        <div className="signupbg" id="signup4">
            <div className="signup">
                <div className="title">Your Interests</div>
                    <div className="innerbox">
                        <div className="smalltitle">
                            Please tell us a little more info
                        </div>
                        <div className="inputs">
                            <div className="place">Location<div className="comp">*</div></div>
                            <input type="text" class="location" placeholder="City/town where you're based"></input>
                            Industries or startups you would like to invest

                            <div className="input" onClick={signup5page}>
                                <img src={logo1} />
                                <div className="inputdata">
                                    <div className="head">TECH</div>
                                    <div className="sub">Businesses that use technology to innovate & to provide services or products</div>
                                </div>
                            </div>
                            <div className="input">
                                <img src={logo2} />
                                <div className="inputdata">
                                    <div className="head">ECOMMERCE</div>
                                    <div className="sub">Selling and buying of goods and services via online network</div>
                                </div>
                            </div>
                            <div className="input">
                                <img src={logo3} />
                                <div className="inputdata">
                                    <div className="head">GAME</div>
                                    <div className="sub">Development, marketing, production and monetization of video games.</div>
                                </div>
                            </div>
                            <div className="input">
                                <img src={logo4} />
                                <div className="inputdata">
                                    <div className="head">ART</div>
                                    <div className="sub">Creative industries are businesses that focuses on the creative side to make a profit</div>
                                </div>
                            </div>
                            <div className="input">
                                <img src={logo5} />
                                <div className="inputdata">
                                    <div className="head">HEALTH</div>
                                    <div className="sub">Businesses that provide medical services and manufacture medicines & medical equipment</div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <div className="signupbg" id="signup5">
            <div className="signup">
                <div className="title">Your Profile</div>
                <div className="innerbox">
                        
                    <div className="input1">
                        <div className="smalltitle">
                            Select picture to upload for your profile picture
                        </div>
                        <img src={upload} />
                    </div>
                    <div className="input2">
                        <div className="smalltitle">
                            Select picture to upload for your profile picture
                        </div>
                        <img src={upload} />
                    </div>
                </div>
                <div className="nextbtn" onClick={signup6page}>Finish Registration</div>
            </div>
        </div>
    </>
    );
}

export default signup2; 