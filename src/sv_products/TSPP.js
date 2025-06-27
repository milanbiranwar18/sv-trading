import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/TSPP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const TSPP = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Tetrasodium Pyrophosphate TSPP"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Tetrasodium Pyrophosphate TSPP</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Purity</td>
                <td>98%</td>
              </tr>
              <tr>
                <td>Packaging Details</td>
                <td>25 kg bag</td>
              </tr>
              <tr>
                <td>Grade</td>
                <td>Industrial</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Water Treatment and Industrial, Both</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Tetrasodium Pyrophosphate TSPP</b>
          <li>Used as a Buffing Agents</li>
          <li>Emulsifier</li>
          <li>Dispersing Agent</li>
          <li>Thickening Agent</li>
          <li>Water Softener</li>
          <li>Detergent Builder</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Water Treatment</li>
          <li>Industrial Applications</li>
          <li>Detergent Manufacturing</li>
          <li>Textile Industry</li>
          <li>Food Industry</li>
          <li>Metal Treatment</li>
          <li>Paper Industry</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 20000 kg/month</li>
          <li>Delivery Time: 3 days</li>
          <li>Minimum Order Quantity: 200 Kg</li>
          <li>Price: ₹ 160/Kg</li>
          <li>High purity industrial grade</li>
          <li>Versatile industrial chemical</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Tetrasodium Pyrophosphate TSPP"/>
      </div>
    </section>
    </section>

    
  );
};

export default TSPP;
