import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'


//Init State
const initState = {
    todo: '',
    todos: [
        {
            id: 1,
            title: 'Quet nha'
        },
        {
            id: 2,
            title: 'Lam bai tap'
        },
        {
            id: 3,
            title: 'Nau com'
        }

    ]
}

//Actions
const setTodo = payload => {
    return {
        type: 'set_todo',
        payload
    }
}

const addTodo = payload => {
    return {
        type: 'add_todo',
        payload
    }
}

const deleteTodo = payload => {
    return {
        type: 'delete_todo',
        payload
    }
}

//Reducers
const reducer = (state, action) => {
    switch (action.type) {
        case 'set_todo':
            return {
                ...state,
                todo: action.payload
            }
        case 'add_todo':
            return {
                ...state,
                todos: [
                    action.payload,
                    ...state.todos
                ]
            }
        case 'delete_todo':
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.payload)
            }
        default:
            throw new Error('Invalid Action')
    }
}



const UseReducerExam2 = () => {

    const [state, dispatch] = useReducer(reducer, initState)

    const { todo, todos } = state

    const handleAddTodo = () => {
        const newTodo = {
            id: uuidv4(),
            title: todo,
            completed: false
        }
        dispatch(addTodo(newTodo))
        dispatch(setTodo(''))
    }

    return (
        <div style={{ padding: "20px" }}>
            <input
                type="text"
                value={todo}
                onChange={e => dispatch(setTodo(e.target.value))}
            />
            <button
                onClick={handleAddTodo}
                style={{ marginLeft: "20px" }}
            >
                ADD
            </button>
            <ul>
                {todos && todos.map(item => (
                    <li key={item.id}>
                        {item.title}
                        <button
                            onClick={() => dispatch(deleteTodo(item.id))}
                            style={{ marginLeft: "20px" }}
                        >
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UseReducerExam2