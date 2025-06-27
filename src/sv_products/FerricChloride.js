import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faCheckCircle, faWater } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const FerricChloride = () => (
  <div className="product-page">
    <div className="product-hero">
      <div className="product-hero-content">
        <div className="product-hero-text">
          <h1>Ferric Chloride Chemical</h1>
          <p className="product-subtitle">High-quality Iron(III) Chloride for industrial and water treatment applications</p>
          <div className="product-highlights">
            <div className="highlight-item"><FontAwesomeIcon icon={faCheckCircle} /> 99% Purity</div>
            <div className="highlight-item"><FontAwesomeIcon icon={faCheckCircle} /> Water Treatment</div>
            <div className="highlight-item"><FontAwesomeIcon icon={faCheckCircle} /> Etching Agent</div>
          </div>
        </div>
        <div className="product-hero-image">
          <img src="/src/assets/clear.jpg" alt="Ferric Chloride Chemical" />
        </div>
      </div>
    </div>
    <div className="product-content">
      <div className="product-main">
        <section className="product-section">
          <h2>Product Details</h2>
          <div className="specs-grid">
            <div className="spec-item"><h4>Physical State</h4><p>Liquid</p></div>
            <div className="spec-item"><h4>Purity</h4><p>99%</p></div>
            <div className="spec-item"><h4>Grade Standard</h4><p>Industrial Grade</p></div>
            <div className="spec-item"><h4>Packaging Size</h4><p>100 gm</p></div>
            <div className="spec-item"><h4>Packaging Type</h4><p>Bottle</p></div>
            <div className="spec-item"><h4>Molecular Weight</h4><p>162.5 kg</p></div>
            <div className="spec-item"><h4>Solubility</h4><p>Highly soluble in water</p></div>
            <div className="spec-item"><h4>Appearance</h4><p>Light brown liquid</p></div>
            <div className="spec-item"><h4>Ferric Chloride</h4><p>40.00% Min as FeCl3</p></div>
            <div className="spec-item"><h4>Manufacture By</h4><p>Science Company</p></div>
            <div className="spec-item"><h4>Free Acid</h4><p>0.50% Max as HCl</p></div>
            <div className="spec-item"><h4>Ferrous Salt</h4><p>0.10% Max as FeCl2</p></div>
            <div className="spec-item"><h4>Relative Density</h4><p>25°C 1.43 Min</p></div>
            <div className="spec-item"><h4>Corrosive</h4><p>Highly corrosive to most metals</p></div>
          </div>
        </section>
        <section className="product-section">
          <h2>Overview</h2>
          <p>Ferric Chloride, also known as Iron(III) Chloride, is a high-quality chemical compound widely used in various industrial applications. It is a dark brown, crystalline solid that is highly soluble in water and forms a yellowish to brownish solution when dissolved.</p>
        </section>
        <section className="product-section">
          <h2>Key Applications</h2>
          <div className="applications-grid">
            <div className="application-item"><FontAwesomeIcon icon={faWater} /><h4>Water Treatment</h4><p>Effective coagulant for wastewater and drinking water treatment.</p></div>
            <div className="application-item"><FontAwesomeIcon icon={faFlask} /><h4>Etching Agent</h4><p>Used in electronics and metal industries for etching circuit boards and engraving metals.</p></div>
            <div className="application-item"><FontAwesomeIcon icon={faIndustry} /><h4>Dye & Pigment Production</h4><p>Used in manufacturing pigments and dyes for textiles.</p></div>
            <div className="application-item"><FontAwesomeIcon icon={faIndustry} /><h4>Sewage Treatment</h4><p>Reduces sludge volume and improves clarity in sewage treatment.</p></div>
          </div>
        </section>
        <section className="product-section">
          <h2>Advantages</h2>
          <ul className="benefits-list">
            <li>Strong coagulating properties</li>
            <li>Easy to handle and store</li>
            <li>Economical solution for water purification</li>
            <li>Versatile across multiple industries</li>
          </ul>
        </section>
        <section className="product-section">
          <h2>Product Gallery</h2>
          <div className="product-gallery">
            <div className="gallery-item"><img src="/src/assets/clear.jpg" alt="Ferric Chloride" /><p>Ferric Chloride Chemical</p></div>
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

export default FerricChloride; 