export const todoReducer = (state = [], action) => {
    //console.log(action)
    switch (action.type) {
         case 'ADD':
            return [...state, action.payload];
        case 'DELETE':{
            // const toDelete = state.find(el => el.id === action.payload)
            // const newState = [...state].filter(el => el !== toDelete);
            // return newState;
            return state.filter(todo => todo.id !== action.payload)
        }
        case 'TOGGLE':{
            //Opt1
            // const elem = state.find(el => el.id === action.payload);
            // const index = state.indexOf(elem);
            // const newState = [...state];
            // console.log(index)
            // newState.splice(index, 1, {...elem, done: !elem.done});
            // return newState;
            //Opt2
            // return state.map(todo => {
            //     if(todo.id === action.payload){
            //         return {...todo, done: !todo.done}
            //     }
            //     else
            //         return todo;
            // });
            //Opt3
            return state.map(todo => todo.id===action.payload ? ({...todo, done: !todo.done}):(todo));
        }
            
        default:
            return state;
    }
}