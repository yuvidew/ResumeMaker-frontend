import axios from 'axios'
import{ useState } from 'react'

const usePostLetterData = (url) => {
    const [isPost , setIsPost] = useState(false)
    const [err , setErr] = useState('')

    const handelPostData = async (data) => {
        try {
            const res = await axios.post(url , data)
            if(res.status == 200){ 
                setIsPost(true)
            }
            console.log(res);
        } catch (error) {
            setErr('error')
            console.log(error);
        }
    }
    return [err , isPost , handelPostData]
}

export default usePostLetterData