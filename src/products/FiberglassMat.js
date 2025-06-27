import React from 'react';
import image1 from '../assets/fiberglass.jpg'; 
import image3 from '../assets/csmmat.jpg';
import '../css/ProductList.css';
import { Link } from 'react-router-dom';


const products = [
    {
        name: 'Fiberglass CSM Mat',
        imgSrc: image1,
        url: '/fiberglass-csm-mat'
    },
    {
        name: '300GSM Chopped Strand Mat',
        imgSrc: image1,
        url: '/chopped-strand-mat'
    },
    {
        name: 'CSM Mat Emulsion Cut Piece',
        imgSrc: image3,
        url: '/csm-mat-emulsion-cut-piece'
    },
];

const FiberglassMart = () => {
    return (
        <div className="new-products-section">
            <h2 className="new-products-title">Fiberglass Mat</h2>
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

export default FiberglassMart;
