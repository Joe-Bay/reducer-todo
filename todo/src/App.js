import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { todoReducer, initialState } from './reducers/todoReducer'

function App() {


  const [state, dispatch] = useReducer(todoReducer, initialState)
  

  const toggleItem = (id) => {
    dispatch({type:"TOGGLE_COMPLETED", payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: "CLEAR_COMPLETED_TODO"})
  }
  

  return (
    <div className="App">
      <div className='header'>
        <h2>Todo List</h2>
        <TodoForm dispatch={dispatch}/>
      </div>
      <div className='list'>
        <TodoList toggle={toggleItem}clear={clearCompleted}item={state.todoArray}/>
      </div>
    </div>
  );
}

export default App;
