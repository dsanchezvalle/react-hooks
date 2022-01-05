const todoReducer = (state = initialToDos, action) => {
    
    if (action?.type === 'ADD'){
        return [...state, action.payload]
    }
    
    return state;
};

const initialToDos = [{
    id: 1,
    todo: 'Buy bread',
    done: false
}];

const newToDo = {
    id: 2,
    todo: 'Buy milk',
    done: false
}

const addAction = {
    type: 'ADD',
    payload: newToDo
}


let todos = todoReducer();

todos = todoReducer(todos, addAction);
//console.log(todos)