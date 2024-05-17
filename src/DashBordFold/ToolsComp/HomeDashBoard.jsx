import React, { useState } from 'react'
import './HomeToollResume.css'
import CreateResumName from '../CreateResumName'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CreateLetter from '../CreateLetter';

const HomeDashBoard = () => {
    const [isTrue , setIsTrue] = useState(false)
    const [hideShowCLetter , setHideShowCLetter] = useState(false)
    
    return (
    <>
        <div className="d-flex align-items-center justify-content-center h-100 ">
            <section className='theHomeDashBoard '>
                <div className="row theRow m-auto ">
                    <div 
                        className="col-lg-3 col-md-4 col-12 theCreateResumeCard mt-5" 
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
                            <h1 className='text-white text-2xl'>Create Resume</h1>
                        </div>
                    </div>
                    <div 
                        className="col-lg-3 col-md-4 col-12 theCreateResumeCard mt-5"
                        onClick={() => setHideShowCLetter(!hideShowCLetter)}
                    >
                        <div className="theCard2 w-100 h-100 d-flex align-items-center 
                        justify-content-center flex-column gap-3 rounded-3 cursor-pointer">
                            <AddCircleOutlineIcon
                                className=' text-white' 
                                style={{
                                    fontSize : '5rem'
                                }}
                            />
                            <h1 className='text-white text-2xl'>Create Letter</h1>
                        </div>
                    </div>
                </div>
            </section>
            {isTrue && <CreateResumName isTrue = {isTrue} setIsTrue={setIsTrue} />}
            {hideShowCLetter && <CreateLetter isTrue = {hideShowCLetter} setIsTrue={setHideShowCLetter} />}
        </div>
    </>
    )
}

export default HomeDashBoard