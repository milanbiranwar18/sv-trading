import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/firesidechemicalforboiler.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const FireSideChemicalForBoiler = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Fire Side Chemical For Boiler"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Fire Side Chemical For Boiler</h2>
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
                <td>Physical State</td>
                <td>Powder</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Industrial</td>
              </tr>
              <tr>
                <td>Appearance</td>
                <td>Green Color</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>25 kg</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Fire Side Chemical For Boiler</b>
          <li>Purpose: Fireside chemicals are used to control combustion fouling and corrosion</li>
          <li>Composition: Organo-inorganic combinations are effective for controlling corrosion and combustion fouling</li>
          <li>Fuel composition: Fuels with a low vanadium to sodium ratio produce tenacious deposits on heat transfer surfaces</li>
          <li>Ash content: Oils with more than 0.05% ash are considered high ash oils, while oils with less than 0.02% ash are considered low ash oils</li>
          <li>Deposition: The accumulation of material on boiler surfaces can cause overheating and corrosion, which can lead to unscheduled downtime</li>
          <li>Manufacturers require scheduled maintenance on both the fireside and waterside of a boiler to ensure it's running efficiently</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Boiler Maintenance</li>
          <li>Combustion Control</li>
          <li>Corrosion Prevention</li>
          <li>Fouling Control</li>
          <li>Industrial Boilers</li>
          <li>Power Plants</li>
          <li>Steam Generation Systems</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>Price: ₹ 120/Kilogram</li>
          <li>High efficiency boiler maintenance chemical</li>
          <li>Prevents corrosion and fouling</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Fire Side Chemical For Boiler"/>
      </div>
    </section>
    </section>

    
  );
};

export default FireSideChemicalForBoiler;
