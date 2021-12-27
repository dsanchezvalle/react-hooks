import React from 'react'
import './effect.css'
import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        console.log("hey")  
    }, [])

    useEffect(()=>{
        console.log('formState has changed')
    }, [formState])
    
    useEffect(()=>{
        console.log('email has changed')
    }, [email])

    const handleInputChange = ({ target }) => {
        //console.log(e.target)
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    
    return (
        <>
          <h1>Form with useEffect</h1>  
          <hr/>
          <div className="form-group">
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
          <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Your email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
            />
          </div>
        { (name === '123') && <Message />}

        </>
    )
}
