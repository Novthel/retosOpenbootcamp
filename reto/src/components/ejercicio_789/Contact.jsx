import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto_class';


const Contact = ({ contact, conect, remove }) => {


    return (
        <tr>
            <td>{contact.nombre}</td>
            <td>{contact.apellido}</td>
            <td>{contact.email}</td>
            <td>{ contact.conectado ? 
                    <i className="bi bi-toggle-on" onClick={()=> conect(contact)}> ON</i> 
                    : <i className="bi bi-toggle-off" onClick={()=> conect(contact)}> OFF</i> }</td>
            <td>
                <i className="bi bi-trash" onClick={()=> remove(contact)}></i>
            </td>
        </tr>
    );
};


Contact.propTypes = {
    contact: PropTypes.instanceOf(Contacto),
    conect: PropTypes.func.isRequired
};


export default Contact;
