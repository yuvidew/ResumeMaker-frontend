import React, { useState } from 'react'
import CreateResumName from '../CreateResumName'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Card } from 'react-bootstrap';
import resCard from '../../assets/resCard.jpg'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import useSearchParamsHook from './CustemHooks/useSearchParamsHook';
import ResumesTemplates from './ResumeTemplates/ResumesTemplates';
import useFetch from '../../UseCoustumHook/useFetch';
import useDeleteHook from '../../UseCoustumHook/useDeleteHook';

const fontSize = {
    fontSize : '2.5rem'
}

const Resume = () => {
    const [isTrue , setIsTrue] = useState(false)
    const [query , handleQue , showHide , setShowHide] = useSearchParamsHook()
    const [deleteResume] = useDeleteHook()
    const {err , data} = useFetch('https://resumemekar.onrender.com/api/get/resumes')
    const Resume = data.filter(ele => ele._id == query)


    return (
        <div className="d-flex align-items-center justify-content-center h-100  " >
            <section className='theHomeDashBoard overflow-y-auto'>
                <div className="row theRow m-auto mt-5 mb-5">
                    <div className="theTopBox987273 mb-3 py-2 d-flex align-items-center justify-content-center">
                        <p className='text-2xl'>
                        <span className=' fw-medium '>PRO TIP</span>: It’s important to create a custom 
                        resume tailored to each job application to 
                        increase your chances of success!</p>
                    </div>
                    <div 
                        className="col-lg-3 col-md-4 col-12 mt-5 theCreateResumeCard " 
                        onClick={() => setIsTrue(!isTrue)}
                    >
                        <div className="theCard1 w-100 h-100 d-flex align-items-center 
                        justify-content-center flex-column gap-3 rounded-3 cursor-pointer">
                            <AddCircleOutlineIcon
                                className=' text-white' 
                                style={{
                                    fontSize : '5rem'
                                }}
                            />
                            <h1 className='text-white text-3xl'>Create Resume</h1>
                        </div>
                    </div>
                    {
                        data.length != 0  ? data.map((ele) => (
                            <div key = {ele._id}  className=" mt-5  col-lg-3 col-md-4 col-12 theCreateResumeCard " >
                                <Card key = {ele._id} className='h-100 p-0 m-0 w-100 theResumeCard'>
                                    <Card.Body className='h-100 p-0'>
                                        <img className='w-100 h-100 object-fit-cover' src={resCard} alt="" />
                                    </Card.Body>
                                    <div className="Resume-text-Box  w-100 p-3">
                                        <div className="h-50 d-flex align-items-center justify-content-start">
                                            <h2 className='mt-4 text-3xl'>{ele.resumeName}</h2>
                                        </div>
                                        <div className="h-50 d-flex align-items-center gap-4">
                                            <Button variant='light'>
                                                <EditNoteIcon style={fontSize}/>
                                            </Button>
                                            <Button variant='light' onClick={() => deleteResume(`https://resumemekar.onrender.com/api/get/resumes/api/delete/resume/${ele._id}`)}>
                                                <DeleteIcon style={fontSize}/>
                                            </Button>
                                            <Button variant='light' onClick={() => handleQue(ele._id)}>
                                                <ArrowOutwardIcon style={fontSize}/>
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )) : (
                            <h1>Loading...</h1>
                        )
                    }
                </div>
            </section>
            {isTrue && <CreateResumName isTrue = {isTrue} setIsTrue={setIsTrue} />}
            {showHide && <ResumesTemplates theResume = {Resume} showHide = {showHide} setShowHide = {setShowHide} />}
        </div>
    )
}

export default Resume

// http://localhost:5173/dashboard/resume?que=65f762111b00e53dfb0d4050&onlyComputerItems=true