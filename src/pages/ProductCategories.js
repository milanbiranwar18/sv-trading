import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductCategories.css';

const ProductCategories = () => {
  const categories = [
    {
      name: 'Industrial Chemical',
      description: 'High-quality industrial chemicals for manufacturing and processing industries',
      icon: '🏭',
      url: '/category/industrial-chemical',
      productCount: 8
    },
    {
      name: 'Laboratory Chemical',
      description: 'Pure and analytical grade chemicals for laboratory and research applications',
      icon: '🧪',
      url: '/category/laboratory-chemical',
      productCount: 5
    },
    {
      name: 'Specialty Chemical',
      description: 'Specialized chemical formulations for specific industrial applications',
      icon: '⚗️',
      url: '/category/specialty-chemical',
      productCount: 6
    },
    {
      name: 'Agro Chemical',
      description: 'Agricultural chemicals for crop protection and soil treatment',
      icon: '🌾',
      url: '/category/agro-chemical',
      productCount: 4
    },
    {
      name: 'Water Treatment Chemical',
      description: 'Comprehensive range of chemicals for water purification and treatment',
      icon: '💧',
      url: '/category/water-treatment-chemical',
      productCount: 7
    },
    {
      name: 'Acetic Acid',
      description: 'High-purity acetic acid for various industrial applications',
      icon: '🧪',
      url: '/category/acetic-acid',
      productCount: 3
    },
    {
      name: 'Non Edible Oil',
      description: 'Industrial grade non-edible oils for manufacturing processes',
      icon: '🛢️',
      url: '/category/non-edible-oil',
      productCount: 4
    },
    {
      name: 'Oil',
      description: 'Industrial oils and lubricants for machinery and equipment',
      icon: '⛽',
      url: '/category/oil',
      productCount: 3
    },
    {
      name: 'Biocides',
      description: 'Effective biocidal formulations for microbial control',
      icon: '🦠',
      url: '/category/biocides',
      productCount: 3
    },
    {
      name: 'Copper Sulphate',
      description: 'High-quality copper sulphate for various industrial applications',
      icon: '🔵',
      url: '/category/copper-sulphate',
      productCount: 2
    }
  ];

  return (
    <div className="categories-container">
      <div className="categories-header">
        <h1>Product Categories</h1>
        <p>Explore our comprehensive range of chemicals organized by category</p>
      </div>
      
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="category-icon">
              <span>{category.icon}</span>
            </div>
            <div className="category-content">
              <h3 className="category-name">{category.name}</h3>
              <p className="category-description">{category.description}</p>
              <div className="category-meta">
                <span className="product-count">{category.productCount} Products</span>
                <Link to={category.url} className="category-link">
                  View Products →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories; 