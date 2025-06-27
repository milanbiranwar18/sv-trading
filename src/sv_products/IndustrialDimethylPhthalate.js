import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/SPCP.jpg'; // Using placeholder image
import EnquiryPage from '../pages/EnquiryPage';

const IndustrialDimethylPhthalate = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Industrial Dimethyl Phthalate"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Industrial Dimethyl Phthalate</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Grade</td>
                <td>Industrial</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Industrial Plastic process</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Barrel</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>230 kg</td>
              </tr>
              <tr>
                <td>Physical Form</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Applications:</b>
          <li>Solid rocket propellants</li>
          <li>Lacquers</li>
          <li>Plastics</li>
          <li>Safety glasses</li>
          <li>Rubber coating agents</li>
          <li>Plasticizer for polymers</li>
          <li>Adhesive formulations</li>
          </p>
          <br/>
          <p>
          <b>Key Features:</b>
          <li>High purity industrial grade</li>
          <li>Excellent plasticizing properties</li>
          <li>Low volatility</li>
          <li>Good compatibility with various polymers</li>
          <li>Stable under normal conditions</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 5 days</li>
          <li>Packaging Details: S. V. Trading Company, Handewadi, Pune</li>
          <li>Minimum Order Quantity: 230 Kg</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Industrial Dimethyl Phthalate"/>
      </div>
    </section>
    </section>

    
  );
};

export default IndustrialDimethylPhthalate; 