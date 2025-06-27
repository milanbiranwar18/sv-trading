import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/monoeg.jpg";
import EnquiryPage from '../pages/EnquiryPage';

const MonoEthyleneGlycol = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Mono Ethylene Glycol"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Mono Ethylene Glycol</h2>
          <p><strong>Product Details:</strong></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Packaging Size</td>
                <td>25 - 30, 100 Liters</td>
              </tr>
              <tr>
                <td>Grade Standard</td>
                <td>Reagent Grade</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Plastic Barrel</td>
              </tr>
              <tr>
                <td>Purity</td>
                <td>99 Percent</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Liquid</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>With our extensive knowledge and expertise in the industry, we are proud to offer <strong>Mono Ethylene Glycol</strong>.</p>
          
          <ul>
            <br />
            <h3>Other Details:</h3>
            <li>Assay &gt; 95 Percent</li>
            <li>CAS No: 104-72-24-9</li>
          </ul>
        </div>
      </div>
    </div>
    <section>
    <EnquiryPage  productName="Mono Ethylene Glycol"/>
 </section>
 </section>
  );
};

export default MonoEthyleneGlycol;
