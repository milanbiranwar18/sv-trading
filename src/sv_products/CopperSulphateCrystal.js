import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/coppersulphatecrystal.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const CopperSulphateCrystal = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="Copper Sulphate Crystal"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Copper Sulphate Crystal</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>S.V. TRADING COMPANY</td>
              </tr>
              <tr>
                <td>Form</td>
                <td>Crystal</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Bag</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>50 kg</td>
              </tr>
              <tr>
                <td>Copper</td>
                <td>24.50 % Min as Cu</td>
              </tr>
              <tr>
                <td>Cadmium</td>
                <td>0.001 % Max as Cd</td>
              </tr>
              <tr>
                <td>Iron</td>
                <td>0.20 % Max as Fe</td>
              </tr>
              <tr>
                <td>Lead</td>
                <td>0.002 % Max as Pb</td>
              </tr>
              <tr>
                <td>Mercury</td>
                <td>0.0005 % Max as Hg</td>
              </tr>
              <tr>
                <td>pH</td>
                <td>3.50 Min in 5% Solution</td>
              </tr>
              <tr>
                <td>Nickel</td>
                <td>0.03 % Max as Ni</td>
              </tr>
              <tr>
                <td>Insoluble Matter</td>
                <td>0.02 % Max in water</td>
              </tr>
              <tr>
                <td>Arsenic</td>
                <td>0.0005 % Max as As</td>
              </tr>
              <tr>
                <td>Appearance</td>
                <td>Blue Colored Powder and Crystals</td>
              </tr>
              <br/>
          <p>
          <b>Copper Sulphate Crystal</b>
          <li>Copper sulphate crystals in a fine, powdery form with a blue colour</li>
          <li>High purity industrial grade</li>
          <li>Used in agriculture and industrial applications</li>
          <li>Effective fungicide and algaecide</li>
          </p>
          <br/>
          <p>
          <b>Key Applications:</b>
          <li>Agriculture (Fungicide)</li>
          <li>Water Treatment</li>
          <li>Electroplating</li>
          <li>Textile Industry</li>
          <li>Mining Industry</li>
          <li>Chemical Manufacturing</li>
          <li>Laboratory Reagent</li>
          </p>
          <br/>
          <p>
          <b>Disclaimer:</b> This product is intended solely for industrial use. It is not intended for, nor should it be used for, any medical and medicinal purposes. Use of this product in any medical context is strictly prohibited, and we accept no liability for any such use.
          </p>
            </tbody>
          </table>
          <br />
          <b>Additional Information:</b>

          <li>Production Capacity: 10000 kg/month</li>
          <li>Delivery Time: 3-5 days</li>
          <li>Price: ₹ 136/Kilogram</li>
          <li>High purity industrial grade</li>
          <li>Consistent quality and specifications</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Copper Sulphate Crystal"/>
      </div>
    </section>
    </section>

    
  );
};

export default CopperSulphateCrystal;
