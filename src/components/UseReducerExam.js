import React, { useReducer } from 'react'

//Init state
const initState = 0

//Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//Reducer
const reducer = (state, action) => {
    switch(action){
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}

const UseReducerExam = () => {

    const [count, dispatch] = useReducer(reducer, initState)

    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button
                onClick={() => dispatch(UP_ACTION)} 
            >
                Up
            </button>
        </div>
    )
}

export default UseReducerExam