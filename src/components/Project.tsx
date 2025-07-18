import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import gallery4 from '../assets/images/gallery4.jpg';
import gallery5 from '../assets/images/gallery5.jpg';
import gallery6 from '../assets/images/gallery6.jpg';
import gallery7 from '../assets/images/gallery7.jpg';
import gallery8 from '../assets/images/gallery8.jpg';
import gallery9 from '../assets/images/gallery9.jpg';
import gallery10 from '../assets/images/gallery10.jpg';
import gallery13 from '../assets/images/gallery13.jpg';
import gallery14 from '../assets/images/gallery14.jpg';

import '../assets/styles/Project.scss';

const sliderImages = [gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery13, gallery14];


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    }
  ]
};

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Personal Trainings</h1>

      <div className="projects-grid">
        {Array(10).fill(0).map((_, i) => (
          <div className="project" key={i}>
            <a href={`#service${i + 1}`} target="_blank" rel="noreferrer">
              <img src={gallery2} className="zoom" alt="thumbnail" width="100%" />
            </a>
            <a href={`#service${i + 1}`} target="_blank" rel="noreferrer">
              <h2>lorem</h2>
            </a>
            <p>lorem details..</p>
          </div>
        ))}
      </div>

      {/* Slideshow Section */}
      <div className="slider-section">
        <h2 style={{ marginTop: '2rem', textAlign: 'center' }}>Gallery </h2>
        <Slider {...settings}>
          {sliderImages.map((img, index) => (
           <div className="slider-image-wrapper">
  <img src={img} alt={`slide-${index}`} />
</div>

          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Project;
