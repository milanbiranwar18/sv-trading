import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from "../assets/fiberglass.jpg";
import EnquiryPage from '../pages/EnquiryPage';

const ChoppedStrandMat = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            src={Image1}
            alt="300GSM Chopped Strand Mat"
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">300GSM Chopped Strand Mat</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Minimum Order Quantity</td>
                <td>30 Kg</td>
              </tr>
              <tr>
                <td>Thickness</td>
                <td>300 gsm</td>
              </tr>
              <tr>
                <td>Roll Width</td>
                <td>1020 mm</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Roll</td>
              </tr>
              <tr>
                <td>Roll Length</td>
                <td>20 Meter</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>White</td>
              </tr>
              <tr>
                <td>Roll Weight</td>
                <td>30 kg</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Fiberglass</td>
              </tr>
            </tbody>
          </table>
          <br/>
          <div className="product-description">
            <h3 className="product-description-title">Product Description</h3>
            <p>
              With sincerity and hard work of our professionals, we have carved a niche for ourselves in this domain by providing a premium quality gamut of Chopped Strand Mat.
            </p>
            <p>S V Trading is a leading Manufacturer and Wholesaler of industrial chemicals, FRP Resin and many more.</p>
          </div>
        </div>
      </div>
     
    </div>
   
   <section>
   <EnquiryPage  productName="300GSM Chopped Strand Mat"/>
 </section>
 </section>
  );
};

export default ChoppedStrandMat;
