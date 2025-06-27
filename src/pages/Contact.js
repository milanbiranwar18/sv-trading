import React, { useState } from 'react';
import Imgrefresher from '../assets/image1.jpg';
import Image1 from '../assets/contact1.png';
import '../css/Contact.css';
import indiamartLogo from '../assets/INDIAMART.png';
import backgraundImage from '../assets/cantact_backgraund.png';

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            // Simulate form submission (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Log form data to console (for development)
            console.log('Form submitted:', formData);
            
            // Show success message
            setSubmitStatus('success');
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
            alert('Sorry, there was an error submitting your message. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='contact'>
            <React.Fragment>
                {/* Banner Section */}
                <section className="section-wrap" id="bannersection">
                    <div className="section-container-full">
                        <div className="banner_images_2">
                            <div className="banner_images_desk">
                                <img 
                                    src={Image1} 
                                    alt="Contact Banner"
                                    className="desktop_banner"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Breadcrumb */}
                <div className="breadcrumb-container">
                    <div className="breadcrumb">
                        <span>Home</span>
                        <span className="separator">/</span>
                        <span>Contact Us</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="page-content">
                    <header className="page-header">
                        <h1 className="entry-title">Contact Us</h1>
                        <p>
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </header>

                    <div className="contact-main-container">
                        {/* Contact Form Section */}
                        <div className="contact-form-section">
                            <div className="form-container">
                                <h2>Send us a Message</h2>
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name *</label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                name="name" 
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required 
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required 
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number *</label>
                                            <input 
                                                type="tel" 
                                                id="phone" 
                                                name="phone" 
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject *</label>
                                            <input 
                                                type="text" 
                                                id="subject" 
                                                name="subject" 
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                required 
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            rows="6"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            disabled={isSubmitting}
                                        ></textarea>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Submit'}
                                    </button>

                                    {submitStatus === 'success' && (
                                        <div className="success-message">
                                            Thank you! Your message has been sent successfully.
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="error-message">
                                            Sorry, there was an error. Please try again.
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>

                        {/* Contact Information Section */}
                        <div className="contact-info-section">
                            <div className="info-container">
                                <h2>Get In Touch</h2>
                                
                                <div className="contact-info-item">
                                    <div className="info-icon">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </div>
                                    <div className="info-content">
                                        <h3>Head Office</h3>
                                        <p>
                                            SV Trading Pvt. Ltd.<br />
                                            FW6F+WMG, Nyati Estate Rd,<br />
                                            Nyati County, Mohammed Wadi,<br />
                                            Pune, Maharashtra 411028
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="info-icon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <div className="info-content">
                                        <h3>Phone</h3>
                                        <p>
                                            <a href="tel:+919890911136">+91 9890911136</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="info-icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="info-content">
                                        <h3>Email</h3>
                                        <p>
                                            <a href="mailto:svtrading36@gmail.com">svtrading36@gmail.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="contact-info-item">
                                    <div className="info-icon">
                                        <FontAwesomeIcon icon={faClock} />
                                    </div>
                                    <div className="info-content">
                                        <h3>Business Hours</h3>
                                        <p>
                                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                                            Saturday: 9:00 AM - 2:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>

                                {/* Social Media Links */}
                                <div className="social-section">
                                    <h3>Follow Us</h3>
                                    <div className="social-links">
                                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                        <a href="https://wa.me/9890911136?text=Welcome%20to%20S.V.%20TRADING" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                                            <FontAwesomeIcon icon={faWhatsapp} />
                                        </a>
                                        <a href="https://www.indiamart.com/" target="_blank" rel="noopener noreferrer" className="social-link indiamart">
                                            <img src={indiamartLogo} alt="Indiamart" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location Map Section */}
                    <div className="location-section">
                        <h2>Our Location</h2>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1234567890123!2d73.9242029!3d18.4623127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea2335304ef3%3A0x84a7a8a7dd73718b!2sSV%20Trading%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1234567890123"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="SV Trading Location"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Google Maps Section */}
                <section className="google-maps-section">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.829562858634!2d73.9241518148922!3d18.4922880874269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9ff5c3c1a9b%3A0x4a7c8f8b1e4c2e6d!2sSV%20Trading%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1678886055536!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="SV Trading Pvt. Ltd. Location"
                        ></iframe>
                    </div>
                </section>
            </React.Fragment>
        </div>
    );
};

export default Contact;
