import React, { useReducer, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useNavigate } from 'react-router-dom';
import EducationListComp from './EducationListComp';
import usePostApiData from '../UseCoustumHook/usePostApiData';

const initialState = {
  degreeCourse : '',
  instituteCollage : '',
  percentageCgpa : '',
  year : '',
  universityBoard : '',
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

const EductionComp = ({ur}) => {
  const [state , dispatch] = useReducer(reducer , initialState)
  const [workExpList , setWorkExpList] = useState([])
  const [isTrue , setIsTrue] = useState(false)
  const history = useNavigate()
  const id = JSON.parse(localStorage.getItem('resume-id'))
  const {
    err , 
    isPost , 
    handelPostData
  } = usePostApiData(`https://resumemekar.onrender.com/api/post/resume-eduction/${id}`)
  

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

    const handleAddProData = () => {
      handelPostData(workExpList)
  }

  if(isPost){
    history(`/dashboard/resume-form?q=${ur}&onlyComputerItems=true`)
  }


  return (
    <section className="border p-4">
      <div className="d-flex align-items-center justify-content-between">
        <h1 className='fs-3'>Education Details</h1>
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
            <label htmlFor="Degree/Course">
              Degree/Course {""}
              <span style={{
                color : 'red',
                fontSize : '1.5rem'
              }}>*</span>
            </label>
            <input 
              type="text" 
              placeholder='Enter Degree/Course...'
              className='w-100'
              name='degreeCourse'
              value={state.degreeCourse}
              onChange={(e) => handleChange(e.target)}
              required
            />

          </div>
          <div className="org w-100 mb-3">
            <label htmlFor="InStitute/Collage">
              InStitute/Collage {""}
              <span style={{
                color : 'red',
                fontSize : '1.5rem'
              }}>*</span>
            </label>
            <input 
              type="text" 
              placeholder='Enter InStitute/Collage...'
              className='w-100'
              name='instituteCollage'
              value={state.instituteCollage}
              onChange={(e) => handleChange(e.target)}
              required
            />

          </div>
          <div className="org w-100 mb-3">
            <label htmlFor="">Percentage/CGPA & Year of Passing {""}
              <span style={{
                color : 'red',
                fontSize : '1.5rem'
              }}>*</span></label>
            <div className='d-flex align-items-center gap-5 w-100'>
              <div className="w-50">
                <input type="text" 
                  name="percentageCgpa" 
                  className="w-100" 
                  placeholder='Percentage/CGPA'
                  value={state.percentageCgpa}
                  onChange={(e) => handleChange(e.target)}
                  required
                />
              </div>
              <div className="w-50">
                <input type="text" 
                  name="year" 
                  className="w-100" 
                  placeholder='year of passing/Pursuing'
                  value={state.year}
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
            <input 
              type="text" 
              placeholder='Enter University/Board...'
              className='w-100'
              name='universityBoard'
              value={state.universityBoard}
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
              <EducationListComp 
              ele = {ele} 
              indx = {index} 
              list = {workExpList} 
              setList = {deteteData} />
            </div>
          ))}
        </div>
        <button 
        className='btn btn-primary fs-3 mt-5 theBtnBoxSub'
        onClick={handleAddProData}
        >Submit</button>
        </>
      }
    </section>)
}

export default EductionComp