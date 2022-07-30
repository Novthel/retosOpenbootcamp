import React from 'react';
import { Contacto } from '../../models/contacto_class';
import ComponenteB from '../pure/ComponenteB';

const ComponenteA = () => {

    const c1 = new Contacto('Oscar', 'Novoa', 'oscarN@gmail.com', true)

    return (
        <div>
            <ComponenteB contacto={c1}/>
        </div>
    );
}

export default ComponenteA;
