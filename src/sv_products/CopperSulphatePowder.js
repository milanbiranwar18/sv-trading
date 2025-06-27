import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/coppersulphatecrystal.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const CopperSulphatePowder = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Copper Sulphate Powder"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Copper Sulphate Powder</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr><td>Purity</td><td>98%</td></tr>
              <tr><td>Packaging Size</td><td>50 Kg</td></tr>
              <tr><td>Packaging Type</td><td>Packet</td></tr>
              <tr><td>Material</td><td>Copper, Sulphate</td></tr>
              <tr><td>Application</td><td>Fungicides</td></tr>
              <tr><td>Usage</td><td>Agriculture</td></tr>
              <tr><td>Form</td><td>Powder</td></tr>
              <tr><td>Country of Origin</td><td>Made in India</td></tr>
              <tr><td>Price</td><td>₹ 132/Kilogram</td></tr>
            </tbody>
          </table>
          <br/>
          <b>Description:</b>
          <ul>
            <li>Copper sulfate is used as a drying agent in the anhydrous form.</li>
            <li>Used as an additive for fertilizers and foods.</li>
            <li>Several industrial applications such as textiles, leather, wood, batteries, ink, petroleum, paint, and metal, among others.</li>
            <li>Blue colored powder and crystals.</li>
          </ul>
          <b>Key Applications:</b>
          <ul>
            <li>Agriculture (Fungicide)</li>
            <li>Textile Industry</li>
            <li>Leather Industry</li>
            <li>Wood Treatment</li>
            <li>Battery Manufacturing</li>
            <li>Ink Production</li>
            <li>Petroleum Industry</li>
            <li>Paint Industry</li>
            <li>Metal Industry</li>
            <li>Fertilizer Additive</li>
          </ul>
          <b>Additional Information:</b>
          <ul>
            <li>Production Capacity: 10000 kg/month</li>
            <li>Delivery Time: 3-5 days</li>
            <li>High purity industrial grade</li>
            <li>Consistent quality and specifications</li>
          </ul>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Copper Sulphate Powder"/>
      </div>
    </section>
    </section>

    
  );
};

export default CopperSulphatePowder; 