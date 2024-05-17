import React from 'react'
import './LoginRegistretionStyle.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSnackbar } from 'notistack'
import { Container } from 'react-bootstrap'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import loginImg from '../assets/login.jpg'
import google from '../assets/google.png'
import { 
    getAuth, 
    signInWithEmailAndPassword ,
    GoogleAuthProvider ,
    signInWithPopup
} from 'firebase/auth'

import { app } from '../firebase'

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const LoginComp = () => {
    const {register , handleSubmit , formState : {error}} = useForm()
    const history = useNavigate()
    const {enqueueSnackbar} = useSnackbar()
    const onSubmit = (data) => {
        signInUser(data.email , data.password);
    }

    const signInUser = (e , p) => {
        signInWithEmailAndPassword(
            auth , e , p
        ).then(v => {
            enqueueSnackbar('You are successfully login !', { variant: 'success' });
            localStorage.setItem('userUID' , v.user.uid)
            history('/')
            window.location.reload()
        }).catch(err => enqueueSnackbar(err, { variant: 'error' }))
    }

    const signInWithGoogle = () => {
        signInWithPopup( auth , googleProvider)
        .then(v => {
        
            enqueueSnackbar('You are successfully login !', { variant: 'success' });
            localStorage.setItem('userUID' , v.user.uid)
            history('/')
        }).catch(err => {
            console.log(err);
            enqueueSnackbar(err, { variant: 'error' })
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
                <div className="row  w-full h-full ">
                    <div className="col-lg-6  h-full d-lg-block d-md-none d-none">
                        <div className="flex items-center justify-content ">
                            <img src={loginImg} 
                            className='theImg w-full h-full object-contain'
                            alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 h-full">
                        <div className="h-full flex items-center justify-center">
                            <form action="" className='w-100' onSubmit={handleSubmit(onSubmit)}>
                                <h1 className='text-5xl text-left mb-3' style={{
                                    color : '#3f1cbd'
                                }}>Login</h1>
                                <p
                                    className=' mb-4 mt-2 text-2xl text-gray-400'
                                >
                                    Doesn't have an account yet? {" "}
                                    <NavLink 
                                        to={'/sign'}
                                        className={' underline  text-blue-500'}
                                    >Sign up</NavLink>
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
                                    Login
                                </button>
                                <p
                                    className=' h-10  flex items-center justify-center'
                                >
                                <i className=' text-center'>or</i></p>
                                <button 
                                    type='button'
                                    className='w-100 btn btn-light text-2xl p-2 mt-2 border-none flex items-center justify-center gap-3'
                                    onClick={signInWithGoogle}
                                >
                                    Login with Google 

                                    <img className='w-8 object-contain py-2' src={google} alt="" />
                                </button>
                                <p 

                                    className='btn w-100 text-2xl text-left mt-3' 
                                    style={{
                                        color : '#0979db',
                                    }}
                                > 
                                    Forgot password ? 
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default LoginComp