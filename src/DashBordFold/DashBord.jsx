import React, { useCallback, useMemo, useState } from 'react'
import userLog from '../assets/userLog.png'
import '../DashBordFold/DashBoard.css'
import '../DashBordFold/ResDashBordStyle.css'
import CreateResumName from './CreateResumName'
import NavBarComp from './NavBarComp'
import {ListGroup} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import HomeDashBoard from './ToolsComp/HomeDashBoard'
import MyCoverLetter from './ToolsComp/MyCoverLetter'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import DescriptionIcon from '@mui/icons-material/Description';
import Resume from './ToolsComp/Resume'


const DashBoard = () => {
    const [isTrue , setIsTrue] = useState(false)
    const topicName = useParams()
    const user = JSON.parse(localStorage.getItem('resMakUser'))

    const BtnLink = [
        {
            text:'DashBoard',
            url : 'home',
            Comp : <HomeDashBoard/>,
            icon : <DashboardIcon className='fs-1' />
        },
        {
            text:'Resume',
            url : 'resume',
            Comp : <Resume/>,
            icon : <ArticleIcon className='fs-1' />
        },
        {
            text:'My Cover Letter',
            url : 'my-cover-letter',
            Comp : <MyCoverLetter/>,
            icon : <DescriptionIcon className='fs-1' />
        },
        
    ]
    
    const CurrentComp = useMemo(() => {
        return BtnLink.filter((ele) => ele.url.toLowerCase().includes(topicName.slug))
    } , [ BtnLink , topicName.slug])


    return (
    <>
        <NavBarComp/>
        <section className='theSectionBox border m-auto'>
            <div className="row h-100 ">
                <div className="col-lg-2 col-md-1 col-1 h-100 theCont border-0 p-0" > 
                    <section className='theSlideBar w-100 m-auto'>
                        <section className=''>
                            <div className='mt-5 mb-3 m-auto'>
                                <div className="w-100 h-100 flex align-items-center flex-column justify-content-center gap-3">
                                    <div className="imgCont">
                                        <img src={userLog} alt="" />
                                    </div>
                                    <div className="textBox text-center d-lg-block d-md-block d-none">
                                        <p className='fs-2'>{user ? user.check.name : 'empty'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='m-auto mt-5'>
                                <ListGroup as="ul">
                                {BtnLink.map((ele) => (
                                    <Link to={ele.url} key={ele.text} className=' text-decoration-none'>
                                        <ListGroup.Item 
                                            as="li" 
                                            className='p-0'
                                            disabled
                                        >
                                            <button
                                                className={`btn  h-100 w-100 text-start fs-4 rounded-0 p-3 d-flex align-items-center  justify-md-center gap-3
                                                ${ele.url == topicName.slug && 'theBntCol'}
                                                `}
                                            >
                                                {ele.icon}
                                                <span className='d-lg-block d-md-none d-none'>
                                                    {ele.text}
                                                </span>
                                            </button>
                                        </ListGroup.Item>
                                    </Link>
                                ))}
                                </ListGroup>
                            </div>
                        </section>
                    </section>
                </div>
                <div className="col-10 h-100 p-0 ">
                    {CurrentComp.length < 0 ? <HomeDashBoard/> : CurrentComp[0].Comp}
                </div>
            </div>
        </section>
        {isTrue && <CreateResumName 
            isTrue = {isTrue}
            setIsTrue = {setIsTrue}
        />}
    </>
    )
}

export default DashBoard