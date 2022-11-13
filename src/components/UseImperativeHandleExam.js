import React, {useRef} from 'react'
import Form from './Form'

const UseImperativeHandleExam = () => {
    const myRef = useRef()
    const handleSubmit = () => {
        myRef.current.submit()
        console.log(myRef.current.getInfo())
    }
    return (
        <div>
            <h3>useImperativeHandle Exam</h3>
            <Form ref={myRef} />
            <button onClick={handleSubmit}>Submit From Parent</button>
        </div>
    )
}

export default UseImperativeHandleExam