import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/ProductList.css';
import ATMP from '../../sv_assets/ATMP.jpg';
import HEDPAcid from '../../sv_assets/HEDPAcid.jpg';
import acrylicterpolymer from '../../sv_assets/AcrylicHomopolymer.jpg';
import SPCP from '../../sv_assets/SPCP.jpg';

const SpecialtyChemical = () => {
  const products = [
    {
      name: 'ATMP 50% (Amino Trimethylene Phosphonic Acid)',
      imgSrc: ATMP,
      url: '/atmp',
      description: 'Specialized scale inhibitor for industrial water systems'
    },
    {
      name: 'HEDP Acid 50-60%',
      imgSrc: HEDPAcid,
      url: '/HEDPAcid',
      description: 'High-efficiency specialty corrosion inhibitor'
    },
    {
      name: 'Acrylic Terpolymer',
      imgSrc: acrylicterpolymer,
      url: '/acrylicterpolymer',
      description: 'Specialized water treatment polymer formulation'
    },
    {
      name: 'SPCP (Sodium Penta Chlorophenate)',
      imgSrc: SPCP,
      url: '/spcp',
      description: 'Specialized biocide for wood preservation'
    },
    {
      name: 'Custom Formulation Service',
      imgSrc: SPCP, // Using placeholder
      url: '/custom-formulation',
      description: 'Tailored chemical formulations for specific applications'
    },
    {
      name: 'Specialty Polymer Solutions',
      imgSrc: SPCP, // Using placeholder
      url: '/specialty-polymers',
      description: 'Advanced polymer solutions for specialized applications'
    }
  ];

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Specialty Chemical</h1>
        <p>Specialized chemical formulations for specific industrial applications</p>
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

export default SpecialtyChemical; 