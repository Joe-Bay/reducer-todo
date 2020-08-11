import React, { useReducer } from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    console.log(props)
    return (
        <div>
            {props.item.map(item => {
                return (
                    <div onClick={() => props.toggle(item.id)} className={`todo${item.completed ? " completed" : ""}`} key={item.id}>{item.task}</div>
                )
            })}
            <button onClick={props.clear}>Clear Completed</button>
        </div>
    )
}
export default TodoList