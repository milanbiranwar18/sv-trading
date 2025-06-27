import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faBoxes, faCheckCircle, faLeaf, faRecycle, faThermometerHalf, faTint, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const DETMP = () => {
    return (
        <div className="product-page">
            <div className="product-hero">
                <div className="product-hero-content">
                    <div className="product-hero-text">
                        <h1>DETMP (Diethylene Triamine Penta Methylene Phosphonic Acid)</h1>
                        <p className="product-subtitle">
                            High-performance scale and corrosion inhibitor for industrial water treatment applications
                        </p>
                        <div className="product-highlights">
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Excellent scale inhibition</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Corrosion protection</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>High thermal stability</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-hero-image">
                        <img src="/src/assets/clear.jpg" alt="DETMP Chemical" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-main">
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            DETMP (Diethylene Triamine Penta Methylene Phosphonic Acid) is a highly effective 
                            scale and corrosion inhibitor used in industrial water treatment systems. This 
                            phosphonic acid derivative provides excellent protection against scale formation 
                            and metal corrosion in cooling towers, boilers, and other water systems.
                        </p>
                    </section>

                    <section className="product-section">
                        <h2>Key Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <h4>Chemical Formula</h4>
                                <p>C9H28N3O15P5</p>
                            </div>
                            <div className="spec-item">
                                <h4>Molecular Weight</h4>
                                <p>573.2 g/mol</p>
                            </div>
                            <div className="spec-item">
                                <h4>Appearance</h4>
                                <p>Clear to pale yellow liquid</p>
                            </div>
                            <div className="spec-item">
                                <h4>Solubility</h4>
                                <p>Highly soluble in water</p>
                            </div>
                            <div className="spec-item">
                                <h4>pH Range</h4>
                                <p>1.5 - 12.0</p>
                            </div>
                            <div className="spec-item">
                                <h4>Density</h4>
                                <p>1.35 - 1.45 g/cm³</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Technical Data</h2>
                        <div className="technical-data">
                            <div className="data-item">
                                <h4>Active Content</h4>
                                <p>≥ 50%</p>
                            </div>
                            <div className="data-item">
                                <h4>Phosphorus Content</h4>
                                <p>≥ 25%</p>
                            </div>
                            <div className="data-item">
                                <h4>Iron Content</h4>
                                <p>≤ 0.01%</p>
                            </div>
                            <div className="data-item">
                                <h4>Chloride Content</h4>
                                <p>≤ 0.1%</p>
                            </div>
                            <div className="data-item">
                                <h4>Thermal Stability</h4>
                                <p>Stable up to 200°C</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-item">
                                <FontAwesomeIcon icon={faIndustry} />
                                <h4>Cooling Water Systems</h4>
                                <p>Scale and corrosion inhibition in industrial cooling towers and heat exchangers</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faFlask} />
                                <h4>Boiler Water Treatment</h4>
                                <p>Prevention of scale formation in high-pressure boilers</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faBoxes} />
                                <h4>Reverse Osmosis Systems</h4>
                                <p>Membrane protection and scale prevention in RO systems</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faRecycle} />
                                <h4>Industrial Process Water</h4>
                                <p>Water treatment in various industrial manufacturing processes</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Benefits</h2>
                        <div className="benefits-list">
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Superior Scale Inhibition</h4>
                                    <p>Effectively prevents calcium carbonate, calcium sulfate, and other scale formation</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Corrosion Protection</h4>
                                    <p>Forms protective films on metal surfaces to prevent corrosion</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>High Thermal Stability</h4>
                                    <p>Maintains effectiveness at elevated temperatures</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Compatibility</h4>
                                    <p>Compatible with other water treatment chemicals</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Cost Effective</h4>
                                    <p>Low dosage requirements provide economic benefits</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Safety Information</h2>
                        <div className="safety-info">
                            <div className="safety-item">
                                <h4>Handling</h4>
                                <p>Wear appropriate protective equipment including gloves, safety glasses, and protective clothing</p>
                            </div>
                            <div className="safety-item">
                                <h4>Storage</h4>
                                <p>Store in a cool, dry place away from direct sunlight and incompatible materials</p>
                            </div>
                            <div className="safety-item">
                                <h4>First Aid</h4>
                                <p>In case of contact, flush with plenty of water and seek medical attention if necessary</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Product Gallery</h2>
                        <div className="product-gallery">
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="DETMP Product View 1" />
                                <p>DETMP Chemical Solution</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="DETMP Product View 2" />
                                <p>Industrial Application</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="DETMP Product View 3" />
                                <p>Water Treatment System</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="DETMP Product View 4" />
                                <p>Cooling Tower Application</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <div className="enquiry-form">
                            <h2>Request a Quote</h2>
                            <form className="quote-form">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text" id="company" name="company" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="quantity">Required Quantity (kg)</label>
                                    <input type="number" id="quantity" name="quantity" min="1" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Additional Requirements</label>
                                    <textarea id="message" name="message" rows="4"></textarea>
                                </div>
                                <button type="submit" className="submit-btn">Send Enquiry</button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DETMP; 