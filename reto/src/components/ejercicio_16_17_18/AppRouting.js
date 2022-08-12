
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import HomePage from './pages/home/HomePage'
import Tasks from './Tasks';


const AppRouting = () => {

    let isLogged = true

    return (
        <BrowserRouter>
            <aside>
                <Link to='/'>||  HOME  |</Link>
                <Link to='/login'>|  LOGIN  |</Link>
                <Link to='/register'>|  REGISTER  ||</Link>
                <Link to='/task'>|  TASK  ||</Link>
            </aside>
            <main>
                <Routes>
                    <Route path='/' element={ <HomePage /> } />
                    <Route path='/login' element={ <LoginPage /> } />
                    <Route path='/register' element={ <RegisterPage /> } />
                    <Route path='/task' element={ isLogged ? <Tasks /> : <LoginPage/> } />
                    <Route path='*' element={ <NotFoundPage /> } />
                </Routes>
            </main>     
        </BrowserRouter>
    );
}

export default AppRouting;
