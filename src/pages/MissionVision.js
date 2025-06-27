import React from 'react';
import '../css/MissionVision.css';
import MissionImage from '../assets/randd.jpg';
import VisionImage from '../assets/testing.png';

const MissionVision = () => {
  return (
    
    <section className="mission-vision-container">
      <div className="mission-box">
        <img src={MissionImage} alt="Our Mission" />
        <h2>Our Mission</h2>
        <p>
          To be the preferred partner for industrial chemicals by consistently delivering high-quality products, exceptional service, and reliable supply chain solutions that empower our clients' success.
        </p>
      </div>
      <div className="vision-box">
        <img src={VisionImage} alt="Our Vision" />
        <h2>Our Vision</h2>
        <p>
          To become a leading name in the global chemical trading market, recognized for our comprehensive product portfolio, unwavering commitment to quality, and our dedication to building lasting and trustworthy relationships with customers and suppliers.
        </p>
      </div>
    </section>
   
  );
};

export default MissionVision;
