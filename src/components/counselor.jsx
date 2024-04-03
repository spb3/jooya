import React from "react";
import './counselor.css'
import profile from '../image/profile2.png'

function Counselor() {
    return(
        <div className="counselor_container">
            <div className="counselor_wrap">
                <div className="counselor_img_box">
                    <img src={profile} alt="" />
                </div>
                <div className="counselor_info_box">
                    <div className="counselor_info_top">
                        <div className="counselor_info_top_left">
                            <div className="counselor_nickname">꽃비녀</div>
                            <span></span>
                            <div className="counseling_type">전화신점</div>
                        </div>
                        <div className="counselor_on_off">• 접속중</div>
                    </div>
                    <div className="counselor_detailed_description">혜안으로 꿰뚫어보는 상대 속마음</div>
                    <div className="counselor_price">700원 <span >( 10초 )</span></div>
                    <div className="counselor_subscription_like_box">
                        <div className="counselor_subscription"><span>별</span>구독</div>
                        <div className="counselor_like"><span>따봉</span>좋아요</div>
                        <div className="counselor_fortune_pouch"><span>복</span>복주머니</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counselor;