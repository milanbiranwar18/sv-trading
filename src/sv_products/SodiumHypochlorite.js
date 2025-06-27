import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/SPCP.jpg'; // Using placeholder image
import EnquiryPage from '../pages/EnquiryPage';

const SodiumHypochlorite = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Sodium Hypochlorite"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Sodium Hypochlorite</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>25L, 50L, 200L</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Drum, Container</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Water Treatment, Disinfection, Bleaching</td>
              </tr>
              <tr>
                <td>Physical State</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Key Applications:</b>
          <li>Water Treatment and Disinfection</li>
          <li>Swimming Pool Sanitization</li>
          <li>Textile Bleaching</li>
          <li>Paper and Pulp Industry</li>
          <li>Food Processing Sanitization</li>
          <li>Wastewater Treatment</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 50000 L/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>Available Concentrations: 10-15%</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Sodium Hypochlorite"/>
      </div>
    </section>
    </section>

    
  );
};

export default SodiumHypochlorite; 