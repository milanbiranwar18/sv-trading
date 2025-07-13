import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faBoxes, faCheckCircle, faLeaf, faRecycle, faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const CausticPotash = () => {
    return (
        <div className="product-page">
            <div className="product-hero">
                <div className="product-hero-content">
                    <div className="product-hero-text">
                        <h1>Caustic Potash (Potassium Hydroxide)</h1>
                        <p className="product-subtitle">
                            High-purity potassium hydroxide for industrial and chemical applications
                        </p>
                        <div className="product-highlights">
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Industrial grade</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Strong alkali</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Chemical synthesis</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-hero-image">
                        <img src="/src/assets/clear.jpg" alt="Caustic Potash" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-section">
                    <h2>Product Overview</h2>
                    <p>
                        Caustic Potash (Potassium Hydroxide) is a strong alkaline compound used in various 
                        industrial applications including soap making, chemical synthesis, and pH regulation. 
                        It is highly soluble in water and provides excellent alkalinity for industrial processes.
                    </p>
                </div>

                <div className="product-section">
                    <h2>Technical Specifications</h2>
                    <div className="specs-grid">
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faFlask} />
                            <div>
                                <h4>Purity</h4>
                                <p>≥ 90.0%</p>
                            </div>
                        </div>
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faThermometerHalf} />
                            <div>
                                <h4>Melting Point</h4>
                                <p>360°C</p>
                            </div>
                        </div>
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faTint} />
                            <div>
                                <h4>Density</h4>
                                <p>2.04 g/cm³</p>
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
                            <h4>Soap Manufacturing</h4>
                            <p>Saponification agent in soap and detergent production</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faFlask} />
                            <h4>Chemical Synthesis</h4>
                            <p>Base catalyst in organic synthesis reactions</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faBoxes} />
                            <h4>pH Regulation</h4>
                            <p>pH adjustment in water treatment and industrial processes</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faRecycle} />
                            <h4>Battery Manufacturing</h4>
                            <p>Electrolyte component in alkaline batteries</p>
                        </div>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Benefits</h2>
                    <ul className="benefits-list">
                        <li>High alkalinity for industrial processes</li>
                        <li>Excellent solubility in water</li>
                        <li>Strong base for chemical reactions</li>
                        <li>Cost-effective industrial chemical</li>
                        <li>Versatile applications</li>
                        <li>Consistent quality and performance</li>
                    </ul>
                </div>

                <div className="product-section">
                    <h2>Technical Properties</h2>
                    <div className="properties-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Molecular Formula</td>
                                    <td>KOH</td>
                                </tr>
                                <tr>
                                    <td>Molecular Weight</td>
                                    <td>56.11 g/mol</td>
                                </tr>
                                <tr>
                                    <td>Appearance</td>
                                    <td>White pellets or flakes</td>
                                </tr>
                                <tr>
                                    <td>pH (1% solution)</td>
                                    <td>13.0-14.0</td>
                                </tr>
                                <tr>
                                    <td>Bulk Density</td>
                                    <td>1.2-1.4 g/cm³</td>
                                </tr>
                                <tr>
                                    <td>Moisture Content</td>
                                    <td>≤ 2.0%</td>
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
                            <p>Store in a cool, dry place in tightly closed containers. Protect from moisture and air.</p>
                        </div>
                        <div className="safety-item">
                            <h4>Transportation</h4>
                            <p>Classified as corrosive solid. Follow all applicable transportation regulations.</p>
                        </div>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Quality Assurance</h2>
                    <p>
                        Our Caustic Potash is manufactured under strict quality control measures to ensure 
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

export default CausticPotash; 