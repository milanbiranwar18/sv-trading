import React from 'react';
import '../css/Production.css';
import productionImage from '../assets/production.png'; // Using a more relevant image

const Production = () => {
  return (
    <div className="production-page">
      <div className="production-container">
        <header className="production-header">
          <h1 className="production-title">Manufacturing & Production</h1>
          <p className="production-intro">
            At S V Trading, our manufacturing prowess is centered on delivering high-quality products that drive innovation and efficiency. We leverage state-of-the-art technology and a skilled workforce to ensure every product meets rigorous quality standards.
          </p>
        </header>

        <section className="production-content">
          <div className="production-text">
            <h2>Our Core Production Areas</h2>
            <p>
              Our expertise spans across several key areas of industrial manufacturing. We are committed to sustainability and continuous improvement in all our processes.
            </p>
            <ul>
              <li><strong>Fiber Reinforced Plastic (FRP):</strong> A lightweight yet robust material with superior strength and durability for construction, automotive, and aerospace.</li>
              <li><strong>Industrial Catalysts (MEKP & Cobalt):</strong> Essential catalysts that ensure efficient and reliable curing for polyester resins and composites.</li>
              <li><strong>Unsaturated Resins:</strong> Versatile resins widely used in composites, coatings, and adhesives for their excellent mechanical properties.</li>
            </ul>
            <p>
              Our commitment to excellence ensures we deliver products that not only meet but exceed industry standards, enhancing performance and reliability for our clients.
            </p>
          </div>
          <div className="production-image-container">
            <img 
              src={productionImage} 
              alt="Advanced Manufacturing Process" 
              className="production-image"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Production;
