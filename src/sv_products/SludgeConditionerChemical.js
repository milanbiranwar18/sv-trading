import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/ATMP.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const SludgeConditionerChemical = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Sludge Conditioner Chemical"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Sludge Conditioner Chemical</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Drum</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>100-250 Liter</td>
              </tr>
              <tr>
                <td>Physical State</td>
                <td>Liquid</td>
              </tr>
              <tr>
                <td>Composition</td>
                <td>An aqueous solution of sulfonated polymers</td>
              </tr>
              <tr>
                <td>Specific Gravity</td>
                <td>0.85 gr/cm3 at 15 deg C</td>
              </tr>
              <tr>
                <td>pH</td>
                <td>4.5 - 6.0 pH</td>
              </tr>
              <tr>
                <td>Appearance</td>
                <td>Pale Straw Liquid</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹ 95/Litre</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              <br/>
          <p>
          <b>Sludge Conditioner Chemical</b>
          <li>Liquid sludge conditioner for medium/high pressure boiler</li>
          <li>Increases boiler efficiency and availability & save annual maintenance cost</li>
          <li>Maintain alkalinity of feed water & boiler water, especially where D.M. / RO water or condensate water is being used as a boiler feed</li>
          <li>Controls silicate scale by maintaining adequate caustic alkalinity</li>
          <li>High efficiency boiler maintenance chemical</li>
          <li>Prevents corrosion and fouling</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Boiler Maintenance</li>
          <li>Sludge Conditioning</li>
          <li>Water Treatment</li>
          <li>Industrial Boilers</li>
          <li>Power Plants</li>
          <li>Steam Generation Systems</li>
          <li>Scale Prevention</li>
          <li>Corrosion Control</li>
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>High efficiency sludge conditioner</li>
          <li>Industrial grade specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Sludge Conditioner Chemical"/>
      </div>
    </section>
    </section>

    
  );
};

export default SludgeConditionerChemical; 