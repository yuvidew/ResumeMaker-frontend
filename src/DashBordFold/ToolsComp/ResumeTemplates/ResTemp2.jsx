import React from 'react'
import './ResumeTempStyle.css'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from 'react-bootstrap';

const ResTemp2 = ({theResume }) => {
    const data = theResume[0]

    return (
        <section 
            className="m-auto w-100 "
            style={{
                height : '100vh',
            }}
        >
            <div className="theTempBox  m-auto text-black bg-white d-flex align-items-top justify-content-center">
                <article className=' theResumeCard px-3'>
                    <div className="row h-100">
                        <div className="col-4 h-100 p-0">
                            <div className="d-flex align-items-center justify-content-center thePicImg">
                                <picture className='thePic border rounded-circle'>
                                    <img 
                                        className='w-100 h-100 object-fit-cover ' 
                                        src={data.imageUrl} 
                                        alt="" 
                                    />
                                </picture>
                            </div>
                        </div>
                        <div className="col-8 h-100 p-0">
                            <div className="thePicImg d-flex align-items-start justify-content-center flex-column  ">
                                <h1>{data.name}</h1>
                                <div className="row mt-3">
                                    <div className="col-lg-6 mt-2">
                                        <div className="d-flex align-items-center gap-4 py-1 pr-2">
                                            <Button variant='dark'>
                                                <PhoneEnabledIcon/>
                                            </Button>
                                            <p className=' text-1xl ' >
                                                +91 {data.number}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-2">
                                        <div className="d-flex align-items-center gap-4 py-1 pr-2">
                                            <Button variant='dark'>
                                                <EmailIcon/>
                                            </Button>
                                            <p className=' text-1xl ' >
                                                {data.email}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-2">
                                        <div className="d-flex align-items-center gap-4 py-1 pr-2">
                                            <Button variant='dark'>
                                                <LocationOnIcon/>
                                            </Button>
                                            <p className=' text-1xl ' >
                                                {data.address}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pera mt-4 mb-4">
                        <h3 className='text-4xl underline mb-7'>Profile</h3>
                        <p className='mt-2'>
                        {data.summary}
                        </p>
                    </div>
                    <div className="experience mt-4 mb-4">
                        <h3 className='text-4xl underline mb-7'>Experience</h3>
                        <ul className='mt-4'>
                            {data.workingExpre.map((ele) => (
                                <li className='mt-4' key={ele._id}>
                                    <h4 className='text-3xl'>{ele.designation}</h4>
                                    <div className="d-flex align-items-center gap-2 mt-2">
                                        <p className=' rightBorder pr-2 '>
                                            {ele.organization}
                                        </p>
                                        <p>{ele.jobDurationForm} - {ele.jobDurationTo}</p>
                                    </div>
                                    <p className='mt-1'>
                                        {ele.responsibility}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="project mt-4 mb-4">
                        <h3 className='text-4xl underline mb-7'>Projects</h3>
                        <ul className='mt-3'>
                        {data.projects.map((ele) => (
                            <li className='mt-2' key={ele._id}>
                                <h4 className='text-3xl'>{ele.projectName}</h4>
                                <div className="d-flex align-items-center gap-2 mt-2">
                                    <p className=' rightBorder pr-2 '>{ele.role}</p>
                                    <p className='rightBorder pr-2'>{ele.projectDuration}</p>
                                    <p>Team : {ele.teamSize}</p>
                                </div>
                                <p className='mt-1'>
                                    {ele.projectDetails}
                                </p>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="eduction mt-4 mb-4">
                        <h3 className='text-4xl underline mb-7'>Eduction</h3>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                        {data.education.map((ele) => (
                            <div key={ele._id} className=' py-3 px-3 border-r-2 border-gray-500 flex gap-3 flex-col items-center justify-center'>
                                <h3 className='text-3xl text-center'>{ele.degreeCourse}</h3>
                                <h3 className='text-2xl text-center'>{ele.universityBoard}</h3>
                                <div className="flex items-center justify-center gap-2">
                                    <p className='rightBorder pr-2'>{ele.year}</p>
                                    <p className='pr-2'>{ele.percentageCgpa}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className={data.skills.length != 0 ?  "skills mt-4 mb-4" : "d-none"}>
                        <h3 className='text-4xl underline'>Skills</h3>
                        <div className='flex items-center gap-3 mt-3 mb-3'>
                            {data.skills.map(ele => (
                                <p className=' inline-flex text-3xl' key={ele}>
                                    {ele}
                                </p>
                            ))}
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default ResTemp2