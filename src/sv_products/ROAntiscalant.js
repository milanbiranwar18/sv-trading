import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const ROAntiscalant = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="RO Antiscalant"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">RO Antiscalant</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>50 Liter</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Drum</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Specific Gravity</td>
                <td>1.1 +/- 0.05 @ 20 deg C</td>
              </tr>
              <tr>
                <td>Odor</td>
                <td>Odorless</td>
              </tr>
              <tr>
                <td>pH</td>
                <td>5.0 - 6.5 (2%solution)</td>
              </tr>
              <tr>
                <td>Appearance</td>
                <td>Clear yellow liquid</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>RO Antiscalant</b>
          <li>High efficiency reverse osmosis antiscalant</li>
          <li>Prevents scale formation in RO systems</li>
          <li>Improves membrane performance</li>
          <li>Extends membrane life</li>
          <li>Reduces maintenance costs</li>
          <li>Industrial grade quality</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Reverse Osmosis Systems</li>
          <li>Water Treatment</li>
          <li>Industrial Water Systems</li>
          <li>Membrane Protection</li>
          <li>Scale Prevention</li>
          <li>Chemical Manufacturing</li>
          <li>Industrial Processes</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>Price: ₹ 90/kg</li>
          <li>High efficiency antiscalant</li>
          <li>Industrial grade specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="RO Antiscalant"/>
      </div>
    </section>
    </section>

    
  );
};

export default ROAntiscalant; 