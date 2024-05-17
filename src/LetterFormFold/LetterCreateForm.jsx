import React, { useMemo } from 'react'
import NavBarComp from '../DashBordFold/NavBarComp'
import { useSearchParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './LetterCreateFrom.css'
import PersonalInfoComp from './LetterInforFold/PersonalInfoComp'
import EmployerInfoComp from './LetterInforFold/EmployerInfoComp'
import LetterDesComp from './LetterInforFold/LetterDesComp'

const LetterCreateForm = () => {
    const [searchParams , setSearchParams] = useSearchParams({
        q : 'Personal-Information',
        onlyComputerItems : true
    })

    const query = searchParams.get('q')

    const handleQuery = (text) => {
        setSearchParams(prev => {
            prev.set('q' , text)
            return prev
        } , {replace : true})
    }

    const btnList = [
        {
            text : 'Personal Information',
            url : 'Personal-Information',
            comp : <PersonalInfoComp urlText = {'Employer-Information'} />
        },
        {
            text : 'Employer Information',
            url : 'Employer-Information',
            comp : <EmployerInfoComp urlText = {'Letter-Description'} />
        },
        {
            text : 'Letter Description',
            url : 'Letter-Description',
            comp : <LetterDesComp urlText = {'Employer-Information'} />
        },
    ]
    const filtersComp = useMemo(() =>{
        return btnList.filter(item => item.url == query)
    } , [query])

    const btnStyle = {
        background : '#3f1cbd',
        color : '#fff'
    }

    return (
        <>
            <NavBarComp/>
            <section className='theSectionBox' style={{
                height : '100vh'
            }}>
                <Container className=' pt-4 pb-4'>
                    <section className="bg-white p-4">
                        <h2 className='pt-2 text-2xl'>Fill this From And <span style={{
                            color : '#3f1cbd'
                        }}>Create the Letter</span> in a min..</h2>

                        <div className="mt-5">
                            <div className="d-flex align-items-centner gap-4">
                                {btnList.map(ele => (
                                    <button 
                                        key={ele.text}
                                        className='fs-5 p-3 theBtnBox text-center border rounded-0 ' 
                                        onClick={() => handleQuery(ele.url)}
                                        style={
                                            filtersComp[0].text === ele.text ? 
                                            btnStyle : {
                                                backgroundColor : '#fff'
                                        }}
                                    >
                                        {ele.text}
                                    </button>
                                ))}
                            </div>
                            <hr className='mt-5' />
                            {filtersComp[0].comp}
                        </div>
                    </section>
                </Container>
            </section>
        </>
    )
}

export default LetterCreateForm