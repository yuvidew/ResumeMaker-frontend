import axios from 'axios'
import { useState } from 'react'

const usePostApiData = (url) => {
    const [isPost , setIsPost] = useState(false)
    const [err , setErr] = useState('')
    
    const handelPostData = async (data) => {
        try {
            const res = await axios.post(url , data)
            if(res.status == 200){ 
                console.log(res.data);
                setIsPost(true)
            }
            if(res.data.resume) {
                localStorage.setItem('user-resume' , JSON.stringify(res.data.resume))
            }
            if(res.data.itIs == 'resume'){
                localStorage.setItem('resume-id' , JSON.stringify(res.data.id))
            }
            if(res.data.itIs == 'letter'){
                localStorage.setItem('letter-id' , JSON.stringify(res.data.id))
            }
        } catch (error) {
            setErr(error)
        }
    }
    return {err , isPost , handelPostData}
}

export default usePostApiData