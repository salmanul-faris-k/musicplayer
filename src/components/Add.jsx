import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import { addvideo } from '../services/allapi';


function Add({setvideoresponse}) {
  const [videoDetail,setvideoDetail]=useState({caption:"",imageurl:"",youtubeurl:""})
  console.log(videoDetail);
  const [isinvaild,setisinvaild]=useState(false)
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const youlink=(link)=>{
      if(link.includes("v=")){
const youlinkgeneratot=link.split("v=")[1].slice(0,11)
console.log(youlinkgeneratot);
setvideoDetail({...videoDetail,youtubeurl:`https://www.youtube.com/embed/${youlinkgeneratot}`})
setisinvaild(false)

      }
      else{
        setvideoDetail({...videoDetail,youtubeurl:""})
        setisinvaild(true)
      }
    }
    const handleupload=async()=>{
      const {caption,imageurl,youtubeurl}=videoDetail
      
      
      if(caption&&imageurl&&youtubeurl){
        try{
          const result= await addvideo(videoDetail)
          console.log(result);
          if(result.status>=200&&result.status<300){
            setvideoresponse(result.data)
            toast.success(`${result.data.caption} added your collection`)
            handleClose()
          }
          else{
          toast.success(`${result.response.data}` )
 
          }

                  }
                  catch(error){
                    console.log(error);
                    
                  }
       
        
      }
      else{
        toast.error("please enter the form completly")
        
      }
    }

  return (
    <div>
        <div className="d-flex justify-content-center">
        <h3>upload new video </h3>
        <button  onClick={handleShow} className='btn btn-warning ms-3 mt-1 rounded-circle fw-bold' style={{height:'40px'}}>+</button>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:'26px',color:'rgb(255, 189, 57)'}}>videos details!! </Modal.Title>
        </Modal.Header>
        <div style={{padding:'20px'}}>
        <Modal.Body style={{border:'3px solid rgb(164, 0, 189)'}}>
        <FloatingLabel
        controlId="floatingInput"
        label="video caption"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>setvideoDetail({...videoDetail,caption:e.target.value})} type="text" placeholder="video caption" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="img url"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>setvideoDetail({...videoDetail,imageurl:e.target.value})}  type="text" placeholder="img url" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="youtube url"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>youlink(e.target.value)}  type="text" placeholder="youtube url" />
      </FloatingLabel>
      {isinvaild&&
          <div className='text-danger mt-3'>
          invaild youtube url
        </div>
        }
        
        </Modal.Body>
       
        </div>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleupload}>upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add
