import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../css/Product1.css';

const ManganeseEdtaChelated = () => {
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
                    <h1>Manganese EDTA Chelated</h1>
                    <p className="product-subtitle">High-Quality Chelated Manganese for Plant Nutrition</p>
                    <div className="price-info">
                        <span className="price">₹ 180/Kg</span>
                        <span className="moq">Packaging Size: 1-50 kg</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/sv_assets/SPCP.jpg" alt="Manganese EDTA Chelated" />
                </div>
            </div>
            <div className="product-container">
                <div className="product-main">
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Manganese EDTA Chelated is a high-quality chelated manganese fertilizer used for correcting manganese deficiencies in plants. This product provides manganese in a form that is easily absorbed by plants, ensuring optimal growth and development.
                        </p>
                    </section>
                    <section className="product-section">
                        <h2>Technical Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item"><span className="spec-label">Form</span><span className="spec-value">Powder</span></div>
                            <div className="spec-item"><span className="spec-label">Usage/Application</span><span className="spec-value">Correcting Nutrient Deficiencies</span></div>
                            <div className="spec-item"><span className="spec-label">Packaging Type</span><span className="spec-value">Bag</span></div>
                            <div className="spec-item"><span className="spec-label">Grade Standard</span><span className="spec-value">Industrial Grade</span></div>
                            <div className="spec-item"><span className="spec-label">Solubility</span><span className="spec-value">Soluble in Water</span></div>
                            <div className="spec-item"><span className="spec-label">Packaging Size</span><span className="spec-value">1-50 kg</span></div>
                            <div className="spec-item"><span className="spec-label">Color</span><span className="spec-value">Pink</span></div>
                            <div className="spec-item"><span className="spec-label">CAS No</span><span className="spec-value">15375-84-5</span></div>
                            <div className="spec-item"><span className="spec-label">Chemical Name</span><span className="spec-value">Acid Manganese Disodium Complex</span></div>
                            <div className="spec-item"><span className="spec-label">pH</span><span className="spec-value">6.5 - 7.5 (1 wt % solution)</span></div>
                            <div className="spec-item"><span className="spec-label">Manganese Content</span><span className="spec-value">12.0% (+/- 0.5) as Mn</span></div>
                            <div className="spec-item"><span className="spec-label">Country of Origin</span><span className="spec-value">Made in India</span></div>
                            <div className="spec-item"><span className="spec-label">Molecular Formula</span><span className="spec-value">C10H12N2O8MnNa2</span></div>
                            <div className="spec-item"><span className="spec-label">Molecular Weight</span><span className="spec-value">389.1</span></div>
                            <div className="spec-item"><span className="spec-label">Purity</span><span className="spec-value">99.0%</span></div>
                            <div className="spec-item"><span className="spec-label">Water Insoluble</span><span className="spec-value">0.1% max</span></div>
                            <div className="spec-item"><span className="spec-label">Water Solubility</span><span className="spec-value">900g/L(20°C) full water soluble</span></div>
                        </div>
                    </section>
                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-card">
                                <h3>Agriculture</h3>
                                <p>Used to correct manganese deficiencies in crops and improve plant health.</p>
                            </div>
                            <div className="application-card">
                                <h3>Hydroponics</h3>
                                <p>Ideal for hydroponic systems where manganese is needed in soluble form.</p>
                            </div>
                            <div className="application-card">
                                <h3>Foliar Application</h3>
                                <p>Applied directly to plant leaves for quick manganese absorption.</p>
                            </div>
                        </div>
                    </section>
                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>12.0% manganese content</li>
                            <li>100% water soluble</li>
                            <li>EDTA chelated for better absorption</li>
                            <li>High purity 99.0%</li>
                            <li>Stable pH range</li>
                            <li>Easy to apply</li>
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

export default ManganeseEdtaChelated; 