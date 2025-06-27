import React from 'react';
import '../css/PolyesterResin.css'; // Ensure this is the correct path to your CSS file
import Image1 from "../assets/hydrogenperoxide.jpg";
import EnquiryPage from '../pages/EnquiryPage';

const FiftyPercentHydrogenPeroxide = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            src={Image1}
            alt="50 Percent Hydrogen Peroxide"
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">50 % Hydrogen Peroxide</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Purity</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>Grade Standard</td>
                <td>Industrial</td>
              </tr>
              <tr>
                <td>Packaging</td>
                <td>30 kg HDPE Drum</td>
              </tr>
              <tr>
                <td>Packing Size</td>
                <td>30 Liter</td>
              </tr>
              <tr>
                <td>Grade</td>
                <td>Industrial</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Can</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Application</td>
                <td>Bleaching Agent</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>Since our commencement, we are immersed in presenting an elite array of <b>50 Percent Hydrogen Peroxide.</b></p>
        </div>
      </div>
    </div>
    <section>
    <EnquiryPage  productName="50 % Hydrogen Peroxide"/>
  </section>
  </section>
  );
};

export default FiftyPercentHydrogenPeroxide;
