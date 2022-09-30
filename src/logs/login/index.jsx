import React from "react";
import "./login.scss";

function Login() {
    const loginpagehide = () => {
        document.getElementById("loginpage").style.display = "none";
        document.getElementById("aftlogin").style.display = "grid";
        document.getElementById("bfologin").style.display = "none";
        
    }
    return (
        <div className="loginsmall" id="loginpage">
            <input type="rel" placeholder="Enter Mobile Number" />
            <a href="#otp">Sent OTP</a>
            <button onClick={loginpagehide}>Sign in</button>
        </div>
    );
}

export default Login;