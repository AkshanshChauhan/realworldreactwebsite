import {React} from "react";
import {BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom";

import Home from "../home";
import Cofounder from "../pages/cofounder";
import Investor from "../pages/invertor";
import Login from "../logs/login";
import Signup from "../logs/signup";

import "./nav.style.scss";

import logo from "../ximg/logo.svg";
import web from "../ximg/web.svg";
import { useState } from "react";

import send from "./navimages/send.svg";
import clip from "./navimages/clip.svg";

function Nav() {
    const loginshow = ()=>{
        document.getElementById("loginpage").style.display = "grid";
    }

    const signupshow = ()=>{
        document.getElementById("signuppage").style.display = "grid";
    }

    const showmessagebar = ()=>{
        document.getElementById("msgscreen").style.display = "grid";
        document.getElementById("msgbox").style.transform = "translateX(1435px)";
        document.getElementById("msgscreen").style.zIndex = "100";
        document.getElementById("msgscreen").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    }

    const showmessagebox = ()=>{
        document.getElementById("msgbox").style.transform = "translateX(66vw)";
    }

    const hidemessagebox = ()=>{
        document.getElementById("msgscreen").style.zIndex = "9";
        document.getElementById("msgbox").style.transform = "translateX(100vw)";
        document.getElementById("msgscreen").style.display = "none";
    }
    return (
        <>
        <div id="bfologin">
            <BrowserRouter className="main">
                <div className="navigation">
                    <img className="logotop" src={logo} alt="loding: logo" />
                    <div className="navlinks">
                        <Link className="Link" to="home">Home</Link>
                        <Link className="Link" to="home"  id="link2">Co-founder</Link>
                        <Link className="Link" to="home">Investor</Link>
                        <Link className="Link" to="home" id="loginbtn" onClick={loginshow}>Login</Link>
                        <Link className="Link" to="home"><button onClick={signupshow}>Sign up</button></Link>
                        <Link className="Link" to="home"><img className="web" src={web}/></Link>
                    </div>
                </div>
                <Routes>
                    <Route path="home" element={<Home></Home>}></Route>
                    <Route path="" element={<Navigate to='home'/>}></Route>
                </Routes>
            </BrowserRouter>
            <Login></Login>
            <Signup></Signup>
        </div>

        <div id="aftlogin">
            <BrowserRouter className="main">
                <div className="navigation">
                    <img className="logotop" src={logo} alt="loding: logo" />
                    <div className="navlinks">
                        <Link className="Link" to="home" defaultChecked={true}>Home</Link>
                        <Link className="Link" to="cofounder"  id="link2">Co-founder</Link>
                        <Link className="Link" to="investor">Investor</Link>
                        <div className="search">
                            <div className="searchopt">
                                <input type="search" placeholder="Search..." />
                                <div className="privious"><div className="usrimg"></div>Ben Walter <div className="cross">X</div></div>
                                <div className="privious"><div className="usrimg"></div>Jerry Mathew <div className="cross">X</div></div>
                                <div className="privious">Technology<div className="cross">X</div></div>
                                <div className="privious">Design<div className="cross">X</div></div>
                                <div className="privious"><div className="usrimg"></div>Sabir David <div className="cross">X</div></div>
                                <div className="privious">Developer<div className="cross">X</div></div>
                            </div>
                        </div>
                        <div className="message" onClick={showmessagebar}></div>
                        <div className="user"></div>
                        <Link className="Link" to="home"><img className="web" src={web}/></Link>
                    </div>
                </div>

                <div className="rightmessagebar" id="msgscreen">
                    <div className="messagebox" id="msgbox">
                        <div className="left">
                            <div className="usr" onClick={showmessagebox}></div>
                            <div className="usr"></div>
                            <div className="usr"></div>
                        </div>
                        <div className="right">
                            <div className="title">New Message<div className="cross" onClick={hidemessagebox}>X</div></div>
                            <div className="prfo">
                                <div className="name">Ben Walter</div>
                                <div className="workin">Mircosoft Jaipur</div>
                            </div>
                            <div className="dpandinfo">
                                <div className="usrdp"></div>
                                <div className="namedp">Ben Walter</div>
                                <div className="workindp">Microsoft - Vellore, India</div>
                                <div className="addressdp">Jaipur, Rajasthan, India</div>
                            </div>
                            <div className="time">
                                <div className="line2"></div>
                                <div className="day">Monday</div>
                                <div className="msg">
                                    <div className="l">
                                        <div className="dpofsender"></div>
                                    </div>
                                    <div className="r">
                                        <div className="nameofsender">
                                            Ben <div className="time">9:39 AM</div>
                                        </div>
                                        <div className="msgs">
                                            <div className="msga">Hi Sofia,</div>
                                            <div className="msga">best Regards, Sofia</div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="msg">
                                    <div className="l">
                                        <div className="dpofsender"></div>
                                    </div>
                                    <div className="r">
                                        <div className="nameofsender">
                                            Sofia <div className="time">9:41 AM</div>
                                        </div>
                                        <div className="msgs">
                                            <div className="msga">Hi Ben Would Love to connect with you.</div>
                                            <div className="msga">best Regards, Daniel</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="messagesend"><img src={clip} width="30px" /><input type="text" placeholder="Message" /><img src={send} width="20px" /></div>
                        </div>
                    </div>
                </div>

                <Routes>
                    <Route path="home" element={<Home></Home>}></Route>
                    <Route path="cofounder" element={<Cofounder></Cofounder>}></Route>
                    <Route path="investor" element={<Investor></Investor>}></Route>
                    <Route path="/" element={<Navigate to='home' />}></Route>
                </Routes>
                
            </BrowserRouter>
        </div>
        </>
    )
};

export default Nav;
