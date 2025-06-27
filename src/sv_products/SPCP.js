import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faBoxes, faCheckCircle, faRecycle } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const SPCP = () => {
    return (
        <div className="product-page">
            <div className="product-hero">
                <div className="product-hero-content">
                    <div className="product-hero-text">
                        <h1>SPCP Sodium Penta Chlorophenate</h1>
                        <p className="product-subtitle">
                            High-quality industrial biocide for wood preservation and water treatment applications
                        </p>
                        <div className="product-highlights">
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>99% purity</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Wood preservation</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Water treatment</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-hero-image">
                        <img src="/src/sv_assets/SPCP.jpg" alt="SPCP Sodium Penta Chlorophenate" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-main">
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            SPCP (Sodium Penta Chlorophenate) is a high-quality industrial biocide used 
                            primarily for wood preservation and water treatment applications. This 99% pure 
                            compound offers excellent performance as a fungicide, bactericide, and herbicide, 
                            making it ideal for various industrial and agricultural applications.
                        </p>
                    </section>

                    <section className="product-section">
                        <h2>Key Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <h4>Chemical Formula</h4>
                                <p>C6Cl5ONa</p>
                            </div>
                            <div className="spec-item">
                                <h4>Purity</h4>
                                <p>≥ 99%</p>
                            </div>
                            <div className="spec-item">
                                <h4>Appearance</h4>
                                <p>White to light brown powder</p>
                            </div>
                            <div className="spec-item">
                                <h4>Physical Form</h4>
                                <p>Powder</p>
                            </div>
                            <div className="spec-item">
                                <h4>Packaging Size</h4>
                                <p>25 kg</p>
                            </div>
                            <div className="spec-item">
                                <h4>Packaging Type</h4>
                                <p>Drum</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Technical Data</h2>
                        <div className="technical-data">
                            <div className="data-item">
                                <h4>Molecular Weight</h4>
                                <p>288.32 g/mol</p>
                            </div>
                            <div className="data-item">
                                <h4>Solubility</h4>
                                <p>Soluble in water</p>
                            </div>
                            <div className="data-item">
                                <h4>pH Value</h4>
                                <p>8.0 - 10.0</p>
                            </div>
                            <div className="data-item">
                                <h4>Moisture Content</h4>
                                <p>≤ 2%</p>
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
                                <h4>Wood Preservation</h4>
                                <p>Protection of wood against fungal and bacterial decay</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faFlask} />
                                <h4>Agricultural Herbicides</h4>
                                <p>Weed control in agricultural applications</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faBoxes} />
                                <h4>Water Treatment</h4>
                                <p>Biocide for industrial water treatment systems</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faRecycle} />
                                <h4>Industrial Biocide</h4>
                                <p>Fungicide, bactericide, and insecticide applications</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Benefits</h2>
                        <div className="benefits-list">
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>High Purity</h4>
                                    <p>99% purity ensures consistent and effective performance</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Multi-Purpose Biocide</h4>
                                    <p>Effective as fungicide, bactericide, and herbicide</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Wood Protection</h4>
                                    <p>Excellent wood preservation properties</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Water Soluble</h4>
                                    <p>Easy to apply and handle in various applications</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Cost Effective</h4>
                                    <p>High concentration provides economic benefits</p>
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
                                <img src="/src/sv_assets/SPCP.jpg" alt="SPCP Sodium Penta Chlorophenate View 1" />
                                <p>SPCP Sodium Penta Chlorophenate</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="SPCP Sodium Penta Chlorophenate View 2" />
                                <p>Wood Preservation Application</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="SPCP Sodium Penta Chlorophenate View 3" />
                                <p>Water Treatment System</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="SPCP Sodium Penta Chlorophenate View 4" />
                                <p>Agricultural Application</p>
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

export default SPCP; 