import React, { useState } from 'react';
import '../css/Contact3.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaAmazon, FaSkype, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Contact3 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, message } = formData;
        
        const introMessage = "Hello Mr. Sameet Pawar, I have some doubts or have to do some inquiry. Please let me know.";
        
        const details = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
        
        const fullMessage = `${introMessage}\n\n${details}`;
        
        const whatsappUrl = `https://wa.me/919890911136?text=${encodeURIComponent(fullMessage)}`;
        
        window.open(whatsappUrl, '_blank');

        // Optional: Reset form after opening WhatsApp
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <div className="contact-page-wrapper">
            {/* Contact Page Header with Gradient Background */}
            <div className="contact-header">
                <div className="contact-header-background">
                    <div className="animated-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                        <div className="shape shape-4"></div>
                    </div>
                </div>
                <div className="contact-header-overlay">
                    <h1 className="contact-header-title">Get In Touch</h1>
                    <p className="contact-header-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                    <div className="contact-header-icons">
                        <FaPhoneAlt className="header-icon" />
                        <FaEnvelope className="header-icon" />
                        <FaMapMarkerAlt className="header-icon" />
                    </div>
                </div>
            </div>

            <div className="contact-section">
                <div className="contact-container">
                    <div className="contact-row">
                        <div className="contact-info-box">
                            <h3 className="contact-heading">Contact Us</h3>

                            <div className="contact-detail">
                                <FaMapMarkerAlt className="contact-icon" />
                                <a href="https://www.google.com/maps/place/S+V+TRADING+CO./@18.4623178,73.921628,786m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2ea2335304ef3:0x84a7a8a7dd73718b!8m2!3d18.4623127!4d73.9242029!16s%2Fg%2F11c2kgvg0q?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D" className="no-underline-black" target="_blank" rel="noopener noreferrer">
                                    S V Trading Company, <br />
                                    Nyati Estate Rd, <br />
                                    Nyati County, Mohammed Wadi,  <br />
                                    Pune, Maharashtra 411028<br /><br />
                                </a>
                            </div>

                            <div className="contact-detail">
                                <FaPhoneAlt className="contact-icon" />
                                <a href="tel:+919890911136" className="no-underline-black">
                                    Phone: +91 9890911136
                                </a>
                            </div>

                            <div className="contact-detail">
                                <FaEnvelope className="contact-icon" />
                                <a href="mailto:svtrading36@gmail.com" className="no-underline-black">
                                    Email: svtrading36@gmail.com
                                </a>
                            </div>

                            <div className="contact-follow">
                                <h4 className="contact-subheading">Follow Us:</h4>
                                <div className="contact-social-icons">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                                    <a href="https://wa.me/919890911136" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                                    <a href="https://amazon.in" target="_blank" rel="noopener noreferrer"><FaAmazon /></a>
                                    <a href="https://skype.com" target="_blank" rel="noopener noreferrer"><FaSkype /></a>
                                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-box">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <input 
                                    type="text" 
                                    placeholder="Name*" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required 
                                />
                                <input 
                                    type="email" 
                                    placeholder="Email*" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required 
                                />
                                <input 
                                    type="tel" 
                                    placeholder="Phone No*" 
                                    name="phone" 
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required 
                                />
                                <textarea 
                                    placeholder="Message*" 
                                    name="message" 
                                    rows="4" 
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                                <button type="submit" className="submit-btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map-section">
                <iframe
                    src="https://maps.google.com/maps?q=S%20V%20Trading%20Company,%20Nyati%20Estate%20Rd,%20Nyati%20County,%20Mohammed%20Wadi,%20Pune,%20Maharashtra%20411028&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="S V Trading Company Location"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact3;
