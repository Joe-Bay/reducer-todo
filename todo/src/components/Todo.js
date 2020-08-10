import React from 'react'

const Todo = (props) => {

    console.log(props.todos)
    return (
        <div>
            <p>{props.todos.task}</p>
        </div>
    )
}

export default Todo