 import React, {useState} from 'react'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([{"id": 0, "name": "Adewale"}])

  return (
    <>
      <input type="text"></input>
      <button>Add Todo</button>
      <button>Delete Selected Todo</button>
      <TodoList todos={todos}></TodoList>
      <div><label>0 Todos</label></div>
    </>
    )
}

export default App;
