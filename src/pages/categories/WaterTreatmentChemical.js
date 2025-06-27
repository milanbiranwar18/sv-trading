import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/ProductList.css';
import ATMP from '../../sv_assets/ATMP.jpg';
import HEDPAcid from '../../sv_assets/HEDPAcid.jpg';
import TSPP from '../../sv_assets/TSPP.jpg';
import acrylicterpolymer from '../../sv_assets/AcrylicHomopolymer.jpg';
import SPCP from '../../sv_assets/SPCP.jpg';

const WaterTreatmentChemical = () => {
  const products = [
    {
      name: 'ATMP 50% (Amino Trimethylene Phosphonic Acid)',
      imgSrc: ATMP,
      url: '/atmp',
      description: 'Scale inhibitor and corrosion inhibitor for cooling water systems'
    },
    {
      name: 'HEDP Acid 50-60%',
      imgSrc: HEDPAcid,
      url: '/HEDPAcid',
      description: 'High-efficiency scale and corrosion inhibitor for water treatment'
    },
    {
      name: 'TSPP (Tetrasodium Pyrophosphate)',
      imgSrc: TSPP,
      url: '/tspp',
      description: 'Water softener and detergent builder for treatment systems'
    },
    {
      name: 'Acrylic Terpolymer',
      imgSrc: acrylicterpolymer,
      url: '/acrylicterpolymer',
      description: 'Multifunctional water treatment polymer for scale control'
    },
    {
      name: 'SPCP (Sodium Penta Chlorophenate)',
      imgSrc: SPCP,
      url: '/spcp',
      description: 'Biocide for water treatment and microbial control'
    },
    {
      name: 'Sodium Hypochlorite',
      imgSrc: SPCP, // Using placeholder
      url: '/sodium-hypochlorite',
      description: 'Disinfectant and sanitizer for water purification'
    },
    {
      name: 'Chlorine Dioxide',
      imgSrc: SPCP, // Using placeholder
      url: '/chlorine-dioxide',
      description: 'Oxidizing biocide for water treatment systems'
    }
  ];

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Water Treatment Chemical</h1>
        <p>Comprehensive range of chemicals for water purification and treatment systems</p>
        <Link to="/categories" className="back-link">← Back to Categories</Link>
      </div>
      
      <div className="new-products-container">
        {products.map((product, index) => (
          <div className="new-product-card" key={index}>
            <div className="new-product-image-container">
              <img src={product.imgSrc} alt={product.name} className="new-product-image" />
            </div>
            <h3 className="new-product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <Link to={product.url} className="new-product-link">
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaterTreatmentChemical; 