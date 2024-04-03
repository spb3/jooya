import React from "react";
import './signup.css'
import Top from "../components/top";

function Signup(props) {
    return(
        <div className="signup_container">
            <Top title={"회원가입"}></Top>
            <div className="banner">지금 가입하고, <span>1만코인</span>받으세요!</div>
            <div className="signup_wrap">
                
            </div>
        </div>
    )
}

export default Signup;