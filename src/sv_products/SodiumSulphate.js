import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/SPCP.jpg'; // Using placeholder image
import EnquiryPage from '../pages/EnquiryPage';

const SodiumSulphate = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Sodium Sulphate Powder"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Sodium Sulphate Powder</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Powder</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>25 Kg</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Bag</td>
              </tr>
              <tr>
                <td>Purity</td>
                <td>99%</td>
              </tr>
              <tr>
                <td>Grade</td>
                <td>Industrial</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Applications:</b>
          <li>Drying organic liquids</li>
          <li>Filler in powdered home laundry detergents</li>
          <li>Fining agent for molten glass</li>
          <li>Textile industry</li>
          <li>Paper manufacturing</li>
          <li>Chemical manufacturing</li>
          <li>Pharmaceutical industry</li>
          </p>
          <br/>
          <p>
          <b>Key Features:</b>
          <li>High purity anhydrous form</li>
          <li>Excellent drying properties</li>
          <li>Good solubility in water</li>
          <li>Stable under normal conditions</li>
          <li>Cost-effective industrial chemical</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 5 days</li>
          <li>Packaging Details: S.V. Trading company, Pune</li>
          <li>Also known as Glauber's salt (decahydrate form)</li>
          <li>Used as a laxative in pharmaceutical applications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Sodium Sulphate Powder"/>
      </div>
    </section>
    </section>

    
  );
};

export default SodiumSulphate; 