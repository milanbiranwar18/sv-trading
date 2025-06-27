import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const MagnesiumOxide = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Magnesium Oxide"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Magnesium Oxide</h2>
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
                <td>1-50 Kg</td>
              </tr>
              <tr>
                <td>Physical Form</td>
                <td>Powder</td>
              </tr>
              <tr>
                <td>Free Alkalies Soluble Salts</td>
                <td>2.0% max</td>
              </tr>
              <tr>
                <td>Calcium</td>
                <td>1.1% max</td>
              </tr>
              <tr>
                <td>Calcium Oxide</td>
                <td>1.5% max</td>
              </tr>
              <tr>
                <td>Iron</td>
                <td>0.05% max</td>
              </tr>
              <tr>
                <td>Lead</td>
                <td>5 ppm max</td>
              </tr>
              <tr>
                <td>Heavy Metals</td>
                <td>20 ppm max</td>
              </tr>
              <tr>
                <td>Loss on Ignition</td>
                <td>10% max</td>
              </tr>
              <tr>
                <td>Assay</td>
                <td>96.0-100.5%</td>
              </tr>
              <tr>
                <td>Acid Insoluble</td>
                <td>0.1%</td>
              </tr>
              <br/>
          <p>
          <b>Magnesium Oxide</b>
          <li>High purity industrial grade</li>
          <li>Excellent refractory properties</li>
          <li>Used in various industrial applications</li>
          <li>Consistent quality and specifications</li>
          <li>Reliable performance</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Refractory Industry</li>
          <li>Chemical Manufacturing</li>
          <li>Agricultural Applications</li>
          <li>Pharmaceutical Industry</li>
          <li>Food Industry</li>
          <li>Laboratory Reagent</li>
          <li>Industrial Processes</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>Price: ₹ 26/Kilogram</li>
          <li>High purity industrial grade</li>
          <li>Consistent quality and specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Magnesium Oxide"/>
      </div>
    </section>
    </section>

    
  );
};

export default MagnesiumOxide; 