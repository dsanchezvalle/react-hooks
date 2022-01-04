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
            
        default:
            return state;
    }
}