import React from "react";
import './signup.css'
import Top from "../components/top";
import Bottom from "../components/bottom";

function Signup(props) {
    return(
        <div className="signup_container">
            <Top title={"회원가입"}></Top>
            <div className="banner">지금 가입하고, <span>1만코인</span>받으세요!</div>
            <div className="signup_wrap">
                <div className="signup_description_box">
                    <div className="signup_description">
                        아이디와 비밀번호르 입력해 회원이 되시면<br/> 다양한 서비스를 이용할 수 있습니다.
                    </div>
                </div>
                <div className="signup_email_box">
                    <div className="signup_email">아이디(이메일) <span>*</span></div>
                    <div className="signup_email_input_box">
                        <input type="text" className="signup_email_input" placeholder="아이디(이메일)을 입력해주세요"/>
                        <button className="signup_duplication_email">중복확인</button>
                    </div>
                    <span className="signup_check_email_description">이메일 형식이 맞지 않습니다</span>
                </div>
                <div className="signup_password_box">
                    <div className="signup_password">비밀번호 <span>*</span></div>
                    <div className="signup_password_input_box">
                        <input type="password" className="signup_password_input" placeholder="비밀번호를 입력해주세요"/>
                    </div>
                    <span className="signup_check_password_description">비밀번호는 8자 이상, 특수문자를 하나 이상 포함해야 합니다</span>
                    <div className="signup_confirm_box">
                        <div className="signup_password_confirm">
                            비밀번호 확인 *
                        </div>
                        <div className="signup_password_confirm_input_box">
                            <input type="password" className="signup_password_confirm_box" placeholder="비밀번호를 헌번 더 입력해주세요"/>
                        </div>
                        <span className="signup_confrim_description_password">
                            비밀번호를 다시 입력해주세요
                        </span>
                    </div>
                    <div className="signup_name_box">
                        <div className="signup_name">
                            이름 <span>*</span>
                        </div>
                        <div className="signup_name_input_box">
                            <input type="text" placeholder="이름을 입력해주세요" />
                        </div>
                        <span className="signup_name_description">필수 항목 입니다</span>
                    </div>
                    <div className="signup_nickname_box">
                        <div className="signup_nickname">
                            예명 <span>*</span>
                        </div>
                        <div className="signup_nickname_input_box">
                            <input type="text" placeholder="예명을 입력해주세요" />
                        </div>
                    </div>
                    <div className="signup_phone_box">
                        <div className="signup_phone">핸드폰 번호 <span>*</span></div>
                        <div className="signup_">
                            <input type="text" placeholder="핸드폰 번호를 입력하세요"/>
                        </div>
                    </div>
                </div>
            </div>
            <Bottom/>
        </div>
    )
}

export default Signup;