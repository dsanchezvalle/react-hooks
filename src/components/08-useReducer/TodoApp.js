import React, { useEffect, useReducer, useRef } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'

import { useForm } from '../../hooks/useForm'

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Learn React',
//     done: false
// }]

const init = () => {
    
    //return localStorage.getItem('todos');
    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Learn React',
    //     done: false
    // }]
}

export const TodoApp = () => {
    

    //const inputRef = useRef('')
    const [todos , dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });
    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    console.log(description)
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(description.trim().length <= 1){
            return;
        }

        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const actionAddToDo = {
            type: 'ADD',
            payload: newToDo
        }

        //console.log(newToDo);
        dispatch(actionAddToDo);
        reset();
        //todoReducer(todos, actionAddToDo);
    }

    const handleDelete = (id) => {
        const actionDeleteToDo = {
            type: 'DELETE',
            payload: id 
        }

        dispatch(actionDeleteToDo);
    }

    const handleToggle = (id) => {
        
        const actionToggleToDo = {
            type: 'TOGGLE',
            payload: id
        }

        dispatch(actionToggleToDo);
    }

    return (
        <div>
            <h1>ToDo App ({todos.length})</h1>
            <hr/>
            
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map(({id, desc, done}, i) => 
                                (<li key={id} className="list-group-item">
                                <p className={`${done && 'complete'}`} onClick={() => handleToggle (id)}> { i + 1 }. {desc} </p>
                                <button className="btn btn-danger" onClick={ () => handleDelete(id) }>Delete</button>
                                </li>)
                            )
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Add To Do</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input 
                            // ref={inputRef}
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
                </div>
            </div>
            

        </div>
    )
}


