import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const PotassiumSulphate = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Potassium Sulphate"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Potassium Sulphate</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>White</td>
              </tr>
              <tr>
                <td>Grade Standard</td>
                <td>Industrial Grade</td>
              </tr>
              <tr>
                <td>Purity</td>
                <td>99%</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Potassium Sulphate</b>
          <li>It is dominantly used as a fertilizer for crops which include tobacco, some vegetables, and fruits</li>
          <li>Potassium sulfate is used as a salt substitute</li>
          <li>It is used in artillery propellant charges as a flash reducer</li>
          <li>It is used in soda blasting</li>
          <li>High purity industrial grade</li>
          <li>Versatile industrial chemical</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Fertilizer Industry</li>
          <li>Agricultural Applications</li>
          <li>Salt Substitute</li>
          <li>Artillery Propellant</li>
          <li>Soda Blasting</li>
          <li>Chemical Manufacturing</li>
          <li>Industrial Processes</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 5 days</li>
          <li>Packaging Details: SV Trading company,Pune</li>
          <li>Price: ₹ 58/Kg</li>
          <li>High purity industrial grade</li>
          <li>Consistent quality and specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Potassium Sulphate"/>
      </div>
    </section>
    </section>

    
  );
};

export default PotassiumSulphate; 