import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/acrylicterpolymer.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const AcrylicTerpolymer = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Acrylic Terpolymer (Multifunctional for water treatment)"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Acrylic Terpolymer (Multifunctional for water treatment)</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Packaging Details</td>
                <td>50 kg Drum</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Drinking Water Treatment</td>
              </tr>
              <tr>
                <td>Function</td>
                <td>Corrosion inhibitors</td>
              </tr>
              <tr>
                <td>Grade Standard</td>
                <td>Industrial Grade</td>
              </tr>
              <tr>
                <td>Physical State</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Acrylic Terpolymer</b>
          <li>Phosphates & Zinc Stabilizer</li>
          <li>Excellent Tolerance to heavy metal for cooling water application</li>
          <li>Mainly used as Boiler Treatment</li>
          <li>Water Treatment Chemicals</li>
          <li>Sugar Process chemicals</li>
          <li>Multifunctional Water Treatment</li>
          <li>Scale and corrosion inhibitor</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Drinking Water Treatment</li>
          <li>Industrial Water Treatment</li>
          <li>Boiler Water Treatment</li>
          <li>Cooling Water Systems</li>
          <li>Sugar Industry</li>
          <li>Scale Prevention</li>
          <li>Corrosion Inhibition</li>
          <li>Heavy Metal Stabilization</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 5 days</li>
          <li>Packaging Details: S. V. Trading Company</li>
          <li>Minimum Order Quantity: 50 Kg</li>
          <li>Price: ₹ 120/Kg</li>
          <li>High efficiency multifunctional water treatment chemical</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Acrylic Terpolymer (Multifunctional for water treatment)"/>
      </div>
    </section>
    </section>

    
  );
};

export default AcrylicTerpolymer;
