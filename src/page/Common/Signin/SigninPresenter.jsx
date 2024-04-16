import React  from "react"
import Top from "../../../components/top"
import Bottom from "../../../components/bottom"
import mainLogo from '../../../image/jooyajooya.png'

export default SigninPresnter = ({

}) => {
    return(
        <div className="signin_container">
            <Top title={location.state.title}></Top>
            <div className="register_box">
                        <div className="register_banner_box">지금 가입하고,<span>1만코인</span>받으세요!</div>
            </div>
            <div className="signin_box">
                <div className="signin_wrap">
                    <div className="main_image_box">
                        <div className="main_image_wrap">
                            <img src={ mainLogo } alt="" />
                        </div>
                    </div>
                    
                    <div className="signin_input_box">
                        <div className="signin_input_wrap">
                            <div className="signin_id_box">
                                <div className="signin_id">
                                    <input type="text" placeholder="아이디(이메일)을 입력해주세요."/>
                                </div>
                                <div className="signin_detailed_id">
                                    이메일 형식을 확인하세요
                                </div>
                            </div>
                            <div className="signin_password">
                                <input type="text" placeholder="비밀번호를 입력해주세요." />
                            </div>
                            <div className="signin_btn_box">
                                <button className="signin_btn">로그인</button>
                            </div>
                            <div className="signin_function">
                                <a href="" className="signin_find_id">
                                    아이디 찾기
                                </a>
                                <a href="" className="signin_find_password">
                                    비밀번호 찾기
                                </a>
                                <a href="/user/signup" className="signup" >
                                    회원가입
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="simple_login_box">
                        <div className="simple_login">간편로그인</div>
                        <div className="kakao_login">
                            카카오계정으로 로그인
                        </div>
                        <div className="naver_login">
                            네이버계정으로 로그인
                        </div>
                        </div>
                </div>
            </div>
            <Bottom />
        </div>
    )
}