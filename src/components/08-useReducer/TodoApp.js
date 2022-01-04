import React, { useEffect, useReducer, useRef } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'

//import { useForm } from '../../hooks/useForm'
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'

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

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

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

    const handleAddToDo = (newToDo) => {
        dispatch( {
            type: 'ADD',
            payload: newToDo
        });
    }

    return (
        <div>
            <h1>ToDo App ({todos.length})</h1>
            <hr/>
            
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddToDo={handleAddToDo}
                    />
                </div>
            </div>
            

        </div>
    )
}


