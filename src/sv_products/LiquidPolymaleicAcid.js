import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faFlask, faBoxes, faCheckCircle, faLeaf, faRecycle, faThermometerHalf, faTint } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const LiquidPolymaleicAcid = () => {
    return (
        <div className="product-page">
            <div className="product-hero">
                <div className="product-hero-content">
                    <div className="product-hero-text">
                        <h1>Liquid Polymaleic Acid</h1>
                        <p className="product-subtitle">
                            High-performance scale inhibitor and dispersant for water treatment applications
                        </p>
                        <div className="product-highlights">
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Scale inhibition</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Water treatment</span>
                            </div>
                            <div className="highlight-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>Dispersant properties</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-hero-image">
                        <img src="/src/assets/clear.jpg" alt="Liquid Polymaleic Acid" />
                    </div>
                </div>
            </div>

            <div className="product-content">
                <div className="product-section">
                    <h2>Product Overview</h2>
                    <p>
                        Liquid Polymaleic Acid is a high-performance scale inhibitor and dispersant used in 
                        water treatment systems. It effectively prevents scale formation and disperses suspended 
                        particles in cooling water, boiler water, and other industrial water systems.
                    </p>
                </div>

                <div className="product-section">
                    <h2>Technical Specifications</h2>
                    <div className="specs-grid">
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faFlask} />
                            <div>
                                <h4>Active Content</h4>
                                <p>50-60%</p>
                            </div>
                        </div>
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faThermometerHalf} />
                            <div>
                                <h4>pH Range</h4>
                                <p>1.5-3.0</p>
                            </div>
                        </div>
                        <div className="spec-item">
                            <FontAwesomeIcon icon={faTint} />
                            <div>
                                <h4>Density</h4>
                                <p>1.25-1.35 g/cm³</p>
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
                            <h4>Cooling Water Systems</h4>
                            <p>Scale inhibition and corrosion control in cooling towers</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faFlask} />
                            <h4>Boiler Water Treatment</h4>
                            <p>Scale prevention in boiler feed water systems</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faBoxes} />
                            <h4>Reverse Osmosis</h4>
                            <p>Antiscalant for RO membrane protection</p>
                        </div>
                        <div className="application-card">
                            <FontAwesomeIcon icon={faRecycle} />
                            <h4>Industrial Water</h4>
                            <p>Scale control in various industrial water systems</p>
                        </div>
                    </div>
                </div>

                <div className="product-section">
                    <h2>Benefits</h2>
                    <ul className="benefits-list">
                        <li>Excellent scale inhibition performance</li>
                        <li>Effective dispersion of suspended particles</li>
                        <li>Compatible with various water treatment chemicals</li>
                        <li>Stable under high temperature conditions</li>
                        <li>Cost-effective water treatment solution</li>
                        <li>Environmentally friendly formulation</li>
                    </ul>
                </div>

                <div className="product-section">
                    <h2>Technical Properties</h2>
                    <div className="properties-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Appearance</td>
                                    <td>Clear to pale yellow liquid</td>
                                </tr>
                                <tr>
                                    <td>Molecular Weight</td>
                                    <td>400-800 g/mol</td>
                                </tr>
                                <tr>
                                    <td>Viscosity</td>
                                    <td>50-200 cps at 25°C</td>
                                </tr>
                                <tr>
                                    <td>Solubility</td>
                                    <td>Fully soluble in water</td>
                                </tr>
                                <tr>
                                    <td>Stability</td>
                                    <td>Stable up to 200°C</td>
                                </tr>
                                <tr>
                                    <td>Freezing Point</td>
                                    <td>-5°C</td>
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
                            <p>Use appropriate protective equipment. Avoid contact with skin and eyes. Handle in well-ventilated areas.</p>
                        </div>
                        <div className="safety-item">
                            <h4>Storage</h4>
                            <p>Store in a cool, dry place. Keep container tightly closed. Protect from freezing.</p>
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
                        Our Liquid Polymaleic Acid is manufactured under strict quality control measures to ensure 
                        consistent performance and effectiveness. Each batch is tested for active content, pH, 
                        and performance characteristics.
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

export default LiquidPolymaleicAcid; 