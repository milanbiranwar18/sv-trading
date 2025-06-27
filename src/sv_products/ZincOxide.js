import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/SPCP.jpg'; // Using placeholder image
import EnquiryPage from '../pages/EnquiryPage';

const ZincOxide = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Zinc Oxide Powder"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Zinc Oxide Powder</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Purity</td>
                <td>99%</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Industrial</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Bag</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Powder</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Applications:</b>
          <li>Rubber industry (vulcanization)</li>
          <li>Glass and ceramic products</li>
          <li>Chemical industry catalyst</li>
          <li>Paints and coatings</li>
          <li>Corrosion inhibitor</li>
          <li>Mildew control</li>
          <li>Pharmaceutical industry</li>
          <li>Cosmetic industry</li>
          </p>
          <br/>
          <p>
          <b>Key Features:</b>
          <li>Largely inert white compound</li>
          <li>Excellent bulking agent and filler</li>
          <li>High-quality white pigment</li>
          <li>Good UV protection properties</li>
          <li>Stable under normal conditions</li>
          <li>Non-toxic and safe for various applications</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10 tons/month</li>
          <li>Delivery Time: 5 days</li>
          <li>Packaging Details: S.V. Trading company, Pune</li>
          <li>Available in various particle sizes</li>
          <li>High surface area for better reactivity</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Zinc Oxide Powder"/>
      </div>
    </section>
    </section>

    
  );
};

export default ZincOxide; 