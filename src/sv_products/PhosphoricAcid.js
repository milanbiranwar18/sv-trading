import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/SPCP.jpg'; // Using placeholder image
import EnquiryPage from '../pages/EnquiryPage';

const PhosphoricAcid = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Phosphoric Acid"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Phosphoric Acid</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Bottle</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>100-500 ml</td>
              </tr>
              <tr>
                <td>Specific Gravity</td>
                <td>1700 (at 20 Degree C)</td>
              </tr>
              <tr>
                <td>Orthophosphoric Acid</td>
                <td>86.0 H3PO4 % w/w min</td>
              </tr>
              <tr>
                <td>Physical State</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Technical Specifications:</b>
          <li>Chloride: 20.0 (as Cl, ppm)</li>
          <li>Fluoride: 100.0 (as F, ppm)</li>
          <li>Iron: 10 (as Fe, ppm)</li>
          <li>Calcium: 80 (as Ca, ppm)</li>
          <li>Magnesium: 5.0 (as Mg, ppm)</li>
          <li>Heavy Metals: 10.0 (as Pb, ppm)</li>
          <li>Sulphate: 300.0 (as SO4, ppm)</li>
          </p>
          <br/>
          <p>
          <b>Physical Properties:</b>
          <li>Clear Colorless</li>
          <li>Odorless</li>
          <li>Viscous liquid</li>
          </p>
          <br/>
          <p>
          <b>Applications:</b>
          <li>Fertilizer Manufacturing</li>
          <li>Food Industry</li>
          <li>Pharmaceutical Industry</li>
          <li>Metal Treatment</li>
          <li>Water Treatment</li>
          <li>Chemical Manufacturing</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 50000 L/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>Grade: Technical Grade</li>
          <li>Available in various concentrations</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Phosphoric Acid"/>
      </div>
    </section>
    </section>

    
  );
};

export default PhosphoricAcid; 