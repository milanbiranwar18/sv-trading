import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/AcrylicHomopolymer.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const AcrylicAcidHomopolymer = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Acrylic Acid Homopolymer"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Acrylic Acid Homopolymer</h2>
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
                <td>Form</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Packaging Details</td>
                <td>200 L Drum</td>
              </tr>
              <tr>
                <td>Grade</td>
                <td>Industrial Grade</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>Transparent</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>60 kg</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Can</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Acrylic Acid Homopolymer</b>
          <li>Scale Inhibitor for Carbonates, Sulfates & sparingly Soluble salts for acidic formulations</li>
          <li>Mainly used as water treatment chemicals</li>
          <li>High molecular weight polymer</li>
          <li>Excellent scale inhibition properties</li>
          <li>Compatible with various water treatment systems</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Water Treatment</li>
          <li>Scale Inhibition</li>
          <li>Industrial Water Systems</li>
          <li>Cooling Water Treatment</li>
          <li>Boiler Water Treatment</li>
          <li>Acidic Formulations</li>
          <li>Chemical Manufacturing</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 5 days</li>
          <li>Minimum Order Quantity: 60 Kg</li>
          <li>Price: ₹ 130/Kg</li>
          <li>High efficiency scale inhibitor</li>
          <li>Industrial grade quality</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Acrylic Acid Homopolymer"/>
      </div>
    </section>
    </section>

    
  );
};

export default AcrylicAcidHomopolymer; 