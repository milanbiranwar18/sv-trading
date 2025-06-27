import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faBoxes, faCheckCircle, faLeaf, faRecycle, faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const PotassiumHumateFlakes = () => {
    return (
        <div className="product-page">
            <div className="product-hero">
                <div className="product-hero-content">
                    <div className="product-hero-text">
                        <h1>Potassium Humate Flakes</h1>
                        <p className="product-subtitle">
                            Natural soil conditioner and plant growth enhancer for agricultural applications
                        </p>
                        <div className="product-highlights">
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Natural humic acid</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Soil conditioning</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Plant growth</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-hero-image">
                        <img src="/src/assets/clear.jpg" alt="Potassium Humate Flakes" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-main">
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Potassium Humate Flakes are natural organic compounds derived from humic substances 
                            rich in potassium. These flakes provide essential nutrients and improve soil structure, 
                            making them ideal for agricultural applications. The potassium content enhances plant 
                            growth while the humic acid improves soil fertility and nutrient absorption.
                        </p>
                    </section>

                    <section className="product-section">
                        <h2>Key Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <h4>Appearance</h4>
                                <p>Dark brown to black flakes</p>
                            </div>
                            <div className="spec-item">
                                <h4>Solubility</h4>
                                <p>Partially soluble in water</p>
                            </div>
                            <div className="spec-item">
                                <h4>pH Value</h4>
                                <p>8.0 - 10.0</p>
                            </div>
                            <div className="spec-item">
                                <h4>Moisture Content</h4>
                                <p>≤ 12%</p>
                            </div>
                            <div className="spec-item">
                                <h4>Humic Acid Content</h4>
                                <p>≥ 60%</p>
                            </div>
                            <div className="spec-item">
                                <h4>Potassium Content</h4>
                                <p>≥ 8% (K2O)</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Technical Data</h2>
                        <div className="technical-data">
                            <div className="data-item">
                                <h4>Organic Matter</h4>
                                <p>≥ 85%</p>
                            </div>
                            <div className="data-item">
                                <h4>Ash Content</h4>
                                <p>≤ 15%</p>
                            </div>
                            <div className="data-item">
                                <h4>Water Solubility</h4>
                                <p>≥ 80%</p>
                            </div>
                            <div className="data-item">
                                <h4>Bulk Density</h4>
                                <p>0.5 - 0.7 g/cm³</p>
                            </div>
                            <div className="data-item">
                                <h4>Storage Stability</h4>
                                <p>24 months</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-item">
                                <FontAwesomeIcon icon={faLeaf} />
                                <h4>Agriculture</h4>
                                <p>Soil amendment and crop enhancement in farming</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faFlask} />
                                <h4>Horticulture</h4>
                                <p>Greenhouse and nursery applications for improved plant health</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faIndustry} />
                                <h4>Organic Farming</h4>
                                <p>Natural soil conditioning for organic agricultural practices</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faRecycle} />
                                <h4>Soil Remediation</h4>
                                <p>Improving soil structure and nutrient availability</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Benefits</h2>
                        <div className="benefits-list">
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Enhanced Nutrient Uptake</h4>
                                    <p>Improves plant absorption of essential minerals and trace elements</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Soil Structure Improvement</h4>
                                    <p>Enhances soil porosity and water retention capacity</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Potassium Enrichment</h4>
                                    <p>Provides essential potassium for plant growth and development</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Stress Resistance</h4>
                                    <p>Helps plants withstand environmental stress conditions</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Natural and Safe</h4>
                                    <p>100% natural product with no harmful side effects</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Safety Information</h2>
                        <div className="safety-info">
                            <div className="safety-item">
                                <h4>Handling</h4>
                                <p>Wear appropriate protective equipment including gloves and dust mask</p>
                            </div>
                            <div className="safety-item">
                                <h4>Storage</h4>
                                <p>Store in a cool, dry place away from direct sunlight and moisture</p>
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
                                <img src="/src/assets/clear.jpg" alt="Potassium Humate Flakes View 1" />
                                <p>Potassium Humate Flakes</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Potassium Humate Flakes View 2" />
                                <p>Agricultural Application</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Potassium Humate Flakes View 3" />
                                <p>Soil Amendment</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Potassium Humate Flakes View 4" />
                                <p>Plant Growth Enhancement</p>
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

export default PotassiumHumateFlakes; 