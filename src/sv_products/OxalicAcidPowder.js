import React from 'react';
import '../css/PolyesterResin.css'; 
import Image1 from '../sv_assets/HEDPAcid.jpg';
import EnquiryPage from '../pages/EnquiryPage';

const OxalicAcidPowder = () => {
  return (
    <section>
    <div className="updated-product-container">
      <div className="updated-product-details">
        <div className="updated-product-image-container">
          <img
            className="updated-product-image"
            alt="GP Resin"
            src={Image1}
          />
        </div>

        <div className="updated-product-info">
          <h2 className="updated-product-title">Oxalic Acid Powder</h2>
          <p><b>Product Details:</b></p>
          <table className="updated-product-table">
            <tbody>
              <tr>
                <td>Grade Standard</td>
                <td>Industrial Grade</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>Indian Oxylant</td>
              </tr>
              <tr>
                <td>Packaging Size</td>
                <td>50kg</td>
              </tr>
              <tr>
                <td>Packaging Type</td>
                <td>Bag</td>
              </tr>


              <tr>
                <td>Packaging Details</td>
                <td>50 Kg Bag</td>
              </tr>
              <tr>
                <td>Usage/Application</td>
                <td>Industrial</td>
              </tr>
              <tr>
                <td>Physical State</td>
                <td>Powder</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>Made in India</td>
              </tr>
              
              <br/>
          <p>
          <b>HEDP, 1-Hydroxyethylidene-1, 1-Diphosphonic Acid</b>
          <li>Used for Water Treatment Application Formulation</li>
          <li>chelating agent</li>
          <li>use in agro  chemical</li>
          <li>food chemical</li>
          <li>fragance</li>
          </p>
            </tbody>
          </table>
          <br />
          
          <p>Oxalic Acid is a reliable & effective cleaner when used in appropriate applications. Oxalic Acid may be used <b> to remove rust and other difficult stains from areas such as buildings, boats, swimming pools, concrete driveways, sidewalks, iron machinery, wood decks, stairs or trim.</b> Oxalic acid is an ingredient in some tooth whitening products. About 25% of produced oxalic acid will be used as a mordant in dyeing processes. It is also used in bleaches, especially for pulpwood, </p>

          <li>Production Capacity: 10000</li>
          <li>Delivery Time: 3</li>
          <li>Packaging Details: 60 kg can or 350 kg drum</li>
        </div>
      </div>
    </div>
    <section>
      <div>
      <EnquiryPage  productName="Clear (GP Resin)"/>
      </div>
    </section>
    </section>

    
  );
};

export default OxalicAcidPowder;
