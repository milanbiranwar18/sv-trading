import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/vinylesterresinsecond.jpg";
import EnquiryPage from '../pages/EnquiryPage';

const VinylEsterResin1 = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Vinyl Ester Resin"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Vinyl Ester Resin</h2>
          <p><strong>Product Details:</strong></p>
          <table>
            <tbody>
              <tr>
                <td>Minimum Order Quantity</td>
                <td>35 Kg</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>FRP</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>20 Litre</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Styrene Content</td>
                <td>33%</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Drum</td>
              </tr>
              <tr>
                <td>Density</td>
                <td>1.08 g/mL</td>
              </tr>
            </tbody>
          </table>
          <br />
          <div className="product-description">
            <h3 className="product-description-title">Product Description</h3>
            <p>
              With sincerity and hard work of our professionals, we have carved a niche for ourselves in this domain by providing a premium quality gamut of Vinyl Ester Resin.
            </p>
            <p>S V Trading is a leading manufacturer and wholesaler of Cobalt Octoate, FRP Resin, and many more.</p>
          </div>
        </div>
      </div>
    </div>
    <section>
    <EnquiryPage  productName="Vinyl Ester Resin"/>
 </section>
 </section>
  );
};

export default VinylEsterResin1;
