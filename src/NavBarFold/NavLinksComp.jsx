import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useSnackbar } from 'notistack';

const NavLinksComp = () => {
    const link = useLocation()
    const history = useNavigate()
    const {enqueueSnackbar} = useSnackbar()
    console.log(link.pathname);
    const handleLogOut = () => {
        localStorage.removeItem('userUID')
        window.location.reload()
    }

    const handleNavigation = () => {
        if(localStorage.getItem('userUID')){
            history('/dashboard/home')
        }else{
            enqueueSnackbar('Login Pls' , { variant: 'error' })
        }
    }

    return (<>
        <nav className='h-100 w-100  d-lg-flex d-md-block align-items-center justify-content-end gap-5 p-lg-0 p-5'>
            <NavLink 
                to={'/'} 
                className={'theNavLink d-block'}
            >
                <span 
                style={{
                    color :link.pathname == '/' && 'blue'
                }}>
                    Home
                </span>
            </NavLink>
            <p 
            className={'theNavLink d-block '} 
            style={{
                cursor : 'pointer',
                color :link.pathname == '/dashboard' && '#3f1cbd'
            }} 
            onClick={handleNavigation}>
                Dashboard
            </p>
        {
            localStorage.getItem('userUID')
            ?
            <div className="d-flex h-100 align-items-center justify-content-center ">
                <button className='btn fs-4 theBTnBox' onClick={handleLogOut}>
                    <PowerSettingsNewIcon
                        className='theBTnBorder'
                        style={{
                        fontSize : '2rem',
                    }}
                    />
                </button>
            </div>
            :
            <div className="d-flex align-items-center gap-3 theLogBtn">
                <button className='btn btn fs-4 '
                onClick={() => history('/login')}
                >
                    Login
                </button>
                <button className='btn text-white fs-4 outline-none'
                style={{
                    background : "#3f1cbd"
                }}
                onClick={() => history('/sign')}
                >
                    Sign up
                </button>
            </div>
        }
        </nav>
    </>)
}

export default NavLinksComp