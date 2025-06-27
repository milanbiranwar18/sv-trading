import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faBoxes, faCheckCircle, faLeaf, faRecycle, faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const TannicAcid60 = () => {
    return (
        <div className="product-page">
            <div className="product-hero">
                <div className="product-hero-content">
                    <div className="product-hero-text">
                        <h1>Tannic Acid 60%</h1>
                        <p className="product-subtitle">
                            High-quality natural tannin extract for industrial and pharmaceutical applications
                        </p>
                        <div className="product-highlights">
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>60% concentration</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Natural extract</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Versatile applications</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-hero-image">
                        <img src="/src/assets/clear.jpg" alt="Tannic Acid 60%" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-main">
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Tannic Acid 60% is a natural polyphenolic compound extracted from plant sources. 
                            This high-concentration tannin extract is widely used in various industrial 
                            applications including leather tanning, pharmaceuticals, and chemical processes. 
                            The 60% concentration ensures optimal performance in demanding applications.
                        </p>
                    </section>

                    <section className="product-section">
                        <h2>Key Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <h4>Appearance</h4>
                                <p>Light brown to tan powder</p>
                            </div>
                            <div className="spec-item">
                                <h4>Concentration</h4>
                                <p>60% (w/w)</p>
                            </div>
                            <div className="spec-item">
                                <h4>Solubility</h4>
                                <p>Soluble in water and alcohol</p>
                            </div>
                            <div className="spec-item">
                                <h4>pH Value</h4>
                                <p>3.0 - 4.0</p>
                            </div>
                            <div className="spec-item">
                                <h4>Moisture Content</h4>
                                <p>≤ 8%</p>
                            </div>
                            <div className="spec-item">
                                <h4>Particle Size</h4>
                                <p>80-200 mesh</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Technical Data</h2>
                        <div className="technical-data">
                            <div className="data-item">
                                <h4>Tannin Content</h4>
                                <p>≥ 60%</p>
                            </div>
                            <div className="data-item">
                                <h4>Ash Content</h4>
                                <p>≤ 2%</p>
                            </div>
                            <div className="data-item">
                                <h4>Water Solubility</h4>
                                <p>≥ 90%</p>
                            </div>
                            <div className="data-item">
                                <h4>Bulk Density</h4>
                                <p>0.4 - 0.6 g/cm³</p>
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
                                <FontAwesomeIcon icon={faIndustry} />
                                <h4>Leather Tanning</h4>
                                <p>Traditional vegetable tanning process for leather production</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faFlask} />
                                <h4>Pharmaceuticals</h4>
                                <p>Medicinal applications and drug formulations</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faBoxes} />
                                <h4>Food Industry</h4>
                                <p>Clarifying agent in wine and beverage production</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faRecycle} />
                                <h4>Chemical Industry</h4>
                                <p>Precursor for various chemical synthesis processes</p>
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
                                    <p>60% concentration provides maximum efficiency in applications</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Natural Source</h4>
                                    <p>Derived from natural plant sources for eco-friendly applications</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Excellent Solubility</h4>
                                    <p>Highly soluble in water and alcohol for easy application</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Versatile Applications</h4>
                                    <p>Suitable for various industrial and pharmaceutical processes</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Cost Effective</h4>
                                    <p>High concentration reduces transportation and storage costs</p>
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
                                <img src="/src/assets/clear.jpg" alt="Tannic Acid 60% View 1" />
                                <p>Tannic Acid 60% Powder</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Tannic Acid 60% View 2" />
                                <p>Leather Tanning Application</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Tannic Acid 60% View 3" />
                                <p>Pharmaceutical Use</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Tannic Acid 60% View 4" />
                                <p>Food Industry Application</p>
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

export default TannicAcid60; 