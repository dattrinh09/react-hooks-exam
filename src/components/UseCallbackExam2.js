import axios from 'axios'
import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

const UseCallbackExam2 = () => {
    const [users, setUsers] = useState([])

    const getData = async type => {
        return await axios.get(`https://jsonplaceholder.typicode.com/${type}`)
    }

    // const getData = useCallback(async type => {
    //     return await axios.get(`https://jsonplaceholder.typicode.com/${type}`)
    // }, [])

    const handleGetUsers = () => {
        getData('users').then(res => setUsers(res.data))
    }

    return (
        <div>
            <h2>List Users </h2>
            <button onClick={handleGetUsers}>Get users</button>
            <ul>
                {users?.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
            <ChildComponent getData={getData} />
        </div>
    )
}

export default UseCallbackExam2