import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const AmmoniumMolybdate = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Ammonium Molybdate"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Ammonium Molybdate</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Bag</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>1-50 kg</td>
              </tr>
              <tr>
                <td>Physical Form</td>
                <td>Powder</td>
              </tr>
              <tr>
                <td>Molecular Weight</td>
                <td>1235.9 gm</td>
              </tr>
              <tr>
                <td>Molecular Formula</td>
                <td>[NH4]6Mo7O24.4H2O</td>
              </tr>
              <tr>
                <td>Chloride</td>
                <td>Max 0.0010%</td>
              </tr>
              <tr>
                <td>CAS No</td>
                <td>12054-85-2</td>
              </tr>
              <tr>
                <td>Copper</td>
                <td>Max 0.0010%</td>
              </tr>
              <tr>
                <td>Assay</td>
                <td>Min 99.00%</td>
              </tr>
              <tr>
                <td>Sulphate</td>
                <td>Max 0.0050%</td>
              </tr>
              <tr>
                <td>Lead</td>
                <td>Max 0.0010%</td>
              </tr>
              <br/>
          <p>
          <b>Ammonium Molybdate</b>
          <li>High purity industrial grade</li>
          <li>Essential molybdenum source</li>
          <li>Used in various industrial applications</li>
          <li>Consistent quality and specifications</li>
          <li>Reliable performance</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Chemical Manufacturing</li>
          <li>Laboratory Reagent</li>
          <li>Catalyst Industry</li>
          <li>Pharmaceutical Industry</li>
          <li>Agricultural Applications</li>
          <li>Industrial Processes</li>
          <li>Research & Development</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>Price: ₹ 1,500/Kilogram</li>
          <li>High purity industrial grade</li>
          <li>Consistent quality and specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Ammonium Molybdate"/>
      </div>
    </section>
    </section>

    
  );
};

export default AmmoniumMolybdate; 