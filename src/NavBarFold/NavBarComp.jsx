import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'
import './NavBarStyle.css'
import NavLinksComp from './NavLinksComp'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const NavBarComp = () => {
    const [isTrue , setIsTrue] = useState(false)
    const history = useNavigate()
    return (<>
        <header className=''>
            <Container className='h-100'>
                <div className="row h-100">
                    <div className="col-6 h-100">
                        <div className="d-flex w-100 h-100 align-items-center justify-content-start">
                            <button className="btn border-0" 
                            style={{textAlign : 'left'}}
                            onClick={() => history('/')}
                            >
                                <img className='logo' src={logo} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="col-6 h-100">
                        <div className="d-lg-none d-flex align-items-center justify-content-end h-100">
                            <button className='btn border-0'
                            onClick={() => setIsTrue(!isTrue)} 
                            style={{textAlign : 'right'}}
                            >
                                <MenuIcon className='theIcon' />
                            </button>
                        </div>
                        <div 
                        className="d-lg-flex d-md-block w-100 h-100 
                        align-items-center justify-content-end gap-3 "
                        id='NavBar'
                        style={{
                            right : isTrue ?  '0%'  :  '-100%'
                        }}
                        >
                            <button className="btn w-25 d-lg-none d-flex border-0"
                            onClick={() => setIsTrue(!isTrue)} 
                            >
                                <CloseIcon style={{
                                    fontSize : '2rem',
                                }}  />
                            </button>
                            <NavLinksComp/>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    </>)
}

export default NavBarComp