import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../css/Product1.css';

const CalciumChloride = () => {
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
            <div className="product-hero">
                <div className="hero-content">
                    <h1>Calcium Chloride</h1>
                    <p className="product-subtitle">High-Quality Industrial Grade Calcium Chloride</p>
                    <div className="price-info">
                        <span className="price">₹ 24/Kg</span>
                        <span className="moq">Packaging Size: 1-50 kg</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/sv_assets/SPCP.jpg" alt="Calcium Chloride" />
                </div>
            </div>
            <div className="product-container">
                <div className="product-main">
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Calcium chloride is used in the pulp and paper industry as a coagulant to improve the performance of organic polymers. Used for dust control for roads, but is also used as a concrete additive, an anti-freeze, and is often used in oilfield applications.
                        </p>
                    </section>
                    <section className="product-section">
                        <h2>Technical Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item"><span className="spec-label">Purity %</span><span className="spec-value">99%</span></div>
                            <div className="spec-item"><span className="spec-label">Grade Standard</span><span className="spec-value">Industrial Grade</span></div>
                            <div className="spec-item"><span className="spec-label">Physical Form</span><span className="spec-value">Granules</span></div>
                        </div>
                    </section>
                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-card">
                                <h3>Pulp & Paper Industry</h3>
                                <p>Used as a coagulant to improve the performance of organic polymers.</p>
                            </div>
                            <div className="application-card">
                                <h3>Dust Control</h3>
                                <p>Used for dust control on roads and construction sites.</p>
                            </div>
                            <div className="application-card">
                                <h3>Concrete Additive</h3>
                                <p>Used as a concrete additive to improve strength and setting time.</p>
                            </div>
                            <div className="application-card">
                                <h3>Anti-freeze</h3>
                                <p>Used as an anti-freeze in various industrial applications.</p>
                            </div>
                            <div className="application-card">
                                <h3>Oilfield Applications</h3>
                                <p>Used in oilfield applications for various purposes.</p>
                            </div>
                        </div>
                    </section>
                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>High purity 99%</li>
                            <li>Industrial grade quality</li>
                            <li>Versatile applications</li>
                            <li>Effective coagulant</li>
                            <li>Excellent dust control</li>
                            <li>Cost-effective solution</li>
                        </ul>
                    </section>
                    <section className="product-section">
                        <h2>Safety Information</h2>
                        <div className="safety-info">
                            <div className="safety-item">
                                <h3>Handling</h3>
                                <p>Use appropriate PPE including gloves and goggles. Avoid contact with skin and eyes.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Storage</h3>
                                <p>Store in a cool, dry place in tightly closed containers. Keep away from moisture.</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="product-sidebar">
                    <div className="enquiry-form">
                        <h3>Get Best Quote</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <input type="tel" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="quantity" placeholder="Required Quantity" value={formData.quantity} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Additional Requirements" value={formData.message} onChange={handleInputChange} rows="4"></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Send Enquiry</button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="contact-item"><FontAwesomeIcon icon={faPhone} /><span>+91 9890911136</span></div>
                        <div className="contact-item"><FontAwesomeIcon icon={faWhatsapp} /><span>+91 9890911136</span></div>
                        <div className="contact-item"><FontAwesomeIcon icon={faEnvelope} /><span>svtrading36@gmail.com</span></div>
                        <div className="contact-item"><FontAwesomeIcon icon={faMapMarkerAlt} /><span>Handewadi, Pune, Maharashtra</span></div>
                        <div className="contact-item"><FontAwesomeIcon icon={faClock} /><span>Mon - Fri: 9:00 AM - 6:00 PM</span></div>
                    </div>
                    <div className="additional-info">
                        <h3>Additional Information</h3>
                        <div className="info-item"><span className="info-label">Production Capacity:</span><span className="info-value">10,000 Kg</span></div>
                        <div className="info-item"><span className="info-label">Delivery Time:</span><span className="info-value">5 days</span></div>
                        <div className="info-item"><span className="info-label">Packaging Details:</span><span className="info-value">SV Trading company, Pune</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalciumChloride; 