import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faIndustry, faFlask, faShieldAlt, faTint, faBoxes, faPumpSoap } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const StearicAcidPowder = () => {
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
                    <h1>Stearic Acid Powder</h1>
                    <p className="product-subtitle">Long Chain Fatty Acid for Industrial Applications</p>
                    <div className="price-info">
                        <span className="price">₹ 115/Kg</span>
                        <span className="moq">Minimum Order Quantity: 100 Kg</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/assets/chemical_placeholder.jpg" alt="Stearic Acid Powder" />
                </div>
            </div>

            {/* Product Details */}
            <div className="product-container">
                <div className="product-main">
                    {/* Product Overview */}
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Stearic Acid Powder is a long chain fatty acid with a waxy appearance, widely used 
                            in cosmetics, lubricants, and various industrial applications. It is a saturated 
                            fatty acid that provides excellent lubricating and emulsifying properties.
                        </p>
                        <div className="product-features">
                            <div className="feature">
                                <FontAwesomeIcon icon={faPumpSoap} />
                                <span>Cosmetics</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faIndustry} />
                                <span>Industrial Grade</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faFlask} />
                                <span>98% Purity</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faBoxes} />
                                <span>50kg Bags</span>
                            </div>
                        </div>
                    </section>

                    {/* Technical Specifications */}
                    <section className="product-section">
                        <h2>Technical Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <span className="spec-label">Packaging Details</span>
                                <span className="spec-value">50 Kg Bag</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Packaging Size</span>
                                <span className="spec-value">25 Kg</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Usage/Application</span>
                                <span className="spec-value">Industrial</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Grade Standard</span>
                                <span className="spec-value">Industrial Grade</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Purity %</span>
                                <span className="spec-value">98%</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Physical State</span>
                                <span className="spec-value">Powder</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Chemical Formula</span>
                                <span className="spec-value">C18H36O2</span>
                            </div>
                        </div>
                    </section>

                    {/* Applications */}
                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-card">
                                <h3>Cosmetics</h3>
                                <p>Used in personal care products, soaps, creams, and lotions for its emollient and thickening properties.</p>
                            </div>
                            <div className="application-card">
                                <h3>Lubricants</h3>
                                <p>Applied in industrial lubricants and greases for its excellent lubricating properties.</p>
                            </div>
                            <div className="application-card">
                                <h3>Food Industry</h3>
                                <p>Used as a food additive and release agent in food processing and packaging.</p>
                            </div>
                            <div className="application-card">
                                <h3>Pharmaceuticals</h3>
                                <p>Used in pharmaceutical formulations as a tablet lubricant and excipient.</p>
                            </div>
                        </div>
                    </section>

                    {/* Product Benefits */}
                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>Long chain fatty acid with excellent properties</li>
                            <li>Yellow waxy appearance</li>
                            <li>High purity 98% grade</li>
                            <li>Excellent lubricating properties</li>
                            <li>Wide range of industrial applications</li>
                            <li>Cost-effective solution</li>
                            <li>Stable under normal conditions</li>
                        </ul>
                    </section>

                    {/* Technical Properties */}
                    <section className="product-section">
                        <h2>Technical Properties</h2>
                        <div className="properties-grid">
                            <div className="property-item">
                                <h3>Appearance</h3>
                                <p>Yellow waxy powder</p>
                            </div>
                            <div className="property-item">
                                <h3>Melting Point</h3>
                                <p>69.6°C (157.3°F)</p>
                            </div>
                            <div className="property-item">
                                <h3>Boiling Point</h3>
                                <p>361°C (682°F)</p>
                            </div>
                            <div className="property-item">
                                <h3>Density</h3>
                                <p>0.9408 g/cm³</p>
                            </div>
                            <div className="property-item">
                                <h3>Molecular Weight</h3>
                                <p>284.48 g/mol</p>
                            </div>
                            <div className="property-item">
                                <h3>CAS Number</h3>
                                <p>57-11-4</p>
                            </div>
                        </div>
                    </section>

                    {/* Safety Information */}
                    <section className="product-section">
                        <h2>Safety Information</h2>
                        <div className="safety-info">
                            <div className="safety-item">
                                <h3>Handling</h3>
                                <p>Use standard laboratory practices. Avoid inhalation of dust and contact with eyes.</p>
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
                            <span className="info-label">Product Type:</span>
                            <span className="info-value">Long chain fatty acid</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Appearance:</span>
                            <span className="info-value">Yellow waxy</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Main Uses:</span>
                            <span className="info-value">Cosmetics, Lubricants</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StearicAcidPowder; 