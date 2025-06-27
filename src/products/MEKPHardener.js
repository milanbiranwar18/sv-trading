import React from 'react';
import '../css/PolyesterResin.css';
import Image1 from "../assets/mekphardener.jpg";
import EnquiryPage from '../pages/EnquiryPage';

const MethylEthylKetone = () => {
  return (
    <section>
          <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Methyl Ethyl Ketone Peroxide Hardener"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Methyl Ethyl Ketone Peroxide Hardener</h2>
          <p><strong>Product Details:</strong></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Packaging Size</td>
                <td>40 - 50 Liters</td>
              </tr>
              <tr>
                <td>Grade Standard</td>
                <td>Bio-Tech Grade</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Plastic Can</td>
              </tr>
              <tr>
                <td>Physical State</td>
                <td>Liquid</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>To meet the needs of our valuable clients, we offer <strong>Methyl Ethyl Ketone Peroxide Hardener</strong>, used to increase the reaction rate. Due to its precise composition and high quality, this product is widely demanded and acclaimed among our esteemed customers.</p>
          
          <ul>
            <br />
            <h3>Features:</h3>
            <li>Optimum quality</li>
            <li>Accurate composition</li>
            <li>Nominal rates</li>
          </ul>
        </div>
      </div>
    </div>
    <section>
    <EnquiryPage  productName="Methyl Ethyl Ketone Peroxide Hardener"/>
 </section>
 </section>
  );
};

export default MethylEthylKetone;
