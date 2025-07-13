import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faIndustry, faFlask, faShieldAlt, faTint, faBoxes, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../css/Product1.css';

const HumicAcid = () => {
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
                    <h1>Humic Acid</h1>
                    <p className="product-subtitle">Natural Soil Conditioner and Plant Growth Stimulant</p>
                    <div className="price-info">
                        <span className="price">₹ 120/Kg</span>
                        <span className="moq">Minimum Order Quantity: 50 Kg</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/assets/chemical_placeholder.jpg" alt="Humic Acid" />
                </div>
            </div>

            {/* Product Details */}
            <div className="product-container">
                <div className="product-main">
                    {/* Product Overview */}
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Humic Acid is a natural organic compound derived from decomposed plant and animal matter. 
                            It is widely used in agriculture as a soil conditioner, plant growth stimulant, and 
                            fertilizer enhancer for its ability to improve soil structure and nutrient availability.
                        </p>
                        <div className="product-features">
                            <div className="feature">
                                <FontAwesomeIcon icon={faSeedling} />
                                <span>Agricultural Grade</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faFlask} />
                                <span>85% Purity</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faShieldAlt} />
                                <span>Natural Product</span>
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
                                <span className="spec-label">Purity</span>
                                <span className="spec-value">85%</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Form</span>
                                <span className="spec-value">Dark Brown Powder</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Usage/Application</span>
                                <span className="spec-value">Agriculture, Soil Conditioning</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Grade</span>
                                <span className="spec-value">Agricultural Grade</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Packaging Details</span>
                                <span className="spec-value">50kg Bag</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Source</span>
                                <span className="spec-value">Natural Organic Matter</span>
                            </div>
                        </div>
                    </section>

                    {/* Applications */}
                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-card">
                                <h3>Soil Conditioning</h3>
                                <p>Used to improve soil structure, water retention, and nutrient availability for better crop growth.</p>
                            </div>
                            <div className="application-card">
                                <h3>Fertilizer Enhancement</h3>
                                <p>Used as an additive in fertilizers to improve nutrient uptake and plant growth.</p>
                            </div>
                            <div className="application-card">
                                <h3>Organic Farming</h3>
                                <p>Used in organic farming practices for natural soil improvement and plant nutrition.</p>
                            </div>
                            <div className="application-card">
                                <h3>Horticulture</h3>
                                <p>Used in gardening and landscaping for soil improvement and plant health.</p>
                            </div>
                            <div className="application-card">
                                <h3>Animal Feed</h3>
                                <p>Used in animal feed formulations for improved digestion and health benefits.</p>
                            </div>
                            <div className="application-card">
                                <h3>Water Treatment</h3>
                                <p>Used in water treatment systems for removing heavy metals and impurities.</p>
                            </div>
                        </div>
                    </section>

                    {/* Product Benefits */}
                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>High purity 85% grade</li>
                            <li>Natural and organic product</li>
                            <li>Improves soil structure</li>
                            <li>Enhances nutrient availability</li>
                            <li>Promotes plant growth</li>
                            <li>Environmentally friendly</li>
                            <li>Cost-effective solution</li>
                        </ul>
                    </section>

                    {/* Technical Properties */}
                    <section className="product-section">
                        <h2>Technical Properties</h2>
                        <div className="properties-grid">
                            <div className="property-item">
                                <h3>Appearance</h3>
                                <p>Dark brown to black powder</p>
                            </div>
                            <div className="property-item">
                                <h3>pH Value</h3>
                                <p>3.5-5.5</p>
                            </div>
                            <div className="property-item">
                                <h3>Solubility</h3>
                                <p>Partially soluble in water</p>
                            </div>
                            <div className="property-item">
                                <h3>Organic Matter</h3>
                                <p>85-90%</p>
                            </div>
                            <div className="property-item">
                                <h3>Moisture Content</h3>
                                <p>≤ 15%</p>
                            </div>
                            <div className="property-item">
                                <h3>Particle Size</h3>
                                <p>80-200 mesh</p>
                            </div>
                        </div>
                    </section>

                    {/* Safety Information */}
                    <section className="product-section">
                        <h2>Safety Information</h2>
                        <div className="safety-info">
                            <div className="safety-item">
                                <h3>Storage</h3>
                                <p>Store in a cool, dry place in tightly closed containers. Protect from moisture and direct sunlight.</p>
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

export default HumicAcid; 