import React from 'react';
import '../css/PolyesterResin.css'; // Ensure this is the correct path to your CSS file
import Image1 from "../assets/fiberglass.jpg";
import EnquiryPage from '../pages/EnquiryPage';

const FiberglassCSMMat = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            src={Image1}
            alt="Fiberglass CSM Mat"
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Fiberglass CSM Mat</h2>
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
                <td>Material</td>
                <td>Fiberglass</td>
              </tr>
              <tr>
                <td>Roll Width</td>
                <td>1 m</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Roll</td>
              </tr>
              <tr>
                <td>Roll Length</td>
                <td>30 Meter</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>White</td>
              </tr>
              <tr>
                <td>Roll Weight</td>
                <td>30 kg</td>
              </tr>
            </tbody>
          </table>
          <br />
          <div className="product-description">
            <h3 className="product-description-title">Product Description</h3>
            <p>
              With sincerity and hard work of our professionals, we have carved a niche for ourselves in this domain by providing a premium quality gamut of Fiberglass CSM Mat.
            </p>
            <p>S V Trading is a leading Manufacturer and Wholesaler of industrial chemicals, FRP Resin and many more.</p>
          </div>
        </div>
      </div>
    </div>
    <section>
    <EnquiryPage  productName="Fiberglass CSM Mat"/>
  </section>
  </section>
  );
}

export default FiberglassCSMMat;
