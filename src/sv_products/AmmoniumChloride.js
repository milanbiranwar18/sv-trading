import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faIndustry, faFlask, faShieldAlt, faTint, faBoxes, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../css/Product1.css';

const AmmoniumChloride = () => {
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
                    <h1>Ammonium Chloride</h1>
                    <p className="product-subtitle">Versatile Industrial Chemical for Multiple Applications</p>
                    <div className="price-info">
                        <span className="price">₹ 27/Kg</span>
                        <span className="moq">Minimum Order Quantity: 50 Kg</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/assets/chemical_placeholder.jpg" alt="Ammonium Chloride" />
                </div>
            </div>

            {/* Product Details */}
            <div className="product-container">
                <div className="product-main">
                    {/* Product Overview */}
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Ammonium Chloride is a white crystalline salt with diverse applications in agriculture, 
                            medicine, and various industrial processes. It serves as a nitrogen source in fertilizers, 
                            expectorant in cough medicines, and has applications in glue manufacturing and battery cells.
                        </p>
                        <div className="product-features">
                            <div className="feature">
                                <FontAwesomeIcon icon={faSeedling} />
                                <span>Agricultural</span>
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
                                <span className="spec-value">99%</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Purity/Concentration</span>
                                <span className="spec-value">99%</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Form</span>
                                <span className="spec-value">Crystals</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Usage/Application</span>
                                <span className="spec-value">Agricultural</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Grade</span>
                                <span className="spec-value">Industry Grade</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Packaging Details</span>
                                <span className="spec-value">50kg Bag</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Chemical Formula</span>
                                <span className="spec-value">NH4Cl</span>
                            </div>
                        </div>
                    </section>

                    {/* Applications */}
                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-card">
                                <h3>Fertilizers</h3>
                                <p>Used in fertilizers as a nitrogen source for plant growth and development.</p>
                            </div>
                            <div className="application-card">
                                <h3>Medicine</h3>
                                <p>Used in cough medicine as an expectorant to help clear respiratory passages.</p>
                            </div>
                            <div className="application-card">
                                <h3>Glue Manufacturing</h3>
                                <p>Used in glue formulations to help bond plywood and other materials effectively.</p>
                            </div>
                            <div className="application-card">
                                <h3>Leclanche Cells</h3>
                                <p>Used in Leclanche cells (batteries) in aqueous solutions for electrical conductivity.</p>
                            </div>
                            <div className="application-card">
                                <h3>Pigments and Dyes</h3>
                                <p>Applied in the manufacturing of pigments and dyes for various applications.</p>
                            </div>
                            <div className="application-card">
                                <h3>Industrial Processes</h3>
                                <p>Used in various industrial processes requiring ammonium chloride as a reagent.</p>
                            </div>
                        </div>
                    </section>

                    {/* Product Benefits */}
                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>High purity 99% grade</li>
                            <li>Versatile applications across industries</li>
                            <li>Cost-effective nitrogen source</li>
                            <li>Excellent solubility in water</li>
                            <li>Stable crystalline form</li>
                            <li>Wide range of industrial uses</li>
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
                                <p>338°C (640°F)</p>
                            </div>
                            <div className="property-item">
                                <h3>Boiling Point</h3>
                                <p>520°C (968°F)</p>
                            </div>
                            <div className="property-item">
                                <h3>Density</h3>
                                <p>1.527 g/cm³</p>
                            </div>
                            <div className="property-item">
                                <h3>Molecular Weight</h3>
                                <p>53.49 g/mol</p>
                            </div>
                            <div className="property-item">
                                <h3>CAS Number</h3>
                                <p>12125-02-9</p>
                            </div>
                        </div>
                    </section>

                    {/* Safety Information */}
                    <section className="product-section">
                        <h2>Safety Information</h2>
                        <div className="safety-info">
                            <div className="safety-item">
                                <h3>Handling</h3>
                                <p>Use appropriate PPE including gloves and goggles. Avoid inhalation of dust and contact with eyes.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Storage</h3>
                                <p>Store in a cool, dry place in tightly closed containers. Keep away from incompatible materials.</p>
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
                            <span className="info-label">Production Capacity:</span>
                            <span className="info-value">10,000 Kg</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Delivery Time:</span>
                            <span className="info-value">5 days</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Packaging Details:</span>
                            <span className="info-value">SV. Trading company, Pune</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmmoniumChloride; 