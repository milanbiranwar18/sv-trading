import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/SPCP.jpg'; // Using placeholder image
import EnquiryPage from '../pages/EnquiryPage';

const HydrazineHydrate = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Hydrazine Hydrate"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Hydrazine Hydrate Chemical</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Grade Standard</td>
                <td>Industrial Grade</td>
              </tr>
              <tr>
                <td>Purity %</td>
                <td>98%</td>
              </tr>
              <tr>
                <td>Packaging Details</td>
                <td>50 L Drum</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Drum</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>30 Kg</td>
              </tr>
              <tr>
                <td>Physical Form</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Appearance</td>
                <td>Colorless and clear</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Technical Specifications:</b>
          <li>Heavy Metals: 0.0001% max (as Pb)</li>
          <li>Non Volatile Matter: 0.005% max</li>
          <li>Chloride: 0.0001% max (as Cl)</li>
          <li>Assy: 80.0% min (51.2% min) N2H4 H2O (as N2H4)</li>
          <li>Sulfate: 0.0001% max (as SO4)</li>
          <li>Iron: 0.00005% max (as Fe)</li>
          </p>
          <br/>
          <p>
          <b>Applications:</b>
          <li>Metal Industries</li>
          <li>Food Industry</li>
          <li>Cement Industries</li>
          <li>Pharmaceutical & Cosmetics Industry</li>
          <li>Boiler Water Treatment</li>
          <li>Corrosion Inhibition</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>HS Code: 38249022</li>
          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>A colorless fuming liquid with a faint ammonia-like odor</li>
          <li>Corresponds to a 64% aqueous solution of hydrazine in water</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Hydrazine Hydrate"/>
      </div>
    </section>
    </section>

    
  );
};

export default HydrazineHydrate; 