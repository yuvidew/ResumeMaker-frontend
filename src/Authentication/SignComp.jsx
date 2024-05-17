import React from 'react'
import './LoginRegistretionStyle.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import { Container } from 'react-bootstrap'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import loginImg from '../assets/signup.jpg'
import google from '../assets/google.png'
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import {app} from '../firebase'

const auth = getAuth(app)

const SignComp = () => {
    const {register , handleSubmit , formState : {error}} = useForm()
    const history = useNavigate()
    const {enqueueSnackbar} = useSnackbar()
    const onSubmit = (data) => {
        singUpUser(data.email , data.password);
    }

    const singUpUser = (email , password) => {
        createUserWithEmailAndPassword(
        auth,
        email,
        password
        ).then(v => {
            enqueueSnackbar('You are successfully sign up !', { variant: 'success' });
            history('/login')
        }).catch(e => {
            enqueueSnackbar('Error here ! ', {variant : 'error'})
        })
        
    }

    return (<>
        <section className=' h-28 flex items-center justify-start '>
            <Container className='h-full'>
                <div className="flex items-center justify-start h-full">
                    <NavLink 
                        to={'/'}
                        className={' underline text-2xl text-blue-500'}
                    >
                        <ArrowBackIcon style={{
                            fontSize : '2rem'
                        }} /> Back to Home
                    </NavLink>
                </div>
            </Container>
        </section>
        <section className='loginForm d-flex align-items-center justify-content-center'>
            <div className="  theLoginFromCard flex items-center border">
                <div className="row  w-full h-full">
                    <div className="col-lg-6  h-full d-lg-block d-md-none d-none">
                        <div className="flex items-center justify-content ">
                            <img src={loginImg} 
                            className='theImg w-full h-full object-contain '
                            alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 h-full">
                        <div className="h-full flex items-center justify-center">
                            <form action="" className='w-100' onSubmit={handleSubmit(onSubmit)}>
                                <h1 className='text-5xl text-left mb-3' style={{
                                    color : '#3f1cbd'
                                }}>Signup</h1>
                                <p
                                    className=' mb-4 mt-2 text-2xl text-gray-400'
                                >
                                    Already you have account? {" "}
                                    <NavLink 
                                        to={'/login'}
                                        className={' underline  text-blue-500'}
                                    >login</NavLink>
                                </p>
                                <div className="emailId">
                                    <input type="email" id='email' 
                                    className='w-100  p-3' placeholder='Enter email id'  
                                    {...register('email', { required: 'This field is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                                    />
                                </div>
                                <div className="password mt-3">
                                    <input type="password" id='password' 
                                    className='w-100  p-3' placeholder='Enter password'  
                                    {...register('password', { required: 'This field is required' })}
                                    />
                                </div>
                                <button 
                                    className='w-100 btn btn-primary fs-3 p-2 mt-4 mb-2 border-none'
                                    style={{
                                        background : "#3f1cbd",
                                    }}
                                >
                                    Sign Up
                                </button>
                                <p
                                    className=' h-10  flex items-center justify-center'
                                >
                                <i className=' text-center'>or</i></p>
                                <button 
                                    className='w-100 btn btn-light text-2xl p-2 mt-2 border-none flex items-center justify-center gap-3'
                                >
                                    Sign Up with Google 

                                    <img className='w-8 object-contain py-2' src={google} alt="" />
                                </button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default SignComp