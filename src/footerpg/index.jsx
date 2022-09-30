import React from "react";

import "./footer.scss";
import logo from "../ximg/logo.svg";
import linkin from "../ximg/linkin.svg";
import fb from "../ximg/fb.svg";
import insta from "../ximg/insta.svg";
import tweet from "../ximg/tweet.svg";

function Footer() {
    return(
        <footer>
            <div className="upperfooter">
                <div className="box">
                    <img src={logo} width="150px" />
                    <div>Providing innovators with a platform to engage and interact with Co-Founders, Mentors and Investors.</div>
                    <div className="socialmedialinks">
                        <img src={fb} width="20px"/>
                        <img src={insta} width="20px"/>
                        <img src={tweet} width="20px"/>
                        <img src={linkin} width="20px"/>
                    </div>
                </div>
                <br /><br /><br /><br />d
                <div className="box">
                    <div className="head">COFOUNDER</div>
                    <div className="sublink">Home</div>
                    <div className="sublink">Cp-founder</div>
                    <div className="sublink">Investor</div>
                </div>
                <div className="box">
                    <div className="head">POLICIES</div>
                    <div className="sublink">Terms of services</div>
                    <div className="sublink">Copyright policy</div>
                    <div className="sublink">Privacy policy</div>
                </div>
                <div className="box">
                    <div className="head">CONTACT</div>
                    <div className="sublink">sales@cofounder.com</div>
                    <div className="sublink">+1 (987) 8876722</div>
                </div>
            </div>
            <div className="copyrights">Copyright © 2022 CoFounder.-2022. All rights reserved.</div>
        </footer>
    );

}

export default Footer;