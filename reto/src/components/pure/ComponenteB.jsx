import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto_class';


const ComponenteB = ({ contacto }) => {

    return (
        <div>
            <h2>Nombre Completo: { contacto.nombre } { contacto.apellido }</h2>
            <h3>Email: { contacto.email }</h3>
            <h3>Conectado: { contacto.conectado ? 'Contacto En Linea' : 'Contacto No Disponible' } </h3>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ComponenteB;
