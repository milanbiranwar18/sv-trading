import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faIndustry, faFlask, faShieldAlt, faTint, faBoxes, faWater } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const PolyAluminiumChloride = () => {
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
                    <h1>Poly Aluminium Chloride</h1>
                    <p className="product-subtitle">High-Performance Water Treatment Chemical</p>
                    <div className="price-info">
                        <span className="price">₹ 250/Kg</span>
                        <span className="moq">Minimum Order Quantity: 50 Kg</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/assets/chemical_placeholder.jpg" alt="Poly Aluminium Chloride" />
                </div>
            </div>

            {/* Product Details */}
            <div className="product-container">
                <div className="product-main">
                    {/* Product Overview */}
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Poly Aluminium Chloride (PAC) is a highly effective coagulant used in water treatment 
                            processes. It offers superior performance compared to traditional aluminium sulphate, 
                            providing better flocculation, faster settling, and lower residual aluminium content.
                        </p>
                        <div className="product-features">
                            <div className="feature">
                                <FontAwesomeIcon icon={faWater} />
                                <span>Water Treatment</span>
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
                                <span>25kg Packaging</span>
                            </div>
                        </div>
                    </section>

                    {/* Technical Specifications */}
                    <section className="product-section">
                        <h2>Technical Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <span className="spec-label">Physical State</span>
                                <span className="spec-value">Powder</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Usage/Application</span>
                                <span className="spec-value">Industrial</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Purity %</span>
                                <span className="spec-value">99%</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Packaging Details</span>
                                <span className="spec-value">25kg</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Grade Standard</span>
                                <span className="spec-value">Industrial Grade</span>
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
                                <h3>Drinking Water Treatment</h3>
                                <p>Used in municipal water treatment plants for clarification and purification of drinking water supplies.</p>
                            </div>
                            <div className="application-card">
                                <h3>Swimming Pool Water</h3>
                                <p>Effective coagulant for maintaining clear and clean swimming pool water by removing suspended particles.</p>
                            </div>
                            <div className="application-card">
                                <h3>Waste Water Treatment</h3>
                                <p>Essential component in industrial and municipal wastewater treatment processes for solids removal.</p>
                            </div>
                            <div className="application-card">
                                <h3>Sewage and Industrial Effluents</h3>
                                <p>Used in treatment of sewage and industrial wastewater to meet environmental discharge standards.</p>
                            </div>
                        </div>
                    </section>

                    {/* Product Benefits */}
                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>Superior coagulation efficiency compared to traditional coagulants</li>
                            <li>Faster floc formation and settling rates</li>
                            <li>Lower residual aluminium content in treated water</li>
                            <li>Wide pH range effectiveness (6.0-9.0)</li>
                            <li>Reduced sludge volume and disposal costs</li>
                            <li>Better performance in cold water conditions</li>
                            <li>Cost-effective solution for water treatment</li>
                        </ul>
                    </section>

                    {/* Technical Properties */}
                    <section className="product-section">
                        <h2>Technical Properties</h2>
                        <div className="properties-grid">
                            <div className="property-item">
                                <h3>Chemical Formula</h3>
                                <p>[Al2(OH)nCl6-n]m</p>
                            </div>
                            <div className="property-item">
                                <h3>Appearance</h3>
                                <p>Yellow to light brown powder</p>
                            </div>
                            <div className="property-item">
                                <h3>Solubility</h3>
                                <p>Highly soluble in water</p>
                            </div>
                            <div className="property-item">
                                <h3>pH Range</h3>
                                <p>Effective in pH 6.0-9.0</p>
                            </div>
                        </div>
                    </section>

                    {/* Safety Information */}
                    <section className="product-section">
                        <h2>Safety Information</h2>
                        <div className="safety-info">
                            <div className="safety-item">
                                <h3>Handling</h3>
                                <p>Use appropriate PPE including gloves, goggles, and dust mask. Avoid inhalation of dust and contact with eyes and skin.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Storage</h3>
                                <p>Store in a cool, dry place in tightly closed containers. Keep away from incompatible materials and moisture.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Disposal</h3>
                                <p>Dispose of in accordance with local environmental regulations. Do not release into environment.</p>
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
                            <span className="info-value">25kg Bags</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Brand:</span>
                            <span className="info-value">S.V. Trading Company</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PolyAluminiumChloride; 