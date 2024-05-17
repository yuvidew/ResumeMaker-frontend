import React from 'react'
import './letterTemp.css'
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const fontSize = {
    fontSize : '2.5rem',
}

const iconStyle = {
    fontSize : "1.8rem"
}

const LetterTemp = ({theLetter , showHide , setShowHide}) => {
    const data = theLetter[0]
    return (
        <div className=' fixed h-full w-full sectionTemp top-0 left-0'>
            <div className='py-4 px-5'>
                <button
                    onClick={() => setShowHide(!showHide)}
                >
                    <CloseIcon className=' text-white ' style={fontSize} />
                </button>
            </div>
            <div className="h-100 flex items-center justify-center">
                <section className=' m-auto theLetterTemp h-100 w-50 bg-slate-100 p-5'>
                    <div className="row">
                        <div className="col-8 ">
                            <div className="flex h-100 items-center justify-start">
                                <h1 className=' text-6xl text-slate-700'>
                                    {data.firstName} {" "}
                                    {data.middelName} {" "}
                                    {data.lastName} {" "}
                                </h1>
                            </div>
                        </div>
                        <div className="col-4 ">
                            <ul className='theList mt-3'>
                                <li className=' flex items-start gap-3 mb-4'>
                                    <MailOutlineIcon style={iconStyle} />
                                    <h3 className='text-xl'>{data.email}</h3>
                                </li>
                                <li className=' flex items-start gap-3 mb-4'>
                                    <PlaceIcon style={iconStyle} />
                                    <h3 className='text-xl'>{data.address}</h3>
                                </li>
                                <li className=' flex items-start gap-3 mb-4'>
                                    <LocalPhoneIcon style={iconStyle} />
                                    <h3 className='text-xl'>{data.phoneNum}</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <article className='pt-5'>
                        
                        <div className='pt-4'>
                            <div 
                                dangerouslySetInnerHTML={{ __html: data.letterText }} 
                                className=' text-xl'
                            />
                        </div>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default LetterTemp