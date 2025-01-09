import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { deleteapi, historyapi } from '../services/allapi';


function Videocard({displaydata,setvideodelete,insidecategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{ 
   const  {youtubeurl,caption	}=displaydata
   const localtime=new Date()
   const orgindate=localtime.toLocaleString()
   const historydetail={youtubeurl,caption,orgindate}
   try{
const result= await historyapi(historydetail)
console.log(result);

   }
   catch(error){
    console.log(error);
    
   }
   
    setShow(true);}
  const handledelete=async(videoid)=>{
try{
const result=await deleteapi(videoid)

setvideodelete(result.data)
}
catch(erro){
  console.log(erro);
  
}
  }
  const dragablefunction=(e,videoid)=>{
console.log(videoid);
e.dataTransfer.setData("videoid",videoid)

  }
  return (
    <div >
      <Card draggable={true} onDragStart={(e)=>dragablefunction(e,displaydata?.id)} style={{height:'300px',width:'11.5rem'}}>
      <Card.Img style={{height:'230px',width:'11.5rem',padding:'3px'}} onClick={handleShow} variant="top"  src={displaydata?.imageurl} />
      <Card.Body>
        <Card.Title>
       <div className="d-flex justify-content-between">
        <h5 style={{fontSize:'18px', textAlign:'justify'}}>{displaydata?.caption}</h5>
        {!insidecategory&&
                <button onClick={()=>handledelete(displaydata?.id)} className='btn '> <i style={{color:"red", fontSize:'16px '}} class="fa-solid fa-trash"></i></button>
}
       </div>
       </Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={displaydata?.youtubeurl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Videocard


