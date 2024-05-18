import React, { useReducer, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import WorkExpListComp from './WorkExpListComp';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useNavigate } from 'react-router-dom';
import usePostApiData from '../UseCoustumHook/usePostApiData';

const initialState = {
  organization : '',
  designation : '',
  jobDurationForm : '',
  jobDurationTo : '',
  responsibility : '',
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

const WorkExpComp = ({ur}) => {
  const [state , dispatch] = useReducer(reducer , initialState)
  const [workExpList , setWorkExpList] = useState([])
  const [isTrue , setIsTrue] = useState(false)
  const id = JSON.parse(localStorage.getItem('resume-id'))
  const history = useNavigate()
  const {err , isPost , handelPostData} = usePostApiData(`https://resumemekar.onrender.com/api/post/resume-workexp/${id}`)


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
    })
  }
  const handleAddWorkData = () => {
    handelPostData(workExpList)
  }

  if(isPost){
    history(`/dashboard/resume-form?q=${ur}&onlyComputerItems=true`)
  }


  return (<>
    <section className="border p-4">
      <div className="d-flex align-items-center justify-content-between">
        <h1 className='fs-3'>Work Experience</h1>
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
            <label htmlFor="organization">
              Organization {""}
              <span style={{
                color : 'red',
                fontSize : '1.5rem'
              }}>*</span>
            </label>
            <input 
              type="text" 
              placeholder='Enter organization...'
              className='w-100'
              name='organization'
              value={state.organization}
              onChange={(e) => handleChange(e.target)}
              required
            />

          </div>
          <div className="org w-100 mb-3">
            <label htmlFor="Designation">
              Designation {""}
              <span style={{
                color : 'red',
                fontSize : '1.5rem'
              }}>*</span>
            </label>
            <input 
              type="text" 
              placeholder='Enter Designation...'
              className='w-100'
              name='designation'
              value={state.designation}
              onChange={(e) => handleChange(e.target)}
              required
            />

          </div>
          <div className="org w-100 mb-3">
            <label htmlFor="">Job Duration {""}
              <span style={{
                color : 'red',
                fontSize : '1.5rem'
              }}>*</span></label>
            <div className='d-flex align-items-center gap-5 w-100'>
              <div className="w-50">
                <input type="text" 
                  name="jobDurationForm" 
                  className="w-100" 
                  placeholder='From'
                  value={state.jobDurationForm}
                  onChange={(e) => handleChange(e.target)}
                  required
                />
              </div>
              <div className="w-50">
                <input type="text" 
                  name="jobDurationTo" 
                  className="w-100" 
                  placeholder='To'
                  value={state.jobDurationTo}
                  onChange={(e) => handleChange(e.target)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="org w-100 mb-3">
            <label htmlFor="Responsibility">
              Responsibility {""}
              <span style={{
                color : 'red',
                fontSize : '1.5rem'
              }}>*</span>
            </label>
            <textarea 
              type="text" 
              placeholder='Enter Responsibility...'
              className='w-100'
              name='responsibility'
              value={state.responsibility}
              onChange={(e) => handleChange(e.target)}
              required
            ></textarea>
          </div>
          <button className="btn btn-primary theBtnBoxSub fs-3">
            Add <AddIcon style={{fontSize : '2rem'}} />
          </button>
        </form>
        :<>
        <div className='row'>
          {workExpList.map((ele , index) => (
            <div className="col-6 mt-4" key={index}>
              <WorkExpListComp 
              ele = {ele} 
              indx = {index} 
              list = {workExpList} 
              setList = {deteteData} />
            </div>
          ))}
        </div>
        <button 
        className='btn btn-primary fs-3 mt-5 theBtnBoxSub'
        onClick={handleAddWorkData}
        >Submit</button>
        </>
      }
    </section>
  </>)
}

export default WorkExpComp