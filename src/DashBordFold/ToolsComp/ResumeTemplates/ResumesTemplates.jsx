import React, { useState } from 'react'
import ResTemp1 from './ResTemp1'
import ResTemp2 from './ResTemp2'
import CloseIcon from '@mui/icons-material/Close';
import CloseButton from 'react-bootstrap/CloseButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from 'react-bootstrap';

const iconFont = {
    fontSize : '2.5rem'
}

const ResumesTemplates = ({theResume , showHide , setShowHide}) => {
    const [count , setCount] = useState(0)
    console.log('this is the resume data ',theResume);
    localStorage.setItem('resume-Data' , JSON.stringify(theResume))
    const tempList = [
        {
            temp : 'Resume-Template-1',
            comp : <ResTemp1 theResume = {theResume}  />,
        },
        {
            temp : 'Resume-Template-2',
            comp : <ResTemp2 theResume = {theResume}  />,
        },
    ]

    const SlideTheCard = (index) => {
        if(index == 0){
            let prevIndex = (count - 1 + tempList.length) % tempList.length
            setCount(prevIndex)
        }else if(index == 1){
            const nextIndex = (count + 1) % tempList.length;
            setCount(nextIndex);
        }
    }

    return (
        <div 
            className='theTemp d-flex align-items-center justify-content-center fs-1'
        >
            <section className='h-100 '
                style={{
                    overflowY : 'auto',
                    border : 'none'
                }}
            >
            <div className="flex items-center justify-between p-6">
                <CloseButton className=' ml-6' onClick={() => setShowHide(!showHide)} />
                <div className=" border-0  ">
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex align-items-center justify-content-start">
                                <Button variant='light' onClick={() => SlideTheCard(0)}>
                                    <KeyboardArrowLeftIcon style={iconFont} />
                                </Button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center justify-content-end">
                                <Button variant='light' onClick={() => SlideTheCard(1)}>
                                    <KeyboardArrowRightIcon style={iconFont} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center border-0">
                {tempList.map((ele , index) => (
                    <div className={count != index ?  'd-none' : "w-100 d-flex align-items-center justify-content-center border-none"  }>
                        {ele.comp}
                    </div>
                ))}
            </div>
            </section>
        </div>
    )
}

export default ResumesTemplates