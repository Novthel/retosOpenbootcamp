import React, { useState } from 'react';
import { Button } from '@mui/material';
import getjokeChuckNorris from './service/axios.service'

const Home = () => {

    const [like, setLike] = useState(0)
    const [dislike, setDisLike] = useState(0)
    const [ joker, setJoker ] = useState('')

    const isLike = ()=> {
        setLike(like + 1)
    }

    const isDisLike = ()=> {
        setDisLike(dislike + 1)
    }

    
    const getJoker = () =>{
        getjokeChuckNorris().then( (response) =>{
            setJoker(response.value)
        })
    }
     

    return (
        <div>

            <h3>{ joker }</h3>

            <p>Like : { like }</p>
            <p>Dislike: { dislike } </p>

            <Button variant='contained' onClick={ getJoker }>Creat Joke</Button>
            <Button variant='outlined' color='success' onClick={ isLike }>Like</Button>
            <Button variant='outlined' color='error' onClick={ isDisLike }>Dislike</Button>
            
        </div>
    );
}

export default Home;
