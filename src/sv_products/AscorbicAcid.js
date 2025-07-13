import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faBoxes, faCheckCircle, faLeaf, faRecycle, faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const AscorbicAcid = () => {
    return (
        <div className="product-page">
            <div className="product-hero">
                <div className="product-hero-content">
                    <div className="product-hero-text">
                        <h1>Ascorbic Acid (Vitamin C)</h1>
                        <p className="product-subtitle">
                            High-purity ascorbic acid for food, pharmaceutical, and cosmetic applications
                        </p>
                        <div className="product-highlights">
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Food grade quality</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Antioxidant properties</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Pharmaceutical grade</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-hero-image">
                        <img src="/src/assets/clear.jpg" alt="Ascorbic Acid" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-section">
                    <h2>Product Overview</h2>
                    <p>
                        Ascorbic Acid, also known as Vitamin C, is a white crystalline compound with strong 
                        antioxidant properties. It is widely used in food preservation, pharmaceutical formulations, 
                        and cosmetic products for its nutritional and preservative benefits.
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
                                <h4>Melting Point</h4>
                                <p>190-192°C</p>
                            </div>
                        </div>
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faTint} />
                            <div>
                                <h4>Solubility</h4>
                                <p>33 g/100ml water</p>
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
                            <p>Antioxidant and preservative in food and beverage products</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faFlask} />
                            <h4>Pharmaceuticals</h4>
                            <p>Vitamin C supplements and drug formulations</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faBoxes} />
                            <h4>Cosmetics</h4>
                            <p>Antioxidant in skincare and beauty products</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faRecycle} />
                            <h4>Animal Feed</h4>
                            <p>Nutritional supplement for livestock and pets</p>
                        </div>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Benefits</h2>
                    <ul className="benefits-list">
                        <li>Strong antioxidant properties</li>
                        <li>Essential vitamin for human health</li>
                        <li>Natural food preservative</li>
                        <li>Stable under normal conditions</li>
                        <li>Compatible with various formulations</li>
                        <li>Cost-effective nutritional supplement</li>
                    </ul>
                </div>

                <div className="product-section">
                    <h2>Technical Properties</h2>
                    <div className="properties-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Molecular Formula</td>
                                    <td>C₆H₈O₆</td>
                                </tr>
                                <tr>
                                    <td>Molecular Weight</td>
                                    <td>176.12 g/mol</td>
                                </tr>
                                <tr>
                                    <td>Appearance</td>
                                    <td>White crystalline powder</td>
                                </tr>
                                <tr>
                                    <td>pH (1% solution)</td>
                                    <td>2.4-2.8</td>
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
                            <p>Store in a cool, dry place in tightly closed containers. Protect from light and moisture.</p>
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
                        Our Ascorbic Acid is manufactured under strict quality control measures to ensure 
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

export default AscorbicAcid; 