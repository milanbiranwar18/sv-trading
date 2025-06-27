import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/cobaltoctoate3percent.jpg";
import EnquiryPage from '../pages/EnquiryPage';

const ThreePercentCobaltOctoate = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="3% Cobalt Octoate"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">3% Cobalt Octoate</h2>
          <p><strong>Product Details:</strong></p>
          <table>
            <tbody>
              <tr>
                <td>Physical State</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>1-10 L</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Plastic Can</td>
              </tr>
              <tr>
                <td>Grade Standard</td>
                <td>Technical Grade</td>
              </tr>
              <tr>
                <td>pH Value</td>
                <td>7-9</td>
              </tr>
              <tr>
                <td>Flash Point</td>
                <td>104°F</td>
              </tr>
              <tr>
                <td>Molecular Formula</td>
                <td>C<sub>16</sub>H<sub>30</sub>CoO<sub>4</sub></td>
              </tr>
              <tr>
                <td>Density</td>
                <td>0.779 g/mL</td>
              </tr>
              <tr>
                <td>Purity</td>
                <td>99%</td>
              </tr>
            </tbody>
          </table>
          <br/>
          <p>
            We offer our clients an extensive range of <strong>3% Cobalt Octoate</strong> formulated using high-grade compounds. These products provide accurate performance, making them some of the most dependable options in the market. Furthermore, we specialize in processing these products according to our patrons' detailed compositions.
          </p>
          
          <h3>Features:</h3>
          <ul>
            <li>Highly effective</li>
            <li>Perfectly prepared</li>
            <li>Safe packaging</li>
            <li>Exact preparation</li>
            <li>Elevated shelf life</li>
            <li>Reliable</li>
          </ul>

          <h3>Applications:</h3>
          <ul>
            <li>Paint</li>
            <li>Printing ink</li>
            <li>Varnishes</li>
            <li>White enamels</li>
            <li>Insulating varnishes</li>
            <li>Accelerator for polyesters</li>
          </ul>
        </div>
      </div>
    </div>
    <section>
    <EnquiryPage  productName="3% Cobalt Octoate"/>
 </section>
 </section>
  );
};

export default ThreePercentCobaltOctoate;
