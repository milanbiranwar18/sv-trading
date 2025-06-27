import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faCheckCircle, faWater } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const SodiumMetabisulphite = () => (
  <div className="product-page">
    <div className="product-hero">
      <div className="product-hero-content">
        <div className="product-hero-text">
          <h1>Sodium Metabisulphite (SMBS)</h1>
          <p className="product-subtitle">High-purity SMBS for water treatment and industrial use</p>
          <div className="product-highlights">
            <div className="highlight-item"><FontAwesomeIcon icon={faCheckCircle} /> 98% Purity</div>
            <div className="highlight-item"><FontAwesomeIcon icon={faCheckCircle} /> Water Treatment</div>
            <div className="highlight-item"><FontAwesomeIcon icon={faCheckCircle} /> Reducing Agent</div>
          </div>
        </div>
        <div className="product-hero-image">
          <img src="/src/assets/clear.jpg" alt="Sodium Metabisulphite SMBS" />
        </div>
      </div>
    </div>
    <div className="product-content">
      <div className="product-main">
        <section className="product-section">
          <h2>Product Details</h2>
          <div className="specs-grid">
            <div className="spec-item"><h4>Purity</h4><p>98%</p></div>
            <div className="spec-item"><h4>Packaging Details</h4><p>50 Kg Bag</p></div>
            <div className="spec-item"><h4>Usage/Application</h4><p>Water Treatment</p></div>
            <div className="spec-item"><h4>Grade</h4><p>Industrial</p></div>
            <div className="spec-item"><h4>Packaging Size</h4><p>25kg and 50kg, Both</p></div>
            <div className="spec-item"><h4>Packaging Type</h4><p>Bag</p></div>
            <div className="spec-item"><h4>Form</h4><p>Powder</p></div>
            <div className="spec-item"><h4>Production Capacity</h4><p>10000</p></div>
            <div className="spec-item"><h4>Brand</h4><p>S.V.Trading Company</p></div>
            <div className="spec-item"><h4>Country of Origin</h4><p>Made in India</p></div>
          </div>
        </section>
        <section className="product-section">
          <h2>Applications</h2>
          <div className="applications-grid">
            <div className="application-item"><FontAwesomeIcon icon={faWater} /><h4>Water Treatment Chemicals</h4></div>
            <div className="application-item"><FontAwesomeIcon icon={faFlask} /><h4>Reducing Agent</h4></div>
            <div className="application-item"><FontAwesomeIcon icon={faIndustry} /><h4>Removing Chlorine and Chrome</h4></div>
          </div>
        </section>
        <section className="product-section">
          <h2>Additional Information</h2>
          <ul className="benefits-list">
            <li>Production Capacity: 10000</li>
            <li>Delivery Time: 3</li>
            <li>Minimum Order Quantity: 200 Kg</li>
            <li>Price: ₹ 45/Kg</li>
          </ul>
        </section>
        <section className="product-section">
          <h2>Product Gallery</h2>
          <div className="product-gallery">
            <div className="gallery-item"><img src="/src/assets/clear.jpg" alt="Sodium Metabisulphite SMBS" /><p>Sodium Metabisulphite SMBS</p></div>
          </div>
        </section>
        <section className="product-section">
          <div className="enquiry-form">
            <h2>Request a Quote</h2>
            <form className="quote-form">
              <div className="form-group"><label htmlFor="name">Full Name *</label><input type="text" id="name" name="name" required /></div>
              <div className="form-group"><label htmlFor="email">Email Address *</label><input type="email" id="email" name="email" required /></div>
              <div className="form-group"><label htmlFor="phone">Phone Number</label><input type="tel" id="phone" name="phone" /></div>
              <div className="form-group"><label htmlFor="company">Company Name</label><input type="text" id="company" name="company" /></div>
              <div className="form-group"><label htmlFor="quantity">Required Quantity (kg)</label><input type="number" id="quantity" name="quantity" min="1" /></div>
              <div className="form-group"><label htmlFor="message">Additional Requirements</label><textarea id="message" name="message" rows="4"></textarea></div>
              <button type="submit" className="submit-btn">Send Enquiry</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default SodiumMetabisulphite; 