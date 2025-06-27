import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faIndustry, faFlask, faShieldAlt, faTint, faBoxes, faAtom } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const Tween2080 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        quantity: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your enquiry! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            quantity: '',
            message: ''
        });
    };

    return (
        <div className="product-page">
            {/* Hero Section */}
            <div className="product-hero">
                <div className="hero-content">
                    <h1>Tween 20/80</h1>
                    <p className="product-subtitle">Non-Ionic Surfactant and Emulsifier</p>
                    <div className="price-info">
                        <span className="price">₹ 170/Kg</span>
                        <span className="moq">Minimum Order Quantity: 25 Kg</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/assets/chemical_placeholder.jpg" alt="Tween 20/80" />
                </div>
            </div>

            {/* Product Details */}
            <div className="product-container">
                <div className="product-main">
                    {/* Product Overview */}
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Tween 20/80 is a non-ionic surfactant and emulsifier, which is a condensate of 
                            sorbitol fatty acid ester. It is widely used for dispersing hydrophobic particles 
                            in aqueous solutions and as a non-ionic detergent for selective protein extraction.
                        </p>
                        <div className="product-features">
                            <div className="feature">
                                <FontAwesomeIcon icon={faAtom} />
                                <span>Surfactant</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faIndustry} />
                                <span>Industrial Grade</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faTint} />
                                <span>Liquid Form</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faBoxes} />
                                <span>25kg Drums</span>
                            </div>
                        </div>
                    </section>

                    {/* Technical Specifications */}
                    <section className="product-section">
                        <h2>Technical Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <span className="spec-label">Packaging Size</span>
                                <span className="spec-value">25 kg</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Packaging Type</span>
                                <span className="spec-value">MS Drum</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Brand</span>
                                <span className="spec-value">S.V. Trading company</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Molar Mass</span>
                                <span className="spec-value">1228 g/mol</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Country of Origin</span>
                                <span className="spec-value">Made in India</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Chemical Type</span>
                                <span className="spec-value">Non-ionic Surfactant</span>
                            </div>
                        </div>
                    </section>

                    {/* Applications */}
                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-card">
                                <h3>Particle Dispersion</h3>
                                <p>Used as a surfactant for dispersing hydrophobic particles in aqueous solutions effectively.</p>
                            </div>
                            <div className="application-card">
                                <h3>Protein Extraction</h3>
                                <p>Non-ionic detergent for selective protein extraction and isolation of nuclei from mammalian cells.</p>
                            </div>
                            <div className="application-card">
                                <h3>Emulsification</h3>
                                <p>Excellent emulsifier for creating stable emulsions in various industrial processes.</p>
                            </div>
                            <div className="application-card">
                                <h3>Laboratory Applications</h3>
                                <p>Widely used in research laboratories for cell culture and biochemical applications.</p>
                            </div>
                        </div>
                    </section>

                    {/* Product Benefits */}
                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>Excellent emulsifying properties</li>
                            <li>Non-ionic nature ensures compatibility</li>
                            <li>Effective particle dispersion</li>
                            <li>Mild surfactant action</li>
                            <li>Stable in aqueous solutions</li>
                            <li>Wide range of applications</li>
                            <li>High-quality industrial grade</li>
                        </ul>
                    </section>

                    {/* Technical Properties */}
                    <section className="product-section">
                        <h2>Technical Properties</h2>
                        <div className="properties-grid">
                            <div className="property-item">
                                <h3>Chemical Structure</h3>
                                <p>Sorbitol fatty acid ester condensate</p>
                            </div>
                            <div className="property-item">
                                <h3>Physical State</h3>
                                <p>Liquid</p>
                            </div>
                            <div className="property-item">
                                <h3>Solubility</h3>
                                <p>Soluble in water and organic solvents</p>
                            </div>
                            <div className="property-item">
                                <h3>HLB Value</h3>
                                <p>Varies based on specific Tween type</p>
                            </div>
                        </div>
                    </section>

                    {/* Safety Information */}
                    <section className="product-section">
                        <h2>Safety Information</h2>
                        <div className="safety-info">
                            <div className="safety-item">
                                <h3>Handling</h3>
                                <p>Use appropriate PPE including gloves and goggles. Avoid contact with eyes and skin.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Storage</h3>
                                <p>Store in a cool, dry place in tightly closed containers. Keep away from heat and open flames.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Disposal</h3>
                                <p>Dispose of in accordance with local environmental regulations.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="product-sidebar">
                    {/* Quick Enquiry Form */}
                    <div className="enquiry-form">
                        <h3>Get Best Quote</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name *"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address *"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number *"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company Name"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="quantity"
                                    placeholder="Required Quantity"
                                    value={formData.quantity}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Additional Requirements"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn">
                                Send Enquiry
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>+91 9890911136</span>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faWhatsapp} />
                            <span>+91 9890911136</span>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>svtrading36@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span>Handewadi, Pune, Maharashtra</span>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faClock} />
                            <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="additional-info">
                        <h3>Additional Information</h3>
                        <div className="info-item">
                            <span className="info-label">Production Capacity:</span>
                            <span className="info-value">10,000 kg</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Delivery Time:</span>
                            <span className="info-value">5 days</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Packaging Details:</span>
                            <span className="info-value">S.V. Trading company, Handewadi, Pune</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tween2080; 