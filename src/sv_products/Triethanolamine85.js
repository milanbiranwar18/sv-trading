import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faBoxes, faCheckCircle, faLeaf, faRecycle, faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const Triethanolamine85 = () => {
    return (
        <div className="product-page">
            <div className="product-hero">
                <div className="product-hero-content">
                    <div className="product-hero-text">
                        <h1>Triethanolamine 85%</h1>
                        <p className="product-subtitle">
                            High-quality amine compound for industrial and chemical applications
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
                        <img src="/src/assets/clear.jpg" alt="Triethanolamine 85%" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-main">
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Triethanolamine 85% is a high-quality amine compound widely used in various 
                            industrial applications. This technical grade product offers excellent 
                            performance as an emulsifier, pH adjuster, and chemical intermediate. 
                            The 85% concentration ensures consistent results in demanding applications.
                        </p>
                    </section>

                    <section className="product-section">
                        <h2>Key Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <h4>Chemical Formula</h4>
                                <p>N(CH2CH2OH)3</p>
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
                                <p>149.19 g/mol</p>
                            </div>
                            <div className="spec-item">
                                <h4>Density</h4>
                                <p>1.12 g/cm³</p>
                            </div>
                            <div className="spec-item">
                                <h4>Boiling Point</h4>
                                <p>335°C</p>
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
                                <h4>Water Content</h4>
                                <p>≤ 15%</p>
                            </div>
                            <div className="data-item">
                                <h4>Iron Content</h4>
                                <p>≤ 0.0001%</p>
                            </div>
                            <div className="data-item">
                                <h4>Chloride Content</h4>
                                <p>≤ 0.001%</p>
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
                                <h4>Cosmetics Industry</h4>
                                <p>pH adjuster and emulsifier in personal care products</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faFlask} />
                                <h4>Chemical Manufacturing</h4>
                                <p>Intermediate in various chemical synthesis processes</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faBoxes} />
                                <h4>Textile Industry</h4>
                                <p>Dyeing and finishing applications</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faRecycle} />
                                <h4>Water Treatment</h4>
                                <p>pH adjustment and corrosion inhibition</p>
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
                                    <h4>Excellent Emulsifying</h4>
                                    <p>Superior emulsifying properties for various formulations</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>pH Adjustment</h4>
                                    <p>Effective pH adjuster for acidic formulations</p>
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
                                <img src="/src/assets/clear.jpg" alt="Triethanolamine 85% View 1" />
                                <p>Triethanolamine 85% Solution</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Triethanolamine 85% View 2" />
                                <p>Cosmetics Application</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Triethanolamine 85% View 3" />
                                <p>Chemical Manufacturing</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Triethanolamine 85% View 4" />
                                <p>Textile Industry Use</p>
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

export default Triethanolamine85; 