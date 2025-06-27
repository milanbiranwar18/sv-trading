import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/HEDPAcid.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const HEDPAcid = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="HEDP Acid 50-60%"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">HEDP Acid 50-60%</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Can</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>60 kg</td>
              </tr>
              <tr>
                <td>Grade</td>
                <td>Technical</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>HEDP, 1-Hydroxyethylidene-1, 1-Diphosphonic Acid</b>
          <li>Used for Water Treatment Application Formulation</li>
          <li>Chelating agent</li>
          <li>Use in agro chemical</li>
          <li>Food chemical</li>
          <li>Fragrance industry</li>
          <li>Scale and corrosion inhibitor</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Water Treatment</li>
          <li>Agricultural Chemicals</li>
          <li>Food Industry</li>
          <li>Fragrance Industry</li>
          <li>Industrial Water Treatment</li>
          <li>Cooling Water Systems</li>
          <li>Boiler Water Treatment</li>
          <li>Scale Prevention</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 2 days</li>
          <li>Packaging Details: 60 kg can or 350 kg drum</li>
          <li>Minimum Order Quantity: 60 Kg</li>
          <li>Price: ₹ 60/Kg</li>
          <li>High-efficiency scale and corrosion inhibitor</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="HEDP Acid 50-60%"/>
      </div>
    </section>
    </section>

    
  );
};

export default HEDPAcid;
