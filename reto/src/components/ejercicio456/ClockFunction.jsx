import React, { useState, useEffect } from 'react';

const ClockFunction = () => {

    const [edad, setEdad] = useState(0);
    const [fecha, setFecha] = useState(new Date());

    const nombre = 'Martin';
    const apellidos = 'San Jose'
   
    function tick(){
       setEdad( edad + 1 )
       setFecha(new Date())
     }

    useEffect(() => {
        const timerID = setInterval (
            () => tick(), 1000
         );

        return () => {
            clearInterval (timerID);
        };
    });

    return (
        <div>
            <h1> Componente Funcional</h1>
            <h2>
                Hora Actual:
                { fecha.toLocaleTimeString() }
            </h2>
            <h3>{nombre} {apellidos}</h3>
            <h1>Edad: {edad}</h1>
        </div>
    );
}

export default ClockFunction;
