import React from 'react'
import { Container } from 'react-bootstrap'
import ContactForm from './ContectForm'
import { useSearchParams } from 'react-router-dom';
import ResumSummeryComp from './ResumSummeryComp';
import ObjectiveComp from './ObjectiveComp';
import WorkExpComp from './WorkExpComp';
import EductionComp from './EductionComp';
import ProjectsComp from './ProjectsComp';
import SkillsComp from './SkillsComp';
import './ResumeFormStyle.css'
import UploadImage from './UploadImage';
import NavBarComp from '../DashBordFold/NavBarComp';

const ResumeFromComp = () => {
    const [searchParams ,  setSearchParams] = useSearchParams({q : 'Contact-info' , 
        onlyComputerItems : true
    });
    const query = searchParams.get('q')
    
    const handleQure = (text) => {
        setSearchParams(prev => {
            prev.set('q' , text)
            return prev
        } , {replace : true})
    }
    const btnList = [
        {
            text : 'Contact info',
            url : 'Contact-info',
            comp : <ContactForm text = 'Contact info' ur = 'Summary'  />,
        },
        {
            text : 'Summary',
            url : 'Summary',
            comp : <ResumSummeryComp text = 'Summary' ur = 'Career-Objective'   />
        },
        {
            text : 'Career Objective',
            url : 'Career-Objective',
            comp : <ObjectiveComp text = 'Career Objective' ur = 'Work-exp.'  />,
        },
        {
            text : 'Work exp.',
            url : 'Work-exp.',
            comp : <WorkExpComp text = 'Work exp.'  ur = 'Education'  />
        },
        {
            text : 'Education',
            url : 'Education',
            comp : <EductionComp text = 'Education'  ur = 'Projects' />,
        },
        {
            text : 'Projects',
            url : 'Projects',
            comp : <ProjectsComp text = 'Projects' ur = 'Skills'  />,
        },
        {
            text : 'Skills ',
            url : 'Skills',
            comp : <SkillsComp text = 'Skills' ur = 'Upload-image'  />,
        },
        {
            text : 'Upload image ',
            url : 'Upload-image',
            comp : <UploadImage text = 'Upload image' ur = 'Upload-image'  />,
        },
    ]
    
    
    const filteredComp = btnList.filter(items => {
        return items.url === query
    })
    
    const btnStyle = {
        background : '#3f1cbd',
        color : '#fff'
    }

    return (<>
        <NavBarComp/>
        <section className='theSectionBox overflow-y-auto scroll-smooth'>
            <Container className='py-4'>
                <section className=' bg-white border p-4 '>
                    <h2 className='pt-2 text-3xl'>Fill this From And <span style={{
                        color : '#3f1cbd'
                    }}>Create the Resume</span> in a min..</h2>

                    <div className=" row mt-5  ">
                        {btnList.map((ele , index) => (
                            <button 
                                className=' fs-4 p-3 theBtnBox text-center btn border-0 rounded-0 .btnStyle'
                                style={
                                    filteredComp[0].text === ele.text ? 
                                    btnStyle : {
                                        backgroundColor : '#fff'
                                    }}
                                onClick={() => handleQure(ele.url)}
                                key={index}
                            >
                                {ele.text}
                            </button>
                        ))}
                    </div>
                    <div className=" mt-4 ">
                        {filteredComp[0].comp}
                    </div>
                </section>
            </Container>
        </section>
    </>)
}

export default ResumeFromComp