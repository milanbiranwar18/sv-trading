import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/SPCP.jpg'; // Using placeholder image
import EnquiryPage from '../pages/EnquiryPage';

const SodiumCarbonate = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Sodium Carbonate"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Sodium Carbonate (Soda Ash)</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>25kg, 50kg, 100kg</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Bag, Drum</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Glass Manufacturing, Detergent, Chemical Industry</td>
              </tr>
              <tr>
                <td>Physical State</td>
                <td>Powder</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Key Applications:</b>
          <li>Glass Manufacturing</li>
          <li>Detergent and Soap Industry</li>
          <li>Chemical Manufacturing</li>
          <li>Water Treatment</li>
          <li>Textile Industry</li>
          <li>Paper and Pulp Industry</li>
          <li>Food Industry</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 100000 kg/month</li>
          <li>Delivery Time: 3-7 days</li>
          <li>Available Forms: Light, Dense</li>
          <li>Purity: 99%</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Sodium Carbonate"/>
      </div>
    </section>
    </section>

    
  );
};

export default SodiumCarbonate; 