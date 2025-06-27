import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const LiquidPolymaleicAcid = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Liquid Polymaleic Acid"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Liquid Polymaleic Acid</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Grade Standard</td>
                <td>Industrial Grade</td>
              </tr>
              <tr>
                <td>Physical State</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>60kg</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Can</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Industrial, Water treatment</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Polymaleic Acid</b>
          <li>Used as an Cooling Water system/Industrial Water Treatment</li>
          <li>Concrete Additive</li>
          <li>Water desalination</li>
          <li>Crude Oil evaporation</li>
          <li>Scale and corrosion inhibitor</li>
          <li>High molecular weight polymer</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Cooling Water Systems</li>
          <li>Industrial Water Treatment</li>
          <li>Concrete Industry</li>
          <li>Water Desalination</li>
          <li>Oil Industry</li>
          <li>Scale Prevention</li>
          <li>Corrosion Inhibition</li>
          <li>Chemical Manufacturing</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 5 days</li>
          <li>Minimum Order Quantity: 60 Kg</li>
          <li>Price: ₹ 135/Kg</li>
          <li>High efficiency scale inhibitor</li>
          <li>Industrial grade quality</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Liquid Polymaleic Acid"/>
      </div>
    </section>
    </section>

    
  );
};

export default LiquidPolymaleicAcid; 