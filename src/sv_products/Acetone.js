import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/SPCP.jpg'; // Using placeholder image
import EnquiryPage from '../pages/EnquiryPage';

const Acetone = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Acetone"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Acetone</h2>
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
                <td>Purity %</td>
                <td>&gt;99%</td>
              </tr>
              <tr>
                <td>Packaging Details</td>
                <td>160 kg Drum</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Paint Thinner</td>
              </tr>
              <tr>
                <td>Grade Standard</td>
                <td>Industrial Grade</td>
              </tr>
              <tr>
                <td>Make</td>
                <td>India</td>
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
          <b>Applications:</b>
          <li>Paint and varnishes</li>
          <li>Plastics industry</li>
          <li>Textile industry</li>
          <li>Paint thinner</li>
          <li>Solvent for various chemicals</li>
          <li>Laboratory applications</li>
          <li>Pharmaceutical industry</li>
          <li>Cosmetic industry</li>
          </p>
          <br/>
          <p>
          <b>Key Features:</b>
          <li>High purity industrial grade</li>
          <li>Excellent solvent properties</li>
          <li>Fast evaporation rate</li>
          <li>Low toxicity</li>
          <li>Good miscibility with water</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 100000 kg/month</li>
          <li>Delivery Time: 5 days</li>
          <li>Packaging Details: S.V. Trading company, Pune</li>
          <li>Minimum Order Quantity: 160 Kg</li>
          <li>Clear, colorless liquid with characteristic odor</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Acetone"/>
      </div>
    </section>
    </section>

    
  );
};

export default Acetone; 