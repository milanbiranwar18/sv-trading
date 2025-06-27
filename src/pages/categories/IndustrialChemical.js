import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/ProductList.css';
import SPCP from '../../sv_assets/SPCP.jpg';
import ZincSulphateMonohydrate from '../../sv_assets/Zinc Sulphate Monohydrate.jpg';
import ATMP from '../../sv_assets/ATMP.jpg';
import HEDPAcid from '../../sv_assets/HEDPAcid.jpg';
import TSPP from '../../sv_assets/TSPP.jpg';
import CopperSulphateCrystal from '../../sv_assets/coppersulphatecrystal.jpg';
import firesidechemicalforboiler from '../../sv_assets/firesidechemicalforboiler.jpg';
import acrylicterpolymer from '../../sv_assets/AcrylicHomopolymer.jpg';

const IndustrialChemical = () => {
  const products = [
    {
      name: 'SPCP (Sodium Penta Chlorophenate)',
      imgSrc: SPCP,
      url: '/spcp',
      description: 'Wood preservative, herbicide, insecticide, fungicide, bacteriacide'
    },
    {
      name: 'Zinc Sulphate Monohydrate',
      imgSrc: ZincSulphateMonohydrate,
      url: '/zincsulphatemonohydrate',
      description: 'Agricultural micronutrient and industrial applications'
    },
    {
      name: 'ATMP 50% (Amino Trimethylene Phosphonic Acid)',
      imgSrc: ATMP,
      url: '/atmp',
      description: 'Scale inhibitor and corrosion inhibitor for water treatment'
    },
    {
      name: 'HEDP Acid 50-60%',
      imgSrc: HEDPAcid,
      url: '/HEDPAcid',
      description: 'High-efficiency scale and corrosion inhibitor'
    },
    {
      name: 'TSPP (Tetrasodium Pyrophosphate)',
      imgSrc: TSPP,
      url: '/tspp',
      description: 'Detergent builder and water softener'
    },
    {
      name: 'Copper Sulphate Crystal',
      imgSrc: CopperSulphateCrystal,
      url: '/coppersulphatecrystal',
      description: 'Agricultural fungicide and industrial applications'
    },
    {
      name: 'Fire Side Chemical For Boiler',
      imgSrc: firesidechemicalforboiler,
      url: '/firesidechemicalforboiler',
      description: 'Boiler treatment and corrosion prevention'
    },
    {
      name: 'Acrylic Terpolymer',
      imgSrc: acrylicterpolymer,
      url: '/acrylicterpolymer',
      description: 'Multifunctional water treatment polymer'
    }
  ];

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Industrial Chemical</h1>
        <p>High-quality industrial chemicals for manufacturing and processing industries</p>
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

export default IndustrialChemical; 