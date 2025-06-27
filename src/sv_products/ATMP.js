import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const ATMP = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="ATMP 50%"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">ATMP 50% (Aminotrimethylene Phosphoric Acid)</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Packaging Details</td>
                <td>200 kg Drum</td>
              </tr>
              <tr>
                <td>Physical State</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Drinking Water Treatment</td>
              </tr>
              <tr>
                <td>Cas Number</td>
                <td>6419-19-8</td>
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
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>ATMP (Aminotrimethylene Phosphoric Acid)</b>
          <li>Mainly used for the Water Treatment Process</li>
          <li>Available in 60kg and 200kg</li>
          <li>Scale inhibitor and corrosion inhibitor</li>
          <li>Used in cooling water systems</li>
          <li>Industrial water treatment applications</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Drinking Water Treatment</li>
          <li>Industrial Water Treatment</li>
          <li>Cooling Water Systems</li>
          <li>Boiler Water Treatment</li>
          <li>Scale Prevention</li>
          <li>Corrosion Inhibition</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 3 days</li>
          <li>Packaging Details: 60 kg/drum and 200kg/drum</li>
          <li>Minimum Order Quantity: 60 Kg</li>
          <li>Price: ₹ 145/Kg</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="ATMP 50%"/>
      </div>
    </section>
    </section>

    
  );
};

export default ATMP;
