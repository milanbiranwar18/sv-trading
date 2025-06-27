import React from 'react';
import image1 from '../assets/isophthalicresin.jpg'; 

import '../css/ProductList.css'; // Ensure the correct CSS file is imported
import { Link } from 'react-router-dom';

const products = [
    {
        name: 'ISO Resin',
        imgSrc: image1,
        url: '/iso-resin'
    },
    {
        name: 'Isophthalic Resin',
        imgSrc: image1,
        url: '/isophthalic-resin'
    },
];

const IsophthalicResins = () => {
    return (
        <div className="new-products-section">
            <h2 className="new-products-title">Isophthalic Resins</h2>
            <div className="new-products-container">
                {products.map((product, index) => (
                    <div className="new-product-card" key={index}>
                        <div className="new-product-image-container">
                            <img src={product.imgSrc} alt={product.name} className="new-product-image" />
                        </div>
                        <h3 className="new-product-name">{product.name}</h3>
                        <Link to={product.url} className="new-product-link">
                            View Product
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IsophthalicResins;
