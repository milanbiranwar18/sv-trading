import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUsers, faAward, faFlask, faShieldAlt, faGlobe, faTruck, faHandshake, faAtom, faVial } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import '../css/About.css'; 
import MissionVision from './MissionVision';
import TeamMembers from './TeamMembers';
import OurBranches from './OurBranches';
import aboutHeroImage from '../assets/about.png';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <div className="about-us-page">
            
            {/* Hero Section */}
            <section className="about-hero-section" data-aos="fade-in">
                <div className="hero-background-shapes">
                    <FontAwesomeIcon icon={faFlask} className="shape shape-1" />
                    <div className="shape bubble shape-2"></div>
                    <FontAwesomeIcon icon={faAtom} className="shape shape-3" />
                    <div className="shape bubble shape-4"></div>
                    <FontAwesomeIcon icon={faVial} className="shape shape-5" />
                    <div className="shape bubble shape-6"></div>
                    <FontAwesomeIcon icon={faFlask} className="shape shape-7" />
                    <div className="shape bubble shape-8"></div>
                </div>
                <div className="hero-content">
                    <h1>Your Trusted Partner in Chemical Trading</h1>
                    <p>Leading Wholesaler, Trader & Importer of Industrial Chemicals</p>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">18+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Products</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">1000+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Company Overview */}
            <section className="about-intro-section" data-aos="fade-up">
                <div className="container">
                    <h2>Welcome to SV Trading</h2>
                    <div className="company-overview">
                        <div className="overview-image" data-aos="fade-right">
                            <img src={aboutHeroImage} alt="SV Trading Operations" />
                        </div>
                        <div className="overview-text" data-aos="fade-left">
                            <p className="lead">
                                Established in 2005, SV Trading has emerged as a prominent player in the chemical industry. We are a leading Wholesaler, Trader, and Importer of a wide range of industrial chemicals, committed to providing high-quality products and exceptional service to our clients.
                            </p>
                            <p>
                                Our company specializes in sourcing and supplying premium industrial chemicals to various sectors including manufacturing, pharmaceuticals, textiles, automotive, and more. With our extensive network of suppliers and distributors, we ensure timely delivery and competitive pricing for all our products.
                            </p>
                        </div>
                    </div>
                    <div className="overview-features" data-aos="fade-up">
                        <div className="feature-item">
                            <FontAwesomeIcon icon={faShieldAlt} />
                            <h4>Quality Assured</h4>
                            <p>All products meet international quality standards</p>
                        </div>
                        <div className="feature-item">
                            <FontAwesomeIcon icon={faGlobe} />
                            <h4>Global Sourcing</h4>
                            <p>Products sourced from reputed manufacturers worldwide</p>
                        </div>
                        <div className="feature-item">
                            <FontAwesomeIcon icon={faTruck} />
                            <h4>Timely Delivery</h4>
                            <p>Efficient logistics and on-time delivery guarantee</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section" data-aos="fade-up">
                <div className="container">
                    <h2>Our Services</h2>
                    <div className="services-grid">
                        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faHandshake} />
                            </div>
                            <h3>Wholesale Trading</h3>
                            <p>Bulk supply of industrial chemicals to manufacturers and distributors across India.</p>
                        </div>
                        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faGlobe} />
                            </div>
                            <h3>Import Services</h3>
                            <p>Direct import of specialty chemicals from international manufacturers and suppliers.</p>
                        </div>
                        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                            <h3>Technical Support</h3>
                            <p>Expert guidance on product selection and application for optimal results.</p>
                        </div>
                        <div className="service-card" data-aos="fade-up" data-aos-delay="400">
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faTruck} />
                            </div>
                            <h3>Logistics Solutions</h3>
                            <p>Comprehensive logistics support including warehousing and distribution services.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="about-timeline-section" data-aos="fade-up">
                <div className="container">
                    <h2>Our Journey</h2>
                    <div className="timeline">
                        <div className="timeline-item" data-aos="fade-right">
                            <div className="timeline-content">
                                <h3>2005 - Foundation</h3>
                                <p>SV Trading was established with a vision to become a leading chemical trading company in India.</p>
                            </div>
                        </div>
                        <div className="timeline-item" data-aos="fade-left">
                            <div className="timeline-content">
                                <h3>2010 - Expansion</h3>
                                <p>Expanded product portfolio and began importing specialized chemicals from international markets.</p>
                            </div>
                        </div>
                        <div className="timeline-item" data-aos="fade-right">
                            <div className="timeline-content">
                                <h3>2015 - Market Leadership</h3>
                                <p>Established strong partnerships with leading manufacturers and became a trusted name in the industry.</p>
                            </div>
                        </div>
                        <div className="timeline-item" data-aos="fade-left">
                            <div className="timeline-content">
                                <h3>2020 - Digital Transformation</h3>
                                <p>Enhanced our digital presence and streamlined operations for better customer service.</p>
                            </div>
                        </div>
                        <div className="timeline-item" data-aos="fade-right">
                            <div className="timeline-content">
                                <h3>Today - Continued Growth</h3>
                                <p>Continuing to innovate and expand, serving diverse industries with quality chemical solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Principles Section */}
            <section className="about-principles-section" data-aos="fade-up">
                <div className="container">
                    <h2>Our Core Principles</h2>
                    <div className="principles-grid">
                        <div className="principle-item" data-aos="fade-up" data-aos-delay="100">
                            <FontAwesomeIcon icon={faCheckCircle} size="3x" className="principle-icon" />
                            <h3>Quality Assurance</h3>
                            <p>We source only the highest quality products from trusted manufacturers worldwide.</p>
                        </div>
                        <div className="principle-item" data-aos="fade-up" data-aos-delay="200">
                            <FontAwesomeIcon icon={faUsers} size="3x" className="principle-icon" />
                            <h3>Customer Focus</h3>
                            <p>Building lasting relationships through exceptional service and personalized solutions.</p>
                        </div>
                        <div className="principle-item" data-aos="fade-up" data-aos-delay="300">
                            <FontAwesomeIcon icon={faAward} size="3x" className="principle-icon" />
                            <h3>Integrity</h3>
                            <p>Operating with transparency, reliability, and ethical business practices.</p>
                        </div>
                        <div className="principle-item" data-aos="fade-up" data-aos-delay="400">
                            <FontAwesomeIcon icon={faFlask} size="3x" className="principle-icon" />
                            <h3>Innovation</h3>
                            <p>Continuously seeking new and better ways to serve our clients' evolving needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section" data-aos="fade-up">
                <div className="container">
                    <h2>What Our Clients Say</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="testimonial-rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>"SV Trading has been our reliable partner for industrial chemicals. Their quality and service are exceptional."</p>
                            <div className="testimonial-author">
                                <h4>Rajesh Kumar</h4>
                                <span>Production Manager, ABC Industries</span>
                            </div>
                        </div>
                        <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="testimonial-rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>"Excellent product range and timely delivery. SV Trading understands our requirements perfectly."</p>
                            <div className="testimonial-author">
                                <h4>Priya Sharma</h4>
                                <span>Procurement Head, XYZ Chemicals</span>
                            </div>
                        </div>
                        <div className="testimonial-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="testimonial-rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>"Professional service and competitive pricing. Highly recommended for all chemical needs."</p>
                            <div className="testimonial-author">
                                <h4>Mohan Singh</h4>
                                <span>Director, DEF Manufacturing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Mission Vision Section */}
            <section className="mission-vision-section" data-aos="fade-up">
                <MissionVision />
            </section>

            {/* Team Section */}
            <section data-aos="fade-up">
                <TeamMembers />
            </section>

            {/* Branches Section */}
            <section data-aos="fade-up">
                <OurBranches />
            </section>

        </div>
    );
};

export default About;
