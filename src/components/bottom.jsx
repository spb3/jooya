import React from "react";
import './bottom.css'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Bottom() {
    const navigate = useNavigate();
    
    function onClickMyMenu() {
        navigate('/user/mymenu', {state: {title: "마이메뉴"}} )
    }
    return(
        <div className="bottom_nav_container">
            <a className="bottom_nav_tap" href="/"><span><FontAwesomeIcon icon={faLayerGroup} className="bottom_nav_img"/></span>메뉴</a>
            <a className="bottom_nav_tap" href="/"><span><FontAwesomeIcon icon={faHouse} className="bottom_nav_img"/></span>홈</a>
            <a className="bottom_nav_tap" href=""><span>😀</span>즐겨찾기</a>
            <a className="bottom_nav_tap" onClick={onClickMyMenu} href=""><span><FontAwesomeIcon icon={faUser} className="bottom_nav_img"/></span>마이메뉴</a>
            <a className="bottom_nav_tap" href=""><span>😀</span>충전하기</a>
        </div>

    )
}

export default Bottom;