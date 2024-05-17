import React from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import usePostLetterData from '../usePostLetterData';
import { useNavigate } from 'react-router-dom';

const PersonalInfoComp = ({urlText}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const id = JSON.parse(localStorage.getItem('letter-id'))
    console.log(id);
    const [err , isPost , handelPostData] = usePostLetterData(`/api/post/letter/addPersonalInfo/${id}`)
    const history = useNavigate()

    const onSubmit = (data) => {
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
                                Fast Name {" "} 
                                <span style={{
                                    color : '#f51b4a'
                                }}>*</span>
                            </label>
                            <input 
                                type="text" 
                                className='fs-4 
                                InputBorder p-3 w-100 rounded-2' 
                                {...register("firstName", { required: "field is required"})}
                            />
                            <span>{errors.firstName && errors.firstName.message}</span>
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
                                Middel Name (Optional) {" "} 
                                <span style={{
                                    color : '#f51b4a'
                                }}>*</span>
                            </label>
                            <input 
                                type="text" 
                                className='fs-4 
                                InputBorder p-3 w-100 rounded-2' 
                                {...register("middelName", { required: "field is required"})}
                            />
                            <span>{errors.middelName && errors.middelName.message}</span>
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
                                Last Name {" "} 
                                <span style={{
                                    color : '#f51b4a'
                                }}>*</span>
                            </label>
                            <input 
                                type="text" 
                                className='fs-4 
                                InputBorder p-3 w-100 rounded-2' 
                                {...register("lastName", { required: "field is required"})}
                            />
                            <span>{errors.lastName && errors.middelName.message}</span>
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
                                Profession (Optional) {" "} 
                                <span style={{
                                    color : '#f51b4a'
                                }}>*</span>
                            </label>
                            <input 
                                type="text" 
                                className='fs-4 
                                InputBorder p-3 w-100 rounded-2' 
                                {...register("profession", { required: "field is required"})}
                            />
                            <span>{errors.profession && errors.profession.message}</span>
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
                                Address {" "} 
                                <span style={{
                                    color : '#f51b4a'
                                }}>*</span>
                            </label>
                            <input 
                                type="text" 
                                className='fs-4 
                                InputBorder p-3 w-100 rounded-2' 
                                {...register("address", { required: "field is required"})}
                            />
                            <span>{errors.address && errors.address.message}</span>
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
                                Phone {" "} 
                                <span style={{
                                    color : '#f51b4a'
                                }}>*</span>
                            </label>
                            <input 
                                type="text" 
                                className='fs-4 
                                InputBorder p-3 w-100 rounded-2' 
                                {...register("phoneNum", { required: "field is required"})}
                            />
                            <span>{errors.phone && errors.phone.message}</span>
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
                                Email {" "} 
                                <span style={{
                                    color : '#f51b4a'
                                }}>*</span>
                            </label>
                            <input 
                                type="email" 
                                className='fs-4 
                                InputBorder p-3 w-100 rounded-2' 
                                {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
                            />
                            <span>{errors.email && errors.email.message}</span>
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

export default PersonalInfoComp