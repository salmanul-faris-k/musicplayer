import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
    <div className='container mt-5 w-100' style={{height:"400px"}}>
      <div className='row'>
        <div className='col-lg-4'>
          <h4> <i className="fa-solid fa-music me-4"></i>
          Media Player</h4>
          <p className='mt-4'>Pastelón is a classic Puerto Rican dish made with layers of thinly-sliced plantains, ground beef, and cheese. It's a great casserole to make for a potluck</p>
          <p>code is licensed by luminar</p>
          <p>currently v5.3.2</p>
        </div>
        <div className='col-lg-2'>
            <h5>Links</h5>
          <div className='mt-4'>
          <Link to={'/'} className='text-decoration-none text-white' >Landing</Link><br />
          <Link to={'/home'} className='text-decoration-none text-white'>Home</Link><br />
          <Link to={'/history'} className='text-decoration-none text-white'>History</Link></div>
        </div>
        <div className='col-lg-2'>
          <h5>Guides</h5>
          <div className='mt-4 text-white'>
            <a href=" " className='text-decoration-none  text-white'> React</a><br />
            <a href=" " className='text-decoration-none text-white'> React Bootstrap</a><br />
            <a href=" " className='text-decoration-none text-white'> React Router</a>
          </div>
        </div>
        <div className='col-lg-4'>
          <h5>Conatct us</h5>
          <div className='mt-4'>
            <input type="text" /> <button className='rounded bg-warning ms-2' style={{width:'40px', border:'none'}}><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='d-flex mt-4  justify-content-around ' style={{width:'250px'}}>
            <a href="" className='text-white'><i class="fa-brands fa-facebook"></i></a>
            <a href=""  className='text-white'><i class="fa-brands fa-twitter"></i></a>
            <a href=""  className='text-white'><i class="fa-brands fa-github"></i></a>
            <a href=""  className='text-white'><i class="fa-brands fa-linkedin"></i></a>
            <a href=""  className='text-white'><i class="fa-brands fa-instagram"></i></a>
            <a href=""  className='text-white'><i class="fa-solid fa-phone"></i></a>
          </div>

        </div>

      </div>

    </div>
    
    </>
  )
}

export default Footer