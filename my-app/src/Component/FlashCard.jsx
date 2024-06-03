import Image from 'react-bootstrap/Image';
import propertyImage from '../Images/Property.png';
import ProfileImage from '../Images/image1.png';

import { HiOutlineSpeakerXMark, HiSpeakerWave } from "react-icons/hi2";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import  CarouselQuiz  from './CarouselQuiz';


function FlashCard() {
  const [iconClicked, setIconClicked] = useState(false);

  const handleClick = () => {
    setIconClicked(!iconClicked);
  };

  return (
    <div className='parent-box' style={{ transition: 'none' }}>
      <Navbar className="position-absolute top-0 start-0 w-100" style={{ transition: 'none' }}>
        <Container fluid>
          <Navbar.Brand href="#home">
            <div className="position-relative" style={{ transition: 'none' }}>
              <Image 
                src={ProfileImage} 
                className='rounded-circle position-relative mx-4 py-1 bg-white start-0 translate-middle z-1' 
                style={{ width: '35px', height: '35px', top: "0.8em", transition: 'none' }}
              />
              <p className='position-absolute mb-5 fw-bold top-0 start-0 translate-middle-x z-1 bg-transparent text-white' 
                 style={{ marginLeft: '7.5rem', fontSize: "0.85rem", transition: 'none' }}>
                Cloudifyapp Pvt. Ltd.
              </p>
              <p className='position-absolute mt-3 top-0 start-0 translate-middle-x z-1 bg-transparent text-white' 
                 style={{ marginLeft: '5.2rem', fontSize: "0.70rem", transition: 'none' }}>
                By John Doe
              </p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div className="position-relative" style={{ transition: 'none' }}>
                <Button onClick={handleClick} variant="outline-dark" className='my-1 fs-3 text-white z-1' style={{ position: "relative", right: "0", transition: 'none' }}>
                  {!iconClicked ? <HiOutlineSpeakerXMark /> : <HiSpeakerWave />}
                </Button>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div className='box' >
        <Image src={propertyImage} style={{ objectFit:'cover',width:"100%",filter:"brightness(50%)",height:"100vh" }} />
      </div>
      <div>
        <CarouselQuiz/>
      </div>

      <div className="position-absolute d-flex bottom-0 start-0 " style={{ transition: 'none' }}>
        <p className='text-white' style={{ fontSize: "0.65rem", transition: 'none' }}> Powered by </p>
        <br/>
        <p className='text-white' style={{ fontSize: "0.65rem", transition: 'none' }}> CLOUDIFYSAPPS</p>
      </div>
    </div>
  );
}

export default FlashCard;
