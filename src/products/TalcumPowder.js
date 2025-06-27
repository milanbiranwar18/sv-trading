import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/talcumpowder.jpg";
import EnquiryPage from '../pages/EnquiryPage';

const TalcumPowder = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Talcum Powder"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Talcum Powder</h2>
          <p><strong>Product Details:</strong></p>
          <table>
            <tbody>
              <tr>
                <td>Form</td>
                <td>Powder</td>
              </tr>
              <tr>
                <td>Fragrance</td>
                <td>Sweet</td>
              </tr>
              <tr>
                <td>Type Of Packaging</td>
                <td>50 kg</td>
              </tr>
              <tr>
                <td>Brightness</td>
                <td>90% Super Fine</td>
              </tr>    
            </tbody>
          </table>
          <p>
            <strong>Sanjeera/Putti/Talcum Powder</strong>
          </p>
          <div className="product-description">
            <h3 className="product-description-title">Product Description</h3>
            <p>
              With sincerity and hard work of our professionals, we have carved a niche for ourselves in this domain by providing a premium quality gamut of Talcum Powder.
            </p>
            <p>S V Trading is the leading manufacturer and wholesaler of Cobalt Octoate, FRP Resin, and many more.</p>
          </div>
        </div>
      </div>
    </div>
    <section>
    <EnquiryPage  productName="Talcum Powder"/>

 </section>
 </section>
  );
};

export default TalcumPowder;
