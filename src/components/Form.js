import React, { useImperativeHandle, useState } from 'react'
import { forwardRef } from 'react'

const Form = (props, ref) => {
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const handleSubmit = () => {
        alert(`Hello ${name} your job is ${job}`)
    }
    useImperativeHandle(ref, () => {
        return {
            submit: handleSubmit,
            getInfo: () => ({
                name,
                job
            })
        }
    })

    return (
        <div>
            <h4>Form</h4>
            <form>
                <label>Name</label>
                <input
                    type="text"
                    placeholder='Enter name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <br />
                <label>Job</label>
                <input
                    type="text"
                    placeholder='Enter job'
                    value={job}
                    onChange={e => setJob(e.target.value)}
                />
                <br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default forwardRef(Form)