import React from 'react'
import useStore from '../hooks/useStore'
import { actions } from '../store'
import { v4 as uuidv4 } from 'uuid'

const UseReducerExam3 = () => {
    const [state, dispatch] = useStore()
    const { todos, todoInput } = state

    const handleAddTodo = () => {
        const newTodo = {
            id: uuidv4(),
            title: todoInput
        }
        dispatch(actions.addTodo(newTodo))
        dispatch(actions.setTodoInput(''))
    }

    const handleDeleteTodo = id => {
        dispatch(actions.deleteTodo(id))
    }

    return (
        <div>
            <h2>Context + useReducer</h2>
            <input
                type="text"
                value={todoInput}
                placeholder="Enter todo..."
                onChange={e => dispatch(actions.setTodoInput(e.target.value))}
            />
            <button
                onClick={handleAddTodo}
                style={{ marginLeft: "20px" }}
            >
                Add
            </button>
            <h3>List Todos:</h3>
            <ul>
                {todos?.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <button
                            onClick={() => handleDeleteTodo(todo.id)}
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

export default UseReducerExam3