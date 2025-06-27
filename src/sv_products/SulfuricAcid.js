import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/SPCP.jpg'; // Using placeholder image
import EnquiryPage from '../pages/EnquiryPage';

const SulfuricAcid = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Sulfuric Acid"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Sulfuric Acid</h2>
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
                <td>Chemical Manufacturing, Fertilizer, Battery</td>
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
          <li>Fertilizer Manufacturing</li>
          <li>Battery Acid</li>
          <li>Chemical Manufacturing</li>
          <li>Petroleum Refining</li>
          <li>Metal Processing</li>
          <li>Textile Industry</li>
          <li>Water Treatment</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 100000 L/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>Available Concentrations: 93-98%</li>
          <li>Grade: Technical Grade</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Sulfuric Acid"/>
      </div>
    </section>
    </section>

    
  );
};

export default SulfuricAcid; 