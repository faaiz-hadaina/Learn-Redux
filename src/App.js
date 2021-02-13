 import React, {useState, useEffect, useRef} from 'react'
import TodoList from './TodoList'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from './actions'
function App() {
  const [todos, setTodos] = useState([{"id": 0, "name": "Adewale"}])
 const  count  = useSelector(state => state.TodoReducer)
 const todoNameRef = useRef();
  useEffect(() => {
    console.log("Todo changed")
     
  }, [])

 const dispatch = useDispatch()

 function handleClick () {
 dispatch(addTodo(todoNameRef.current.value))
 todoNameRef.current.value = ''
 }
  return (
    <>
      <input ref={todoNameRef} type="text" ></input>
      <button onClick={handleClick}>Add Todo</button>
      <button>Delete Selected Todo</button>
      <TodoList todos={todos}></TodoList>
      <div><label>{count.length} Todos</label></div>
    </>
    )
}

export default App;
