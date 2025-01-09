import React from 'react'
import { Link } from 'react-router-dom'
import music from '../assets/Up2T.gif'
import mangeimg from '../assets/img1.png'
import mangeimg1 from '../assets/img2.png'
import mangeimg2 from '../assets/img3.png'
import { Card } from 'react-bootstrap'

function Landing() {
  return (
    <>
      <div className="container p-5">
        <div className="row mt-5  p-3">
          <div className="col-lg-6 " >
            <h1 style={{ fontFamily: 'Rochester' }}>welcome to <span className='text-danger'>media player</span></h1>
            <p className='mt-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam amet soluta obcaecati, nostrum a, quas ipsam commodi placeat labore hic in magnam est fuga nemo nisi necessitatibus, facere perspiciatis?</p>
            <Link to={'/home'} className='btn btn-warning mt-3'>Get start</Link>
          </div>
          <div className="col-lg-6 p-4" >
            <img src={music} className='w-100' alt="" />

          </div>
        </div>
      </div>
      <div className="container"><h1 className='text-center text-danger' style={{fontFamily:'Rochester'}}>Features</h1>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6">
          <Card className='p-3 mt-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mangeimg} />
      <Card.Body>
        <Card.Title className='text-center'>managing video</Card.Title>
        <Card.Text className='text-center'>
          users can upload,view and remove the videos. </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4 col-md-4">
          <Card className='p-3 mt-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mangeimg1} />
      <Card.Body>
        <Card.Title className='text-center'> categorize video</Card.Title>
        <Card.Text className='text-center'>
          users can catogorize the viedo by drag and drop feature. </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card className='p-3 mt-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={mangeimg2} />
      <Card.Body>
        <Card.Title className='text-center'>managing history</Card.Title>
        <Card.Text className='text-center'>
          users can manage the watch history of all videos. </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>
      <div className="container border rounded border-3 border-white mt-5 " style={{marginBottom:'150px'}} >
        <div className='row mt-2'>
          <div className="col-lg-6  p-5">
            <h4 className='text-danger'style={{fontSize:'30px'}} >simple fast and powerfull</h4>
      <div className='mt-5'>
      <p><span  style={{fontWeight:'bold', fontSize:'20px'}}>Play Everything:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur est in corporis nostrum deleniti dolorum laborum eius doloremque molestiae eveniet.</p>
      <p><span style={{fontWeight:'bold', fontSize:'20px'}}>Categorize:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur est in corporis nostrum deleniti dolorum laborum eius doloremque molestiae eveniet.</p>
      <p><span style={{fontWeight:'bold', fontSize:'20px'}}>Mange History:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur est in corporis nostrum deleniti dolorum laborum eius doloremque molestiae eveniet.</p>
      </div>
          </div>
          <div className="col-lg-6 mt-5">
            <iframe className='w-100' width="560" height="350" src="https://www.youtube.com/embed/5dy3azady4w?si=yEUxs50PIEHRjzvT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
