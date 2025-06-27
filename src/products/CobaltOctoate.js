import React from 'react';
import image2 from '../assets/cobaltoctoate6percent.jpg';
import image3 from '../assets/cobaltoctoate3percent.jpg';
import '../css/ProductList.css';
import { Link } from 'react-router-dom';

const products = [

    {
        name: '6% Cobalt Octoate',
        imgSrc: image2,
        url: '/six-percent-cobalt-octoate'
    },
    {
        name: '3% Cobalt Octoate',
        imgSrc: image3,
        url: '/three-percent-cobalt-octoate'
    }

];

const CobaltOctoate = () => {
    return (
        <div className="new-products-section">
            <h2 className="new-products-title">Cobalt Octoate</h2>
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

export default CobaltOctoate;
