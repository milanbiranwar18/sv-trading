import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faBoxes, faCheckCircle, faLeaf, faRecycle, faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const PhosphoricAcid85 = () => {
    return (
        <div className="product-page">
            <div className="product-hero">
                <div className="product-hero-content">
                    <div className="product-hero-text">
                        <h1>Phosphoric Acid 85%</h1>
                        <p className="product-subtitle">
                            High-concentration industrial acid for manufacturing and water treatment applications
                        </p>
                        <div className="product-highlights">
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>85% concentration</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Industrial grade</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Versatile applications</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-hero-image">
                        <img src="/src/assets/clear.jpg" alt="Phosphoric Acid 85%" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-main">
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Phosphoric Acid 85% is a high-concentration industrial acid widely used in 
                            various manufacturing processes, water treatment, and chemical synthesis. 
                            This technical grade acid offers excellent performance in industrial applications 
                            requiring strong acidic properties and phosphorus content.
                        </p>
                    </section>

                    <section className="product-section">
                        <h2>Key Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <h4>Chemical Formula</h4>
                                <p>H3PO4</p>
                            </div>
                            <div className="spec-item">
                                <h4>Concentration</h4>
                                <p>85% (w/w)</p>
                            </div>
                            <div className="spec-item">
                                <h4>Appearance</h4>
                                <p>Clear, colorless liquid</p>
                            </div>
                            <div className="spec-item">
                                <h4>Molecular Weight</h4>
                                <p>98.00 g/mol</p>
                            </div>
                            <div className="spec-item">
                                <h4>Density</h4>
                                <p>1.69 g/cm³</p>
                            </div>
                            <div className="spec-item">
                                <h4>Boiling Point</h4>
                                <p>158°C</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Technical Data</h2>
                        <div className="technical-data">
                            <div className="data-item">
                                <h4>Purity</h4>
                                <p>≥ 85%</p>
                            </div>
                            <div className="data-item">
                                <h4>Iron Content</h4>
                                <p>≤ 0.002%</p>
                            </div>
                            <div className="data-item">
                                <h4>Chloride Content</h4>
                                <p>≤ 0.0005%</p>
                            </div>
                            <div className="data-item">
                                <h4>Sulfate Content</h4>
                                <p>≤ 0.005%</p>
                            </div>
                            <div className="data-item">
                                <h4>Heavy Metals</h4>
                                <p>≤ 0.001%</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-item">
                                <FontAwesomeIcon icon={faIndustry} />
                                <h4>Fertilizer Production</h4>
                                <p>Manufacturing of phosphate fertilizers and agricultural chemicals</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faFlask} />
                                <h4>Chemical Synthesis</h4>
                                <p>Production of various phosphates and industrial chemicals</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faBoxes} />
                                <h4>Water Treatment</h4>
                                <p>pH adjustment and scale prevention in water systems</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faRecycle} />
                                <h4>Metal Treatment</h4>
                                <p>Pickling and surface treatment of metals</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Benefits</h2>
                        <div className="benefits-list">
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>High Concentration</h4>
                                    <p>85% concentration provides maximum efficiency in applications</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Versatile Applications</h4>
                                    <p>Suitable for various industrial and manufacturing processes</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Consistent Quality</h4>
                                    <p>Manufactured under strict quality control standards</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Cost Effective</h4>
                                    <p>High concentration reduces transportation and storage costs</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Reliable Performance</h4>
                                    <p>Consistent results across various applications</p>
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
                                <img src="/src/assets/clear.jpg" alt="Phosphoric Acid 85% View 1" />
                                <p>Phosphoric Acid 85% Solution</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Phosphoric Acid 85% View 2" />
                                <p>Industrial Application</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Phosphoric Acid 85% View 3" />
                                <p>Chemical Manufacturing</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Phosphoric Acid 85% View 4" />
                                <p>Water Treatment System</p>
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

export default PhosphoricAcid85; 