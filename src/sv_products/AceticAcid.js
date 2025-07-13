import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faBoxes, faCheckCircle, faLeaf, faRecycle, faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const AceticAcid = () => {
    return (
        <div className="product-page">
            <div className="product-hero">
                <div className="product-hero-content">
                    <div className="product-hero-text">
                        <h1>Acetic Acid</h1>
                        <p className="product-subtitle">
                            High-purity acetic acid for industrial, food, and pharmaceutical applications
                        </p>
                        <div className="product-highlights">
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Industrial grade</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Chemical synthesis</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Food processing</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-hero-image">
                        <img src="/src/assets/clear.jpg" alt="Acetic Acid" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-section">
                    <h2>Product Overview</h2>
                    <p>
                        Acetic Acid is a clear, colorless liquid with a pungent odor, widely used in chemical 
                        synthesis, food processing, and industrial applications. It serves as a key intermediate 
                        in the production of various chemicals and is essential in many manufacturing processes.
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
                                <h4>Boiling Point</h4>
                                <p>118°C</p>
                            </div>
                        </div>
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faTint} />
                            <div>
                                <h4>Density</h4>
                                <p>1.05 g/cm³</p>
                            </div>
                        </div>
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faIndustry} />
                            <div>
                                <h4>Packaging</h4>
                                <p>200L Drums, IBCs</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Applications</h2>
                    <div className="applications-grid">
                        <div className="application-card">
                            <FontAwesomeIcon icon={faIndustry} />
                            <h4>Chemical Synthesis</h4>
                            <p>Intermediate in production of vinyl acetate, acetic anhydride</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faFlask} />
                            <h4>Food Processing</h4>
                            <p>Vinegar production and food preservative applications</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faBoxes} />
                            <h4>Textile Industry</h4>
                            <p>Dyeing and finishing processes in textile manufacturing</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faRecycle} />
                            <h4>Pharmaceuticals</h4>
                            <p>Excipient and intermediate in drug manufacturing</p>
                        </div>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Benefits</h2>
                    <ul className="benefits-list">
                        <li>High purity for critical applications</li>
                        <li>Versatile chemical intermediate</li>
                        <li>Excellent solvency properties</li>
                        <li>Stable under normal conditions</li>
                        <li>Cost-effective industrial chemical</li>
                        <li>Wide range of applications</li>
                    </ul>
                </div>

                <div className="product-section">
                    <h2>Technical Properties</h2>
                    <div className="properties-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Molecular Formula</td>
                                    <td>CH₃COOH</td>
                                </tr>
                                <tr>
                                    <td>Molecular Weight</td>
                                    <td>60.05 g/mol</td>
                                </tr>
                                <tr>
                                    <td>Flash Point</td>
                                    <td>39°C</td>
                                </tr>
                                <tr>
                                    <td>Autoignition Temperature</td>
                                    <td>427°C</td>
                                </tr>
                                <tr>
                                    <td>Vapor Pressure</td>
                                    <td>15.7 mmHg at 25°C</td>
                                </tr>
                                <tr>
                                    <td>Solubility</td>
                                    <td>Miscible with water and organic solvents</td>
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
                            <p>Use in well-ventilated areas. Avoid contact with skin and eyes. Wear appropriate protective equipment.</p>
                        </div>
                        <div className="safety-item">
                            <h4>Storage</h4>
                            <p>Store in a cool, dry place away from heat sources. Keep container tightly closed.</p>
                        </div>
                        <div className="safety-item">
                            <h4>Transportation</h4>
                            <p>Classified as corrosive liquid. Follow all applicable transportation regulations.</p>
                        </div>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Quality Assurance</h2>
                    <p>
                        Our Acetic Acid is manufactured under strict quality control measures to ensure 
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

export default AceticAcid; 