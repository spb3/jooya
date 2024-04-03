import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './top.css';

function Top(props) {
    return(
        <div className="top_container">
            <div className="top_wrap">
                <div className="top_box">
                    <div className="top_left"><FontAwesomeIcon icon={faBars} /></div>
                    <div className="top_title">{props.title}</div>
                    <div className="top_right"><FontAwesomeIcon icon={faHouse} className="bottom_nav_img"/></div>
                </div>
            </div>
        </div>
    )
}

export default Top;