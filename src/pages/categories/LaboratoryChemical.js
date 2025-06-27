import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/ProductList.css';
import SPCP from '../../sv_assets/SPCP.jpg';

const LaboratoryChemical = () => {
  const products = [
    {
      name: 'Analytical Grade Sulfuric Acid',
      imgSrc: SPCP, // Using placeholder
      url: '/analytical-sulfuric-acid',
      description: 'High-purity sulfuric acid for laboratory analysis and research'
    },
    {
      name: 'Laboratory Grade Sodium Hydroxide',
      imgSrc: SPCP, // Using placeholder
      url: '/lab-sodium-hydroxide',
      description: 'Pure sodium hydroxide for analytical and research applications'
    },
    {
      name: 'Reagent Grade Copper Sulphate',
      imgSrc: SPCP, // Using placeholder
      url: '/reagent-copper-sulphate',
      description: 'High-purity copper sulphate for laboratory testing'
    },
    {
      name: 'Analytical Grade Zinc Sulphate',
      imgSrc: SPCP, // Using placeholder
      url: '/analytical-zinc-sulphate',
      description: 'Pure zinc sulphate for analytical chemistry applications'
    },
    {
      name: 'Laboratory Grade Potassium Hydroxide',
      imgSrc: SPCP, // Using placeholder
      url: '/lab-potassium-hydroxide',
      description: 'High-purity potassium hydroxide for research and analysis'
    }
  ];

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Laboratory Chemical</h1>
        <p>Pure and analytical grade chemicals for laboratory and research applications</p>
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

export default LaboratoryChemical; 