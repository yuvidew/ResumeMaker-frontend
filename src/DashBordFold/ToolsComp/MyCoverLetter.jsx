import React, { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './HomeToollResume.css'
import CreateLetter from '../CreateLetter';
import useFetch from '../../UseCoustumHook/useFetch';
import { Button, Card } from 'react-bootstrap';
import resCard from '../../assets/resCard.jpg'
import EditNoteIcon from '@mui/icons-material/EditNote'
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import useSearchParamsHook from './CustemHooks/useSearchParamsHook';
import useDeleteHook from '../../UseCoustumHook/useDeleteHook';
import LetterTemp from './LetterTemp/LetterTemp';

const fontSize = {
    fontSize : '2.5rem'
}

const MyCoverLetter = () => {
    const [isTrue , setIsTrue] = useState(false)
    const {err , data} = useFetch('/api/get/all/letters')
    const [query , handleQue , showHide , setShowHide] = useSearchParamsHook()
    const [deleteResume] = useDeleteHook()
    const Letter = data.filter(ele => ele._id == query)

    return (
        <div className='flex items-center justify-center h-100'>
            <section className="theHomeDashBoard">
                <div className="row theRow m-auto mt-5">
                    <div className="theTopBox987273 mb-5 py-2 d-flex align-items-center justify-content-center">
                        <p className=' text-2xl'>
                            <span className=' fw-medium '>PRO TIP</span>: 
                            It’s important to create a custom letter tailored to each 
                            job application to increase your chances of success!
                        </p>
                    </div>
                    <div 
                        className="col-lg-3 col-md-4 col-12 theCreateResumeCard mb-4"
                        onClick={() => setIsTrue(!isTrue)}
                    >
                        <div className="theCard2 w-100 h-100 d-flex align-items-center 
                        justify-content-center flex-column gap-3 rounded-3 cursor-pointer">
                            <AddCircleOutlineIcon
                                className=' text-white' 
                                style={{
                                    fontSize : '5rem'
                                }}
                            />
                            <h1 className='text-white text-3xl'>Create Letter</h1>
                        </div>
                    </div>
                    {
                        !err &&
                        data.map((ele) => (
                            <div key = {ele._id}  className=" col-lg-3 col-md-4 col-12 theCreateResumeCard mb-4" >
                                <Card key = {ele._id} className='h-100 p-0 m-0 w-100 theResumeCard'>
                                    <Card.Body className='h-100 p-0'>
                                        <img className='w-100 h-100 object-fit-cover' src={resCard} alt="" />
                                    </Card.Body>
                                    <div className="Resume-text-Box  w-100 p-3">
                                        <div className="h-50 d-flex align-items-center justify-content-start">
                                            <h2 className='mt-4 text-3xl'>{ele.letterName}</h2>
                                        </div>
                                        <div className="h-50 d-flex align-items-center gap-4">
                                            <Button variant='light'>
                                                <EditNoteIcon style={fontSize}/>
                                            </Button>
                                            <Button variant='light' onClick={() => deleteResume(`/api/delete/letters/${ele._id}`)}>
                                                <DeleteIcon style={fontSize}/>
                                            </Button>
                                            <Button variant='light' onClick={() => handleQue(ele._id)}>
                                                <ArrowOutwardIcon style={fontSize}/>
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </section>
            {isTrue && 
            <CreateLetter 
                isTrue = {isTrue} 
                setIsTrue={setIsTrue}     
            />}
            {showHide && <LetterTemp theLetter = {Letter} showHide = {showHide} setShowHide = {setShowHide} />}
        </div>
    )
}

export default MyCoverLetter