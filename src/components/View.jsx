import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { addvideo, getvideo, putsinglecatoryapi } from '../services/allapi'





function View({ videoreponse, delvideoresp ,setcateupdte}) {
  const [deletevideo, setvideodelete] = useState("")
  const [allvideos, setallVideos] = useState([])
  console.log(allvideos);

  useEffect(() => {
    getallvideo()
  }, [videoreponse, deletevideo, delvideoresp])
  const getallvideo = async () => {
    try {
      const result = await getvideo()
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setallVideos(result.data)
      }

    }
    catch (erro) {
      console.log(erro);

    }
  }
  const dragoverview = (e) => {
    e.preventDefault()
  }
  const videodropallvideo =async (e) => {
    const { catregorydetail, videoDetail } = JSON.parse(e.dataTransfer.getData("sheredata"))
    console.log(catregorydetail, videoDetail);
    const updatecatvideo = catregorydetail.allvideos.filter(video => video.id!= videoDetail.id)
    const {id,catogory}=catregorydetail
    try {
      const  result=await putsinglecatoryapi(id,{id,catogory	,allvideos:updatecatvideo})
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setcateupdte(result.data)
      }
      const {caption,imageurl,youtubeurl}=videoDetail

const resp=await addvideo({caption,imageurl,youtubeurl})
     getallvideo() 
    } catch (error) {
      console.log(error);
      
    }

  }
  return (
    <>
      <Row className='mt-5' onDragOver={(e) => dragoverview(e)} droppable={true} onDrop={(e) => videodropallvideo(e)} >
        {allvideos?.length > 0 ?

          allvideos.map(video => (

            <Col className='mt-4' lg={4} md={6} sm={12}>
              <Videocard displaydata={video} setvideodelete={setvideodelete} />
            </Col>

          )
          )
          :
          <div className='text-danger fw-bold'>noting to display</div>
        }
      </Row>
    </>
  )
}

export default View
