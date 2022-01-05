//Dependencies
import React, { useEffect, useReducer } from 'react'
//Styles
import './styles.css'
//Reducer
import { todoReducer } from './todoReducer'
//Components
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    
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
            
            <section className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddToDo={handleAddToDo}
                    />
                </div>
            </section>
        </div>
    )
}


