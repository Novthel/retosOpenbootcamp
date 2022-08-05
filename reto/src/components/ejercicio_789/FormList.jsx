import React, { useRef } from 'react';

const FormList = ({ add }) => {

    const nameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')

    const newContact =(e)=> {
        e.preventDefault()

        const newContact = {

            name: nameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value
        }
        add(newContact) 
    }


    return (
        <div className='d-flex justify-content-center align-items-center flex-column '>
            <form onSubmit={ newContact }>
                <input className='form-control mb-2' ref={ nameRef } type='text' id='nameInput' placeholder='name' />
                <input className='form-control mb-2' ref={ lastNameRef } type='text' id='lastNameInput' placeholder='lastName' />
                <input className='form-control mb-2' ref={ emailRef } type='text' id='emailInput' placeholder='email' />
                <button className='btn btn-success btn-lg mb-4' type='submit'>Add new Contact</button>     
            </form>
        </div>
        
    );
}

export default FormList;
