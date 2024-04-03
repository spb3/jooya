import React from "react";
import './header.css'
import mainLogo from '../image/jooyajooya.png'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return(
        <div className="header_container">
            <div className="header_wrap">
                <div className="reguster_banner_box">지금 가입하고,<span>1만코인</span>받으세요!</div>
                <div className="top_nav_container">
                    <div className="top_nav_wrap">
                        <div className="top_nav_left"><FontAwesomeIcon icon={faBars} /></div>
                        <span className="top_nav_logo">
                            <img src={mainLogo} alt="" />
                        </span>
                        <div className="top_nav_right"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;