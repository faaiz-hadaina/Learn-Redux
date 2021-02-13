import loggedinReducer from './loggedinReducer'
import TodoReducer from './todoReducer'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    loggedinReducer: loggedinReducer,
    TodoReducer: TodoReducer
})

export default allReducers