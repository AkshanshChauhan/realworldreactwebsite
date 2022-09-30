import React from "react";
import "./signup.scss";

import Signup2 from "./signin1/moreaboutyou";

function Signup() {
    const closesignup = ()=>{
        document.getElementById("signuppage").style.display = "none";
        document.getElementById("signup2").style.display = "grid";
    }
    return (
        <>
        <div className="signupbg" id="signuppage">
            <div className="signup">
                <div className="cross" onClick={closesignup}>X</div>
                <div className="logo"></div>
                <div className="small">Join the community</div>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Email" />
                <div className="chk"><input type="checkbox" />Please send me the occasional newsletter</div>
                <div className="chk"><input type="checkbox" />I agree to the privacy policy and terms of service</div>
                <a href="#ropp">Read our privacy policy</a>
                <a href="#rotos">Read our trems of service</a>
                <div className="joinas">Join as</div>
                <div className="btn1">Co-founder/Ldeaholder</div>
                <div className="btn2" onClick={closesignup}>Investor</div>
            </div>
        </div>
        <Signup2></Signup2>
        </>
    );
    
}

export default Signup;