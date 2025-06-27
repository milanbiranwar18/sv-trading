import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const DisodiumEDTA = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Disodium EDTA"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Disodium EDTA</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Bag</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>1-50 kg</td>
              </tr>
              <tr>
                <td>Physical Form</td>
                <td>Powder</td>
              </tr>
              <tr>
                <td>Molecular Weight</td>
                <td>372.24 gm</td>
              </tr>
              <tr>
                <td>Shelf Life</td>
                <td>1 Year</td>
              </tr>
              <tr>
                <td>Chelation Value</td>
                <td>270 mg CaCo3/g</td>
              </tr>
              <tr>
                <td>CAS No</td>
                <td>139-33-3</td>
              </tr>
              <tr>
                <td>Active Ingredient</td>
                <td>Na2 EDTA</td>
              </tr>
              <tr>
                <td>Assay</td>
                <td>99 % (+/-1%)</td>
              </tr>
              <tr>
                <td>pH</td>
                <td>4.0 - 5.0 (1 % of Solution)</td>
              </tr>
              <tr>
                <td>Chemical Name</td>
                <td>EDTA Disodium Salt (Ethylene Diamine Tetra Acetic Acid)</td>
              </tr>
              <br/>
          <p>
          <b>Disodium EDTA</b>
          <li>High purity chelating agent</li>
          <li>Excellent metal ion sequestration</li>
          <li>Used in various industrial applications</li>
          <li>Stable and reliable performance</li>
          <li>Long shelf life</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Water Treatment</li>
          <li>Textile Industry</li>
          <li>Food Industry</li>
          <li>Cosmetic Industry</li>
          <li>Pharmaceutical Industry</li>
          <li>Chemical Manufacturing</li>
          <li>Laboratory Reagent</li>
          <li>Metal Ion Sequestration</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>Price: ₹ 265/Kilogram</li>
          <li>High purity industrial grade</li>
          <li>Consistent quality and specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Disodium EDTA"/>
      </div>
    </section>
    </section>

    
  );
};

export default DisodiumEDTA; 