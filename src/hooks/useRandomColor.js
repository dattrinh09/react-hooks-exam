import { useEffect, useState } from 'react'

function randomColor() {
    const COLOR_LIST = [
        'red',
        'blue',
        'yellow',
        'pink',
        'green'
    ]

    return COLOR_LIST[Math.trunc(Math.random() * 5)]
}

export const useRandomColor = () => {
    const [color, setColor] = useState('back')
    useEffect(() => {
        const colorInterval = setInterval(() => {
            setColor(randomColor())
        }, 2000)

        return () => {
            clearInterval(colorInterval)
        }
    }, [])

    return { color }
}
