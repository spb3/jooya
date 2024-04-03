import { useEffect } from 'react';
import {MainPresenter} from './MainPresenter';
import { useNavigate } from 'react-router-dom';

const MainContainer = () => {
    const navigate = useNavigate();

    const moveMyPage = () => {
        navigate('/user/mymenu', {state: {title: '마이메뉴'} });
    }

    return (
        <MainPresenter
            moveMyPage={moveMyPage}
        />
    )
}

export default MainContainer;