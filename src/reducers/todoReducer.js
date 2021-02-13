const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case "Add_Todo" :
            return  [...state, {id: 'uuidv4()', name: action.payload, complete: false}] 
            // return state
        default :
            return state

    }
 }

export default TodoReducer