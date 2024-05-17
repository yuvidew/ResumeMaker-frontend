import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import SearchBox from './SearchBox'
import PersonIcon from '@mui/icons-material/Person';
import '../DashBordFold/DashBoard.css'

const NavBarComp = () => {
    const history = useNavigate()
    const userData = JSON.parse(localStorage.getItem('resMakUser'))
    return (
        <header className='headerTop '>
            <main className='h-100 '>
                <div className="row h-100 m-auto theRow ">
                    <div className="col-6 h-100">
                        <div className="d-flex h-100 align-items-center gap-5 justify-content-start h-100">
                            <button className="btn border-0 mt-0" 
                            style={{textAlign : 'left'}}
                            onClick={() => history('/')}
                            >
                                <img className='logo' src={logo} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="col-6 h-100 ">
                        <div 
                        className="d-flex align-items-center justify-content-end h-100  "
                        >
                            <SearchBox  />
                            <button className='theUserName mt-0 h-full d-flex align-items-center gap-3 btn '>
                                <PersonIcon className='theIconUser'/>
                                <span className=''>{userData.check.name}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </header>
    )
}

export default NavBarComp