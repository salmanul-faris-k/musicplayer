import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <Navbar className="" style={{background:'linear-gradient(-90deg ,#d38312,#a83279)',height:'70px' }}>
        <Container>
          <Navbar.Brand >
         <Link to={'/'} className='text-white text-decoration-none fw-bold'>
         <i  class="fa-solid fa-music"></i> &nbsp;
         Media player
         
         </Link>
           
          </Navbar.Brand>
        </Container>
      </Navbar> 
    </div>
  )
}

export default Header
