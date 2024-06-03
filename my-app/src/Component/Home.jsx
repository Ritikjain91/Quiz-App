import Image from 'react-bootstrap/Image';
import propertyImage from '../Images/Property.png';
import ProfileImage2 from '../Images/image1.png';
import './Home.css';
import { HiOutlineSpeakerXMark, HiSpeakerWave } from "react-icons/hi2";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FaRegCirclePlay } from "react-icons/fa6";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [iconClicked, setIconClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIconClicked(!iconClicked);
   
  };
  const LetsPlay=()=>{
    navigate('./flashcard')
  }

  return (
    <div className='parent-box'>
      <Navbar className="position-absolute top-0 start-0 w-100">
        <Container fluid>
          <Navbar.Brand href="#home">
            <div className="position-relative">
              <Image 
                src={ProfileImage2} 
                className='rounded-circle position-relative mx-4 py-1 bg-white start-0 translate-middle z-1' 
                style={{ width: '35px', height: '35px', top: "0.8em" }}
              />
              <p className='position-absolute mb-5 fw-bold top-0 start-0 translate-middle-x z-1 bg-transparent text-white' 
                 style={{ marginLeft: '7.5rem', fontSize: "0.85rem" }}>
                Cloudifyapp Pvt. Ltd.
              </p>
              <p className='position-absolute mt-3 top-0 start-0 translate-middle-x z-1 bg-transparent text-white' 
                 style={{ marginLeft: '5.2rem', fontSize: "0.70rem" }}>
                By John Doe
              </p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <div className="position-relative">
                <Button onClick={handleClick} variant="outline-dark" className='my-1 fs-3 text-white z-1' style={{ position: "relative", right: "0" }}>
                  {!iconClicked ? <HiOutlineSpeakerXMark /> : <HiSpeakerWave />}
                </Button>
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div className='box'>
        <Image src={propertyImage} className="zoom" />
      </div>

      <div className="position-absolute top-50 start-50 translate-middle text-white text-center px-3">
        <p className="fw-bold fs-1">Addition and Subtraction Facts within 20.</p>
        <p className="fs-4">Test your knowledge with the following questions, tap a card to flip it and uncover the answer, good luck!</p>
      </div>
      <div className="position-absolute top-50 start-50 translate-middle" style={{ marginTop: "13rem" }}>
        <button 
          type="button" 
          onClick={LetsPlay}
          className="fs-5 btn btn-warning rounded-pill p-1 fw-bold YellowButton" 
          style={{ width: "150px", transition: 'transform 0.3s ease', transform: isHovered ? 'scale(1.1)' : 'none' }}
        > 
          <span 
            className="mx-2 fs-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ display: 'inline-block', transition: 'transform 1s ease', transform: isHovered ? 'rotate(360deg)' : 'none' }}
          >
            <FaRegCirclePlay />
          </span>
          Let's Play
        </button>
      </div>
      <div className="position-absolute d-flex bottom-0 start-0 ">
        <p className='text-white' style={{ fontSize: "0.65rem" }}> Powered by </p>
        <br/>
        <p className='text-white' style={{ fontSize: "0.65rem" }}> CLOUDIFYSAPPS</p>
      </div>
    </div>
  );
}

export default Home;
