import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faBoxes, faCheckCircle, faLeaf, faRecycle, faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const DimethylEthanolamineDMEA = () => {
    return (
        <div className="product-page">
            <div className="product-hero">
                <div className="product-hero-content">
                    <div className="product-hero-text">
                        <h1>Dimethyl Ethanolamine (DMEA)</h1>
                        <p className="product-subtitle">
                            High-purity tertiary amine for catalyst and surfactant applications
                        </p>
                        <div className="product-highlights">
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>High purity grade</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Catalyst applications</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Surfactant production</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-hero-image">
                        <img src="/src/assets/clear.jpg" alt="Dimethyl Ethanolamine DMEA" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-section">
                    <h2>Product Overview</h2>
                    <p>
                        Dimethyl Ethanolamine (DMEA) is a tertiary amine compound used as a catalyst in 
                        polyurethane foam production and as an intermediate in surfactant manufacturing. 
                        It offers excellent reactivity and is widely used in industrial applications.
                    </p>
                </div>

                <div className="product-section">
                    <h2>Technical Specifications</h2>
                    <div className="specs-grid">
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faFlask} />
                            <div>
                                <h4>Purity</h4>
                                <p>≥ 99.0%</p>
                            </div>
                        </div>
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faThermometerHalf} />
                            <div>
                                <h4>Boiling Point</h4>
                                <p>134°C</p>
                            </div>
                        </div>
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faTint} />
                            <div>
                                <h4>Density</h4>
                                <p>0.89 g/cm³</p>
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
                            <h4>Polyurethane Foam</h4>
                            <p>Catalyst for flexible and rigid foam production</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faFlask} />
                            <h4>Surfactant Production</h4>
                            <p>Intermediate in cationic surfactant manufacturing</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faBoxes} />
                            <h4>Coating Catalysts</h4>
                            <p>Catalyst for polyurethane coatings and adhesives</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faRecycle} />
                            <h4>Chemical Synthesis</h4>
                            <p>Intermediate in pharmaceutical and chemical manufacturing</p>
                        </div>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Benefits</h2>
                    <ul className="benefits-list">
                        <li>High catalytic activity for polyurethane reactions</li>
                        <li>Excellent compatibility with polyol systems</li>
                        <li>Consistent quality and performance</li>
                        <li>Low volatility for better handling</li>
                        <li>Cost-effective catalyst solution</li>
                        <li>Wide range of industrial applications</li>
                    </ul>
                </div>

                <div className="product-section">
                    <h2>Technical Properties</h2>
                    <div className="properties-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Molecular Formula</td>
                                    <td>C₄H₁₁NO</td>
                                </tr>
                                <tr>
                                    <td>Molecular Weight</td>
                                    <td>89.14 g/mol</td>
                                </tr>
                                <tr>
                                    <td>Flash Point</td>
                                    <td>35°C</td>
                                </tr>
                                <tr>
                                    <td>Autoignition Temperature</td>
                                    <td>295°C</td>
                                </tr>
                                <tr>
                                    <td>Vapor Pressure</td>
                                    <td>8.5 mmHg at 25°C</td>
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
                            <p>Classified as flammable liquid. Follow all applicable transportation regulations.</p>
                        </div>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Quality Assurance</h2>
                    <p>
                        Our Dimethyl Ethanolamine is manufactured under strict quality control measures to ensure 
                        consistent purity and catalytic performance. Each batch is tested for compliance with 
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

export default DimethylEthanolamineDMEA; 