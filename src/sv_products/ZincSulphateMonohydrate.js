import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/Zinc Sulphate Monohydrate.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const ZincSulphateMonohydrate = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Zinc Sulphate Monohydrate"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Zinc Sulphate Monohydrate</h2>
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
                <td>Crystalline Powder</td>
              </tr>
              <tr>
                <td>Molecular Weight</td>
                <td>179.45 gm</td>
              </tr>
              <tr>
                <td>pH Value</td>
                <td>4 - 5.2 (1 % of Solution)</td>
              </tr>
              <tr>
                <td>Alkaline and Earth Alkaline</td>
                <td>NMT 0.7%</td>
              </tr>
              <tr>
                <td>Chloride</td>
                <td>NMT 0.002%</td>
              </tr>
              <tr>
                <td>Loss On Drying</td>
                <td>NMT 1% (at 105 degree C)</td>
              </tr>
              <tr>
                <td>Iron</td>
                <td>NMT 0.003%</td>
              </tr>
              <tr>
                <td>Chemical Name</td>
                <td>Zinc Salt Monohydrate</td>
              </tr>
              <tr>
                <td>Heavy Metals</td>
                <td>NMT 0.002% (as Pb)</td>
              </tr>
              <tr>
                <td>Assay</td>
                <td>99 - 100.5%</td>
              </tr>
              <tr>
                <td>CAS No</td>
                <td>7446-19-7</td>
              </tr>
              <tr>
                <td>Arsenic</td>
                <td>NMT 0.0005%</td>
              </tr>
              <tr>
                <td>Zn Content</td>
                <td>Min 32%</td>
              </tr>
              <tr>
                <td>Active Ingredient</td>
                <td>ZnSO4.H2O</td>
              </tr>
              <br/>
          <p>
          <b>Zinc Sulphate Monohydrate (33%)</b>
          <li>Used as mordant in calico printing</li>
          <li>Used for preserving wood and skins with hypochlorite</li>
          <li>Used for bleaching paper manufacture lithopone and other zinc salts</li>
          <li>Used in Clarifying glue</li>
          <li>Agricultural applications</li>
          <li>Industrial water treatment</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Agriculture (Micronutrient)</li>
          <li>Textile Industry (Mordant)</li>
          <li>Paper Industry (Bleaching)</li>
          <li>Wood Preservation</li>
          <li>Water Treatment</li>
          <li>Chemical Manufacturing</li>
          <li>Laboratory Reagent</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>Price: ₹ 69/Kilogram</li>
          <li>High purity industrial grade</li>
          <li>Consistent quality and specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Zinc Sulphate Monohydrate"/>
      </div>
    </section>
    </section>

    
  );
};

export default ZincSulphateMonohydrate;

