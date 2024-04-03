import React from "react"

export const MainPresenter = ({
    moveMyPage
}) => {
    return (
        <div>
            <button onClick={moveMyPage}>마이메뉴로</button>
        </div>
    )
}