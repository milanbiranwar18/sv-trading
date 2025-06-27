import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faBoxes, faCheckCircle, faLeaf, faRecycle, faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const PotassiumTetraborate = () => {
    return (
        <div className="product-page">
            <div className="product-hero">
                <div className="product-hero-content">
                    <div className="product-hero-text">
                        <h1>Potassium Tetraborate</h1>
                        <p className="product-subtitle">
                            High-quality industrial grade potassium tetraborate for various applications
                        </p>
                        <div className="product-highlights">
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Industrial grade</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>High purity</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Versatile applications</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-hero-image">
                        <img src="/src/assets/clear.jpg" alt="Potassium Tetraborate" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-main">
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Potassium Tetraborate is a high-quality industrial chemical used in various 
                            manufacturing processes. This compound offers excellent performance in 
                            applications requiring boron content and is manufactured under strict quality 
                            control standards to ensure consistent results.
                        </p>
                    </section>

                    <section className="product-section">
                        <h2>Key Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <h4>Chemical Formula</h4>
                                <p>K2B4O7</p>
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
                                <p>233.43 g/mol</p>
                            </div>
                            <div className="spec-item">
                                <h4>Solubility</h4>
                                <p>Soluble in water</p>
                            </div>
                            <div className="spec-item">
                                <h4>pH Value</h4>
                                <p>9.0 - 10.0</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Technical Data</h2>
                        <div className="technical-data">
                            <div className="data-item">
                                <h4>Boron Content</h4>
                                <p>≥ 20%</p>
                            </div>
                            <div className="data-item">
                                <h4>Moisture Content</h4>
                                <p>≤ 0.5%</p>
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
                                <h4>Glass Manufacturing</h4>
                                <p>Used in glass production for improved properties</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faFlask} />
                                <h4>Chemical Synthesis</h4>
                                <p>Boron source in various chemical reactions</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faBoxes} />
                                <h4>Detergent Industry</h4>
                                <p>Additive in cleaning and detergent formulations</p>
                            </div>
                            <div className="application-item">
                                <FontAwesomeIcon icon={faRecycle} />
                                <h4>Agricultural Use</h4>
                                <p>Boron supplement for plant nutrition</p>
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
                                    <p>99% purity ensures consistent performance in applications</p>
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
                                    <h4>Excellent Solubility</h4>
                                    <p>Highly soluble in water for easy application</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <div>
                                    <h4>Stable Performance</h4>
                                    <p>Consistent quality and reliable results</p>
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
                                <img src="/src/assets/clear.jpg" alt="Potassium Tetraborate View 1" />
                                <p>Potassium Tetraborate Powder</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Potassium Tetraborate View 2" />
                                <p>Industrial Application</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Potassium Tetraborate View 3" />
                                <p>Chemical Manufacturing</p>
                            </div>
                            <div className="gallery-item">
                                <img src="/src/assets/clear.jpg" alt="Potassium Tetraborate View 4" />
                                <p>Glass Production</p>
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

export default PotassiumTetraborate; 