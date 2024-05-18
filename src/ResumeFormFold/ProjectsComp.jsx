import React, { useReducer, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useNavigate } from 'react-router-dom';
import ProjectListFromComp from './ProjectFromListComp';
import usePostApiData from '../UseCoustumHook/usePostApiData';

const initialState = {
    projectName : '',
    projectDetails : '',
    role : '',
    projectDuration : '',
    teamSize : '',
}

const reducer = (state , action) => {
switch(action.type){
    case 'SET_FIELD':
    return {
        ...state,
        [action.fieldName] : action.fieldValue,
    };
    case 'RESET_FORM' : 
    return initialState;
    default : 
    return state;
}
}

const ProjectFromComp = ({ur}) => {
    const [state , dispatch] = useReducer(reducer , initialState)
    const [workExpList , setWorkExpList] = useState([])
    const [isTrue , setIsTrue] = useState(false)
    const id = JSON.parse(localStorage.getItem('resume-id'))
    const {err , isPost , handelPostData} = usePostApiData(`https://resumemekar.onrender.com/api/post/resume-project/${id}`)

    const history = useNavigate()

    const handleChange = (inpD) => {
        const {name , value} = inpD;
        dispatch({
        type : 'SET_FIELD',
        fieldName : name,
        fieldValue : value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state);
        setWorkExpList(prev => [...prev , state])
        setIsTrue(!isTrue)
    }

    const deteteData = (index) => {
        setWorkExpList(ele => {
        const items = [...ele]
        items.splice(index , 1)
        return items
    })}

    const handleAddProjectData = () => {
        handelPostData(workExpList)
    }
    
    if(isPost){
        history(`/dashboard/resume-form?q=${ur}&onlyComputerItems=true`)
    }

    return (
        <section className="border p-4">
        <div className="d-flex align-items-center justify-content-between">
            <h1 className='fs-3'>Project Details</h1>
            {isTrue 
            && <button className='btn' onClick={() => setIsTrue(!isTrue)}>
            <PlaylistAddIcon style={{
                fontSize : '2.4rem'
            }} />
            </button>}
        </div>
        {!isTrue 
            ? 
            <form action="" className='theForm mt-5' onSubmit={handleSubmit}>
            <div className="org w-100 mb-3">
                <label htmlFor="projectName">
                Project Name {""}
                <span style={{
                    color : 'red',
                    fontSize : '1.5rem'
                }}>*</span>
                </label>
                <input 
                    type="text" 
                    placeholder='Enter Project Name...'
                    className='w-100'
                    name='projectName'
                    value={state.projectName}
                    onChange={(e) => handleChange(e.target)}
                    required
                />

            </div>
            <div className="org w-100 mb-3">
                <label htmlFor="projectDetails">
                Project Details {""}
                <span style={{
                    color : 'red',
                    fontSize : '1.5rem'
                }}>*</span>
                </label>
                <textarea 
                    type="text" 
                    placeholder='Enter Project Details...'
                    className='w-100'
                    name='projectDetails'
                    value={state.projectDetails}
                    onChange={(e) => handleChange(e.target)}
                    required
                ></textarea>

            </div>

            <div className="org w-100 mb-3">
                <label htmlFor="role">
                Role {""}
                <span style={{
                    color : 'red',
                    fontSize : '1.5rem'
                }}>*</span>
                </label>
                <input 
                    type="text" 
                    placeholder='Enter Role...'
                    className='w-100'
                    name='role'
                    value={state.role}
                    onChange={(e) => handleChange(e.target)}
                    required
                />
            </div>
            <div className="org w-100 mb-3">
                <label htmlFor="projectDuration">
                Project Duration {""}
                <span style={{
                    color : 'red',
                    fontSize : '1.5rem'
                }}>*</span>
                </label>
                <input 
                    type="text" 
                    placeholder='Enter Project Duration...'
                    className='w-100'
                    name='projectDuration'
                    value={state.projectDuration}
                    onChange={(e) => handleChange(e.target)}
                    required
                />
            </div>
            <div className="org w-100 mb-3">
                <label htmlFor="teamSize">
                Team Size {""}
                <span style={{
                    color : 'red',
                    fontSize : '1.5rem'
                }}>*</span>
                </label>
                <input 
                    type="text" 
                    placeholder='Enter Team Size...'
                    className='w-100'
                    name='teamSize'
                    value={state.teamSize}
                    onChange={(e) => handleChange(e.target)}
                    required
                />
            </div>
            <button className="btn btn-primary theBtnBoxSub fs-3">
                Add <AddIcon style={{fontSize : '2rem'}} />
            </button>
            </form>
            :<>
            <div className='row'>
            {workExpList.map((ele , index) => (
                <div className="col-6 mt-4" key={index}>
                <ProjectListFromComp 
                ele = {ele} 
                indx = {index} 
                list = {workExpList} 
                setList = {deteteData} />
                </div>
            ))}
            </div>
            <button 
            className='btn btn-primary fs-3 mt-5 theBtnBoxSub'
            onClick={handleAddProjectData}
            >Submit</button>
            </>
        }
        </section>)
}

export default ProjectFromComp