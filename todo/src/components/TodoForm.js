import React from 'react'
import { useState, useReducer } from 'react'
import { initialState, todoReducer } from '../reducers/todoReducer'

const TodoForm = (props) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState)
    const [inputText, setInputText] = useState('')

   const handleChanges = e => {
        setInputText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_TODO', payload: { task: inputText}})
        setInputText('')
    }

//   const  newTodo = (todoName) => {
//       const  theNewTodo = {
//             task: todoName,
//             id: new Date(),
//             completed: false
//         }
//         return theNewTodo
//     }

    return (
        <form onSubmit={onSubmit}>
            <input 
            name='todo'
            type='text'
            placeholder='Task'
            onChange={handleChanges}
            value={inputText}
            />
            <button>Add</button>
        </form>
    )
}
export default TodoForm