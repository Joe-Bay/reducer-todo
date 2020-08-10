import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { initialState, todoReducer } from './reducers/todoReducer'

function App() {

  const [todos, dispatch] = useReducer(todoReducer, initialState)


  const toggleItem = (id) => {
        
  }

  function newTodo(todoName) {
    return {
      task: todoName,
      id: new Date(),
      completed: false
    }
  }
  

  return (
    <div className="App">
      <div className='header'>
        <h2>Todo List</h2>
        <TodoForm newTodo={newTodo}/>
      </div>
      <div className='list'>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
