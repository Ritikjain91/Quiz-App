import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import './Carousel.css';


import Picimage from '../Images/Property1Default(1).png';
import Picimage1 from '../Images/Property1Default.png';
import Picimage2 from '../Images/Property1Default(2).png';
import Picimage3 from '../Images/Property1Default(3).png';
import Picimage4 from '../Images/PropertyDefault(4).png';
import Picimage5 from '../Images/PropertyDefault(5).png';
import Picimage6 from '../Images/PropertyDefault(6).png';
import Picimage7 from '../Images/Property1Default(7).png';
import Picimage8 from '../Images/Property1Default(8).png';
import Picimage9 from '../Images/Property1Default(9).png';
import TickImage from '../Images/Tick.png';
import ShiftImage from '../Images/Property 1=Variant2.png';
import ShiftImage1 from '../Images/Property 1=Variant2 (1).png';
import ShiftImage2 from '../Images/Property 1=Variant2 (2).png';
import ShiftImage3 from '../Images/Property 1=Variant2 (3).png';
import ShiftImage4 from '../Images/Property 1=Variant2 (4).png';
import ShiftImage5 from '../Images/Property 1=Variant2 (5).png';
import ShiftImage6 from '../Images/Property 1=Variant2 (6).png';
import ShiftImage7 from '../Images/Property 1=Variant2 (7).png';
import ShiftImage8 from '../Images/Property 1=Variant2 (8).png';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

const ImageFlipper = ({ firstImage, secondImage }) => {
  const [flipped, setFlipped] = useState(false);
  const [showSecondImage, setShowSecondImage] = useState(false);

  const flipImage = () => {
    setFlipped(true);
    setTimeout(() => {
      setShowSecondImage(true);
      setFlipped(false);
    }, 600);
  };

  return (
    <div className="flippable-container" onClick={flipImage}>
      <img
        className={`flippable-image ${flipped ? 'flipped' : ''}`}
        src={showSecondImage ? secondImage : firstImage}
        alt="Flippable"
        style={{ cursor: 'pointer', width: '100%' }}
      />
    </div>
  );
};

function CarouselFadeExample() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const totalSlides = 11;

  useEffect(() => {
    if (location.pathname === '/flashcard/flashcard') {
      navigate('/flashcard');
    }
  }, [location, navigate]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const goToPrevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const goToNextSlide = () => {
    if (index < totalSlides - 1) {
      setIndex(index + 1);
    }
  };

  const LetsPlay = () => {
    navigate('/');
  };
  const isLastSlide = index === totalSlides - 1;

  return (
    <div className="carousel-container position-absolute top-50 start-50 translate-middle">
      <Carousel
        fade
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={index !== totalSlides - 1}
        interval={null}
      >
        <Carousel.Item>
          <ImageFlipper firstImage={Picimage} secondImage={ShiftImage} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageFlipper firstImage={Picimage1} secondImage={ShiftImage1} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageFlipper firstImage={Picimage2} secondImage={ShiftImage2} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageFlipper firstImage={Picimage3} secondImage={ShiftImage3} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageFlipper firstImage={Picimage4} secondImage={ShiftImage4} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageFlipper firstImage={Picimage5} secondImage={ShiftImage5} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageFlipper firstImage={Picimage6} secondImage={ShiftImage6} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageFlipper firstImage={Picimage7} secondImage={ShiftImage7} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageFlipper firstImage={Picimage8} secondImage={ShiftImage8} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageFlipper firstImage={Picimage9} secondImage={ShiftImage} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <h1 className='w-100' style={{position: "relative",  marginBottom: "5rem"}}>
            <ImageFlipper firstImage={TickImage} secondImage={TickImage} />
          </h1> 
          <button
            type="button"
            onClick={LetsPlay}
            className="fs-5 btn btn-warning rounded-pill p-1 fw-bold "
            style={{ width: "180px", transition: 'transform 0.3s ease', transform: isHovered ? 'scale(1.1)' : 'none', marginTop: "1em", position: "relative", left: "1rem" }}
          >
            <span
              className="mx-2 fs-3"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ display: 'inline-block', transition: 'transform 1s ease', transform: isHovered ? 'rotate(360deg)' : 'none' }}
            >
           <FontAwesomeIcon icon={faCircleNotch} />


            </span>
           Play Again
          </button>
          <Carousel.Caption><p className=' text-nowrap ' style={{position:"relative",right:"2em"}}>Hope you learned something new!</p></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="carousel-controls">
      <FontAwesomeIcon
  icon={faArrowLeft}
  onClick={goToPrevSlide}
  className={`carousel-arrow left-arrow ${index === 0 || isLastSlide ? 'hidden' : ''}`}
/>

<FontAwesomeIcon
  icon={faArrowRight}
  onClick={goToNextSlide}
  className={`carousel-arrow right-arrow ${index === totalSlides - 1 ? 'hidden' : ''}`}
/>

      </div>
      {!isLastSlide && (
        <div className="carousel-status">
          {index + 1}/{totalSlides}
        </div>
      )}
    </div>
  );
}

export default CarouselFadeExample;
