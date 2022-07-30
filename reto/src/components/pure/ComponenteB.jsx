import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto_class';


const ComponenteB = ({ contacto }) => {

    const [conectado, setConectado] = useState(contacto.conectado);

    return (
        <div>
            <h2>Nombre Completo: { contacto.nombre } { contacto.apellido }</h2>
            <h3>Email: { contacto.email }</h3>
            <h3>Conectado: { conectado ? 'Contacto En Linea' : 'Contacto No Disponible' } </h3>
            <button onClick={ () => setConectado(!conectado)}>{ conectado ? 'Desconectar' : 'Conectar' }</button>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ComponenteB;
