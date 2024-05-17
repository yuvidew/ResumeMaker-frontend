import React, { useState } from 'react'
import usePostApiData from '../UseCoustumHook/usePostApiData'
import { useNavigate } from 'react-router-dom'
import useImgUploader from './custemHock/useImgUploader'
import CircularProgress from '@mui/material/CircularProgress';
import './ResumeForm.css'

const UploadImage = () => {
    const [src , setSrc] = useState(null)
    const history = useNavigate()
    const [imgUrl , handelImgUploader , isTrue] = useImgUploader()
    const id = JSON.parse(localStorage.getItem('resume-id'))
    console.log(imgUrl);
    const {isPost , handelPostData} = usePostApiData(`/api/post/resume-uploadimage/${id}`)
    const handleSubmit = (e) => {
        e.preventDefault()
        const objData = {
            img : imgUrl
        }
        handelPostData(objData);
    }
    if(isPost){
        history(`/dashboard/home`)
    }
    return (<>
        <div className="section border p-4">
            <form 
                className="upload-image w-100 theForm" 
                onSubmit={handleSubmit}
            >
                <label htmlFor="up-img" className='theLabel d-block mb-4'>
                    Upload image {""}
                    <span style={{
                        color : 'red',
                        fontSize : '1.5rem'
                    }}>* </span>
                </label>

                <div className="d-flex align-items-center theUploaderBox justify-content-between">
                    <input 
                        type="file" 
                        onChange={(e) => setSrc(e.target.files[0])} 
                        className='border-0 w-75' 
                    />
                    <button 
                        type='button'
                        className=' btn btn-dark theUploadBtn fs-3'
                        onClick={() => handelImgUploader(src)}
                    >
                        {isTrue ?  <CircularProgress  className='theCircular p-1' size={25} /> : 'Upload'}
                    </button>
                </div>

                <button className='btn btn-primary fs-3 mt-5 theBtnBoxSub border-0 submitBtn'>
                    Submit
                </button>
            </form>
            
        </div>
    </>)
}

export default UploadImage