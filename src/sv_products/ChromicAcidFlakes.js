import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faIndustry, faFlask, faShieldAlt, faTint, faBoxes, faGem } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const ChromicAcidFlakes = () => {
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
                    <h1>Chromic Acid Flakes</h1>
                    <p className="product-subtitle">High-Purity Chromic Acid for Industrial Applications</p>
                    <div className="price-info">
                        <span className="price">₹ 300/Kg</span>
                        <span className="moq">Get Latest Price</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/assets/chemical_placeholder.jpg" alt="Chromic Acid Flakes" />
                </div>
            </div>

            {/* Product Details */}
            <div className="product-container">
                <div className="product-main">
                    {/* Product Overview */}
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Chromic Acid Flakes are high-purity chromium trioxide (CrO3) in flake form, 
                            widely used in electroplating, metal finishing, and various industrial applications. 
                            Our product conforms to international standards for the plating industry.
                        </p>
                        <div className="product-features">
                            <div className="feature">
                                <FontAwesomeIcon icon={faGem} />
                                <span>Electroplating</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faIndustry} />
                                <span>Technical Grade</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faFlask} />
                                <span>Flake Form</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faBoxes} />
                                <span>Bag Packaging</span>
                            </div>
                        </div>
                    </section>

                    {/* Technical Specifications */}
                    <section className="product-section">
                        <h2>Technical Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <span className="spec-label">Grade</span>
                                <span className="spec-value">Technical Grade</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Form</span>
                                <span className="spec-value">Flakes</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Usage/Application</span>
                                <span className="spec-value">Industrial</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Packaging Type</span>
                                <span className="spec-value">Bag</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Country of Origin</span>
                                <span className="spec-value">Made in India</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Chemical Formula</span>
                                <span className="spec-value">CrO3</span>
                            </div>
                        </div>
                    </section>

                    {/* Applications */}
                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-card">
                                <h3>Electroplating</h3>
                                <p>Primary use in chrome plating processes for decorative and functional coatings on metal surfaces.</p>
                            </div>
                            <div className="application-card">
                                <h3>Oxidizing Agents</h3>
                                <p>Used as a powerful oxidizing agent in various chemical reactions and synthesis processes.</p>
                            </div>
                            <div className="application-card">
                                <h3>Glass Coloring</h3>
                                <p>Applied in glass manufacturing for coloring and surface treatment applications.</p>
                            </div>
                            <div className="application-card">
                                <h3>Metal Finishing</h3>
                                <p>Used in passivation and surface treatment of metals for corrosion resistance.</p>
                            </div>
                        </div>
                    </section>

                    {/* Product Benefits */}
                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>High purity conforming to international plating standards</li>
                            <li>Consistent quality and performance</li>
                            <li>Excellent solubility in water</li>
                            <li>Reliable source from certified manufacturers</li>
                            <li>Wide range of industrial applications</li>
                            <li>Cost-effective solution for plating operations</li>
                            <li>Imported from various countries as per requirements</li>
                        </ul>
                    </section>

                    {/* Technical Properties */}
                    <section className="product-section">
                        <h2>Technical Properties</h2>
                        <div className="properties-grid">
                            <div className="property-item">
                                <h3>Appearance</h3>
                                <p>Dark red to brownish-red flakes</p>
                            </div>
                            <div className="property-item">
                                <h3>Solubility</h3>
                                <p>Highly soluble in water</p>
                            </div>
                            <div className="property-item">
                                <h3>Melting Point</h3>
                                <p>197°C (387°F)</p>
                            </div>
                            <div className="property-item">
                                <h3>Density</h3>
                                <p>2.7 g/cm³</p>
                            </div>
                            <div className="property-item">
                                <h3>Molecular Weight</h3>
                                <p>99.99 g/mol</p>
                            </div>
                            <div className="property-item">
                                <h3>CAS Number</h3>
                                <p>1333-82-0</p>
                            </div>
                        </div>
                    </section>

                    {/* Safety Information */}
                    <section className="product-section">
                        <h2>Safety Information</h2>
                        <div className="safety-info">
                            <div className="safety-item">
                                <h3>Handling</h3>
                                <p>Use appropriate PPE including acid-resistant gloves, goggles, and protective clothing. Avoid contact with skin, eyes, and clothing.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Storage</h3>
                                <p>Store in a cool, dry place in tightly closed containers. Keep away from reducing agents, organic materials, and incompatible substances.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Disposal</h3>
                                <p>Dispose of in accordance with local, state, and federal regulations. Do not release into environment.</p>
                            </div>
                        </div>
                    </section>

                    {/* Quality Assurance */}
                    <section className="product-section">
                        <h2>Quality Assurance</h2>
                        <p>
                            Our Chromic Acid Flakes are sourced from reputed manufacturers and conform to 
                            international standards for the plating industry. We ensure consistent quality 
                            and performance for all industrial applications.
                        </p>
                        <div className="quality-features">
                            <div className="quality-item">
                                <h4>International Standards</h4>
                                <p>Conforms to plating industry standards</p>
                            </div>
                            <div className="quality-item">
                                <h4>Quality Control</h4>
                                <p>Rigorous quality testing and verification</p>
                            </div>
                            <div className="quality-item">
                                <h4>Reliable Supply</h4>
                                <p>Consistent availability from multiple sources</p>
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
                            <span className="info-label">Packaging Details:</span>
                            <span className="info-value">SV Trading Company</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Availability:</span>
                            <span className="info-value">Imported as per requirement</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Quality:</span>
                            <span className="info-value">International Standards</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChromicAcidFlakes; 