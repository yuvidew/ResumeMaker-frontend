import React, { Suspense, lazy } from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoaderComp from './LoaderFold/LoaderComp'
// const TheResume = lazy(() => import('./TheResume/TheResume'))
const ResumeFromComp =  lazy(() => import('./ResumeFormFold/ResumeFromComp'))
const LetterCreateForm =  lazy(() => import('./LetterFormFold/LetterCreateForm'))
const AllTools  = lazy(() => import('./DashBordFold/AllTools'))
// const ResumeTempComp  =  lazy(() => import('./ResumeTemplateFold/ResumeTempComp'))
const SignComp = lazy(() => import('./Authentication/SignComp'))
const LoginComp = lazy(() => import('./Authentication/LoginComp'))
const HomePageComp = lazy(() => import('./HomePageFold/HomePageComp'))
const DashBoard = lazy(() => import('./DashBordFold/DashBord'))

const App = () => {
  return (
      <Suspense fallback = {<LoaderComp/>}>
        <BrowserRouter>
          <Routes>
              <Route path='/' element = {<HomePageComp/>} />
              <Route path='/dashboard' element ={<DashBoard/>}>
                <Route index element ={<DashBoard/>} />
                <Route path=':slug' element = {<AllTools/>} />
              </Route>
              {/* <Route path='/dashboard/resume/:id' element = {<TheResume/>} /> */}
              <Route path='/dashboard/resume-form' element = {<ResumeFromComp/>} />
              <Route path='/dashboard/letter-form' element = {<LetterCreateForm/>} />
              {/* <Route path='/resume' element = {<ResumeTempComp/>} /> */}
              <Route path='/login' element = {<LoginComp/>} />
              <Route path='/sign' element = {<SignComp/>} />
          </Routes>
          {/* <FooterComp/> */}
        </BrowserRouter>
      </Suspense>
  )
}

export default App