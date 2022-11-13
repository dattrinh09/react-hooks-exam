import { ADD_TODO, DELETE_TODO, SET_TODO_INPUT } from "./constants"

const initState = {
    todos: [
        {
            id: 1,
            title: 'Viec 1'
        },
        {
            id: 2,
            title: 'Viec 2'
        },
        {
            id: 3,
            title: 'Viec 3'
        },
    ],
    todoInput: ''
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            throw new Error('Invalid action')
    }
}

export { initState }
export default reducer 