import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const DimethylEthanolamine = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Dimethyl Ethanolamine DMEA"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Dimethyl Ethanolamine DMEA</h2>
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
                <td>Grade Standard</td>
                <td>Industrial Grade</td>
              </tr>
              <tr>
                <td>Synonyms</td>
                <td>dimethylaminoethanol, DMEA</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Dimethylethanolamine</b>
          <li>Organic compound with the formula (CH3)2NCH2CH2OH</li>
          <li>Bifunctional, containing both a tertiary amine and primary alcohol functional groups</li>
          <li>Colorless viscous liquid</li>
          <li>Used in skin care products for improving skin tone</li>
          <li>Taken orally as a nootropic</li>
          <li>Industrial applications in various chemical processes</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Skin Care Products</li>
          <li>Nootropic Supplements</li>
          <li>Chemical Manufacturing</li>
          <li>Pharmaceutical Industry</li>
          <li>Cosmetic Industry</li>
          <li>Industrial Processes</li>
          <li>Research & Development</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 5 days</li>
          <li>Packaging Details: S. V. Trading Company, Handewadi, Pune</li>
          <li>Minimum Order Quantity: 180 Kg</li>
          <li>Price: ₹ 270/Kg</li>
          <li>High purity industrial grade</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Dimethyl Ethanolamine DMEA"/>
      </div>
    </section>
    </section>

    
  );
};

export default DimethylEthanolamine; 