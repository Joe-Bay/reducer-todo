export const initialState = {
   todoArray: [
    {
    task: 'this is the task name',
    id: 1,
    completed: false
    },
]}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
                const newTodo = {
                task: action.payload,
                id: new Date(),
                completed: false,
                }
                return {
                    ...state, 
                    todoArray: [...state.todoArray, newTodo]
                }

        case "TOGGLE_COMPLETED":
            return {
                ...state,
                todoArray: state.todoArray.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }else{
                    return todo;
                }
            })}
        case "CLEAR_COMPLETED_TODO":
            return {
                ...state,
                todoArray: state.todoArray.filter(item => !item.completed)
            }
            default: 
            return state;
    }
}