import React from 'react';
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const navigate = useNavigate()

    function GoToHome(){
        navigate('/')
    }

    function GoBack(){
        navigate(-1)
    }


    return (
        <div>
            <h1>Home</h1>
            <button onClick={ GoToHome }>Go to Home</button>
            <button onClick={ GoBack }>Go Back</button>
           
        </div>
    );
}

export default HomePage;
