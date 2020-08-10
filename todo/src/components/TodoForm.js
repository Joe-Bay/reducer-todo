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
        dispatch({ type: 'ADD_TODO', payload: { todoName: props.addTodo(inputText)}})
        e.preventDefault()
    }





    return (
        <form>
            <input 
            name='todo'
            type='text'
            placeholder='Task'
            onChange={handleChanges}
            />
            <button>Add</button>
        </form>
    )
}
export default TodoForm