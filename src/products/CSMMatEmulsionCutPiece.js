import React from 'react';
import '../css/PolyesterResin.css'; // Ensure this is the correct path to your CSS file
import Image1 from "../assets/csmmat.jpg";
import EnquiryPage from '../pages/EnquiryPage';


const CSMMatEmulsionCutPiece = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            src={Image1}
            alt="300GSM Chopped Strand Mat"
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">CSM Mat Emulsion Cut Piece</h2>
          <br />
          <br />
          <div className="product-description">
            <h3 className="product-description-title">Product Description</h3>
            <p>
              With sincerity and hard work of our professionals, we have carved a niche for ourselves in this domain by providing a premium quality gamut of CSM Mat Emulsion Cut Piece.
            </p>
            <p>S V Trading is a leading Manufacturer and Wholesaler of industrial chemicals, FRP Resin and many more.</p>
          </div>
        </div>
      </div>
    </div>
    <section>
    <EnquiryPage  productName="CSM Mat Emulsion Cut Piece"/>
 </section>
 </section>
  );
};

export default CSMMatEmulsionCutPiece;
