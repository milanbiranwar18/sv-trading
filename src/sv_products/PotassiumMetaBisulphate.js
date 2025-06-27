import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const PotassiumMetaBisulphate = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Potassium Meta Bisulphate"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Potassium Meta Bisulphate</h2>
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
                <td>Physical State</td>
                <td>Solid</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Potassium Meta Bisulphate</b>
          <li>It is used as a bleaching agent in the production of coconut cream</li>
          <li>Used in some pickles as a preservative</li>
          <li>Used in tint etching iron-based metal samples for microstructural analysis</li>
          <li>Used in Aam papad as a preservative</li>
          <li>High purity industrial grade</li>
          <li>Versatile industrial chemical</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Food Industry (Preservative)</li>
          <li>Bleaching Agent</li>
          <li>Metal Industry</li>
          <li>Pickle Manufacturing</li>
          <li>Chemical Manufacturing</li>
          <li>Laboratory Reagent</li>
          <li>Industrial Processes</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 Kg/month</li>
          <li>Delivery Time: 5 days</li>
          <li>Packaging Details: S.V.Trading company, Pune</li>
          <li>Price: ₹ 140/Kg</li>
          <li>High purity industrial grade</li>
          <li>Consistent quality and specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Potassium Meta Bisulphate"/>
      </div>
    </section>
    </section>

    
  );
};

export default PotassiumMetaBisulphate; 