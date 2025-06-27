import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const KlettsAcidSlurry = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Kletts Acid Slurry"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Kletts Acid Slurry</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Purity</td>
                <td>0.90</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Grade</td>
                <td>Industrial</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>30 Max (10% Alc. Sol.) Kletts</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>100-250 Liter</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Barrels</td>
              </tr>
              <tr>
                <td>Appearance</td>
                <td>Clear yellowish honey brown slurry</td>
              </tr>
              <tr>
                <td>Acid Value</td>
                <td>220 to 240 mg/gm (As KOH)</td>
              </tr>
              <tr>
                <td>LABSA Contents</td>
                <td>90% +/- 1 Min</td>
              </tr>
              <tr>
                <td>Free LAB</td>
                <td>1.5 % Max (NDOM)</td>
              </tr>
              <tr>
                <td>Free Acid</td>
                <td>H2So4 % 7.0 Max</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Linear Alkyl Benzene Sulphonic Acid (LABSA) 90%</b>
          <li>Synthetic surfactant that is widely used in the formulation of Domestic Detergent Powder, Cake & Dish wash cleaners</li>
          <li>Constitutes the formulation of industrial cleaners</li>
          <li>Acts as emulsifier and coupling agent</li>
          <li>Characteristics of LABSA:</li>
          <li>It has low salt content</li>
          <li>High active matter</li>
          <li>Quick miscibility with water</li>
          <li>LABSA 90% serves as main raw material for various applications</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Domestic Detergent Powder</li>
          <li>Dish Wash Cleaners</li>
          <li>Industrial Cleaners</li>
          <li>Emulsifier</li>
          <li>Coupling Agent</li>
          <li>Surfactant Formulations</li>
          <li>Cleaning Products</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>Price: ₹ 88/Kg</li>
          <li>High quality surfactant</li>
          <li>Industrial grade specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Kletts Acid Slurry"/>
      </div>
    </section>
    </section>

    
  );
};

export default KlettsAcidSlurry; 