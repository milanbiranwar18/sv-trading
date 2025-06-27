import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const MagnesiumSulphate = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Magnesium Sulphate"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Magnesium Sulphate</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Purity</td>
                <td>More than 99%</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Jumbo Bags HDPE</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>25-50 Kg</td>
              </tr>
              <tr>
                <td>Physical Form</td>
                <td>Powder</td>
              </tr>
              <tr>
                <td>Lead</td>
                <td>Less Than 2 PPM (as Pb)</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>Transparent Crystal</td>
              </tr>
              <tr>
                <td>Calcium</td>
                <td>300 ppm (as ca)</td>
              </tr>
              <tr>
                <td>PH</td>
                <td>7 /- 0.5 (of 5% Soln)</td>
              </tr>
              <tr>
                <td>Mg</td>
                <td>9.6 % min</td>
              </tr>
              <tr>
                <td>Mgo</td>
                <td>16.0% Min</td>
              </tr>
              <tr>
                <td>Arsenic</td>
                <td>Nil (as As2 O3)</td>
              </tr>
              <tr>
                <td>Usage</td>
                <td>Fertilizer / Cattle Feed</td>
              </tr>
              <tr>
                <td>Iron</td>
                <td>20 ppm (as FE)</td>
              </tr>
              <br/>
          <p>
          <b>Magnesium Sulphate</b>
          <li>High purity industrial grade</li>
          <li>Used in fertilizer and cattle feed</li>
          <li>Essential magnesium supplement</li>
          <li>Water soluble form</li>
          <li>Consistent quality and specifications</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Fertilizer Industry</li>
          <li>Cattle Feed</li>
          <li>Agricultural Applications</li>
          <li>Chemical Manufacturing</li>
          <li>Pharmaceutical Industry</li>
          <li>Laboratory Reagent</li>
          <li>Industrial Processes</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>Price: ₹ 9/Kilogram</li>
          <li>High purity industrial grade</li>
          <li>Consistent quality and specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Magnesium Sulphate"/>
      </div>
    </section>
    </section>

    
  );
};

export default MagnesiumSulphate; 