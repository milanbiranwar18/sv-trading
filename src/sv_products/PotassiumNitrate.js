import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const PotassiumNitrate = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Potassium Nitrate"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Potassium Nitrate</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Granules</td>
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
          <b>Potassium Nitrate</b>
          <li>It is used as a form of fertiliser as it contains all the macronutrients needed for the plants to grow</li>
          <li>It is used as gunpowder in explosives such as bombs, grenades, etc</li>
          <li>Used in the manufacturing and production of cigarettes</li>
          <li>High purity industrial grade</li>
          <li>Versatile industrial chemical</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Fertilizer Industry</li>
          <li>Explosives Manufacturing</li>
          <li>Tobacco Industry</li>
          <li>Chemical Manufacturing</li>
          <li>Agricultural Applications</li>
          <li>Laboratory Reagent</li>
          <li>Industrial Processes</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 Kg/month</li>
          <li>Delivery Time: 5 days</li>
          <li>Packaging Details: S. V. Trading company, pune</li>
          <li>Price: ₹ 100/Kg</li>
          <li>High purity industrial grade</li>
          <li>Consistent quality and specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Potassium Nitrate"/>
      </div>
    </section>
    </section>

    
  );
};

export default PotassiumNitrate; 