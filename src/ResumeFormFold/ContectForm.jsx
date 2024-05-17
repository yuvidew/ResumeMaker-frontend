import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom';
import usePostApiData from '../UseCoustumHook/usePostApiData';

const resMakUser = JSON.parse(localStorage.getItem('resMakUser'))

const initialState = {
    name : "",
    email : "",
    number : "",
    dob : "",
    gender : "",
    maritalStatus : "",
    address : "",
    city : "",
    state : "",
    pincode : "",
    nationality : "",
    
}

const reducer = (state , action) =>{
    switch(action.type){
        case  'SET_FIELD' : 
        return {
            ...state,
            [action.fieldName] : action.fieldValue,
            userId : resMakUser.check._id
        };
        case 'RESET_FORM' : 
        return initialState ;
        default:
        return state;
    }
}

const ContactForm = ({text , ur}) => {
    const [state ,  dispatch ] = useReducer(reducer , initialState)
    const history = useNavigate()
    const id = JSON.parse(localStorage.getItem('resume-id'))
    console.log(id);

    const {err , isPost , handelPostData} = usePostApiData(`/api/post/resume/continfo/${id}`)


    const handleChange = (inD) => {
        const {value , name} = inD
        dispatch({
            type : 'SET_FIELD',
            fieldName : name,
            fieldValue :  value,
            
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handelPostData(state)
        console.log(err , isPost);
    }
    if(isPost){
        history(`/dashboard/resume-form?q=${ur}&onlyComputerItems=true`)
    }

    return (<>
        <section className='border bg-stone-50 p-4 mb-5 h-full'>
            <h1 className='fs-3'>Content & Information</h1>
            <form action="" className='theForm mt-5' onSubmit={handleSubmit}>
                <div className="d-flex align-items-center justify-content-between gap-3 w-100 mt-2">
                    <div className="name w-100">
                        <label htmlFor="name" className='w-100'>Name <span style={{
                            color : 'red',
                            fontSize : '1.5rem'
                        }}>*</span></label>
                        <input type="text" 
                            placeholder='Enter Name...' 
                            className='w-100' 
                            name='name'
                            value={state.name}
                            onChange={(e) => handleChange(e.target)}
                            required
                        />
                    </div>
                    <div className="email w-100">
                        <label htmlFor="email" className='w-100'>Email Id <span style={{
                            color : 'red',
                            fontSize : '1.5rem'
                        }}>*</span></label>
                        <input 
                            type="text" 
                            placeholder='Enter email...' 
                            className='w-100' 
                            name='email'
                            value={state.email}
                            onChange={(e) => handleChange(e.target)}
                            required
                        />
                    </div>
                </div>
                <div className="d-flex align-items-center mt-4 justify-content-between gap-3 w-100 ">
                    <div className="number w-100">
                        <label htmlFor="number" className='w-100'>Number <span style={{
                            color : 'red',
                            fontSize : '1.5rem'
                        }}>*</span></label>
                        <input 
                            type="number" 
                            placeholder='Enter content number...' 
                            className='w-100' 
                            name='number'
                            value={state.number}
                            onChange={(e) => handleChange(e.target)}
                            required
                            />
                    </div>
                    <div className="dob w-100">
                        <label htmlFor="dob" className='w-100'>DOB <span style={{
                            color : 'red',
                            fontSize : '1.5rem'
                        }}>*</span></label>
                        <input 
                            type="date" 
                            placeholder='Enter DOB...' 
                            className='w-100' 
                            name='dob'
                            value={state.dob}
                            onChange={(e) => handleChange(e.target)}
                            required
                            />
                    </div>
                </div>
                <article className='d-flex align-items-center mt-4  gap-3 w-100 '>
                    <div className='mt-4 w-100'>
                        <label htmlFor="">Gender <span style={{
                            color : 'red',
                            fontSize : '1.5rem'
                        }}>*</span></label>
                        <div className="d-flex align-items-center mt-4  gap-5 w-100 ">
                            <div className="number  d-flex align-items-center gap-4">
                                <input 
                                    type="radio" 
                                    id='Male' 
                                    name='gender' 
                                    value={'Male'}
                                    onChange={(e) => handleChange(e.target)}    
                                    required
                                />
                                <label htmlFor="Male"  className='w-100'>Male </label>
                            </div>
                            <div className="number  d-flex align-items-center gap-4">
                                <input 
                                    type="radio" 
                                    id='Female' 
                                    name='gender' 
                                    value={'Female'}
                                    onChange={(e) => handleChange(e.target)}
                                    required
                                    />
                                <label htmlFor="Female"  className='w-100'>Female </label>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 w-100'>
                        <label htmlFor="">Marital status <span style={{
                                color : 'red',
                                fontSize : '1.5rem'
                        }}>*</span></label>
                        <div className="d-flex align-items-center mt-4  gap-5 w-100 ">
                            <div className="number  d-flex align-items-center gap-4">
                                <input 
                                    type="radio" 
                                    id='Single' 
                                    name='maritalStatus' 
                                    value={'single'}
                                    onChange={(e) => handleChange(e.target)}
                                    required
                                    />
                                <label htmlFor="Single"  className='w-100'>Single </label>
                            </div>
                            <div className="number  d-flex align-items-center gap-4">
                                <input 
                                    type="radio" 
                                    id='Maried' 
                                    name='maritalStatus' 
                                    value={'Maried'}
                                    onChange={(e) => handleChange(e.target)}
                                    required
                                    />
                                <label htmlFor="Maried"  className='w-100'>Maried </label>
                            </div>
                        </div>
                    </div>
                </article>
                <div className="d-flex align-items-center mt-4 justify-content-between gap-3 w-100 ">
                    <div className="Address w-100">
                        <label htmlFor="Address" className='w-100'>Address <span style={{
                            color : 'red',
                            fontSize : '1.5rem'
                        }}>*</span></label>
                        <input 
                            type="text" 
                            placeholder='Enter content Address...' 
                            className='w-100'
                            name='address'
                            value={state.address}
                            onChange={(e) => handleChange(e.target)}
                            required
                            />
                    </div>
                    <div className="City w-100">
                        <label htmlFor="City" className='w-100'>City <span style={{
                            color : 'red',
                            fontSize : '1.5rem'
                        }}>*</span></label>
                        <input 
                            type="text" 
                            placeholder='Enter City...' 
                            className='w-100' 
                            name  = "city"
                            value={state.city}
                            onChange={(e) => handleChange(e.target)}
                            required
                            />
                    </div>
                </div>
                <div className="d-flex align-items-center mt-4 justify-content-between gap-3 w-100 ">
                    <div className="State w-100">
                        <label htmlFor="State" className='w-100'>State <span style={{
                            color : 'red',
                            fontSize : '1.5rem'
                        }}>*</span></label>
                        <input 
                            type="text" 
                            placeholder='Enter content State...' 
                            className='w-100' 
                            name  = "state"
                            value={state.state}
                            onChange={(e) => handleChange(e.target)}
                            required
                            />
                    </div>
                    <div className="Pincode w-100">
                        <label htmlFor="Pincode" className='w-100'>Pincode <span style={{
                            color : 'red',
                            fontSize : '1.5rem'
                        }}>*</span></label>
                        <input 
                            type="number" 
                            placeholder='Enter Pincode...' 
                            className='w-100' 
                            name='pincode' 
                            value={state.pincode}
                            onChange={(e) => handleChange(e.target)}
                            required
                            />
                    </div>
                </div>
                <div className="d-flex align-items-center mt-4 justify-content-between gap-3 w-100">
                    <div className="Nationality w-100">
                        <label htmlFor="Nationality" className='w-100'>Nationality <span style={{
                            color : 'red',
                            fontSize : '1.5rem'
                        }}>*</span></label>
                        <input 
                            type="text" 
                            placeholder='Enter content Nationality...' 
                            className='w-100' 
                            name='nationality' 
                            value={state.nationality}
                            onChange={(e) => handleChange(e.target)}
                            required
                            />
                    </div>
                    { /* <div className="Upload image w-100">
                        <label htmlFor="Upload image" className='w-100'>Upload image <span style={{
                            color : 'red',
                            fontSize : '1.5rem'
                        }}>*</span></label>
                        <input 
                            type="file" 
                            placeholder='Enter Upload image...' 
                            className='w-100' 
                            name='image' 
                            onChange={(e) => handleFileChange(e)}
                            required
                            />
                    </div>*/}
                </div>
                <button className='mt-5 btn btn-primary fs-3 theBtnBoxSub border-0 p-2 '>Submit</button>
            </form>
        </section>
    </>)
}

export default ContactForm