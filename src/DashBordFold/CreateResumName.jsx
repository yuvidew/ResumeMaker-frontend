import React, { useState } from 'react'
import usePostApiData from '../UseCoustumHook/usePostApiData'
import { useNavigate } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'

const CreateResumName = ({isTrue , setIsTrue}) => {
    const {isPost , handelPostData} = usePostApiData(`/api/post/resume/createNewResume`)
    const [input , setInput] = useState('')
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const obj = {
            resumeName : input
        }
        handelPostData(obj)
        
    }

    if(isPost){
        setIsTrue(!isTrue)
        history('/dashboard/resume-form')
    }

    return (
        <div className="d-flex align-items-center justify-content-center w-100 h-100 theNewREsume">
            <Card className='thePopupCard border-0'>
                <Card.Header as="h5" className='theHeader text-white text-center'>
                    New Resume
                </Card.Header>
                <Card.Body className='h-100'>
                    <form action="" className='mt-1' onSubmit={handleSubmit}>
                        <label htmlFor="" className='text-2xl w-100 mb-3'>
                            Resume name 
                        </label>
                        <input 
                            type="text" 
                            placeholder='Enter Resume name...' 
                            className='w-100 fs-4 p-3 '
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <div className="d-flex align-items-center gap-3 mt-4">
                            <Button 
                                type='submit' 
                                variant="primary"
                                className='fs-5 w-40'
                            >
                                Ok
                            </Button>

                            <Button 
                                type='button' 
                                className='fs-5 w-40'
                                variant='dark'
                                onClick={() => setIsTrue(!isTrue)}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CreateResumName