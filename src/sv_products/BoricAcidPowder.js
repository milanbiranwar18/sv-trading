import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faIndustry, faFlask, faShieldAlt, faTint, faBoxes, faPrescriptionBottle } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const BoricAcidPowder = () => {
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
                    <h1>Boric Acid Powder</h1>
                    <p className="product-subtitle">Versatile Industrial Chemical for Multiple Applications</p>
                    <div className="price-info">
                        <span className="price">₹ 120/Kg</span>
                        <span className="moq">Minimum Order Quantity: 50 Kg</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/assets/chemical_placeholder.jpg" alt="Boric Acid Powder" />
                </div>
            </div>

            {/* Product Details */}
            <div className="product-container">
                <div className="product-main">
                    {/* Product Overview */}
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Boric Acid Powder is a white crystalline compound with versatile applications across 
                            various industries. It is used as a preservative, wire proofing agent, in cosmetics, 
                            leather processing, carpet treatment, and many other industrial applications.
                        </p>
                        <div className="product-features">
                            <div className="feature">
                                <FontAwesomeIcon icon={faPrescriptionBottle} />
                                <span>Preservative</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faIndustry} />
                                <span>Industrial Grade</span>
                            </div>
                            <div className="feature">
                                <FontAwesomeIcon icon={faFlask} />
                                <span>White Powder</span>
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
                                <span className="spec-label">Form</span>
                                <span className="spec-value">Powder</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Packaging Size</span>
                                <span className="spec-value">50 kg</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Brand</span>
                                <span className="spec-value">S. V. Trading Company</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Color</span>
                                <span className="spec-value">White</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Country of Origin</span>
                                <span className="spec-value">Made in India</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Chemical Formula</span>
                                <span className="spec-value">H3BO3</span>
                            </div>
                        </div>
                    </section>

                    {/* Applications */}
                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-card">
                                <h3>Preservative</h3>
                                <p>Used as a preservative in various products to prevent microbial growth and spoilage.</p>
                            </div>
                            <div className="application-card">
                                <h3>Wire Proofing</h3>
                                <p>Applied in electrical wire insulation and proofing for fire resistance and durability.</p>
                            </div>
                            <div className="application-card">
                                <h3>Cosmetics</h3>
                                <p>Used in personal care products for its mild antiseptic and preservative properties.</p>
                            </div>
                            <div className="application-card">
                                <h3>Leather Processing</h3>
                                <p>Applied in leather tanning and processing for preservation and quality enhancement.</p>
                            </div>
                            <div className="application-card">
                                <h3>Carpet Treatment</h3>
                                <p>Used in carpet manufacturing for flame retardancy and preservation.</p>
                            </div>
                            <div className="application-card">
                                <h3>Soaking Agents</h3>
                                <p>Applied as soaking agents in various industrial processes.</p>
                            </div>
                            <div className="application-card">
                                <h3>Artificial Gums</h3>
                                <p>Used in the production of artificial gums and adhesives.</p>
                            </div>
                            <div className="application-card">
                                <h3>Dyeing</h3>
                                <p>Applied in textile dyeing processes for improved color fastness.</p>
                            </div>
                            <div className="application-card">
                                <h3>Paintings</h3>
                                <p>Used in paint formulations for various properties enhancement.</p>
                            </div>
                            <div className="application-card">
                                <h3>Photography</h3>
                                <p>Applied in photographic processes and film development.</p>
                            </div>
                        </div>
                    </section>

                    {/* Product Benefits */}
                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>Versatile applications across multiple industries</li>
                            <li>Excellent preservative properties</li>
                            <li>Fire retardant characteristics</li>
                            <li>Mild antiseptic action</li>
                            <li>Cost-effective solution</li>
                            <li>High purity white powder</li>
                            <li>Stable under normal conditions</li>
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
                                <p>170.9°C (339.6°F)</p>
                            </div>
                            <div className="property-item">
                                <h3>Boiling Point</h3>
                                <p>300°C (572°F)</p>
                            </div>
                            <div className="property-item">
                                <h3>Density</h3>
                                <p>1.435 g/cm³</p>
                            </div>
                            <div className="property-item">
                                <h3>Molecular Weight</h3>
                                <p>61.83 g/mol</p>
                            </div>
                            <div className="property-item">
                                <h3>CAS Number</h3>
                                <p>10043-35-3</p>
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
                            <span className="info-value">1,000 kg</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Delivery Time:</span>
                            <span className="info-value">5 days</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoricAcidPowder; 