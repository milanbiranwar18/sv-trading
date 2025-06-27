import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faIndustry, faFlask, faShieldAlt, faTint, faBoxes, faWater } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const FerricChloridePowder = () => {
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
                    <h1>Ferric Chloride Powder</h1>
                    <p className="product-subtitle">High-Purity Iron(III) Chloride for Water Treatment</p>
                    <div className="price-info">
                        <span className="price">₹ 36/Kg</span>
                        <span className="moq">Get Latest Price</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/assets/chemical_placeholder.jpg" alt="Ferric Chloride Powder" />
                </div>
            </div>

            {/* Product Details */}
            <div className="product-container">
                <div className="product-main">
                    {/* Product Overview */}
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Ferric Chloride Powder is a high-purity iron(III) chloride compound used primarily 
                            for water treatment and wastewater purification. It is one of the most effective 
                            water treatment chemicals that can sequester odors and remove impurities.
                        </p>
                        <div className="product-features">
                            <div className="feature">
                                <FontAwesomeIcon icon={faWater} />
                                <span>Water Treatment</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faIndustry} />
                                <span>Industrial Grade</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faFlask} />
                                <span>99% Purity</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faBoxes} />
                                <span>25kg Bags</span>
                            </div>
                        </div>
                    </section>

                    {/* Technical Specifications */}
                    <section className="product-section">
                        <h2>Technical Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <span className="spec-label">Physical State</span>
                                <span className="spec-value">Granules</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Usage/Application</span>
                                <span className="spec-value">Industrial</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Purity</span>
                                <span className="spec-value">99%</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Grade Standard</span>
                                <span className="spec-value">Industrial Grade</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Packaging Size</span>
                                <span className="spec-value">25 Kg</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Packaging Type</span>
                                <span className="spec-value">Bag</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Chemical Formula</span>
                                <span className="spec-value">FeCl3</span>
                            </div>
                        </div>
                    </section>

                    {/* Applications */}
                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-card">
                                <h3>Water Treatment</h3>
                                <p>Primary use in municipal and industrial water treatment plants for impurity removal and clarification.</p>
                            </div>
                            <div className="application-card">
                                <h3>Wastewater Treatment</h3>
                                <p>Essential component in wastewater treatment processes for solids removal and odor control.</p>
                            </div>
                            <div className="application-card">
                                <h3>Odor Sequestration</h3>
                                <p>One of the few water treatment chemicals that can effectively sequester and control odors.</p>
                            </div>
                            <div className="application-card">
                                <h3>Industrial Processes</h3>
                                <p>Used in various industrial applications where iron-based coagulation is required.</p>
                            </div>
                        </div>
                    </section>

                    {/* Product Benefits */}
                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>Highly effective coagulant for water treatment</li>
                            <li>Excellent odor sequestration properties</li>
                            <li>High purity 99% grade</li>
                            <li>Cost-effective water treatment solution</li>
                            <li>Wide range of industrial applications</li>
                            <li>Stable granular form for easy handling</li>
                            <li>Proven performance in wastewater treatment</li>
                        </ul>
                    </section>

                    {/* Technical Properties */}
                    <section className="product-section">
                        <h2>Technical Properties</h2>
                        <div className="properties-grid">
                            <div className="property-item">
                                <h3>Appearance</h3>
                                <p>Yellow to brownish granules</p>
                            </div>
                            <div className="property-item">
                                <h3>Solubility</h3>
                                <p>Highly soluble in water</p>
                            </div>
                            <div className="property-item">
                                <h3>Molecular Weight</h3>
                                <p>162.2 g/mol</p>
                            </div>
                            <div className="property-item">
                                <h3>Melting Point</h3>
                                <p>306°C (583°F)</p>
                            </div>
                            <div className="property-item">
                                <h3>Density</h3>
                                <p>2.90 g/cm³</p>
                            </div>
                            <div className="property-item">
                                <h3>CAS Number</h3>
                                <p>7705-08-0</p>
                            </div>
                        </div>
                    </section>

                    {/* Safety Information */}
                    <section className="product-section">
                        <h2>Safety Information</h2>
                        <div className="safety-info">
                            <div className="safety-item">
                                <h3>Handling</h3>
                                <p>Use appropriate PPE including acid-resistant gloves, goggles, and protective clothing. Avoid contact with skin and eyes.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Storage</h3>
                                <p>Store in a cool, dry place in tightly closed containers. Keep away from moisture and incompatible materials.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Disposal</h3>
                                <p>Dispose of in accordance with local environmental regulations. Do not release into environment.</p>
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
                            <span className="info-label">Delivery Time:</span>
                            <span className="info-value">5 days</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Packaging Details:</span>
                            <span className="info-value">S. V. Trading company, Pune</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FerricChloridePowder; 