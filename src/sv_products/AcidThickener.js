import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const AcidThickener = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Acid Thickener"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Acid Thickener</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>HDPE Drum</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>45 to 190 Kg</td>
              </tr>
              <tr>
                <td>Physical Form</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Split Point</td>
                <td>Less Than 15 deg C</td>
              </tr>
              <tr>
                <td>Long Term Viscosity</td>
                <td>Stability</td>
              </tr>
              <tr>
                <td>Physical Appearance</td>
                <td>Yellow to Brownish</td>
              </tr>
              <tr>
                <td>Chemical Amine</td>
                <td>Ethoxylated Fatty</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Acid Thickener</b>
          <li>High efficiency acid thickening agent</li>
          <li>Improves viscosity and stability</li>
          <li>Used in various industrial applications</li>
          <li>Consistent performance</li>
          <li>Industrial grade quality</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Acid Formulations</li>
          <li>Chemical Manufacturing</li>
          <li>Industrial Processes</li>
          <li>Viscosity Control</li>
          <li>Stability Enhancement</li>
          <li>Chemical Industry</li>
          <li>Industrial Applications</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>Price: Get Latest Price</li>
          <li>High efficiency acid thickener</li>
          <li>Industrial grade specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Acid Thickener"/>
      </div>
    </section>
    </section>

    
  );
};

export default AcidThickener; 