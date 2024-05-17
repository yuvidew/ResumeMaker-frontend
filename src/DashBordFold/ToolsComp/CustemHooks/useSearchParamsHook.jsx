import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const useSearchParamsHook = () => {
    const [showHide , setShowHide] = useState(false)
    const [searchParams , setSearchParams] = useSearchParams({
        que : '',
        onlyComputerItems : true
    })


    const query = searchParams.get('que')

    const handleQue = (text) => {
        setSearchParams(prev => {
            prev.set('que' , text)

            return prev
        } , {replace : true})

        setShowHide(!showHide)
    }
    return [ query , handleQue , showHide , setShowHide]
}

export default useSearchParamsHook