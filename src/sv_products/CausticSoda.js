import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/SPCP.jpg'; // Using placeholder image
import EnquiryPage from '../pages/EnquiryPage';

const CausticSoda = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Caustic Soda"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Caustic Soda (Sodium Hydroxide)</h2>
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
                <td>Chemical Manufacturing, Textile, Paper Industry</td>
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
          <li>Chemical Manufacturing</li>
          <li>Textile Industry (Scouring & Mercerizing)</li>
          <li>Paper and Pulp Industry</li>
          <li>Soap and Detergent Manufacturing</li>
          <li>Water Treatment</li>
          <li>Aluminum Production</li>
          <li>Petroleum Refining</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 100000 kg/month</li>
          <li>Delivery Time: 3-7 days</li>
          <li>Available Forms: Flakes, Pellets, Liquid</li>
          <li>Purity: 98-99%</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Caustic Soda"/>
      </div>
    </section>
    </section>

    
  );
};

export default CausticSoda; 