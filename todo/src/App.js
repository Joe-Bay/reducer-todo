import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { todoReducer, initialState } from './reducers/todoReducer'

function App() {

  const [todos, dispatch] = useReducer(todoReducer, initialState)


  const toggleItem = (id) => {
    todos.map(item => {
      if(item.id === id){
        dispatch({type: "TOGGLE_COMPLETED"})
      }
    })
  }

  

  return (
    <div className="App">
      <div className='header'>
        <h2>Todo List</h2>
        <TodoForm />
      </div>
      <div className='list'>
        <TodoList toggleItem={toggleItem} todos={todos}/>
      </div>
    </div>
  );
}

export default App;
