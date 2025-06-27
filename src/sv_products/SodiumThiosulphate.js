import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faBoxes, faCheckCircle, faLeaf, faRecycle, faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const SodiumThiosulphate = () => {
    return (
        <div className="product-page">
            <div className="product-hero">
                <div className="product-hero-content">
                    <div className="product-hero-text">
                        <h1>Sodium Thiosulphate</h1>
                        <p className="product-subtitle">
                            High-quality reducing agent and dechlorination chemical for industrial applications
                        </p>
                        <div className="product-highlights">
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Reducing agent</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Dechlorination</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>High purity</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-hero-image">
                        <img src="/src/assets/clear.jpg" alt="Sodium Thiosulphate" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-main">
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Sodium Thiosulphate is a versatile industrial chemical used primarily as a 
                            reducing agent and dechlorination chemical. This high-purity compound is 
                            essential in water treatment, photography, and various industrial processes 
                            where chlorine removal or reduction is required.
                        </p>
                    </section>

                    <section className="product-section">
                        <h2>Key Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <h4>Chemical Formula</h4>
                                <p>Na2S2O3</p>
                            </div>
                            <div className="spec-item">
                                <h4>Appearance</h4>
                                <p>White crystalline powder</p>
                            </div>
                            <div className="spec-item">
                                <h4>Purity</h4>
                                <p>≥ 99%</p>
                            </div>
                            <div className="spec-item">
                                <h4>Molecular Weight</h4>
                                <p>158.11 g/mol</p>
                            </div>
                            <div className="spec-item">
                                <h4>Solubility</h4>
                                <p>Highly soluble in water</p>
                            </div>
                            <div className="spec-item">
                                <h4>pH Value</h4>
                                <p>6.5 - 8.0</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Technical Data</h2>
                        <div className="technical-data">
                            <div className="data-item">
                                <h4>Assay</h4>
                                <p>≥ 99.0%</p>
                            </div>
                            <div className="data-item">
                                <h4>Moisture Content</h4>
                                <p>≤ 0.1%</p>
                            </div>
                            <div className="data-item">
                                <h4>Iron Content</h4>
                                <p>≤ 0.001%</p>
                            </div>
                            <div className="data-item">
                                <h4>Chloride Content</h4>
                                <p>≤ 0.01%</p>
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
                                <h4>Water Treatment</h4>
                                <p>Dechlorination of water in treatment plants and swimming pools</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faFlask} />
                                <h4>Photography</h4>
                                <p>Fixer solution in photographic processing</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faBoxes} />
                                <h4>Chemical Industry</h4>
                                <p>Reducing agent in various chemical reactions</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faRecycle} />
                                <h4>Textile Industry</h4>
                                <p>Bleaching and dyeing processes</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Benefits</h2>
                        <div className="benefits-list">
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Effective Dechlorination</h4>
                                    <p>Rapidly removes chlorine from water systems</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>High Purity</h4>
                                    <p>99% purity ensures consistent performance</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Excellent Solubility</h4>
                                    <p>Highly soluble in water for easy application</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Versatile Applications</h4>
                                    <p>Suitable for various industrial processes</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Cost Effective</h4>
                                    <p>Efficient performance provides economic benefits</p>
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
                                <img src="/src/assets/clear.jpg" alt="Sodium Thiosulphate View 1" />
                                <p>Sodium Thiosulphate Powder</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Sodium Thiosulphate View 2" />
                                <p>Water Treatment Application</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Sodium Thiosulphate View 3" />
                                <p>Industrial Process</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Sodium Thiosulphate View 4" />
                                <p>Photographic Processing</p>
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

export default SodiumThiosulphate; 