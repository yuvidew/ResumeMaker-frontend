import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import usePostApiData from '../UseCoustumHook/usePostApiData';
import { useNavigate } from 'react-router-dom';

const SkillsComp = ({ur}) => {
    const [skillsList , setSkillsList] = useState([])
    const [skill , setSkill] = useState('')
    const id = JSON.parse(localStorage.getItem('resume-id'))
    const history = useNavigate()
    const {err , isPost , handelPostData} = usePostApiData(`http://localhost:2000/api/post/resume-skills/${id}`)


    const handleSubmit = (e) => {
        e.preventDefault()
        setSkillsList(pre => [...pre , skill])
        setSkill('')
    }

    const deleteItems = (i) => {
        setSkillsList(ele => {
        const items = [...ele]
            items.splice(i , 1)
            return items
        })
    }

    const handleAddProData = () => {
        handelPostData(skillsList)
    }
    
    if(isPost){
        history(`/dashboard/resume-form?q=${ur}&onlyComputerItems=true`)
    }

    return (
        <section className="border p-4">
            <form action="" className='theForm' onSubmit={handleSubmit}>
                <label htmlFor="skills">
                    Skills {""}
                    <span style={{
                        color : 'red',
                        fontSize : '1.5rem'
                    }}>*</span>
                </label>
                <input 
                    type="text" 
                    placeholder='Enter your skills...' 
                    className='w-100'
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    />
            </form>
            <p className='mt-2'>You have a {skillsList.length} skills</p>
            <div className=" mt-2 w-100 container">
                {skillsList.map((ele , ind) => (
                    <button 
                    key={ind}
                    className='btn btn-secondary d-flex align-items-center d-inline-flex m-1 item gap-2 fs-5' 
                    onClick={() => deleteItems(ind)}
                    >{ele}<CloseIcon/></button>
                ))}
            </div>
            <button className='btn btn-primary fs-4 mt-5 theBtnBoxSub' onClick={handleAddProData}>Submit</button>
        </section>
    )
}

export default SkillsComp