import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faShieldAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import '../css/SlideText.css';

const SlideText = () => {
  return (
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
  );
};

export default SlideText;
