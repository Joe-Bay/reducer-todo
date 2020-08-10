export const initialState = [{
    task: '',
    id: '',
    completed: false
}]

export const todoReducer = (todos, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [
                ...todos,
                {task: action.payload.task,
                id: new Date(),
                completed: false}
                
            ]
        case "TOGGLE_COMPLETED":
            return {
                ...todos,
                completed: !todos.completed
            }
        case "CLEAR_COMPLETED_TODO":
            
            return {
                
            }
            default: 
            return todos;
    }
}