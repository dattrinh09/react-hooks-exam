import React, { useEffect, useState } from 'react'
import { memo } from 'react'

const ChildComponent = ({ getData }) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        console.log('Child Component - Get Comments')
        getData('comments?_limit=5').then(res => setComments(res.data))
    }, [getData])

    return (
        <div>
            <h2>List Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        {comment.name} - {comment.body}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default memo(ChildComponent)