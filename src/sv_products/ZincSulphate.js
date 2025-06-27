import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/Zinc Sulphate Monohydrate.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const ZincSulphate = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Zinc Sulphate"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Zinc Sulphate</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Purity/Concentration</td>
                <td>99%</td>
              </tr>
              <tr>
                <td>Grade</td>
                <td>Industrial</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Powder</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Agriculture</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Zinc Sulphate</b>
          <li>Zinc sulfate (35% zinc) is usually used to supply the needed amount of zinc when dry fertilizer materials are used</li>
          <li>This material can be either broadcast and incorporated before planting, or used in a starter fertilizer</li>
          <li>It blends well with other dry fertilizer materials</li>
          <li>High purity industrial grade</li>
          <li>Essential micronutrient for plants</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Agriculture (Micronutrient)</li>
          <li>Fertilizer Industry</li>
          <li>Soil Treatment</li>
          <li>Crop Nutrition</li>
          <li>Chemical Manufacturing</li>
          <li>Laboratory Reagent</li>
          <li>Industrial Processes</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10 tons/month</li>
          <li>Delivery Time: 5 days</li>
          <li>Packaging Details: S.V.Trading company, Pune</li>
          <li>Price: ₹ 42/Kg</li>
          <li>High purity industrial grade</li>
          <li>Consistent quality and specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Zinc Sulphate"/>
      </div>
    </section>
    </section>

    
  );
};

export default ZincSulphate; 