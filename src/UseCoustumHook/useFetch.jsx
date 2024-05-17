import axios from 'axios'
import  { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data , setData] = useState([])
    const [err , setErr] = useState(false)

    const handelFetchData = async (url) => {
        try {
            const res = await axios.get(url)
            if(res.data) setData(res.data)
        } catch (error) {
            setErr(true)
        }
    }

    useEffect(() => {
        handelFetchData(url)
    } , [url])

    return {err , data}
}

export default useFetch