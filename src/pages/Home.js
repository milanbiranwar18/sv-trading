import React from "react";
import ImageSlider from "./ImageSlider";
import Home_page1 from "./Home_page1";
import SlideText from "./SlideText";
import PopupBoxes from "./PopupBoxes";
import "../Home.css"; 
import { Link } from 'react-router-dom';
import OurBranches from "./OurBranches";
import HomePage from "./demo_homepage";

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock, faFlask, faIndustry, faFillDrip, faHeadset, faShieldAlt, faAward, faUsers } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <div className="home-container">
            {/* Top Contact Bar */}
            <div className="top-contact-bar">
                <div className="contact-info">
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faClock} />
                        <span>Work Time: Mon - Fri 09AM - 6PM</span>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>Call Us: +91 9890911136</span>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <span>WhatsApp: +91 9890911136</span>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>Email: svtrading36@gmail.com</span>
                    </div>
                </div>
                <div className="cta-buttons">
                    <Link to="/contact" className="get-quote-btn">Get a Quote</Link>
                </div>
                
            </div>

            {/* Main Hero Section */}
            <ImageSlider />

            <section>
                <SlideText />
            </section>
            <section>
                <PopupBoxes />
            </section>

            {/* Core Offerings Section */}
            <section className="offerings-section">
                <div className="container">
                    <h2 className="section-title">Our Core Offerings</h2>
                    <p className="section-subtitle">Delivering excellence and reliability in every product and service.</p>
                    <div className="offerings-grid">
                        <div className="offering-card">
                            <FontAwesomeIcon icon={faFlask} className="offering-icon" />
                            <h3>Chemical Solutions</h3>
                            <p>Comprehensive range of industrial chemicals, resins, and specialty formulations to ensure quality and efficiency.</p>
                            <Link to="/products" className="offering-link">Learn More</Link>
                        </div>
                        <div className="offering-card">
                            <FontAwesomeIcon icon={faIndustry} className="offering-icon" />
                            <h3>Fiber Molding</h3>
                            <p>High-quality fiber molding solutions for automotive, aerospace, and industrial applications.</p>
                            <Link to="/products" className="offering-link">Learn More</Link>
                        </div>
                        <div className="offering-card">
                            <FontAwesomeIcon icon={faFillDrip} className="offering-icon" />
                            <h3>Industrial Resins</h3>
                            <p>Premium polyester and vinyl ester resins engineered for strength, durability, and performance.</p>
                            <Link to="/products" className="offering-link">Learn More</Link>
                        </div>
                        <div className="offering-card">
                            <FontAwesomeIcon icon={faHeadset} className="offering-icon" />
                            <h3>Technical Support</h3>
                            <p>Expert consultation and technical support services for all your chemical and manufacturing needs.</p>
                            <Link to="/contact" className="offering-link">Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="feature-item">
                        <div className="feature-image">
                            <img src={"/src/assets/home2.png"} alt="Chemical Solutions" />
                        </div>
                        <div className="feature-text">
                            <h2>Chemical Solutions</h2>
                            <p>Comprehensive range of industrial chemicals, resins, and specialty formulations designed for various manufacturing processes. Our products ensure quality, efficiency, and environmental compliance.</p>
                            <Link to="/products" className="feature-link">Explore Now</Link>
                        </div>
                    </div>
                    <div className="feature-item reverse">
                        <div className="feature-image">
                            <img src={"/src/assets/home3.png"} alt="Fiber Molding Products" />
                        </div>
                        <div className="feature-text">
                            <h2>Fiber Molding Products</h2>
                            <p>High-quality fiber molding solutions for automotive, aerospace, and industrial applications. Our advanced manufacturing processes deliver durable, lightweight, and cost-effective products.</p>
                            <Link to="/products" className="feature-link">Explore Now</Link>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-image">
                            <img src={"/src/assets/home4.png"} alt="Industrial Resins" />
                        </div>
                        <div className="feature-text">
                            <h2>Industrial Resins</h2>
                            <p>Premium polyester resins, vinyl ester resins, and specialty formulations for composite manufacturing. Engineered for strength, durability, and performance.</p>
                            <Link to="/products" className="feature-link">Explore Now</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us-section">
                <div className="container">
                    <h2 className="section-title">Why Choose S V Trading?</h2>
                    <p className="section-subtitle">A legacy of trust, innovation, and unwavering commitment to quality.</p>
                    <div className="why-choose-us-grid">
                        <div className="why-card">
                            <FontAwesomeIcon icon={faAward} className="why-icon" />
                            <h3>Legacy of Trust</h3>
                            <p>With a foundation built in 1985, we have decades of experience in delivering reliable and innovative solutions to our clients.</p>
                        </div>
                        <div className="why-card">
                            <FontAwesomeIcon icon={faShieldAlt} className="why-icon" />
                            <h3>Commitment to Quality</h3>
                            <p>We are dedicated to providing the highest quality products, ensuring performance and safety in every batch we produce.</p>
                        </div>
                        <div className="why-card">
                            <FontAwesomeIcon icon={faUsers} className="why-icon" />
                            <h3>Customer-Centric Approach</h3>
                            <p>Your success is our priority. We work closely with you to provide tailored solutions and expert technical support.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="about-container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>About Our Company</h2>
                            <p>
                                Established as a trusted manufacturer, supplier, and service provider, S.V. TRADING Pvt Ltd. 
                                specializes in high-quality chemicals, fiber molding products, and industrial solutions. 
                                Our products, known for their durability, reliability, and performance, are crafted using 
                                premium materials from certified vendors and produced in our advanced facility with superior technology.
                            </p>
                            <p>
                                Supported by a skilled team and well-equipped infrastructure, we ensure timely delivery, 
                                custom solutions, and complete client satisfaction. With over three decades of excellence, 
                                we have built a strong presence through dedication to quality and innovation.
                            </p>
                        </div>
                        <div className="about-image">
                            <img src="/src/assets/about.png" alt="About S.V. TRADING" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="contact-cta">
                <div className="cta-container">
                    <div className="cta-content">
                        <h2>Looking to Contact Us Now!</h2>
                        <p>Get in touch with our expert team for all your chemical and manufacturing needs</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="cta-btn primary">Book Online</Link>
                            <Link to="/contact" className="cta-btn secondary">Contact Us</Link>
                        </div>
                    </div>
                    <div className="cta-phone">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>+91 9890911136</span>
                    </div>
                </div>
            </section>

            {/* Working Hours Section */}
            <section className="working-hours">
                <div className="hours-container">
                    <h3>Working Hours:</h3>
                    <div className="hours-grid">
                        <div className="hours-item">
                            <span className="day">Mon - Fri</span>
                            <span className="time">8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="hours-item">
                            <span className="day">Saturday</span>
                            <span className="time">9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="hours-item">
                            <span className="day">Sunday</span>
                            <span className="time">Closed</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Original Sections */}
            <section>
                <Home_page1 />
            </section>

            <section>
                <OurBranches />
            </section>
        </div>
    );
};

export default Home;
