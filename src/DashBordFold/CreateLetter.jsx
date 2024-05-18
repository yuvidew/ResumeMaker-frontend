import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import usePostApiData from '../UseCoustumHook/usePostApiData';
import { useNavigate } from 'react-router-dom';


const CreateLetter = ({isTrue , setIsTrue}) => {
    const [input , setInput] = useState('')
    const id = JSON.parse(localStorage.getItem('resMakUser'))
    const {isPost , handelPostData} = usePostApiData('https://resumemekar.onrender.com/api/post/letter')
    const history = useNavigate()
    const handelFormSubmit = (e) => {
        e.preventDefault()
        const obj = {
            letterName : input,
            userId : id.check._id
        }
        handelPostData(obj)
    }
    if(isPost){
        setIsTrue(!isTrue)
        history('/dashboard/letter-form')
    }
    return (
        <div className='theCreateLetter d-flex align-items-center justify-content-center h-100 w-100'>
            <Card className='thePopupCard border-0'>
                <Card.Header as="h5" className='theHeader text-white text-center'>
                    New Letter
                </Card.Header>
                <Card.Body className='h-100'>
                    <form action="" className='mt-1' onSubmit={handelFormSubmit}>
                        <label htmlFor="" className='text-2xl w-100 mb-3'>
                            Letter name 
                        </label>
                        <input 
                            type="text" 
                            placeholder='Enter Letter name...' 
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

export default CreateLetter