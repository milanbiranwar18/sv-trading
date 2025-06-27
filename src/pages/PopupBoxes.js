import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faIndustry, faCogs, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import '../css/PopupBoxes.css';

function PopupBoxes() {
  return (
    <div className="categories-section">
      <div className="container">
        <h2 className="section-title">Explore Our Core Offerings</h2>
        <p className="section-subtitle">From high-performance chemicals to industrial solutions, we've got you covered.</p>
        <div className="categories-grid">
          <Link to="/products/industrial-chemicals" className="category-card">
            <FontAwesomeIcon icon={faIndustry} className="category-icon" />
            <h3>Industrial Chemicals</h3>
            <p>High-purity chemicals for various industrial applications.</p>
          </Link>
          <Link to="/products/specialty-chemicals" className="category-card">
            <FontAwesomeIcon icon={faFlask} className="category-icon" />
            <h3>Specialty Chemicals</h3>
            <p>Custom formulations for specialized manufacturing needs.</p>
          </Link>
          <Link to="/products/water-treatment" className="category-card">
            <FontAwesomeIcon icon={faCogs} className="category-icon" />
            <h3>Water Treatment</h3>
            <p>Effective solutions for industrial and commercial water treatment.</p>
          </Link>
          <Link to="/products/logistics" className="category-card">
            <FontAwesomeIcon icon={faShippingFast} className="category-icon" />
            <h3>Logistics & Supply</h3>
            <p>Reliable supply chain and logistics services for all our products.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PopupBoxes;
