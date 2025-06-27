import React, { useState } from 'react';
import '../css/Contact1.css';
import Image1 from '../pages/images/contact_image.jpeg';
import indiamartLogo from '../assets/INDIAMART.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import OurBranches from './OurBranches';

const Contact1 = () => {
  const [formData, setFormData] = useState({
    txt_fullname: '',
    txt_email: '',
    txt_phone: '',
    txt_message: ''
  });

  const [showPopup, setShowPopup] = useState(false); // State for showing thank-you popup

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { txt_fullname, txt_email, txt_phone, txt_message } = formData;
    
    const whatsappMessage = `Name: ${txt_fullname}%0AEmail: ${txt_email}%0APhone: ${txt_phone}%0AMessage: ${txt_message}`;
    
    // WhatsApp link with form data
    const whatsappLink = `https://wa.me/919822912970?text=${whatsappMessage}`;

    // Open WhatsApp with the pre-filled message (this happens before resetting the form)
    window.open(whatsappLink, '_blank');

    // Show thank-you popup
    setShowPopup(true);

    // Reset form fields (after the WhatsApp redirection)
    setFormData({
      txt_fullname: '',
      txt_email: '',
      txt_phone: '',
      txt_message: ''
    });
  };

  return (
    <div>
      <section className="image-section">
        <div className="image-container">
          <img src={Image1} alt="Heramb Laboratory" className="about-image" />
        </div>
      </section>

      <section className="contactForm common-section border-bottom">
        <div className="container-xl">
          <div className="row">
            <div className="col-sm-5">
              <div className="contactFormAddress h-100 d-flex flex-column justify-content-center">
                <div className="contactFormInner">
                  <div className="d-flex">
                    <i className="fas fa-map-marker-alt fa-3x text-orange"></i>
                    <div className="ms-5 mt-4">
                      <a href="https://www.google.com/maps" className="no-underline-black" target="_blank" rel="noopener noreferrer">
                        S V Trading Company, <br />
                        Nyati Estate Rd, <br />
                        Nyati County, Mohammed Wadi,  <br />
                        Pune, Maharashtra 411028<br /><br />
                      </a>
                      <a href="tel:+919890911136" className="mt-4 fw600 d-inline-block text-orange-link">
                        +91 9890911136  <br />
                      </a>
                      <a href="tel:+919922220932" className="mt-4 fw600 d-inline-block text-orange-link">
                        +91 9922220932 <br />
                            </a>
                      <p>
                        <a href="mailto:svtrading36@gmail.com" className="mt-4 fw600 d-inline-block text-orange-link">
                          <i className="fas fa-envelope me-2"></i> svtrading36@gmail.com
                        </a>
                      </p>
                    </div>
                    <section className='social_media'>
                      <div className="follow-us-map">
                        <h3>Follow Us</h3>
                        <div>
                          <a href="https://wa.me/919890911136?text=Hello%20V.%20Yadav,%20I%20hope%20this%20message%20finds%20you%20well.%20I%20have%20some%20queries%20and%20would%20appreciate%20it%20if%20you%20could%20clarify%20them.%20Thank%20you."
                              target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366', fontSize: '40px', paddingRight: '15px' }} />
                          </a>
                          <a href="https://www.indiamart.com/svtradingco/" target="_blank" rel="noopener noreferrer">
                            <img className='img_class' src={indiamartLogo} alt="Indiamart" />
                          </a>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-1 verticleBorderContainer">
              <div className="verticleBorder"></div>
            </div>

            <div className="col-sm-6">
              <h4 className="fz24 fw800">Tell us what you think!</h4>
              <p className="fz14 fw500 mb-5">Any questions? We’re eager to help.</p>
              <form onSubmit={handleSubmit} className="user-signup" id="enquiryform" name="enquiryform" autoComplete="off" noValidate>
                <div className="mb-4">
                  <input type="text" name="txt_fullname" id="txt_fullname" placeholder="Full Name" className="form-control" value={formData.txt_fullname} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                  <input type="email" name="txt_email" id="txt_email" placeholder="Email ID" className="form-control" value={formData.txt_email} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                  <input type="text" name="txt_phone" id="txt_phone" placeholder="Phone No" className="form-control" value={formData.txt_phone} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                  <textarea name="txt_message" id="txt_message" className="form-control" rows="5" placeholder="Message" value={formData.txt_message} onChange={handleChange} required></textarea>
                </div>
                <div className="mt-5">
                  <input type="submit" name="mysubmit" value="Submit" className="common-btn orange py-4 px-5 fw600" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Popup for Thank You message */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h4>Thank you for contacting us!</h4>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}


      <section >
        <OurBranches />
      </section>

    </div>
  );
};

export default Contact1;
