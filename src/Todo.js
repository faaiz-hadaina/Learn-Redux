import React from 'react'

export default function Todo({todos}) {

    return (
        <label>
            <input type="checkbox"></input>
           {todos[0].name}
        </label>
    )
}
