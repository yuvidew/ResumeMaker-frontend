import React from 'react'
import { Container } from 'react-bootstrap'
import './HomePageStyle.css'
import { useNavigate } from 'react-router-dom'
import hero from '../assets/hero.jpg'
import { useSnackbar } from 'notistack'
import NavBarComp from '../NavBarFold/NavBarComp'

const HomePageComp = () => {
    const history = useNavigate()
    const {enqueueSnackbar} = useSnackbar()
    const handleNavigation = () => {
        if(localStorage.getItem('userUID')){
            history('/dashboard/home')
        }else{
            enqueueSnackbar('Login Pls' , { variant: 'error' })
        }
    }
    return (<>
    <section className=''>
    <NavBarComp/>
        <Container className='h-100'>
            <div className="row h-100 container">
                <div className="col-lg-7 col-md-12 h-100">
                    <div className="textBox h-100 d-flex align-items-lg-start align-items-md-center align-items-center justify-content-center flex-column">
                        <p className='text-xl sm:text-4xl md:text-5xl'>WELCOME TO MY CV CREATOR , </p>
                        <h2 className='text-3xl sm:text-6xl md:text-6xl theHsd mt-1' >Create a compelling CV with <span style={{
                            color : '#3f1cbd'
                        }}>Resume Maker</span> in minutes.</h2>
                        <p className='text-base sm:text-xl md:text-2xl font-medium mt-3 theHsd'  style={{
                            color : '#666'
                        }}>Seamlessly create an exceptional resume/CV, fine-tuning expert content to match your individuality</p>

                        <button 
                            className='btn btn-primary fs-3 w-25 mt-5 border-0 p-3'
                            onClick={handleNavigation}
                            style={{
                                background : '#3f1cbd'
                            }}
                        >
                            Get Start
                        </button>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 h-100 theImgCont">
                    <div className="d-flex align-items-center justify-content-end w-100 h-100"> 
                        <img 
                            src={hero} 
                            alt="" 
                            className='w-100 h-100 text-center object-fit-contain' 
                        />
                    </div>
                </div>
            </div>
        </Container>
    </section>
    </>)
}

export default HomePageComp