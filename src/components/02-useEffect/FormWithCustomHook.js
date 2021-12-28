import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effect.css'

export const FormWithCustomHook = () => {
    
    const [formValues, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        password: ''
    });
    
    const { name, email, password } = formValues;

    useEffect(() => {
        console.log("mail changed") 
        
    }, [email])

    /* const handleInputChange = ({ target }) => {
        //console.log(e.target)
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    } */

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }
    
    return (
        <form onSubmit={handleSubmit}>
          <h1>Form with Custom Hook</h1>  
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

          <div className="form-group">
          <input
                type="password"
                name="password"
                className="form-control"
                placeholder="*******"
                value={ password }
                onChange={handleInputChange}
            />
          </div>            
          <button type="submit" className='btn btn-primary'>Save</button>
          <button onClick={reset} className='btn btn-secondary'>Reset</button>
        </form>
    )
}
