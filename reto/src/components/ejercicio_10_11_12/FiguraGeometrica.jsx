import React, { useState } from 'react'

export default function FiguraGeometrica() {

    const [color, setColor] = useState('#000000');

    const changeColor =()=> {

        setInterval(() => { 
            
            setColor('red') 
        }, 500);

    }

    const stopChangeColor =()=> {
        setColor('blue')
    }


  return (
    <div>
        <div style={{ backgroundColor: color, width:'255px', height:'255px' }}
        onMouseOver={ changeColor }
        onMouseLeave={ stopChangeColor }
        ></div>
    </div>
  )
}
