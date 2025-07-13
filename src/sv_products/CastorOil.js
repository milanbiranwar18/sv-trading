import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faBoxes, faCheckCircle, faLeaf, faRecycle, faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const CastorOil = () => {
    return (
        <div className="product-page">
            <div className="product-hero">
                <div className="product-hero-content">
                    <div className="product-hero-text">
                        <h1>Castor Oil</h1>
                        <p className="product-subtitle">
                            High-quality castor oil for industrial, pharmaceutical, and cosmetic applications
                        </p>
                        <div className="product-highlights">
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Industrial grade</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Natural oil</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Versatile applications</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-hero-image">
                        <img src="/src/assets/clear.jpg" alt="Castor Oil" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-section">
                    <h2>Product Overview</h2>
                    <p>
                        Castor Oil is a natural vegetable oil extracted from the seeds of the castor plant. 
                        It is widely used in industrial applications, pharmaceuticals, cosmetics, and lubricants 
                        due to its unique chemical properties and high ricinoleic acid content.
                    </p>
                </div>

                <div className="product-section">
                    <h2>Technical Specifications</h2>
                    <div className="specs-grid">
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faFlask} />
                            <div>
                                <h4>Ricinoleic Acid</h4>
                                <p>85-92%</p>
                            </div>
                        </div>
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faThermometerHalf} />
                            <div>
                                <h4>Flash Point</h4>
                                <p>229°C</p>
                            </div>
                        </div>
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faTint} />
                            <div>
                                <h4>Density</h4>
                                <p>0.96 g/cm³</p>
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
                            <h4>Industrial Lubricants</h4>
                            <p>High-performance lubricant for machinery and equipment</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faFlask} />
                            <h4>Pharmaceuticals</h4>
                            <p>Laxative and excipient in drug formulations</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faBoxes} />
                            <h4>Cosmetics</h4>
                            <p>Emollient and moisturizer in beauty products</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faRecycle} />
                            <h4>Chemical Manufacturing</h4>
                            <p>Raw material for polyurethane and other chemicals</p>
                        </div>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Benefits</h2>
                    <ul className="benefits-list">
                        <li>High ricinoleic acid content</li>
                        <li>Excellent lubricating properties</li>
                        <li>Natural and biodegradable</li>
                        <li>Stable under normal conditions</li>
                        <li>Compatible with various formulations</li>
                        <li>Cost-effective industrial oil</li>
                    </ul>
                </div>

                <div className="product-section">
                    <h2>Technical Properties</h2>
                    <div className="properties-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Appearance</td>
                                    <td>Pale yellow to colorless liquid</td>
                                </tr>
                                <tr>
                                    <td>Viscosity</td>
                                    <td>650-680 cSt at 40°C</td>
                                </tr>
                                <tr>
                                    <td>Acid Value</td>
                                    <td>≤ 2.0 mg KOH/g</td>
                                </tr>
                                <tr>
                                    <td>Iodine Value</td>
                                    <td>82-90</td>
                                </tr>
                                <tr>
                                    <td>Saponification Value</td>
                                    <td>176-186 mg KOH/g</td>
                                </tr>
                                <tr>
                                    <td>Moisture Content</td>
                                    <td>≤ 0.1%</td>
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
                            <p>Classified as non-hazardous. Follow standard transportation regulations.</p>
                        </div>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Quality Assurance</h2>
                    <p>
                        Our Castor Oil is manufactured under strict quality control measures to ensure 
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

export default CastorOil; 