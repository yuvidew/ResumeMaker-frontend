import React from 'react'
import './ResumeTempStyle.css'
import './Responsive.css'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from 'react-bootstrap';

const ResTemp1 = ({theResume}) => {
    const data = theResume[0]
    return (
        <section 
            className="m-auto w-100"
            style={{
                height : '100vh',
            }}
        >
            <div className="theTempBox m-auto  text-black bg-white d-flex align-items-top justify-content-center">
                <article className=' theResumeCard p-3'>
                    <div className="row h-100">
                        <div className="col-4 h-100 p-0">
                            <div className="d-flex align-items-center justify-content-center thePicImg">
                                <picture className='thePic border rounded-circle'>
                                    <img 
                                        className='w-100 h-100 object-fit-cover ' 
                                        style={{
                                            borderRadius : '50rem'
                                        }}
                                        src={data.imageUrl} 
                                        alt="" 
                                    />
                                </picture>
                            </div>
                            <div>
                                <ul className='' >
                                    <li className='d-flex align-items-center gap-4 mt-3 pl-2'>
                                        <Button variant= "light" className=' '>
                                        <PhoneEnabledIcon/>
                                        </Button>
                                        <h3 className='text-xl'>+91 {data.number}</h3>
                                    </li>
                                    <li className='d-flex align-items-center gap-4 mt-3 pl-2'>
                                        <Button variant= "light" className=' '>
                                        <LocationOnIcon/>
                                        </Button>
                                        <h3 className='text-xl'>{data.address}</h3>
                                    </li>
                                    <li className='d-flex align-items-center gap-4 mt-3 pl-2'>
                                        <Button variant= "light" className=' '>
                                        <EmailIcon/>
                                        </Button>
                                        <h3 className='text-xl'>{data.email}</h3>
                                    </li>
                                </ul>
                            </div>
                            <div className='p-4'>
                                <h3 
                                    className='border text-2xl d-inline-block rounded-5 py-2 px-4 mb-3' 
                                >
                                About Me</h3>
                                <p className='mt-1'>
                                    {data.summary}
                                </p>
                            </div>
                            <div className='p-4'>
                                <h3 
                                    className='border text-2xl d-inline-block rounded-5 py-2 px-4 mb-3' 
                                >
                                    Objective
                                </h3>
                                <p className='mt-1'>
                                    {data.objective}
                                </p>
                            </div>
                            <div className='p-4'>
                                <h3 className='border text-2xl d-inline-block rounded-5 py-2 px-4 mb-3' >
                                    Professional skill
                                </h3>
                                <div className=' gap-2'>
                                    {data.skills.map((ele) => (
                                        <Button variant='dark' className='mx-1 my-1 inline-block' key={ele}>
                                            {ele}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-8 h-100">
                            <div className="thePicImg d-flex align-items-center justify-content-start">
                                <h1>{data.name}</h1>
                            </div>
                            <div className='p-4'>
                                <h3 
                                    className='border text-2xl d-inline-block rounded-5 py-2 px-4 mb-3' 
                                >Work Experience</h3>
                                <ul className='workExp mt-3'>
                                    {data.workingExpre.map((ele) => (
                                        <li key={ele._id} className='mt-3'>
                                            <h1>{ele.organization}</h1>
                                            <div className="flex items-center justify-start gap-2 mb-2">
                                                <p className='text-2xl'>{ele.designation}</p>
                                                <p className='text-2xl'>{ele.jobDurationForm} - {ele.jobDurationTo}</p>
                                            </div>
                                            <p>{ele.responsibility}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='p-4'>
                                <h3 
                                    className='border text-2xl d-inline-block rounded-5 py-2 px-4 mb-3' 
                                >Education Degrees</h3>
                                {data.education.length !=0 
                                ?  
                                data.education.map((ele) => (
                                    <li key={ele._id}>
                                        <h1 className='text-3xl'>{ele.instituteCollage}</h1>
                                        <p>{ele.degreeCourse}</p>
                                        <p>{ele.year}</p>
                                    </li>
                                ))
                                : 
                                <p className='mt-1'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Harum dicta distinctio iusto numquam deserunt facilis ut dignissimos labore asperiores 
                                    iste magnam voluptates ea quam fuga corrupti repudiandae rerum, autem illo.
                                </p>
                                }
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default ResTemp1