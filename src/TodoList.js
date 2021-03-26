import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'


export default function TodoList() {
    const todos  = useSelector(state => state.TodoReducer)
    return (
        todos.map(mytodo => {
            return <Todo key={mytodo.id} todo={mytodo} />
        })
    )
}
