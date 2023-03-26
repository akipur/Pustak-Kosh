import React from 'react';
import { motion } from 'framer-motion';
import Card from 'react-bootstrap/Card';
import firstslide from '../images/hero.png';
import {Link} from 'react-router-dom';


function home() {
  return (
    <>
      <div className="container-fluid hero">
        <div className="row">
          <div className="col-md-6  d-flex flex-column justify-content-center">
            <h1 className='fw-bold'>Welcome To Pustakkosh</h1>
            <p>One stop solution for all the bookworms. DONATE, REQUEST and LEARN from books of top world class authors.</p>
            <div className='col-md-6'>
              {/* <Button style={{backgroundColor: '#707BFB'}}> */}
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                className="btn" style={{ backgroundColor: '#707BFB', color: '#fff' }}>
                <Link style={{color: '#fff', textDecoration:'none'}} to="/donor">
                Explore Now
                </Link>
              </motion.button>
              {/* </Button> */}
            </div>
          </div>
          <div className="col-md-6">
            <img src={firstslide} alt="" width="500px" className='ms-5' />
          </div>

        </div>

      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#707BFB" fill-opacity="1" d="M0,32L60,32C120,32,240,32,360,53.3C480,75,600,117,720,154.7C840,192,960,224,1080,218.7C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#707BFB" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,96C480,117,600,203,720,218.7C840,235,960,181,1080,165.3C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

      <div className="container-fluid py-3">
        <center> <h1 className='fw-bold'>Our Features</h1> 
        <div className="" style={{width:'40px', height:'4px', backgroundColor: '#707BFB'}}></div>
        </center>

        <div className="row py-5">
          <div className="col-md-3">
            <motion.div
              whileHover={{
                scale: 0.9,
                transition: { duration: 0.2 },
              }}
            >
              <Card style={{ width: '18rem', borderRadius:'20px'}}>
                <Card.Body style={{ padding:'40px' }}>
                  <Card.Title className='fw-bold text-center' style={{ color: '#707BFB' }}>Donor</Card.Title>
                  <Card.Text className='text-center'>

                   Donate your used books to someone in need with our hassle free system.
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div
              whileHover={{
                scale: 0.9,
                transition: { duration: 0.2 },
              }}
            >
              <Card style={{ width: '18rem',  borderRadius:'20px' }}>
                <Card.Body style={{ padding:'40px' }}>
                  <Card.Title className='fw-bold text-center' style={{ color: '#707BFB' }}>Needy</Card.Title>
                  <Card.Text className='text-center'>

                   Get all books of world class authors by simply raising a request on our system.
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div
              whileHover={{
                scale: 0.9,
                transition: { duration: 0.2 },
              }}
            >
              <Card style={{ width: '18rem',  borderRadius:'20px' }}>
                <Card.Body style={{ padding:'40px' }}>
                  <Card.Title className='fw-bold text-center' style={{ color: '#707BFB' }}>Learn</Card.Title>
                  <Card.Text className='text-center'>

                   Learn anything from any book online from our 24x7 online portal 
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </motion.div>
          </div>
          <div className="col-md-3">
            <motion.div
              whileHover={{
                scale: 0.9,
                transition: { duration: 0.2 },
              }}
            >
              <Card style={{ width: '18rem',  borderRadius:'20px' }}>
                <Card.Body style={{ padding:'40px' }}>
                  <Card.Title className='fw-bold text-center' style={{ color: '#707BFB' }}>Community</Card.Title>
                  <Card.Text className='text-center'>

                   Join our community with thousands of like minded people to share ideas. 
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default home;