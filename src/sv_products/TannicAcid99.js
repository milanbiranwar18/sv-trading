import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faIndustry, faFlask, faShieldAlt, faTint, faBoxes, faLeaf } from '@fortawesome/free-solid-svg-icons';
import '../css/Product1.css';

const TannicAcid99 = () => {
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
                    <h1>Tannic Acid 99%</h1>
                    <p className="product-subtitle">Natural Plant Polyphenol for Industrial Applications</p>
                    <div className="price-info">
                        <span className="price">₹ 1,200/Kg</span>
                        <span className="moq">Minimum Order Quantity: 100 Kg</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/assets/chemical_placeholder.jpg" alt="Tannic Acid 99%" />
                </div>
            </div>

            {/* Product Details */}
            <div className="product-container">
                <div className="product-main">
                    {/* Product Overview */}
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Tannic Acid 99% is a naturally occurring plant polyphenol found in various plant tissues. 
                            It is a complex polyphenolic organic structure that yields gallic acid and either glucose 
                            or quinic acid as hydrolysis products. Our high-purity product is used in various industrial applications.
                        </p>
                        <div className="product-features">
                            <div className="feature">
                                <FontAwesomeIcon icon={faLeaf} />
                                <span>Natural Source</span>
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
                                <span>25kg Bags</span>
                            </div>
                        </div>
                    </section>

                    {/* Technical Specifications */}
                    <section className="product-section">
                        <h2>Technical Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <span className="spec-label">Grade</span>
                                <span className="spec-value">Technical and Industrial</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Purity</span>
                                <span className="spec-value">99%</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Usage/Application</span>
                                <span className="spec-value">Industrial</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Packaging Type</span>
                                <span className="spec-value">Bag</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Packaging Size</span>
                                <span className="spec-value">25kg</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Physical State</span>
                                <span className="spec-value">Powder</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Physical Form</span>
                                <span className="spec-value">Powder</span>
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
                                <h3>Leather Tanning</h3>
                                <p>Traditional use in leather tanning processes for converting raw hides into durable leather.</p>
                            </div>
                            <div className="application-card">
                                <h3>Dyeing</h3>
                                <p>Used as a mordant in textile dyeing to improve color fastness and dye absorption.</p>
                            </div>
                            <div className="application-card">
                                <h3>Ink Manufacture</h3>
                                <p>Component in ink formulations for improved stability and color properties.</p>
                            </div>
                            <div className="application-card">
                                <h3>Paper Sizing</h3>
                                <p>Used in paper manufacturing for sizing and improving paper quality.</p>
                            </div>
                            <div className="application-card">
                                <h3>Food and Wine Processing</h3>
                                <p>Used in food processing and wine clarification processes.</p>
                            </div>
                            <div className="application-card">
                                <h3>Chemical Production</h3>
                                <p>Raw material for production of gallic acid and pyrogallol.</p>
                            </div>
                        </div>
                    </section>

                    {/* Chemical Properties */}
                    <section className="product-section">
                        <h2>Chemical Properties</h2>
                        <div className="properties-grid">
                            <div className="property-item">
                                <h3>Chemical Formula</h3>
                                <p>C76H52O46 (amorphous form)</p>
                            </div>
                            <div className="property-item">
                                <h3>Appearance</h3>
                                <p>Yellowish to brownish powder</p>
                            </div>
                            <div className="property-item">
                                <h3>Solubility</h3>
                                <p>Very soluble in alcohol and ether</p>
                            </div>
                            <div className="property-item">
                                <h3>Decomposition</h3>
                                <p>210-215°C (410-419°F)</p>
                            </div>
                            <div className="property-item">
                                <h3>Odor</h3>
                                <p>Odorless or faint characteristic odor</p>
                            </div>
                            <div className="property-item">
                                <h3>Taste</h3>
                                <p>Astringent taste</p>
                            </div>
                        </div>
                    </section>

                    {/* Product Benefits */}
                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>Natural plant-derived polyphenol</li>
                            <li>High purity 99% grade</li>
                            <li>Wide range of industrial applications</li>
                            <li>Excellent solubility properties</li>
                            <li>Non-hazardous classification</li>
                            <li>Cost-effective natural solution</li>
                            <li>Environmentally friendly source</li>
                        </ul>
                    </section>

                    {/* Safety Information */}
                    <section className="product-section">
                        <h2>Safety Information</h2>
                        <div className="safety-info">
                            <div className="safety-item">
                                <h3>Classification</h3>
                                <p>Classified as a non-hazardous substance by regulatory authorities.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Handling</h3>
                                <p>Use standard laboratory practices. Avoid inhalation of dust and contact with eyes.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Storage</h3>
                                <p>Store in a cool, dry place in tightly closed containers. Keep away from moisture.</p>
                            </div>
                        </div>
                    </section>

                    {/* Natural Sources */}
                    <section className="product-section">
                        <h2>Natural Sources</h2>
                        <p>
                            Tannic acid is found in various plant sources including:
                        </p>
                        <ul className="sources-list">
                            <li>Quercus oliver and related oak species</li>
                            <li>Tara (Caesalpinia spinosa)</li>
                            <li>Various sumac species (Rhus semialata, R. coriaria, R. glabra, R. typhia)</li>
                        </ul>
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
                        <div className="info-item">
                            <span className="info-label">Packaging Details:</span>
                            <span className="info-value">SV Trading company, Pune</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TannicAcid99; 