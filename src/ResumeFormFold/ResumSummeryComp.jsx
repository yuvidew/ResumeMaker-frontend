import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import usePostApiData from '../UseCoustumHook/usePostApiData'

const ResumSummeryComp = ({ur}) => {
    const [val , setVal] = useState('')
    const id = JSON.parse(localStorage.getItem('resume-id'))
    const {err , isPost , handelPostData} = usePostApiData(`https://resumemekar.onrender.com/api/post/resume-summary/${id}`)
    const history = useNavigate()
    const exmpleList = [
        {
            id : 'sum1',
            text : "Results-oriented professional with 5+ years of experience in marketing. Increased website traffic by 30% through targeted SEO campaigns. Adept in social media marketing and content creation. Eager to leverage skills to contribute to your company's growth."
        },
        {
            id : 'sum2',
            text : "Highly motivated and organized individual with 3 years of experience in customer service. Proven ability to resolve customer issues efficiently and maintain high satisfaction ratings. Skilled in communication, problem-solving, and conflict resolution. Seeking a challenging role to utilize customer service expertise."
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        const obj  = {
            summary : val
        }
        handelPostData(obj)
    }
    if(isPost){
        history(`/dashboard/resume-form?q=${ur}&onlyComputerItems=true`)
    }
    return (<>
        <section className="border p-4">
            <h1 className='fs-3'> Resume Summary</h1>
            <form action="" className='theForm mt-5' onSubmit={handleSubmit}>
                <label htmlFor="Summary" className=''>Summary <span style={{
                    color : 'red',
                    fontSize : '1.5rem'
                }}>*</span></label>
                <textarea name="summary" 
                placeholder='Enter summary...' className='w-100'
                value={val}
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
                <button className='mt-5 btn btn-primary theBtnBoxSub fs-3'>Submit</button>
            </form>
        </section>
    </>)
}

export default ResumSummeryComp