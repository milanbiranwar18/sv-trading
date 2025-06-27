import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const SodiumNitrite = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Sodium Nitrite"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Sodium Nitrite</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Purity</td>
                <td>99%</td>
              </tr>
              <tr>
                <td>Purity/Concentration</td>
                <td>&gt;99%</td>
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
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Sodium Nitrite</b>
          <li>Majority of nitrate is used as fertilizers for crops or lawns</li>
          <li>Nitrate and nitrite are also used in food preservation</li>
          <li>Some pharmaceutical drugs</li>
          <li>In the production of munitions and explosives</li>
          <li>High purity industrial grade</li>
          <li>Versatile industrial chemical</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Fertilizer Industry</li>
          <li>Food Preservation</li>
          <li>Pharmaceutical Industry</li>
          <li>Explosives Manufacturing</li>
          <li>Chemical Manufacturing</li>
          <li>Laboratory Reagent</li>
          <li>Industrial Processes</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 1000 kg/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>Packaging Details: S.V. Trading company, Pune</li>
          <li>Price: ₹ 65/Kg</li>
          <li>High purity industrial grade</li>
          <li>Consistent quality and specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Sodium Nitrite"/>
      </div>
    </section>
    </section>

    
  );
};

export default SodiumNitrite; 