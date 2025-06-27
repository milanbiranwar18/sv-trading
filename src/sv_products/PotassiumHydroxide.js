import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/SPCP.jpg'; // Using placeholder image
import EnquiryPage from '../pages/EnquiryPage';

const PotassiumHydroxide = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Potassium Hydroxide"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Potassium Hydroxide (Caustic Potash)</h2>
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
                <td>Chemical Manufacturing, Soap Making, Food Industry</td>
              </tr>
              <tr>
                <td>Physical State</td>
                <td>Solid (Flakes/Pellets)</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Key Applications:</b>
          <li>Soap and Detergent Manufacturing</li>
          <li>Food Industry (Potassium Sorbate)</li>
          <li>Chemical Manufacturing</li>
          <li>Battery Manufacturing</li>
          <li>Textile Industry</li>
          <li>Pharmaceutical Industry</li>
          <li>Water Treatment</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 50000 kg/month</li>
          <li>Delivery Time: 3-7 days</li>
          <li>Available Forms: Flakes, Pellets, Liquid</li>
          <li>Purity: 90-95%</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Potassium Hydroxide"/>
      </div>
    </section>
    </section>

    
  );
};

export default PotassiumHydroxide; 