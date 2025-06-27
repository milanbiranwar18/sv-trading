import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faIndustry, faFlask, faShieldAlt, faTint, faBoxes } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const BenzalkoniumChlorideBkc = () => {
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
                    <h1>Benzalkonium Chloride BKC</h1>
                    <p className="product-subtitle">Quaternary Ammonium Compound - Surface Disinfectant</p>
                    <div className="price-info">
                        <span className="price">₹ 125/Kg</span>
                        <span className="moq">Minimum Order Quantity: 50 Kg</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/assets/chemical_placeholder.jpg" alt="Benzalkonium Chloride BKC" />
                </div>
            </div>

            {/* Product Details */}
            <div className="product-container">
                <div className="product-main">
                    {/* Product Overview */}
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Benzalkonium Chloride (BKC) is a quaternary ammonium compound widely used as a 
                            surface disinfectant and biocide. Available in 50% and 80% concentrations, 
                            it provides effective antimicrobial activity against bacteria, viruses, and fungi.
                        </p>
                        <div className="product-features">
                            <div className="feature">
                                <FontAwesomeIcon icon={faShieldAlt} />
                                <span>Effective Disinfectant</span>
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
                                <span>50kg Packaging</span>
                            </div>
                        </div>
                    </section>

                    {/* Technical Specifications */}
                    <section className="product-section">
                        <h2>Technical Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <span className="spec-label">Purity</span>
                                <span className="spec-value">98%</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Usage/Application</span>
                                <span className="spec-value">Surface Disinfectant</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Packaging Type</span>
                                <span className="spec-value">Jar</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Grade Standard</span>
                                <span className="spec-value">Industrial Grade</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Packaging Size</span>
                                <span className="spec-value">50kg</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Grade</span>
                                <span className="spec-value">50/80</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Physical State</span>
                                <span className="spec-value">Liquid</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Country of Origin</span>
                                <span className="spec-value">Made in India</span>
                            </div>
                        </div>
                    </section>

                    {/* Applications */}
                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-card">
                                <h3>Surface Disinfection</h3>
                                <p>Effective disinfection of floors, walls, equipment, and surfaces in healthcare, food processing, and industrial facilities.</p>
                            </div>
                            <div className="application-card">
                                <h3>Water Treatment</h3>
                                <p>Used in swimming pools, cooling towers, and water systems for microbial control and disinfection.</p>
                            </div>
                            <div className="application-card">
                                <h3>Personal Care</h3>
                                <p>Found in antiseptic solutions, hand sanitizers, and personal hygiene products.</p>
                            </div>
                            <div className="application-card">
                                <h3>Industrial Processes</h3>
                                <p>Used in manufacturing processes where microbial control is essential for product quality and safety.</p>
                            </div>
                        </div>
                    </section>

                    {/* Product Benefits */}
                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>Broad-spectrum antimicrobial activity</li>
                            <li>Fast-acting and long-lasting protection</li>
                            <li>Compatible with various surfaces and materials</li>
                            <li>Low toxicity and safe handling</li>
                            <li>Cost-effective disinfection solution</li>
                            <li>Stable under normal storage conditions</li>
                        </ul>
                    </section>

                    {/* Safety Information */}
                    <section className="product-section">
                        <h2>Safety Information</h2>
                        <div className="safety-info">
                            <div className="safety-item">
                                <h3>Handling</h3>
                                <p>Use appropriate personal protective equipment (PPE) including gloves, goggles, and protective clothing. Avoid contact with eyes, skin, and clothing.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Storage</h3>
                                <p>Store in a cool, dry place away from direct sunlight. Keep container tightly closed when not in use. Store away from incompatible materials.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Disposal</h3>
                                <p>Dispose of in accordance with local, state, and federal regulations. Do not pour into drains or water bodies.</p>
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
                            <span className="info-label">Packaging:</span>
                            <span className="info-value">50kg Jars</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenzalkoniumChlorideBkc; 