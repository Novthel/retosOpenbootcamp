import React, { useState } from 'react'
import { Contacto } from '../../models/contacto_class';
import Contact from './Contact';
import FormList from './FormList';


const ContactList = () => {

    const [contacList, setContacList] = useState([])

    const addContact = ( contact )=>{

        const newContacto = new Contacto( contact.name, contact.lastName, contact.email, false)
        const temp = [...contacList]
        temp.push(newContacto)

        setContacList(temp)
    }

    const isInLine =(contact)=>{
        
        const index = contacList.indexOf(contact)
        const temp = [...contacList]
        temp[index].conectado = !temp[index].conectado
        setContacList(temp)
    }

    const deleteContact = (contact)=> {
        const index = contacList.indexOf(contact)
        const temp = [...contacList]
        temp.splice(index,1)
        setContacList(temp)
    }

    return (
        <>
            <div className='col-12'>
                <div className='card text-center'>
                    <div className='card-header p-3'>
                        <h3>Contact List</h3>
                    </div>
                    <div className='card-body'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>LastName</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col-2'>Actions</th>
                                </tr>  
                            </thead>
                            <tbody>
                            { contacList.map((c, i)=> (
                                <Contact contact={ c } key={ i } conect = { isInLine } remove={ deleteContact }/>
                            ))}
                            </tbody>
                        </table>
                        
                    </div>
                    <FormList add={ addContact } />
                </div>
            
            </div>
            
        </>
        
    );
};


export default ContactList;
