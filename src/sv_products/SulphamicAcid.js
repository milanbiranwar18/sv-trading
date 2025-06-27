import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const SulphamicAcid = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Sulphamic Acid"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Sulphamic Acid</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Purity/Concentration</td>
                <td>99%</td>
              </tr>
              <tr>
                <td>Packaging Details</td>
                <td>50Kg Bag</td>
              </tr>
              <tr>
                <td>Grade</td>
                <td>Industrial Grade</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Powder</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Descaling Agent</td>
              </tr>
              <tr>
                <td>Chemical Formula</td>
                <td>H3NSO3</td>
              </tr>
              <tr>
                <td>Also known as</td>
                <td>Descalent Boiler agent</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Sulphamic Acid</b>
          <li>Mainly used in water treatment chemical</li>
          <li>Including Boiler descalent</li>
          <li>High purity industrial grade</li>
          <li>Effective descaling agent</li>
          <li>Safe and efficient cleaning</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Water Treatment</li>
          <li>Boiler Descaling</li>
          <li>Industrial Cleaning</li>
          <li>Scale Removal</li>
          <li>Chemical Manufacturing</li>
          <li>Laboratory Reagent</li>
          <li>Industrial Processes</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 100000 kg/month</li>
          <li>Delivery Time: 5 days</li>
          <li>Minimum Order Quantity: 50 Kg</li>
          <li>Price: ₹ 70/Kg</li>
          <li>High purity industrial grade</li>
          <li>Consistent quality and specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Sulphamic Acid"/>
      </div>
    </section>
    </section>

    
  );
};

export default SulphamicAcid; 