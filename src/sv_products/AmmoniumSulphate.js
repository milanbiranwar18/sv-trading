import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const AmmoniumSulphate = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Ammonium Sulphate"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Ammonium Sulphate</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>50 kg</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Fertilizer</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Granules</td>
              </tr>
              <tr>
                <td>Purity</td>
                <td>99 %</td>
              </tr>
              <tr>
                <td>Grade</td>
                <td>Industrial</td>
              </tr>
              <tr>
                <td>Grade Standard</td>
                <td>Industrial Grade</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Ammonium Sulphate</b>
          <li>It is an inorganic salt</li>
          <li>Common use in fertilizers</li>
          <li>Dyes Pigmentation</li>
          <li>High nitrogen content</li>
          <li>Water soluble fertilizer</li>
          <li>Industrial applications</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Fertilizer Industry</li>
          <li>Agricultural Applications</li>
          <li>Dye Manufacturing</li>
          <li>Pigment Industry</li>
          <li>Chemical Manufacturing</li>
          <li>Laboratory Reagent</li>
          <li>Industrial Processes</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>Minimum Order Quantity: 50 Kg</li>
          <li>Price: ₹ 32/Kg</li>
          <li>High purity industrial grade</li>
          <li>Consistent quality and specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Ammonium Sulphate"/>
      </div>
    </section>
    </section>

    
  );
};

export default AmmoniumSulphate; 