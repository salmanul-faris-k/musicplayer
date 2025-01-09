import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletehistoryapi, gethistory } from '../services/allapi'


function History() {
  const [historyshows,sethistoryshows]=useState([])
  console.log(historyshows);
  
  useEffect(()=>{
    showhistory()
  },[])
  const showhistory=async()=>{
    try{
      const result= await gethistory()
      console.log(result);
      if(result.status>=200&&result.status<300){
        sethistoryshows(result.data)
        }

    
    }
catch(error){
  console.log(error);
  
}
  }
   const handledeletehistory=async(videoid)=>{
  try{
  const result=await deletehistoryapi(videoid)
  showhistory()
  
 
  }
  catch(erro){
    console.log(erro);
    
  }
    }
  return (
    <>
      <div className='container d-flex justify-content-between mt-5'> 
<h3 style={{fontFamily:'Rochester'}}>watch History</h3>
<Link className='text-decoration-none fw-bold text-success fs-5' to={'/'}> Back to &nbsp; <i class="fa-solid fa-house"></i></Link>
     
    </div>
    <div className="container mt-5">
      {historyshows?.length>0?
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Caption</th>
      <th scope="col">url</th>
      <th scope="col">Date and Time</th>
      <th scope='col'><i class="fa-solid fa-ellipsis-vertical"></i></th>
    </tr>
  </thead>
  <tbody>
    {
      historyshows?.map((Video,index)=>(
        <tr>
      <th scope="row">{index+1}</th>
      <td>{Video.caption}</td>
      <td><a className='text-success' href="">{Video.youtubeurl}</a></td>
      <td>{Video.orgindate}</td>
      
      <td className='text-danger'><i onClick={()=>handledeletehistory(Video?.id)} class="fa-solid fa-trash"></i></td>
    </tr>
      ))
}
  
  </tbody>
</table>
:
<div className="text-danger fw-bold">no video watched yet</div>
}
    </div>
    </>
  )
}

export default History
