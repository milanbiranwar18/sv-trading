import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../css/Product1.css';

const CalciumNitrateGranular = () => {
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
                    <h1>Calcium Nitrate Granular</h1>
                    <p className="product-subtitle">High-Quality Calcium Nitrate for Agricultural Applications</p>
                    <div className="price-info">
                        <span className="price">₹ 26/Kg</span>
                        <span className="moq">Packaging Size: 1-50 Kg</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/sv_assets/SPCP.jpg" alt="Calcium Nitrate Granular" />
                </div>
            </div>
            <div className="product-container">
                <div className="product-main">
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Backed by the support of our trustworthy vendors, we are able to provide superior quality range of Calcium Nitrate Granular. Our vendors' qualified professionals formulate the offered chemicals with the use of quality assured materials and modish techniques in compliance with set standards of industry. Our offered range undergoes different quality tests to ensure their purity and durability. Besides, we deliver the provided chemicals within the fixed time frame.
                        </p>
                    </section>
                    <section className="product-section">
                        <h2>Technical Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item"><span className="spec-label">Grade</span><span className="spec-value">Technical Grade</span></div>
                            <div className="spec-item"><span className="spec-label">Packaging Details</span><span className="spec-value">25 Kg</span></div>
                            <div className="spec-item"><span className="spec-label">Packaging Type</span><span className="spec-value">Bag</span></div>
                            <div className="spec-item"><span className="spec-label">Packaging Size</span><span className="spec-value">1-50 Kg</span></div>
                            <div className="spec-item"><span className="spec-label">Nitrate Nitrogen</span><span className="spec-value">15.5%</span></div>
                            <div className="spec-item"><span className="spec-label">Matter Insoluble</span><span className="spec-value">1.5%</span></div>
                            <div className="spec-item"><span className="spec-label">Water Soluble Calcium</span><span className="spec-value">18.5% (as Ca)</span></div>
                            <div className="spec-item"><span className="spec-label">Form</span><span className="spec-value">Granules</span></div>
                            <div className="spec-item"><span className="spec-label">Physical Form</span><span className="spec-value">Crystal</span></div>
                        </div>
                    </section>
                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-card">
                                <h3>Agriculture</h3>
                                <p>Used as a fertilizer to provide calcium and nitrogen to plants.</p>
                            </div>
                            <div className="application-card">
                                <h3>Hydroponics</h3>
                                <p>Ideal for hydroponic systems where calcium nitrate is needed.</p>
                            </div>
                            <div className="application-card">
                                <h3>Foliar Application</h3>
                                <p>Applied directly to plant leaves for quick nutrient absorption.</p>
                            </div>
                        </div>
                    </section>
                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>15.5% nitrate nitrogen</li>
                            <li>18.5% water soluble calcium</li>
                            <li>High quality technical grade</li>
                            <li>Low insoluble matter</li>
                            <li>Easy to apply granular form</li>
                            <li>Cost-effective solution</li>
                        </ul>
                    </section>
                    <section className="product-section">
                        <h2>Safety Information</h2>
                        <div className="safety-info">
                            <div className="safety-item">
                                <h3>Handling</h3>
                                <p>Use appropriate PPE including gloves and mask. Avoid inhalation of dust.</p>
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
                        <div className="info-item"><span className="info-label">Packaging Details:</span><span className="info-value">S.V. Trading company, Pune</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalciumNitrateGranular; 