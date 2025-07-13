import React from 'react';
import '../css/ProductList.css'; 
import SPCP from '../sv_assets/SPCP.jpg';
import ZincSulphateMonohydrate from '../sv_assets/Zinc Sulphate Monohydrate.jpg';
import ATMP from '../sv_assets/ATMP.jpg';
import HEDPAcid from '../sv_assets/HEDPAcid.jpg';
import TSPP from '../sv_assets/TSPP.jpg';
import { Link } from 'react-router-dom';
import CopperSulphateCrystal  from '../sv_assets/coppersulphatecrystal.jpg';
import firesidechemicalforboiler from '../sv_assets/firesidechemicalforboiler.jpg';
import mekp from '../assets/mekphardener.jpg';
import hydrogenperoxide from '../assets/hydrogenperoxide.jpg';
import talcumpowder from '../assets/talcumpowder.jpg';
import monoeg from '../assets/monoeg.jpg'
import acrylicterpolymer from '../sv_assets/AcrylicHomopolymer.jpg'


const products = [
  // {
  //   name: 'GP Resin',
  //   imgSrc: gpimage,
  //   url: '/gpresin'
  // },
  // {
  //   name: 'Cobalt Octoate',
  //   imgSrc: image2,
  //   url: '/cobalt-octoate'
  // },
  // {
  //   name: 'Fiberglass Mat',
  //   imgSrc: image3,
  //   url: '/fiberglassmart'
  // },

  // {
  //   name: 'Methyl Ethyl Ketone Peroxide Hardener',
  //   imgSrc: mekp,
  //   url: '/mekp-hardener'
  // },
  // {
  //   name: 'Isophthalic Resins',
  //   imgSrc: isophthalicimg,  
  //   url: '/isophthalic-resins'
  // },

  // {
  //   name: '50 % Hydrogen Peroxide',
  //   imgSrc: hydrogenperoxide,
  //   url: '/fifty-percent-hydrogen-peroxide'
  // },

  // {
  //   name: 'Vinyl Ester Resin',
  //   imgSrc: vinylimage,  
  //   url: '/vinyl-ester-resin1'
  // },
  // {
  //   name: 'Mono Ethylene Glycol',
  //   imgSrc: monoeg,
  //   url: '/mono-ethylene-glycol'
  // },
 
  // {
  //   name: 'Talcum Powder',
  //   imgSrc: talcumpowder,
  //   url: '/talcum-powder'
  // },
  // {
  //   name: 'Hydrochloric Acid',
  //   imgSrc: image5,
  //   url: '/hydrochloric-acid'
  // },

  {
    name: 'SPCP',
    imgSrc: SPCP,
    url: '/spcp'
  },

  {
    name: 'Zinc Sulphate Monohydrate',
    imgSrc:   ZincSulphateMonohydrate,
    url: '/zincsulphatemonohydrate'
  },
  {
    name: 'ATMP 50%',
    imgSrc:   ATMP,
    url: '/atmp'
  },
  {
    name: 'HEDP Acid 50 60',
    imgSrc:   HEDPAcid,
    url: '/HEDPAcid'
  },   

  {
    name: 'Tetrasodium Pyrophosphate TSPP',
    imgSrc:   TSPP,
    url: '/tspp'
  },   
  
  {
    name: 'Copper Sulphate Crystal',
    imgSrc: CopperSulphateCrystal ,
    url: '/coppersulphatecrystal'
  },

  {
    name: 'Fire Side Chemical For Boiler',
    imgSrc: firesidechemicalforboiler ,
    url: '/firesidechemicalforboiler'
  },

  {
    name: 'Acrylic Terpolymer (Multifunctional for water treatment)',
    imgSrc: acrylicterpolymer ,
    url: '/acrylicterpolymer'
  },

  {
    name: 'Sodium Hypochlorite',
    imgSrc: SPCP, // Using placeholder image
    url: '/sodium-hypochlorite'
  },

  {
    name: 'Caustic Soda (Sodium Hydroxide)',
    imgSrc: SPCP, // Using placeholder image
    url: '/caustic-soda'
  },

  {
    name: 'Sulfuric Acid',
    imgSrc: SPCP, // Using placeholder image
    url: '/sulfuric-acid'
  },

  {
    name: 'Potassium Hydroxide (Caustic Potash)',
    imgSrc: SPCP, // Using placeholder image
    url: '/potassium-hydroxide'
  },

  {
    name: 'Sodium Carbonate (Soda Ash)',
    imgSrc: SPCP, // Using placeholder image
    url: '/sodium-carbonate'
  },

  {
    name: 'Hydrazine Hydrate Chemical',
    imgSrc: SPCP, // Using placeholder image
    url: '/hydrazine-hydrate'
  },

  {
    name: 'Phosphoric Acid',
    imgSrc: SPCP, // Using placeholder image
    url: '/phosphoric-acid'
  },

  {
    name: 'Industrial Dimethyl Phthalate',
    imgSrc: SPCP, // Using placeholder image
    url: '/industrial-dimethyl-phthalate'
  },

  {
    name: 'Sodium Sulphate Powder',
    imgSrc: SPCP, // Using placeholder image
    url: '/sodium-sulphate'
  },

  {
    name: 'Zinc Oxide Powder',
    imgSrc: SPCP, // Using placeholder image
    url: '/zinc-oxide'
  },

  {
    name: 'Acetone',
    imgSrc: SPCP, // Using placeholder image
    url: '/acetone'
  },

  {
    name: 'Mono Ethylene Glycol',
    imgSrc: monoeg,
    url: '/mono-ethylene-glycol'
  },

  {
    name: 'Ammonium Sulphate',
    imgSrc: SPCP, // Using placeholder image
    url: '/ammonium-sulphate'
  },

  {
    name: 'Disodium EDTA',
    imgSrc: SPCP, // Using placeholder image
    url: '/disodium-edta'
  },

  {
    name: 'Sulphamic Acid',
    imgSrc: SPCP, // Using placeholder image
    url: '/sulphamic-acid'
  },

  {
    name: 'Potassium Phosphate',
    imgSrc: SPCP, // Using placeholder image
    url: '/potassium-phosphate'
  },

  {
    name: 'Sodium Nitrite',
    imgSrc: SPCP, // Using placeholder image
    url: '/sodium-nitrite'
  },

  {
    name: 'Zinc Sulphate',
    imgSrc: SPCP, // Using placeholder image
    url: '/zinc-sulphate'
  },

  {
    name: 'Magnesium Oxide',
    imgSrc: SPCP, // Using placeholder image
    url: '/magnesium-oxide'
  },

  {
    name: 'Magnesium Sulphate',
    imgSrc: SPCP, // Using placeholder image
    url: '/magnesium-sulphate'
  },

  {
    name: 'Ammonium Molybdate',
    imgSrc: SPCP, // Using placeholder image
    url: '/ammonium-molybdate'
  },

  {
    name: 'Potassium Meta Bisulphate',
    imgSrc: SPCP, // Using placeholder image
    url: '/potassium-meta-bisulphate'
  },

  {
    name: 'RO Antiscalant',
    imgSrc: SPCP, // Using placeholder image
    url: '/ro-antiscalant'
  },

  {
    name: 'Descaling Chemical',
    imgSrc: SPCP, // Using placeholder image
    url: '/descaling-chemical'
  },

  {
    name: 'Potassium Sulphate',
    imgSrc: SPCP, // Using placeholder image
    url: '/potassium-sulphate'
  },

  {
    name: 'Potassium Nitrate',
    imgSrc: SPCP, // Using placeholder image
    url: '/potassium-nitrate'
  },

  {
    name: 'Acid Thickener',
    imgSrc: SPCP, // Using placeholder image
    url: '/acid-thickener'
  },

  {
    name: 'Copper Sulphate Powder',
    imgSrc: SPCP, // Using placeholder image
    url: '/copper-sulphate-powder'
  },

  {
    name: 'Sludge Conditioner Chemical',
    imgSrc: SPCP, // Using placeholder image
    url: '/sludge-conditioner-chemical'
  },

  {
    name: 'Acrylic Acid Homopolymer',
    imgSrc: SPCP, // Using placeholder image
    url: '/acrylic-acid-homopolymer'
  },

  {
    name: 'Liquid Polymaleic Acid',
    imgSrc: SPCP, // Using placeholder image
    url: '/liquid-polymaleic-acid'
  },

  {
    name: 'Oxalic Acid Powder',
    imgSrc: SPCP, // Using placeholder image
    url: '/oxalic-acid-powder'
  },

  {
    name: 'Mix Xylene Solvent',
    imgSrc: SPCP, // Using placeholder image
    url: '/mix-xylene-solvent'
  },

  {
    name: 'Diethylene Glycol DEG',
    imgSrc: SPCP, // Using placeholder image
    url: '/diethylene-glycol-deg'
  },

  {
    name: 'Dimethyl Ethanolamine DMEA',
    imgSrc: SPCP, // Using placeholder image
    url: '/dimethyl-ethanolamine-dmea'
  },

  {
    name: 'Kletts Acid Slurry',
    imgSrc: SPCP, // Using placeholder image
    url: '/kletts-acid-slurry'
  },

  {
    name: 'Benzalkonium Chloride BKC',
    imgSrc: SPCP, // Placeholder image
    url: '/benzalkonium-chloride-bkc'
  },

  {
    name: 'Poly Aluminium Chloride',
    imgSrc: SPCP, // Placeholder image
    url: '/poly-aluminium-chloride'
  },

  {
    name: 'Chromic Acid Flakes',
    imgSrc: SPCP, // Placeholder image
    url: '/chromic-acid-flakes'
  },

  {
    name: 'Tannic Acid 99%',
    imgSrc: SPCP, // Placeholder image
    url: '/tannic-acid-99'
  },

  {
    name: 'Tween 20/80',
    imgSrc: SPCP, // Placeholder image
    url: '/tween-20-80'
  },

  {
    name: 'Ferric Chloride Powder',
    imgSrc: SPCP, // Placeholder image
    url: '/ferric-chloride-powder'
  },

  {
    name: 'Stearic Acid Powder',
    imgSrc: SPCP, // Placeholder image
    url: '/stearic-acid-powder'
  },

  {
    name: 'Boric Acid Powder',
    imgSrc: SPCP, // Placeholder image
    url: '/boric-acid-powder'
  },

  {
    name: 'Ammonium Chloride',
    imgSrc: SPCP, // Placeholder image
    url: '/ammonium-chloride'
  },

  {
    name: 'Tannic Acid 60%',
    imgSrc: SPCP,
    url: '/tannic-acid-60'
  },

  {
    name: 'Potassium Tetraborate Powder',
    imgSrc: SPCP,
    url: '/potassium-tetraborate'
  },

  {
    name: 'Potassium Humate Flakes',
    imgSrc: SPCP,
    url: '/potassium-humate-flakes'
  },

  {
    name: 'Triethanolamine (TEA) 85',
    imgSrc: SPCP,
    url: '/triethanolamine-85'
  },

  {
    name: 'Hydrazine Hydrate 80',
    imgSrc: SPCP,
    url: '/hydrazine-hydrate-80'
  },

  {
    name: 'Phosphoric Acid 85%',
    imgSrc: SPCP,
    url: '/phosphoric-acid-85'
  },

  {
    name: 'Sodium Thiosulphate',
    imgSrc: SPCP,
    url: '/sodium-thiosulphate'
  },

  {
    name: 'DETMP',
    imgSrc: SPCP,
    url: '/detmp'
  },

  {
    name: 'Fulvic Acid Powder',
    imgSrc: SPCP,
    url: '/fulvic-acid-powder'
  },

  {
    name: 'Amino Acid Powder',
    imgSrc: SPCP,
    url: '/amino-acid-powder'
  },

  {
    name: 'Ferrous Sulphate Heptahydrate',
    imgSrc: SPCP,
    url: '/ferrous-sulphate-heptahydrate'
  },

  {
    name: 'Magnesium EDTA Chelated',
    imgSrc: SPCP,
    url: '/magnesium-edta-chelated'
  },

  {
    name: 'Manganese EDTA Chelated',
    imgSrc: SPCP,
    url: '/manganese-edta-chelated'
  },

  {
    name: 'Zinc EDTA Chelated',
    imgSrc: SPCP,
    url: '/zinc-edta-chelated'
  },

  {
    name: 'Copper EDTA Chelated',
    imgSrc: SPCP,
    url: '/copper-edta-chelated'
  },

  {
    name: 'Calcium EDTA Chelated',
    imgSrc: SPCP,
    url: '/calcium-edta-chelated'
  },

  {
    name: 'Zinc Chloride Powder',
    imgSrc: SPCP,
    url: '/zinc-chloride-powder'
  },

  {
    name: 'Calcium Chloride',
    imgSrc: SPCP,
    url: '/calcium-chloride'
  },

  {
    name: 'Calcium Nitrate Granular',
    imgSrc: SPCP,
    url: '/calcium-nitrate-granular'
  },

  // AUTO-GENERATED PRODUCTS FROM sv_products
  { name: 'Copper Carbonate', imgSrc: SPCP, url: '/copper-carbonate' },
  { name: 'Cobalt Sulphate', imgSrc: SPCP, url: '/cobalt-sulphate' },
  { name: 'Dextrose', imgSrc: SPCP, url: '/dextrose' },
  { name: 'Caustic Potash', imgSrc: SPCP, url: '/caustic-potash' },
  { name: 'Castor Oil', imgSrc: SPCP, url: '/castor-oil' },
  { name: 'Citric Acid', imgSrc: SPCP, url: '/citric-acid' },
  { name: 'Ascorbic Acid', imgSrc: SPCP, url: '/ascorbic-acid' },
  { name: 'Acetic Acid', imgSrc: SPCP, url: '/acetic-acid' },
  { name: 'Ammonium Carbonate', imgSrc: SPCP, url: '/ammonium-carbonate' },
  { name: 'Ammonium Bicarbonate', imgSrc: SPCP, url: '/ammonium-bicarbonate' },
  { name: 'Liquid Polymaleic Acid', imgSrc: SPCP, url: '/liquid-polymaleic-acid' },
  { name: 'Dimethyl Ethanolamine DMEA', imgSrc: SPCP, url: '/dimethyl-ethanolamine-dmea' },
  { name: 'Mix Xylene Solvent', imgSrc: SPCP, url: '/mix-xylene-solvent' },
  { name: 'Diethylene Glycol DEG', imgSrc: SPCP, url: '/diethylene-glycol-deg' },
  { name: 'Benzalkonium Chloride BKC', imgSrc: SPCP, url: '/benzalkonium-chloride-bkc' },
  { name: 'Poly Aluminium Chloride', imgSrc: SPCP, url: '/poly-aluminium-chloride' },
  { name: 'Chromic Acid Flakes', imgSrc: SPCP, url: '/chromic-acid-flakes' },
  { name: 'Tannic Acid 99%', imgSrc: SPCP, url: '/tannic-acid-99' },
  { name: 'Tween 20/80', imgSrc: SPCP, url: '/tween-20-80' },
  { name: 'Ferric Chloride Powder', imgSrc: SPCP, url: '/ferric-chloride-powder' },
  { name: 'Stearic Acid Powder', imgSrc: SPCP, url: '/stearic-acid-powder' },
  { name: 'Boric Acid Powder', imgSrc: SPCP, url: '/boric-acid-powder' },
  { name: 'Ammonium Chloride', imgSrc: SPCP, url: '/ammonium-chloride' },
  { name: 'Tannic Acid 60%', imgSrc: SPCP, url: '/tannic-acid-60' },
  { name: 'Potassium Tetraborate Powder', imgSrc: SPCP, url: '/potassium-tetraborate' },
  { name: 'Potassium Humate Flakes', imgSrc: SPCP, url: '/potassium-humate-flakes' },
  { name: 'Triethanolamine (TEA) 85', imgSrc: SPCP, url: '/triethanolamine-85' },
  { name: 'Hydrazine Hydrate 80', imgSrc: SPCP, url: '/hydrazine-hydrate-80' },
  { name: 'Phosphoric Acid 85%', imgSrc: SPCP, url: '/phosphoric-acid-85' },
  { name: 'Sodium Thiosulphate', imgSrc: SPCP, url: '/sodium-thiosulphate' },
  { name: 'DETMP', imgSrc: SPCP, url: '/detmp' },
  { name: 'Fulvic Acid Powder', imgSrc: SPCP, url: '/fulvic-acid-powder' },
  { name: 'Amino Acid Powder', imgSrc: SPCP, url: '/amino-acid-powder' },
  { name: 'Ferrous Sulphate Heptahydrate', imgSrc: SPCP, url: '/ferrous-sulphate-heptahydrate' },
  { name: 'Magnesium EDTA Chelated', imgSrc: SPCP, url: '/magnesium-edta-chelated' },
  { name: 'Manganese EDTA Chelated', imgSrc: SPCP, url: '/manganese-edta-chelated' },
  { name: 'Zinc EDTA Chelated', imgSrc: SPCP, url: '/zinc-edta-chelated' },
  { name: 'Copper EDTA Chelated', imgSrc: SPCP, url: '/copper-edta-chelated' },
  { name: 'Calcium EDTA Chelated', imgSrc: SPCP, url: '/calcium-edta-chelated' },
  { name: 'Zinc Chloride Powder', imgSrc: SPCP, url: '/zinc-chloride-powder' },
  { name: 'Calcium Chloride', imgSrc: SPCP, url: '/calcium-chloride' },
  { name: 'Calcium Nitrate Granular', imgSrc: SPCP, url: '/calcium-nitrate-granular' },
];

const ProductList = () => {
  return (
    <div className="new-products-section">
      <h2 className="new-products-title">Our Products</h2>
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

export default ProductList;
