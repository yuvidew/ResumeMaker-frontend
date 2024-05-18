import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import usePostApiData from '../UseCoustumHook/usePostApiData'

const ObjectiveComp = ({ur}) => {
    const [val , setVal] = useState('')
    const history = useNavigate()
    const id = JSON.parse(localStorage.getItem('resume-id'))
    const {err , isPost , handelPostData} = usePostApiData(`https://resumemekar.onrender.com/api/post/resume-Objective/${id}`)

    const exmpleList = [
        {
            id : 'sum1',
            text : "Seeking an entry-level position in Meta where I can leverage my Javascirpt and MERN Stack to contribute effectively to a dynamic team and develop a solid foundation for a successful career."
        },
        {
            id : 'sum2',
            text : "To secure a challenging position in sales and marketing, utilizing my proven skills in relationship-building, strategic planning, and effective communication to drive revenue growth and exceed targets."
        },
        {
            id : 'sum3',
            text : "Results-driven finance graduate with a strong analytical background seeking a challenging position in financial analysis or investment banking, where I can apply my quantitative skills, attention to detail, and strategic thinking to contribute to organizational success."
        },
        {
            id : 'sum4',
            text : "Goal-oriented project manager with a proven track record of successful project delivery. Seeking a challenging role where I can utilize my leadership, communication, and organizational skills to drive project success and contribute to the overall efficiency of the organization."
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        const obj  = {
            objective : val
        }
        handelPostData(obj)
    }

    if(isPost){
        history(`/dashboard/resume-form?q=${ur}&onlyComputerItems=true`)
    }

    return (
        <section className="border p-4">
            <h1 className='fs-3'>Career Objective</h1>
            <form action="" className='theForm mt-5' onSubmit={handleSubmit}>
                <label htmlFor="Summary" className=''>Objective <span style={{
                    color : 'red',
                    fontSize : '1.5rem'
                }}>*</span></label>
                <textarea 
                placeholder='Enter objective...' className='w-100'
                value={val}
                name='exm-summary'
                style={{
                    resize : 'none'
                }}
                onChange={(e) => setVal(e.target.value)}
                required
                ></textarea>

                <div className="orLine w-100 mb-5 mt-5">
                    <hr style={{
                        color : '#000'
                    }} />
                    <span className='text-center d-block '>OR</span>
                </div>
                <div className="example-summary">
                    <h2 className='fs-3 mb-5'>Example : - </h2>
                    <ul>
                    {exmpleList.map((ele , index) => (
                        <li className='d-flex align-items-center gap-3 mb-3' key={index}>
                            <input type="radio" name='exm-summary' id={ele.id} />
                            <label 
                                htmlFor={ele.id} 
                                className='fs-5'
                                onClick={() => setVal(ele.text)}
                            >{ele.text}</label>
                        </li>
                    ))}
                    </ul>
                </div>
                <button className='mt-5 theBtnBoxSub btn btn-primary fs-3'>
                    Submit
                </button>
            </form>
        </section>
    )
}

export default ObjectiveComp