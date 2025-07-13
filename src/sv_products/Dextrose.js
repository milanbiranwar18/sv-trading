import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faBoxes, faCheckCircle, faLeaf, faRecycle, faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const Dextrose = () => {
    return (
        <div className="product-page">
            <div className="product-hero">
                <div className="product-hero-content">
                    <div className="product-hero-text">
                        <h1>Dextrose (Glucose)</h1>
                        <p className="product-subtitle">
                            High-purity dextrose for food, pharmaceutical, and industrial applications
                        </p>
                        <div className="product-highlights">
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Food grade quality</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Natural sweetener</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Pharmaceutical grade</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-hero-image">
                        <img src="/src/assets/clear.jpg" alt="Dextrose" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-section">
                    <h2>Product Overview</h2>
                    <p>
                        Dextrose (Glucose) is a simple sugar and the most abundant monosaccharide, widely used 
                        in food processing, pharmaceutical formulations, and industrial applications. It serves as 
                        a natural sweetener, energy source, and fermentation substrate.
                    </p>
                </div>

                <div className="product-section">
                    <h2>Technical Specifications</h2>
                    <div className="specs-grid">
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faFlask} />
                            <div>
                                <h4>Purity</h4>
                                <p>≥ 99.5%</p>
                            </div>
                        </div>
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faThermometerHalf} />
                            <div>
                                <h4>Melting Point</h4>
                                <p>146°C</p>
                            </div>
                        </div>
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faTint} />
                            <div>
                                <h4>Solubility</h4>
                                <p>91 g/100ml water</p>
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
                            <h4>Food Processing</h4>
                            <p>Sweetener and energy source in food and beverage products</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faFlask} />
                            <h4>Pharmaceuticals</h4>
                            <p>Excipient and energy source in drug formulations</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faBoxes} />
                            <h4>Fermentation</h4>
                            <p>Substrate for alcohol and biofuel production</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faRecycle} />
                            <h4>Animal Feed</h4>
                            <p>Energy supplement for livestock and pets</p>
                        </div>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Benefits</h2>
                    <ul className="benefits-list">
                        <li>Natural and safe for food applications</li>
                        <li>High energy content</li>
                        <li>Excellent solubility in water</li>
                        <li>Stable under normal conditions</li>
                        <li>Compatible with various formulations</li>
                        <li>Cost-effective sweetener</li>
                    </ul>
                </div>

                <div className="product-section">
                    <h2>Technical Properties</h2>
                    <div className="properties-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Molecular Formula</td>
                                    <td>C₆H₁₂O₆</td>
                                </tr>
                                <tr>
                                    <td>Molecular Weight</td>
                                    <td>180.16 g/mol</td>
                                </tr>
                                <tr>
                                    <td>Appearance</td>
                                    <td>White crystalline powder</td>
                                </tr>
                                <tr>
                                    <td>Sweetness</td>
                                    <td>70-80% of sucrose</td>
                                </tr>
                                <tr>
                                    <td>Bulk Density</td>
                                    <td>0.8-1.2 g/cm³</td>
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
                            <p>Classified as non-hazardous. Follow standard transportation regulations.</p>
                        </div>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Quality Assurance</h2>
                    <p>
                        Our Dextrose is manufactured under strict quality control measures to ensure 
                        consistent purity and performance. Each batch is tested for compliance with food grade 
                        and pharmaceutical standards.
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

export default Dextrose; 