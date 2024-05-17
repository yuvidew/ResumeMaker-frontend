import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/react-quill'
import 'react-quill/dist/quill.snow.css';
import { Button } from 'react-bootstrap';
import usePostLetterData from '../usePostLetterData';
import { useNavigate } from 'react-router-dom';

const modules = {
  toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote' ],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['link'],
      ['clean'],
      ['align', 'direction'],
      [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
      [{ 'color': [] }, { 'background': [] }] 
  ]};
  
const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link',
  'align', 'direction',
  'color', 'background',
];

const LetterDesComp = () => {
  const [des , setDes] = useState('')
  const id = JSON.parse(localStorage.getItem('letter-id'))
  const [err , isPost , handelPostData] = usePostLetterData(`/api/post/letter/addLetterDesInfo/${id}`)
  const history = useNavigate()

  const handelSubmit = (e) => {
    e.preventDefault()
    const obj = {
      letterText : des
    }

    console.log(obj);
    handelPostData(obj);
  }

  if(isPost){
      history(`/dashboard/letter-form`)
  }
  
  return (
    <section className='theFormsSection  pb-5'>
      <form action="" className='mt-4 m-auto ' onSubmit={handelSubmit}>
        <div className='pb-5'>
          <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              className='mt-3 '
              style={{
                  height : '35vh',
                  cursor : 'text',
              }}
              receiveMsg
              value={des}
              onChange={(html) => setDes(html)}
          >
              {/* {theSaveFile && <div dangerouslySetInnerHTML={{ __html: theSaveFile }} />} */}
          </ReactQuill>
        </div>
        <div className="pb-5"></div>
        <div className="d-flex align-items-center justify-content-end">
          <Button variant='success' type='submit' className='fs-3 p-2 mt-5 theBtnBox'>Submit</Button>
        </div>
      </form>
    </section>
  )
}

export default LetterDesComp