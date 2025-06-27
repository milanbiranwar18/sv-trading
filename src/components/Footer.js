import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../sv_assets/svtradinglogo.jpg';
import "../css/Footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-main">
                <div className="footer-about">
                    <img src={logo} alt="SV Trading" className="footer-logo" />
                    <p>SV Trading is a leading wholesaler and importer of high-quality industrial chemicals, committed to delivering excellence and reliability to our clients nationwide.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/testing">Testing</Link></li>
                        <li><Link to="/rnd">R & D</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>
                            <a href="https://www.google.com/maps/search/?api=1&query=S+V+Trading+Company,Nyati+Estate+Rd,Nyati+County,Mohammed+Wadi,Pune,Maharashtra+411028" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> S V Trading Company, Nyati Estate Rd, Nyati County, Mohammed Wadi, Pune, Maharashtra 411028
                            </a>
                        </li>
                        <li>
                            <a href="tel:+919890911136">
                                <FontAwesomeIcon icon={faPhoneAlt} /> +91 9890911136
                            </a>
                        </li>
                        <li>
                            <a href="mailto:svtrading36@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} /> svtrading36@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} SV Trading. All Rights Reserved.</p>
                </div>
                <div className="footer-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="https://wa.me/919890911136" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
