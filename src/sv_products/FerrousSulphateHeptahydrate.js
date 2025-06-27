import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../css/Product1.css';

const FerrousSulphateHeptahydrate = () => {
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
                    <h1>Ferrous Sulphate Heptahydrate</h1>
                    <p className="product-subtitle">High-Quality Iron Source for Agricultural and Industrial Applications</p>
                    <div className="price-info">
                        <span className="price">₹ 8/Kg</span>
                        <span className="moq">Packaging Size: 1-50 kg</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/sv_assets/SPCP.jpg" alt="Ferrous Sulphate Heptahydrate" />
                </div>
            </div>
            <div className="product-container">
                <div className="product-main">
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Iron(2+) sulfate heptahydrate is a hydrate that is the heptahydrate form of iron(2+) sulfate. It is used as a source of iron in the treatment of iron-deficiency anaemia (generally in liquid-dosage treatments; for solid-dosage treatments, the monohydrate is normally used).
                        </p>
                    </section>

                    <section className="product-section">
                        <h2>Product Gallery</h2>
                        <div className="product-gallery">
                            <div className="gallery-grid">
                                <div className="gallery-item">
                                    <img src="/src/sv_assets/SPCP.jpg" alt="Ferrous Sulphate Heptahydrate - Product View" />
                                    <div className="gallery-caption">Product View</div>
                                </div>
                                <div className="gallery-item">
                                    <img src="/src/sv_assets/SPCP.jpg" alt="Ferrous Sulphate Heptahydrate - Packaging" />
                                    <div className="gallery-caption">Packaging</div>
                                </div>
                                <div className="gallery-item">
                                    <img src="/src/sv_assets/SPCP.jpg" alt="Ferrous Sulphate Heptahydrate - Application" />
                                    <div className="gallery-caption">Application</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Technical Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item"><span className="spec-label">Packaging Type</span><span className="spec-value">Bag</span></div>
                            <div className="spec-item"><span className="spec-label">Packaging Size</span><span className="spec-value">1-50 kg</span></div>
                            <div className="spec-item"><span className="spec-label">Physical Form</span><span className="spec-value">Crystal</span></div>
                            <div className="spec-item"><span className="spec-label">pH Value</span><span className="spec-value">3.0 to 4.0 of 5% Solution</span></div>
                            <div className="spec-item"><span className="spec-label">Manganese</span><span className="spec-value">0.1% Max</span></div>
                            <div className="spec-item"><span className="spec-label">Lead</span><span className="spec-value">0.001% Max (Pb)</span></div>
                            <div className="spec-item"><span className="spec-label">Ferric Ion</span><span className="spec-value">0.2% Max (Fe3+)</span></div>
                            <div className="spec-item"><span className="spec-label">Mercury</span><span className="spec-value">0.0003% Max (Hg)</span></div>
                            <div className="spec-item"><span className="spec-label">Chloride</span><span className="spec-value">0.01% Max (Cl)</span></div>
                            <div className="spec-item"><span className="spec-label">Heavy Metal</span><span className="spec-value">0.005% Max (Pb)</span></div>
                            <div className="spec-item"><span className="spec-label">Zinc</span><span className="spec-value">0.05% Max (Zn)</span></div>
                            <div className="spec-item"><span className="spec-label">Copper</span><span className="spec-value">0.005% Max (Cu)</span></div>
                            <div className="spec-item"><span className="spec-label">Arsenic</span><span className="spec-value">0.0002% Max (As)</span></div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-card">
                                <h3>Agriculture</h3>
                                <p>Used as a fertilizer to provide iron to plants and correct iron deficiency in soils.</p>
                            </div>
                            <div className="application-card">
                                <h3>Medical</h3>
                                <p>Used in the treatment of iron-deficiency anaemia in liquid dosage forms.</p>
                            </div>
                            <div className="application-card">
                                <h3>Water Treatment</h3>
                                <p>Used in water treatment processes for coagulation and flocculation.</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>High purity heptahydrate form</li>
                            <li>Excellent iron source</li>
                            <li>Low heavy metal content</li>
                            <li>Consistent quality</li>
                            <li>Easy to handle crystalline form</li>
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
                </div>
            </div>
        </div>
    );
};

export default FerrousSulphateHeptahydrate; 