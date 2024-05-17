import React from 'react'
import './FooterStyle.css'
import { Container } from 'react-bootstrap'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HomeAboutListComp from './HomeAboutListComp';

const FooterComp = () => {
    const IconStyle = {
        fontSize : '3.5rem',
        
    }

    const SocialIconStyle = {
        fontSize : '2.5rem'
    }

    const quickLinks = {
        firstList : ['Home' , 'Order a Resume' , 'Cover Letter' , 'Word Template' , 'Blog' , 'URL to PDF'],
        secondList : ['Download' , 'Resume' , 'Website' , 'Job Alert' , 'Career'],
    }

    const OurCompany = {
        firstList : ['About us' , 'Privacy Policy' , 'Affiliate Program' , ],
        secondList : ['Contact Us' , 'Terms & Conditions' , 'Sponsorship Program'],
    }


    return (
        <footer className=''>
            <Container className='h-100 pt-5'>
                <div className="row h-100">
                    <div className="col-4 h-100">
                        <div className="w-75">
                            <h1 className='mb-4'>Contact Info</h1>
                            <div className="line mb-4 w-100">
                                <span className='d-block w-25 h-100' style={{
                                    backgroundColor : 'aliceblue'
                                }}></span>
                            </div>
                            <ul className='w-100 mt-3 p-0 ulList' style={{
                                listStyle : 'none'
                            }}>
                                <li className='w-100 d-flex align-items-center gap-5 mt-5'>
                                    <PhoneInTalkOutlinedIcon className='IconColor' style={IconStyle} />
                                    <div className="w-75">
                                        <h4>MON TO SUN : 24/7</h4>
                                        <h2>India</h2>
                                    </div>
                                </li>
                                <li className='w-100 d-flex align-items-center gap-5 mt-5'>
                                    <AttachEmailOutlinedIcon className='IconColor' style={IconStyle} />
                                    <div className="w-75">
                                        <h4>DO YOU HAVE A QUESTION?</h4>
                                        <h2>support@resumemaker.com</h2>
                                    </div>
                                </li>
                                <li className='w-100 d-flex align-items-center gap-5 mt-5'>
                                    <ShareOutlinedIcon className='IconColor' style={IconStyle} />
                                    <div className="w-75">
                                        <h4>SOCIALS NETWORK</h4>
                                        <div className="d-flex align-items-center justify-content-between p-2 gap-3 mt-4">
                                            <FacebookOutlinedIcon style={SocialIconStyle} />
                                            <InstagramIcon style={SocialIconStyle} />
                                            <XIcon style={SocialIconStyle} />
                                            <YouTubeIcon style={SocialIconStyle} />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4 h-100">
                        <div className="w-75 m-auto">
                            <h1 className='mb-4'>Quick Links</h1>
                            <div className="line mb-4 w-100">
                                <span className='d-block w-25 h-100' style={{
                                    backgroundColor : 'aliceblue'
                                }}></span>
                            </div>
                            <HomeAboutListComp firstList={quickLinks.firstList} secondList={quickLinks.secondList} />
                        </div>
                    </div>
                    <div className="col-4 h-100">
                        <div className="w-75 " style={{
                            margin : 'auto'
                        }}>
                            <h1 className='mb-4'>Our Company</h1>
                            <div className="line mb-4 w-100">
                                <span className='d-block w-25 h-100' style={{
                                    backgroundColor : 'aliceblue'
                                }}></span>
                            </div>
                            <HomeAboutListComp firstList={OurCompany.firstList} secondList={OurCompany.secondList} />
                        </div>
                    </div>
                </div>
                <div className="row border-top mt-5">
                    <div className="col-6">
                        <div className="w-100">
                            <div className="w-100 d-flex align-items-center justify-content-start">
                                <h2 className='fs-4 mt-4'>Copyright 2024 My Cv Creator. All rights reserved</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="w-100 d-flex align-items-center justify-content-end">
                            <ul className='d-flex align-items-center gap-3 mt-1' style={{
                                listStyle : 'none'
                            }}>
                                <li className='fs-4 mt-4 borderRightLine'>Terms & Conditions</li>
                                <li className='fs-4 mt-4 borderRightLine'>Privacy Policy</li>
                                <li className='fs-4 mt-4'>Affiliate Program</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default FooterComp