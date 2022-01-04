import React from 'react'
import { useForm } from '../../../hooks/useForm';

export const TodoAdd = ({handleAddToDo}) => {
    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(description.trim().length <= 1){
            return;
        }

        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddToDo(newToDo);

        reset();
    }
    
    return (
        <>
          <h4>Add To Do</h4>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" name="description"
                    className="form-control"
                    placeholder="Learn..."
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={description}
                />
                <button 
                    className="btn btn-outline-primary mt-1 btn-block"
                    type="submit"
                >
                    Add
                </button>
            </form>  
        </>
    )
}
