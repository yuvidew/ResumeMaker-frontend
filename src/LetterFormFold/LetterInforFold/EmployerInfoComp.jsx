import React from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import usePostLetterData from '../usePostLetterData';
import { useNavigate } from 'react-router-dom';

const EmployerInfoComp = ({urlText}) => {
    const { register, handleSubmit } = useForm();
    const id = JSON.parse(localStorage.getItem('letter-id'))
    const [err , isPost , handelPostData] = usePostLetterData(`/api/post/letter/addEmployerInfo/${id}`)
    const history = useNavigate()

    const onSubmit = (data) => {
        console.log(data);
        handelPostData(data);
    }

    if(isPost){
        history(`/dashboard/letter-form?q=${urlText}&onlyComputerItems=true`)
    }
    return (
        <section className='theFormsSection mb-5 pb-5'>
            <form action="" className='mt-4 m-auto' onSubmit={handleSubmit(onSubmit)}>
                <div className="row ">
                    <div className="col-lg-6 col-md-12 col-12 mt-4 h-100">
                        <div className="d-flex h-100 align-items-start justify-content-center flex-column ">
                            <label htmlFor="" 
                                className='fs-4 d-block mb-3'
                                style={{
                                    color : '#3f1cbd'
                                }}
                            >
                                Recipient {" "} 
                                <span style={{
                                    color : '#f51b4a'
                                }}>*</span>
                            </label>
                            <input 
                                type="text" 
                                className='fs-4 
                                InputBorder p-3 w-100 rounded-2' 
                                {...register("recipient", { required: "field is required"})}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 mt-4 h-100">
                        <div className="d-flex h-100 align-items-start justify-content-center flex-column ">
                            <label htmlFor="" 
                                className='fs-4 d-block mb-3'
                                style={{
                                    color : '#3f1cbd'
                                }}
                            >
                                Company Name (Optional) {" "} 
                                <span style={{
                                    color : '#f51b4a'
                                }}>*</span>
                            </label>
                            <input 
                                type="text" 
                                className='fs-4 
                                InputBorder p-3 w-100 rounded-2' 
                                {...register("companyName", { required: "field is required"})}
                            />
                        </div>
                    </div>
                </div>
                <div className="row  mt-5">
                    <div className="col-lg-6 col-md-12 col-12 h-100">
                        <div className="d-flex h-100 align-items-start justify-content-center flex-column ">
                            <label htmlFor="" 
                                className='fs-4 d-block mb-3'
                                style={{
                                    color : '#3f1cbd'
                                }}
                            >
                                Street Address {" "} 
                                <span style={{
                                    color : '#f51b4a'
                                }}>*</span>
                            </label>
                            <input 
                                type="text" 
                                className='fs-4 
                                InputBorder p-3 w-100 rounded-2' 
                                {...register("streetAddress", { required: "field is required"})}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="d-flex h-100 align-items-start justify-content-center flex-column ">
                            <label htmlFor="" 
                                className='fs-4 d-block mb-3'
                                style={{
                                    color : '#3f1cbd'
                                }}
                            >
                                City {" "} 
                                <span style={{
                                    color : '#f51b4a'
                                }}>*</span>
                            </label>
                            <input 
                                type="text" 
                                className='fs-4 
                                InputBorder p-3 w-100 rounded-2' 
                                {...register("city", { required: "field is required"})}
                            />
                        </div>
                    </div>
                </div>
                <div className="row  mt-5">
                    <div className="col-lg-6 col-md-12 col-12 mt-4 h-100">
                        <div className="d-flex h-100 align-items-start justify-content-center flex-column ">
                            <label htmlFor="" 
                                className='fs-4 d-block mb-3'
                                style={{
                                    color : '#3f1cbd'
                                }}
                            >
                                State {" "} 
                                <span style={{
                                    color : '#f51b4a'
                                }}>*</span>
                            </label>
                            <input 
                                type="text" 
                                className='fs-4 
                                InputBorder p-3 w-100 rounded-2' 
                                {...register("state", { required: "field is required"})}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12 mt-4 h-100 ">
                        <div className="d-flex h-100 align-items-end justify-content-end ">
                            <Button variant='success' type='submit' className='fs-3 p-2 mt-5 theBtnBox'>
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default EmployerInfoComp