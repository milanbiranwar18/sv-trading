import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/TSPP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const PotassiumPhosphate = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Potassium Phosphate"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Potassium Phosphate</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Purity/Concentration</td>
                <td>&gt;99%</td>
              </tr>
              <tr>
                <td>Grade</td>
                <td>Industrial Grade</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Granules</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Potassium Phosphate</b>
          <li>Potassium phosphate is used in the following products:</li>
          <li>Fertilisers</li>
          <li>pH regulators and water treatment products</li>
          <li>Washing & cleaning products</li>
          <li>Air care products</li>
          <li>Textile treatment products and dyes</li>
          <li>Laboratory chemicals</li>
          <li>Food industry applications</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Fertilizer Industry</li>
          <li>Water Treatment</li>
          <li>Detergent Manufacturing</li>
          <li>Textile Industry</li>
          <li>Food Industry</li>
          <li>Laboratory Reagent</li>
          <li>pH Regulation</li>
          <li>Chemical Manufacturing</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 Kg/month</li>
          <li>Delivery Time: 5 days</li>
          <li>Packaging Details: S.V.Trading company, Pune</li>
          <li>Price: ₹ 140/Kg</li>
          <li>High purity industrial grade</li>
          <li>Versatile industrial chemical</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Potassium Phosphate"/>
      </div>
    </section>
    </section>

    
  );
};

export default PotassiumPhosphate; 