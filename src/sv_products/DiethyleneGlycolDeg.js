import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const DiethyleneGlycolDeg = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Diethylene Glycol DEG"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Diethylene Glycol DEG</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Purity %</td>
                <td>99%</td>
              </tr>
              <tr>
                <td>Grade Standard</td>
                <td>Industrial Grade</td>
              </tr>
              <tr>
                <td>Packaging Details</td>
                <td>50 litres Drum</td>
              </tr>
              <tr>
                <td>Physical State</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Preparation of antifreeze and dyes</td>
              </tr>
              <tr>
                <td>Minimum Order Quantity</td>
                <td>230 Kg</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹ 70/Kg</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Diethylene Glycol (DEG)</b>
          <li>Organic compound with the formula (HOCH2CH2)2O</li>
          <li>Colorless, practically odorless, and hygroscopic liquid</li>
          <li>Sweetish taste</li>
          <li>Four carbon dimer of ethylene glycol</li>
          <li>Used in antifreezing agents</li>
          <li>Used in brake fluid</li>
          <li>Used in cigarettes</li>
          <li>Used in dyes</li>
          <li>Used as plasticizer</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Antifreeze Manufacturing</li>
          <li>Dye Production</li>
          <li>Brake Fluid</li>
          <li>Tobacco Industry</li>
          <li>Plasticizer</li>
          <li>Chemical Manufacturing</li>
          <li>Industrial Processes</li>
          <li>Automotive Industry</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 5 days</li>
          <li>High purity industrial grade</li>
          <li>Consistent quality and specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Diethylene Glycol DEG"/>
      </div>
    </section>
    </section>

    
  );
};

export default DiethyleneGlycolDeg; 