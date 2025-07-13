import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faIndustry, faFlask, faShieldAlt, faTint, faBoxes, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../css/Product1.css';

const NicotinicAcid = () => {
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
                    <h1>Nicotinic Acid</h1>
                    <p className="product-subtitle">Vitamin B3 for Pharmaceutical and Nutritional Applications</p>
                    <div className="price-info">
                        <span className="price">₹ 1800/Kg</span>
                        <span className="moq">Minimum Order Quantity: 10 Kg</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/assets/chemical_placeholder.jpg" alt="Nicotinic Acid" />
                </div>
            </div>

            {/* Product Details */}
            <div className="product-container">
                <div className="product-main">
                    {/* Product Overview */}
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Nicotinic Acid (Niacin/Vitamin B3) is an essential water-soluble vitamin used in pharmaceutical 
                            manufacturing, food fortification, and nutritional supplements. It plays a vital role in energy 
                            metabolism and cellular health.
                        </p>
                        <div className="product-features">
                            <div className="feature">
                                <FontAwesomeIcon icon={faIndustry} />
                                <span>Pharmaceutical Grade</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faFlask} />
                                <span>99% Purity</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faShieldAlt} />
                                <span>Vitamin B3</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faBoxes} />
                                <span>10kg Bags</span>
                            </div>
                        </div>
                    </section>

                    {/* Technical Specifications */}
                    <section className="product-section">
                        <h2>Technical Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <span className="spec-label">Purity</span>
                                <span className="spec-value">99%</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Form</span>
                                <span className="spec-value">White Crystalline Powder</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Usage/Application</span>
                                <span className="spec-value">Pharmaceutical, Food, Nutritional</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Grade</span>
                                <span className="spec-value">Pharmaceutical Grade</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Packaging Details</span>
                                <span className="spec-value">10kg Bag</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Chemical Formula</span>
                                <span className="spec-value">C6H5NO2</span>
                            </div>
                        </div>
                    </section>

                    {/* Applications */}
                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-card">
                                <h3>Pharmaceutical</h3>
                                <p>Used in vitamin supplements, multivitamins, and pharmaceutical formulations for health benefits.</p>
                            </div>
                            <div className="application-card">
                                <h3>Food Fortification</h3>
                                <p>Used in food fortification programs for cereals, flour, and other staple foods.</p>
                            </div>
                            <div className="application-card">
                                <h3>Nutritional Supplements</h3>
                                <p>Used in dietary supplements and health products for daily nutrition.</p>
                            </div>
                            <div className="application-card">
                                <h3>Animal Feed</h3>
                                <p>Used in animal feed formulations for livestock nutrition and health.</p>
                            </div>
                            <div className="application-card">
                                <h3>Clinical Applications</h3>
                                <p>Used in clinical settings for treating niacin deficiency and related conditions.</p>
                            </div>
                            <div className="application-card">
                                <h3>Cosmetic Industry</h3>
                                <p>Used in skincare products for its beneficial effects on skin health.</p>
                            </div>
                        </div>
                    </section>

                    {/* Product Benefits */}
                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>High purity 99% grade</li>
                            <li>Essential vitamin for health</li>
                            <li>Safe for pharmaceutical use</li>
                            <li>Versatile applications</li>
                            <li>Excellent stability</li>
                            <li>Widely recognized benefits</li>
                            <li>Reliable performance</li>
                        </ul>
                    </section>

                    {/* Technical Properties */}
                    <section className="product-section">
                        <h2>Technical Properties</h2>
                        <div className="properties-grid">
                            <div className="property-item">
                                <h3>Appearance</h3>
                                <p>White crystalline powder</p>
                            </div>
                            <div className="property-item">
                                <h3>Melting Point</h3>
                                <p>237°C (459°F)</p>
                            </div>
                            <div className="property-item">
                                <h3>Density</h3>
                                <p>1.47 g/cm³</p>
                            </div>
                            <div className="property-item">
                                <h3>Molecular Weight</h3>
                                <p>123.11 g/mol</p>
                            </div>
                            <div className="property-item">
                                <h3>CAS Number</h3>
                                <p>59-67-6</p>
                            </div>
                            <div className="property-item">
                                <h3>Solubility</h3>
                                <p>Soluble in water</p>
                            </div>
                        </div>
                    </section>

                    {/* Safety Information */}
                    <section className="product-section">
                        <h2>Safety Information</h2>
                        <div className="safety-info">
                            <div className="safety-item">
                                <h3>Storage</h3>
                                <p>Store in a cool, dry place in tightly closed containers. Protect from light and moisture.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Handling</h3>
                                <p>Use appropriate personal protective equipment. Avoid inhalation and direct contact with skin and eyes.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Disposal</h3>
                                <p>Dispose of according to local environmental regulations. Safe for normal disposal.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="product-sidebar">
                    <div className="enquiry-form">
                        <h3>Get Quote</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
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
                                    required
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
                            <button type="submit" className="submit-btn">Send Enquiry</button>
                        </form>
                    </div>

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
                            <span>Mumbai, Maharashtra, India</span>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faClock} />
                            <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NicotinicAcid; 