import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../css/Product1.css';

const AminoAcidPowder = () => {
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
                    <h1>Amino Acid Powder</h1>
                    <p className="product-subtitle">High-Quality Protein Hydrolysate for Agricultural Applications</p>
                    <div className="price-info">
                        <span className="price">₹ 150/Kg</span>
                        <span className="moq">Packaging Size: 1-50 kg</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/src/sv_assets/SPCP.jpg" alt="Amino Acid Powder" />
                </div>
            </div>
            <div className="product-container">
                <div className="product-main">
                    <section className="product-section">
                        <h2>Product Overview</h2>
                        <p>
                            Amino Acid 50% Powder offered comes under product category Amino Acid/Protein Hydrolysate and comes in packaging options of 25 Kg HDPE bags/drums with ideal storage condition below 25 degree C and away from direct sunlight. With appearance of creamish yellow to brown colored free flowing powder, it has bland taste with no undesirable odor.
                        </p>
                    </section>

                    <section className="product-section">
                        <h2>Product Gallery</h2>
                        <div className="product-gallery">
                            <div className="gallery-grid">
                                <div className="gallery-item">
                                    <img src="/src/sv_assets/SPCP.jpg" alt="Amino Acid Powder - Product View" />
                                    <div className="gallery-caption">Product View</div>
                                </div>
                                <div className="gallery-item">
                                    <img src="/src/sv_assets/SPCP.jpg" alt="Amino Acid Powder - Packaging" />
                                    <div className="gallery-caption">Packaging</div>
                                </div>
                                <div className="gallery-item">
                                    <img src="/src/sv_assets/SPCP.jpg" alt="Amino Acid Powder - Application" />
                                    <div className="gallery-caption">Application</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Technical Specifications</h2>
                        <div className="specs-grid">
                            <div className="spec-item"><span className="spec-label">Form</span><span className="spec-value">Powder</span></div>
                            <div className="spec-item"><span className="spec-label">Packaging Size</span><span className="spec-value">1-50 kg</span></div>
                            <div className="spec-item"><span className="spec-label">Packaging Type</span><span className="spec-value">Bag</span></div>
                            <div className="spec-item"><span className="spec-label">Solubility</span><span className="spec-value">DMF</span></div>
                            <div className="spec-item"><span className="spec-label">Acetate</span><span className="spec-value">≤ 0.02</span></div>
                            <div className="spec-item"><span className="spec-label">Fmoc Aaa OH</span><span className="spec-value">0.1%</span></div>
                            <div className="spec-item"><span className="spec-label">Ethyl</span><span className="spec-value">0.2%</span></div>
                            <div className="spec-item"><span className="spec-label">Assay</span><span className="spec-value">0.2%</span></div>
                            <div className="spec-item"><span className="spec-label">Enantiomeric</span><span className="spec-value">99.8%</span></div>
                            <div className="spec-item"><span className="spec-label">Content</span><span className="spec-value">80%</span></div>
                            <div className="spec-item"><span className="spec-label">Purity</span><span className="spec-value">99.0%</span></div>
                            <div className="spec-item"><span className="spec-label">Total Nitrogen</span><span className="spec-value">7.5% Min</span></div>
                            <div className="spec-item"><span className="spec-label">Total Protein</span><span className="spec-value">50.0% Min</span></div>
                            <div className="spec-item"><span className="spec-label">pH (2% solution)</span><span className="spec-value">4.5 To 6.5</span></div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Applications</h2>
                        <div className="applications-grid">
                            <div className="application-card">
                                <h3>Agriculture</h3>
                                <p>Used as a plant growth promoter and stress reliever in agricultural applications.</p>
                            </div>
                            <div className="application-card">
                                <h3>Fertilizer Additive</h3>
                                <p>Added to fertilizers to improve nutrient uptake and plant health.</p>
                            </div>
                            <div className="application-card">
                                <h3>Foliar Application</h3>
                                <p>Applied directly to plant leaves for quick absorption and stress relief.</p>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">
                        <h2>Product Benefits</h2>
                        <ul className="benefits-list">
                            <li>High purity 99.0% grade</li>
                            <li>80% amino acid content</li>
                            <li>50% minimum protein content</li>
                            <li>Free flowing powder form</li>
                            <li>No undesirable odor</li>
                            <li>Bland taste</li>
                            <li>Excellent solubility</li>
                        </ul>
                    </section>

                    <section className="product-section">
                        <h2>Safety Information</h2>
                        <div className="safety-info">
                            <div className="safety-item">
                                <h3>Storage</h3>
                                <p>Store below 25°C and away from direct sunlight in tightly closed containers.</p>
                            </div>
                            <div className="safety-item">
                                <h3>Handling</h3>
                                <p>Use appropriate PPE when handling. Avoid inhalation of dust.</p>
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

export default AminoAcidPowder; 