import React from "react";
import Bottom from "../components/bottom";
import Top from "../components/top";
import './myPage.css';
import { useLocation, useNavigate } from "react-router-dom";


function MyPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const title = location.state.title;

    function onClickLoginBtn() {
        navigate('/signin', {state: {title: "로그인"}})
    }

    return(
        <div className="mypage_container">
            <Top title={title}/>
            <div className="mypage_wrap">
                <div className="banner_box">지금 가입하고,<span>1만코인</span>받으세요</div>
                <div className="mypage_body_box">
                    <div className="mypage_body_wrap">
                        <div className="mypage_login_box">
                            <div className="mypage_detailed_login">
                                로그인이 필요합니다
                            </div>
                            <button className="mypage_login_btn" onClick={onClickLoginBtn}>
                                로그인
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Bottom />
        </div>
    )
}

export default MyPage;