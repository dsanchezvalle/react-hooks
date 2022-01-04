import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => <TodoListItem key={i+todo.desc} todo={todo} index={i} handleDelete={handleDelete} handleToggle={handleToggle}/>)
            
            }
        </ul>
    )
}

                /* todos.map((todo, i)=>(<li key={todo.id} className="list-group-item">
                <p className={`${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)}> { i + 1 }. {todo.desc} </p>
                <button className="btn btn-danger" onClick={ () => handleDelete(todo.ºid) }>Delete</button> 
                </li>))
                */