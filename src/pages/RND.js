import React from 'react';
import '../css/RND.css';
import rndImage from '../assets/randd.jpg'; // Using a more relevant image

const RND = () => {
  return (
    <div className="rnd-page">
      <div className="rnd-container">
        <header className="rnd-header">
          <h1 className="rnd-title">Research & Development</h1>
          <p className="rnd-intro">
            Innovation is the cornerstone of our success at S V Trading. Our dedicated R&D team explores cutting-edge advancements in chemistry and material science to create sustainable, high-performance solutions.
          </p>
        </header>

        <section className="rnd-content">
          <div className="rnd-text">
            <h2>Our Focus on Innovation</h2>
            <p>
              Our R&D operates at the intersection of science and creativity, focusing on developing next-generation products that meet the evolving needs of our clients and the industry.
            </p>
            <ul>
              <li><strong>Advanced Formulations:</strong> Developing advanced resins, specialty hardeners, and catalysts to enhance performance and safety.</li>
              <li><strong>Sustainable Solutions:</strong> Creating bio-based resins and implementing green chemistry principles to minimize environmental impact.</li>
              <li><strong>Material Science:</strong> Optimizing composites and fiberglass materials to ensure superior durability and versatility in all applications.</li>
            </ul>
            <p>
              Through collaboration with industry leaders and a commitment to continuous improvement, we are shaping the future of the chemical industry.
            </p>
          </div>
          <div className="rnd-image-container">
            <img 
              src={rndImage} 
              alt="Innovative Research and Development" 
              className="rnd-image"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default RND;
