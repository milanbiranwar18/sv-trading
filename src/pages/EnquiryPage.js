import React, { useState } from 'react';
// import '../css/Contact1.css';
import '../css/EnquiryPage.css'


const EnquiryPage = ({ productName }) => {
  const [formData, setFormData] = useState({
    txt_fullname: '',
    txt_email: '',
    txt_phone: '',
    txt_message: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { txt_fullname, txt_email, txt_phone, txt_message } = formData;

    const whatsappMessage = `Hello Sammet Sir, I hope this message finds you well, Actually I have a query for this product. Here are my details:%0A%0AProduct: ${productName}%0AName: ${txt_fullname}%0AEmail: ${txt_email}%0APhone: ${txt_phone}%0AQuery: ${txt_message}%0A%0AI would appreciate it if you could provide clarification on the above. Thank you.`;

    const whatsappLink = `https://wa.me/919890911136?text=${whatsappMessage}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappLink, '_blank');

    // Show thank-you popup
    setShowPopup(true);

    // Reset form fields
    setFormData({
      txt_fullname: '',
      txt_email: '',
      txt_phone: '',
      txt_message: ''
    });
  };

  return (
    <section className="contactForm common-section border-bottom">
      <div className="container-xl">
        <h4 className="fz24 fw800">Tell us what you think!</h4>
        <p className="fz14 fw500 mb-5">Any questions? We’re eager to help.</p>
        <div className="p-4 bg-white">
          <form onSubmit={handleSubmit} className="user-signup" autoComplete="off" noValidate>
            <div className="mb-4">
              <input
                type="text"
                name="txt_fullname"
                placeholder="Full Name"
                className="form-control"
                value={formData.txt_fullname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="txt_email"
                placeholder="Email ID"
                className="form-control"
                value={formData.txt_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="txt_phone"
                placeholder="Phone Number"
                className="form-control"
                value={formData.txt_phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="txt_message"
                placeholder="Your Query"
                className="form-control"
                value={formData.txt_message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="common-btn">Submit</button>
          </form>
        </div>
        {showPopup && (
          <div className="thank-you-popup">
            <p>Thank you for your message! We will get back to you soon.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EnquiryPage;
