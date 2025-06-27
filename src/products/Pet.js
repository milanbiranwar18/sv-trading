import React from 'react';
import '../css/PolyesterResin.css'; // Ensure this is the correct path to your CSS file
import Image1 from '../assets/pet.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const Pet = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="GP Resin"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Pet</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Minimum Order Quantity</td>
                <td>35 Kg</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>FRP</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>50 Litre</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>Yellow</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td></td>
              </tr>
              <tr>
                <td>Acid Value</td>
                <td>15-23 mg KOH/g</td>
              </tr>
              <tr>
                <td>Purity</td>
                <td>99 Percent</td>
              </tr>
              <tr>
                <td>Gel Time</td>
                <td>25 °C</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>Yellow color</p>
        </div>
      </div>
    </div>
    <section>
    <EnquiryPage  productName="Pet (GP Resin)"/>

 </section>
 </section>
  );
};

export default Pet;
