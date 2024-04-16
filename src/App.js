
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Main from './page/Common/Main';
import MyPage from './page/myPage';
import Login from './page/login';
import Signup from './page/signup';
import {Main} from './page'


function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/user/mymenu' element={<MyPage />}/>
                <Route path='/signin' element={<Login />} />
                <Route path='/user/signup' element={<Signup />}></Route>
            </Routes>
        </div>

    );
}

export default App;
