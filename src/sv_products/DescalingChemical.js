import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const DescalingChemical = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Descaling Chemical"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Descaling Chemical</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Industrial</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Drum</td>
              </tr>
              <tr>
                <td>Purity</td>
                <td>99 %</td>
              </tr>
              <tr>
                <td>Physical State</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>20-50 Kg</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Descaling Chemical</b>
          <li>Use descaling boiler</li>
          <li>High efficiency descaling agent</li>
          <li>Removes scale and deposits</li>
          <li>Improves system efficiency</li>
          <li>Reduces maintenance costs</li>
          <li>Industrial grade quality</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Boiler Descaling</li>
          <li>Industrial Cleaning</li>
          <li>Scale Removal</li>
          <li>Water Treatment</li>
          <li>Chemical Manufacturing</li>
          <li>Industrial Processes</li>
          <li>Maintenance Applications</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>Price: ₹ 65/Litre</li>
          <li>High efficiency descaling chemical</li>
          <li>Industrial grade specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Descaling Chemical"/>
      </div>
    </section>
    </section>

    
  );
};

export default DescalingChemical; 