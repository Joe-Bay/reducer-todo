import React, { useReducer } from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    const {todos, toggleItem} = props 
    return (
        <div>
            {
                todos.map(item => (
                    <Todo key={item.id} todos={item} />
                ))
            }
            <button>Clear Completed</button>
        </div>
    )
}
export default TodoList