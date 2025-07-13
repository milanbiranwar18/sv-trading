import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faBoxes, faCheckCircle, faLeaf, faRecycle, faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const CobaltSulphate = () => {
    return (
        <div className="product-page">
            <div className="product-hero">
                <div className="product-hero-content">
                    <div className="product-hero-text">
                        <h1>Cobalt Sulphate</h1>
                        <p className="product-subtitle">
                            High-purity cobalt sulphate for industrial and agricultural applications
                        </p>
                        <div className="product-highlights">
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Industrial grade</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Micronutrient</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Catalyst applications</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-hero-image">
                        <img src="/src/assets/clear.jpg" alt="Cobalt Sulphate" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-section">
                    <h2>Product Overview</h2>
                    <p>
                        Cobalt Sulphate is an inorganic compound containing cobalt and sulphate ions, widely used 
                        in agriculture as a micronutrient, in industrial catalysis, and in various chemical 
                        manufacturing processes. It provides essential cobalt for plant growth and industrial applications.
                    </p>
                </div>

                <div className="product-section">
                    <h2>Technical Specifications</h2>
                    <div className="specs-grid">
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faFlask} />
                            <div>
                                <h4>Cobalt Content</h4>
                                <p>20-21%</p>
                            </div>
                        </div>
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faThermometerHalf} />
                            <div>
                                <h4>Solubility</h4>
                                <p>38.3 g/100ml water</p>
                            </div>
                        </div>
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faTint} />
                            <div>
                                <h4>Density</h4>
                                <p>3.71 g/cm³</p>
                            </div>
                        </div>
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faIndustry} />
                            <div>
                                <h4>Packaging</h4>
                                <p>25kg Bags, Drums</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Applications</h2>
                    <div className="applications-grid">
                        <div className="application-card">
                            <FontAwesomeIcon icon={faIndustry} />
                            <h4>Agriculture</h4>
                            <p>Micronutrient for crop nutrition and soil enrichment</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faFlask} />
                            <h4>Chemical Catalysis</h4>
                            <p>Catalyst in various chemical synthesis reactions</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faBoxes} />
                            <h4>Electroplating</h4>
                            <p>Cobalt source for electroplating applications</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faRecycle} />
                            <h4>Battery Manufacturing</h4>
                            <p>Component in lithium-ion battery production</p>
                        </div>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Benefits</h2>
                    <ul className="benefits-list">
                        <li>Essential micronutrient for plants</li>
                        <li>High purity for industrial use</li>
                        <li>Excellent solubility in water</li>
                        <li>Stable under normal conditions</li>
                        <li>Cost-effective cobalt source</li>
                        <li>Versatile applications</li>
                    </ul>
                </div>

                <div className="product-section">
                    <h2>Technical Properties</h2>
                    <div className="properties-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Molecular Formula</td>
                                    <td>CoSO₄·7H₂O</td>
                                </tr>
                                <tr>
                                    <td>Molecular Weight</td>
                                    <td>281.10 g/mol</td>
                                </tr>
                                <tr>
                                    <td>Appearance</td>
                                    <td>Pink to red crystalline powder</td>
                                </tr>
                                <tr>
                                    <td>pH (1% solution)</td>
                                    <td>4.0-6.0</td>
                                </tr>
                                <tr>
                                    <td>Bulk Density</td>
                                    <td>1.0-1.2 g/cm³</td>
                                </tr>
                                <tr>
                                    <td>Moisture Content</td>
                                    <td>≤ 0.5%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Safety Information</h2>
                    <div className="safety-info">
                        <div className="safety-item">
                            <h4>Handling</h4>
                            <p>Use in well-ventilated areas. Avoid inhalation of dust. Wear appropriate protective equipment.</p>
                        </div>
                        <div className="safety-item">
                            <h4>Storage</h4>
                            <p>Store in a cool, dry place in tightly closed containers. Protect from moisture.</p>
                        </div>
                        <div className="safety-item">
                            <h4>Transportation</h4>
                            <p>Classified as hazardous material. Follow all applicable transportation regulations.</p>
                        </div>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Quality Assurance</h2>
                    <p>
                        Our Cobalt Sulphate is manufactured under strict quality control measures to ensure 
                        consistent purity and performance. Each batch is tested for compliance with 
                        industry standards and our internal specifications.
                    </p>
                </div>
            </div>

            <div className="enquiry-section">
                <h2>Get a Quote</h2>
                <p>Contact us for pricing, technical specifications, and bulk orders</p>
                <div className="enquiry-buttons">
                    <a href="/contact" className="enquiry-btn primary">Contact Sales</a>
                    <a href="/contact" className="enquiry-btn secondary">Request Quote</a>
                </div>
            </div>
        </div>
    );
};

export default CobaltSulphate; 