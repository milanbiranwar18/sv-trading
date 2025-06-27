import React from 'react';
import '../css/PolyesterResin.css'; // Ensure this is the correct path to your CSS file
import Image1 from "../assets/hydrochloricacid.jpg";
import EnquiryPage from '../pages/EnquiryPage';


const HydrochloricAcid = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Hydrochloric Acid"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Hydrochloric Acid</h2>
          <br />
          <div className="product-description">
            <h3 className="product-description-title">Product Description</h3>
            <p>
              With sincerity and hard work of our professionals, we have carved a niche for ourselves in this domain by providing a premium quality gamut of Hydrochloric Acid.
            </p>
            <p>S V Trading is a leading Manufacturer and Wholesaler of industrial chemicals, FRP Resin, and many more.</p>
          </div>
        </div>
      </div>
    </div>
    <section>
    <EnquiryPage  productName="Hydrochloric Acid"/>
 </section>
 </section>
  );
}

export default HydrochloricAcid;
