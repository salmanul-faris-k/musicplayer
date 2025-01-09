import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Cato from '../components/Cato'



function Home() {
  const [videoreponse,setvideoresponse]=useState("")
  const [delvideoresp,setdelvideoresp]=useState("")
  const [cateupdte,setcateupdte]=useState("")
  return (
    <>
      <div className='container d-flex justify-content-between mt-5'> 
<Add setvideoresponse={setvideoresponse}/>
<Link className='text-decoration-none fw-bold text-success fs-5' to={'/hiatory'}> watch history</Link>
     
    </div>
    <div className="container  row my-5 ms-5 ">
<div className="col-lg-6">
  <h3 className='text-danger'>All Video</h3>
  <View videoreponse={videoreponse} delvideoresp={delvideoresp} setcateupdte={setcateupdte}  />
</div>
<div className="col-lg-6">
<Cato setdelvideoresp={setdelvideoresp} cateupdt={cateupdte}/>
</div>
    </div>
    </>
  )
}

export default Home
