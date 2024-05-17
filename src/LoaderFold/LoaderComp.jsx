import React from 'react' 
import logo from '../assets/logo.png'

const LoaderComp = () => {
    return (<>
        <section className='d-flex align-items-center justify-content-center gap-3 flex-column' style={{
            height : '100vh',
            width : '100%'
        }}>
            <img style={{width : '3rem'}} src={logo} alt="" />
            <div className="d-flex align-items-center justify-content-center gap-4">
                <p>Loading...</p>
            </div>
        </section>
    </>)
}

export default LoaderComp