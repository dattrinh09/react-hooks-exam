import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url) => {
    console.log(url)
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(url)
            .then(res => setData(res.data))
    }, [url])
    return { data }
}

export default useFetch