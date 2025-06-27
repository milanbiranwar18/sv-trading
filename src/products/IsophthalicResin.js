import React from 'react';
import '../css/PolyesterResin.css'; // Ensure this is the correct path to your CSS file
import Image1 from "../assets/isophthalicresin.jpg";
import EnquiryPage from '../pages/EnquiryPage';

const IsophthalicResin = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Isophthalic Resin"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Isophthalic Resin</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Minimum Order Quantity</td>
                <td>100 Kg</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>FRP</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Purity</td>
                <td>97%</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>35 Litre</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Drum</td>
              </tr>
              <tr>
                <td>Gel Time</td>
                <td>20 Min</td>
              </tr>
              <tr>
                <td>Acid Value</td>
                <td>23 mg KOH/g</td>
              </tr>
            </tbody>
          </table>
          <br />
          <div className="product-description">
            <h3 className="product-description-title">Product Description</h3>
            <p>
              With sincerity and hard work of our professionals, we have carved a niche for ourselves in this domain by providing a premium quality gamut of Isophthalic Resin.
            </p>
            <p>S V Trading is the leading Manufacturer and Wholesaler of Cobalt Octoate, FRP Resin, and many more.</p>
          </div>
        </div>
      </div>
    </div>
    <section>
    <EnquiryPage  productName="Isophthalic Resin"/>
 </section>
 </section>
  );
};

export default IsophthalicResin;
