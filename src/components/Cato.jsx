import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addcatoryapi, deleteapi, deletecatoapi, getcatoapi, getsinglecatoapi, putsinglecatoryapi } from '../services/allapi';
import { toast } from 'react-toastify';
import Videocard from './Videocard';





function Cato({setdelvideoresp,cateupdt}) {
  const [catogory, setcatogory] = useState('')
  const [allcatogory, setallcatogory] = useState([])

  console.log(allcatogory);

  console.log(catogory);
  useEffect(() => {
    getallcatory()
  }, [cateupdt])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleadd = async () => {
    if (catogory) {
      try {
        const result = await addcatoryapi({ catogory, allvideos: [] })
        console.log(result);
        if (result.status >= 200 && result.status <= 300) {
          handleClose();
          toast.success(`${result.data.catogory} added`)
          setcatogory("")
          getallcatory()
        }

      }
      catch (error) {
        console.log(error);

      }

    }
    else {
      toast.warning("enter category name")
    }
  }
  const getallcatory = async () => {
    try {
      const result = await getcatoapi()
      console.log(result);
      setallcatogory(result.data)


    } catch (error) {
      console.log(error);

    }
  }

  const handledeletecato = async (videoid) => {
    try {
      const result = await deletecatoapi(videoid)
      getallcatory()


    }
    catch (erro) {
      console.log(erro);

    }
  }
  const videodrop = async (e, categoryid) => {
    console.log(categoryid);
    const videoid = e.dataTransfer.getData("videoid")
    console.log(videoid);
    try {
      const { data } = await getsinglecatoapi(videoid)
      console.log(data);
      const selectedcat = allcatogory?.find(item => item.id == categoryid)
      console.log(selectedcat);
      selectedcat.allvideos.push(data)

      await putsinglecatoryapi(categoryid, selectedcat)
      getallcatory()
     const result= await deleteapi(videoid)
      setdelvideoresp(result.data)

    } catch (error) {
      console.log(error);

    }

  }
  const dragover = (e) => {
    e.preventDefault()
  }
  const videodraged=(e,catregorydetail,videoDetail)=>{
console.log(catregorydetail,videoDetail);
const sheredata={catregorydetail,videoDetail}
e.dataTransfer.setData("sheredata",JSON.stringify(sheredata))

  }

  return (
    <>
      <div className="d-flex justify-content-around">
        <h4 className='text-warning'>upload new video </h4>
        <button onClick={handleShow} className='btn btn-warning ms-3 mt-1 rounded-circle fw-bold' style={{ height: '40px' }}>+</button>
      </div>
      {
        allcatogory?.length > 0 ?
          allcatogory.map(video => (
            <div onDragOver={(e) => dragover(e)} droppable={true} onDrop={(e) => videodrop(e, video?.id)}  className='border rounded border-3 p-3 mb-2  mt-4'>
              <div className="d-flex justify-content-between">
                <h5 > {video.catogory}</h5>
                <i class="fa-solid fa-trash text-danger" onClick={() => handledeletecato(video?.id)} ></i>
              </div>
              {
                 video?.allvideos?.length > 0 &&
                 <div className='row'>
               
               {
               video?.allvideos.map(cat=>(
                <div draggable={true}  onDragStart={(e)=>videodraged(e,video,cat)} className="col-lg-6 mt-2">
                <Videocard insidecategory={true} displaydata={cat}/>
              </div>
               ))
              }
              </div>
              }
              
            </div>
          ))
          :
          <div  className=" fw-bold ms-5 p-4 mt-5">no category added yet</div>
      }
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: '26px', color: 'rgb(255, 189, 57)' }}>videos details!! </Modal.Title>
        </Modal.Header>
        <div style={{ padding: '20px' }}>
          <Modal.Body style={{ border: '3px solid rgb(164, 0, 189)' }}>

            <FloatingLabel
              controlId="floatingInput"
              label="img url"
              className="mb-3"
            >
              <Form.Control onChange={(e) => setcatogory(e.target.value)} type="text" placeholder="img url" />
            </FloatingLabel>



          </Modal.Body>

        </div>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleadd} >Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Cato
