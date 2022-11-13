import React from 'react'
import { memo } from 'react'

const UseCallbackExam = ({onIncrease}) => {
    console.log("Re-render")
    return (
        <div>
            <h1>Xin chao cac ban!</h1>
            <button onClick={onIncrease }>Click me!</button>
        </div>
    )
}

export default memo(UseCallbackExam)