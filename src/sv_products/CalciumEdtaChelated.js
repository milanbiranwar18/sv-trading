import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../css/Product1.css';

const CalciumEdtaChelated = () => {
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
                    <h1>Calcium EDTA Chelated</h1>
                    <p className="product-subtitle">High-Quality Chelated Calcium for Plant Growth and Development</p>
                    <div className="price-info">
                        <span className="price">₹ 185/Kg</span>
                        <span className="moq">Packaging Size: 1-50 kg</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/sv_assets/SPCP.jpg" alt="Calcium EDTA Chelated" />
                </div>
            </div>
            <div className="product-container">
                <div className="product-main">
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Calcium EDTA Chelated is a high-quality chelated calcium fertilizer used for promoting plant growth and development. This product provides calcium in a form that is easily absorbed by plants, ensuring optimal growth and development.
                        </p>
                    </section>

                    <section className="product-section">
                        <h2>Product Gallery</h2>
                        <div className="product-gallery">
                            <div className="gallery-grid">
                                <div className="gallery-item">
                                    <img src="/src/sv_assets/SPCP.jpg" alt="Calcium EDTA Chelated - Product View" />
                                    <div className="gallery-caption">Product View</div>
                                </div>
                                <div className="gallery-item">
                                    <img src="/src/sv_assets/SPCP.jpg" alt="Calcium EDTA Chelated - Packaging" />
                                    <div className="gallery-caption">Packaging</div>
                                </div>
                                <div className="gallery-item">
                                    <img src="/src/sv_assets/SPCP.jpg" alt="Calcium EDTA Chelated - Application" />
                                    <div className="gallery-caption">Application</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Technical Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item"><span className="spec-label">Form</span><span className="spec-value">Powder</span></div>
                            <div className="spec-item"><span className="spec-label">Usage/Application</span><span className="spec-value">Promoting Plant Growth and Development</span></div>
                            <div className="spec-item"><span className="spec-label">Assay</span><span className="spec-value">98 - 102%</span></div>
                            <div className="spec-item"><span className="spec-label">Packaging Type</span><span className="spec-value">Bag</span></div>
                            <div className="spec-item"><span className="spec-label">Packaging Size</span><span className="spec-value">1-50 kg</span></div>
                            <div className="spec-item"><span className="spec-label">Physical Form</span><span className="spec-value">Powder</span></div>
                            <div className="spec-item"><span className="spec-label">Calcium</span><span className="spec-value">10% (min.) as Ca</span></div>
                            <div className="spec-item"><span className="spec-label">Chemical Name</span><span className="spec-value">Acid Calcium-Disodium Complex</span></div>
                            <div className="spec-item"><span className="spec-label">pH</span><span className="spec-value">6.5 - 7.5 (1 wt % solution)</span></div>
                            <div className="spec-item"><span className="spec-label">CAS No</span><span className="spec-value">62-33-9</span></div>
                            <div className="spec-item"><span className="spec-label">Country of Origin</span><span className="spec-value">Made in India</span></div>
                            <div className="spec-item"><span className="spec-label">Solubility</span><span className="spec-value">Soluble in Water</span></div>
                            <div className="spec-item"><span className="spec-label">Usage</span><span className="spec-value">For Industrial Use Only</span></div>
                        </div>
                    </section>
                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-card">
                                <h3>Agriculture</h3>
                                <p>Used to promote plant growth and development by providing essential calcium.</p>
                            </div>
                            <div className="application-card">
                                <h3>Hydroponics</h3>
                                <p>Ideal for hydroponic systems where calcium is needed in soluble form.</p>
                            </div>
                            <div className="application-card">
                                <h3>Foliar Application</h3>
                                <p>Applied directly to plant leaves for quick calcium absorption.</p>
                            </div>
                        </div>
                    </section>
                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>10% calcium content</li>
                            <li>100% water soluble</li>
                            <li>EDTA chelated for better absorption</li>
                            <li>High assay 98-102%</li>
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
                </div>
            </div>
        </div>
    );
};

export default CalciumEdtaChelated; 