import React from 'react';
import '../css/Testing.css';
import testingImage from '../assets/testing.png'; // Using a more relevant image

const Testing = () => {
  return (
    <div className="testing-page">
      <div className="testing-container">
        <header className="testing-header">
          <h1 className="testing-title">Testing & Quality Assurance</h1>
          <p className="testing-intro">
            At S V Trading, we are committed to delivering products of the highest quality. Our rigorous testing and quality assurance processes ensure that every product not only meets but exceeds industry standards.
          </p>
        </header>

        <section className="testing-content">
          <div className="testing-text">
            <h2>Our Testing Capabilities</h2>
            <p>
              Our state-of-the-art facilities and expert team allow us to conduct a comprehensive range of tests, guaranteeing the performance and reliability of our products.
            </p>
            <ul>
              <li><strong>In-House Facilities:</strong> Equipped for mechanical, chemical, and thermal testing to evaluate material strength, composition, and stability.</li>
              <li><strong>Advanced Analytical Setup:</strong> Utilizing spectroscopy, chromatography, and microscopy for precise analysis of material properties and behavior.</li>
              <li><strong>Experimental Prototyping:</strong> Dedicated setups for testing new formulations and developing prototypes to drive innovation and solve technical challenges.</li>
            </ul>
            <p>
              This meticulous approach to quality control, from raw materials to final inspection, ensures our clients receive reliable and consistent products every time.
            </p>
          </div>
          <div className="testing-image-container">
            <img 
              src={testingImage} 
              alt="Advanced Testing Laboratory" 
              className="testing-image"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testing;
