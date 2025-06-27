import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RND from "./pages/RND";
import Testing from "./pages/Testing";
import Production from "./pages/Production";
import PopupBoxes from './pages/PopupBoxes';
import Products from './pages/Products';
import Rewards from './pages/Rewards';
import Contact3 from './pages/Contact3';
import GPResin from './products/GPResin';
import Clear from './products/Clear';
import Pet from './products/Pet';
import SixPercentCobaltOctoate from './products/SixPercentCobaltOctoate';
import ThreePercentCobaltOctoate from './products/ThreePercentCobaltOctoate';
import CobaltOctoate from './products/CobaltOctoate';
import FiberglassCSMMat from './products/FiberglassCSMMat';
import ChoppedStrandMat from './products/ChoppedStrandMat';
import CSMMatEmulsionCutPiece from './products/CSMMatEmulsionCutPiece';
import FiberglassMart from './products/FiberglassMat';
import MEKPHardener from './products/MEKPHardener';
import ISOResin from './products/ISOResin';
import IsophthalicResins from './products/IsophthalicResins';
import IsophthalicResin from './products/IsophthalicResin';
import FiftyPercentHydrogenPeroxide from './products/FiftyPercentHydrogenPeroxide';
import VinylEsterResin1 from './products/VinylEsterResin1';
import MonoEthyleneGlycol from './products/MonoEthyleneGlycol';
import TalcumPowder from './products/TalcumPowder';
import HydrochloricAcid from './products/HydrochloricAcid';
import HeaderNavbar from './components/HeaderNavbar';
import CalciumChloride from './sv_products/CalciumChloride';
import CalciumNitrateGranular from './sv_products/CalciumNitrateGranular';

// SV TRADING COMPANY
import SPCP from './sv_products/SPCP';
import ZincSulphateMonohydrate from './sv_products/ZincSulphateMonohydrate';
import ATMP from './sv_products/ATMP';
import HEDPAcid from './sv_products/HEDPAcid';
import TetrasodiumPyrophosphate from './sv_products/TSPP';
import CopperSulphateCrystal from './sv_products/CopperSulphateCrystal';
import FireSideChemicalForBoiler from './sv_products/FireSideChemicalForBoiler';
import AcrylicTerpolymer from './sv_products/AcrylicTerpolymer';
import AcrylicAcidHomopolymer from './sv_products/AcrylicAcidHomopolymer';
import SodiumHypochlorite from './sv_products/SodiumHypochlorite';
import CausticSoda from './sv_products/CausticSoda';
import SulfuricAcid from './sv_products/SulfuricAcid';
import PotassiumHydroxide from './sv_products/PotassiumHydroxide';
import SodiumCarbonate from './sv_products/SodiumCarbonate';
import HydrazineHydrate from './sv_products/HydrazineHydrate';
import PhosphoricAcid from './sv_products/PhosphoricAcid';
import IndustrialDimethylPhthalate from './sv_products/IndustrialDimethylPhthalate';
import SodiumSulphate from './sv_products/SodiumSulphate';
import ZincOxide from './sv_products/ZincOxide';
import Acetone from './sv_products/Acetone';
import OxalicAcidPowder from './sv_products/OxalicAcidPowder';
import PotassiumPhosphate from './sv_products/PotassiumPhosphate';
import KlettsAcidSlurry from './sv_products/KlettsAcidSlurry';
import DimethylEthanolamine from './sv_products/DimethylEthanolamine';
import BenzalkoniumChlorideBkc from './sv_products/BenzalkoniumChlorideBkc';
import PolyAluminiumChloride from './sv_products/PolyAluminiumChloride';
import ChromicAcidFlakes from './sv_products/ChromicAcidFlakes';
import TannicAcid99 from './sv_products/TannicAcid99';
import Tween2080 from './sv_products/Tween2080';
import FerricChloridePowder from './sv_products/FerricChloridePowder';
import StearicAcidPowder from './sv_products/StearicAcidPowder';
import BoricAcidPowder from './sv_products/BoricAcidPowder';
import AmmoniumChloride from './sv_products/AmmoniumChloride';
import TannicAcid60 from './sv_products/TannicAcid60';
import PotassiumTetraborate from './sv_products/PotassiumTetraborate';
import PotassiumHumateFlakes from './sv_products/PotassiumHumateFlakes';
import Triethanolamine85 from './sv_products/Triethanolamine85';
import HydrazineHydrate80 from './sv_products/HydrazineHydrate80';
import PhosphoricAcid85 from './sv_products/PhosphoricAcid85';
import SodiumThiosulphate from './sv_products/SodiumThiosulphate';
import DETMP from './sv_products/DETMP';
import FulvicAcidPowder from './sv_products/FulvicAcidPowder';
import AminoAcidPowder from './sv_products/AminoAcidPowder';
import FerrousSulphateHeptahydrate from './sv_products/FerrousSulphateHeptahydrate';
import MagnesiumEdtaChelated from './sv_products/MagnesiumEdtaChelated';
import ManganeseEdtaChelated from './sv_products/ManganeseEdtaChelated';
import ZincEdtaChelated from './sv_products/ZincEdtaChelated';
import CopperEdtaChelated from './sv_products/CopperEdtaChelated';
import CalciumEdtaChelated from './sv_products/CalciumEdtaChelated';
import ZincChloridePowder from './sv_products/ZincChloridePowder';

// Product Categories
import ProductCategories from './pages/ProductCategories';
import IndustrialChemical from './pages/categories/IndustrialChemical';
import WaterTreatmentChemical from './pages/categories/WaterTreatmentChemical';
import LaboratoryChemical from './pages/categories/LaboratoryChemical';
import SpecialtyChemical from './pages/categories/SpecialtyChemical';






function App() {
  return (
    <Router>
      <div className="App">
      {/* <Header />
        <Navbar /> */}
        <HeaderNavbar />
        
        {/* Content goes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact3 />} />
          <Route path="/rnd" element={<RND />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/production" element={<Production />} />
        <Route path="/products" element={<Products />} />
        <Route path="/rewards" element={<Rewards />} />

        <Route path="/gpresin" element={<GPResin />} />
        <Route path="/clear" element={<Clear />} />
        <Route path="/pet" element={<Pet />} />
  
        <Route path="/cobalt-octoate" element={<CobaltOctoate />} />
        <Route path="/six-percent-cobalt-octoate" element={<SixPercentCobaltOctoate />} />
        <Route path="/three-percent-cobalt-octoate" element={<ThreePercentCobaltOctoate />} />
        
        <Route path="/fiberglassmart" element={<FiberglassMart />} />
        <Route path="/fiberglass-csm-mat" element={<FiberglassCSMMat />} />
        <Route path="/chopped-strand-mat" element={<ChoppedStrandMat />} />
        <Route path="/csm-mat-emulsion-cut-piece" element={<CSMMatEmulsionCutPiece />} />
              
        <Route path="/mekp-hardener" element={<MEKPHardener />} />
      
        <Route path="/isophthalic-resins" element={<IsophthalicResins />} />
        <Route path="/iso-resin" element={<ISOResin />} />
        <Route path="/isophthalic-resin" element={<IsophthalicResin />} />
        
        <Route path="/fifty-percent-hydrogen-peroxide" element={<FiftyPercentHydrogenPeroxide />} />
           
        <Route path="/vinyl-ester-resin1" element={<VinylEsterResin1 />} />
        
        <Route path="/mono-ethylene-glycol" element={<MonoEthyleneGlycol />} />

        <Route path="/talcum-powder" element={<TalcumPowder />} />
        
        <Route path="/hydrochloric-acid" element={<HydrochloricAcid />} />





          {/* SV TRADING COMPANY */}

          <Route path="/spcp" element={<SPCP />} />
          <Route path="/zincsulphatemonohydrate" element={<ZincSulphateMonohydrate />} />
          <Route path="/atmp" element={<ATMP />} />
          <Route path="/HEDPAcid" element={<HEDPAcid />} />
          <Route path="/tspp" element={<TetrasodiumPyrophosphate />} />
          <Route path="/coppersulphatecrystal" element={<CopperSulphateCrystal />} />
          <Route path="/firesidechemicalforboiler" element={<FireSideChemicalForBoiler />} />
          <Route path="/acrylicterpolymer" element={<AcrylicTerpolymer />} />
          <Route path="/sodium-hypochlorite" element={<SodiumHypochlorite />} />
          <Route path="/caustic-soda" element={<CausticSoda />} />
          <Route path="/sulfuric-acid" element={<SulfuricAcid />} />
          <Route path="/potassium-hydroxide" element={<PotassiumHydroxide />} />
          <Route path="/sodium-carbonate" element={<SodiumCarbonate />} />
          <Route path="/hydrazine-hydrate" element={<HydrazineHydrate />} />
          <Route path="/phosphoric-acid" element={<PhosphoricAcid />} />
          <Route path="/industrial-dimethyl-phthalate" element={<IndustrialDimethylPhthalate />} />
          <Route path="/sodium-sulphate" element={<SodiumSulphate />} />
          <Route path="/zinc-oxide" element={<ZincOxide />} />
          <Route path="/acetone" element={<Acetone />} />
          <Route path="/oxalic-acid-powder" element={<OxalicAcidPowder />} />
          <Route path="/potassium-phosphate" element={<PotassiumPhosphate />} />
          <Route path="/kletts-acid-slurry" element={<KlettsAcidSlurry />} />
          <Route path="/dimethyl-ethanolamine-dmea" element={<DimethylEthanolamine />} />
          <Route path="/acrylic-acid-homopolymer" element={<AcrylicAcidHomopolymer />} />
          <Route path="/benzalkonium-chloride-bkc" element={<BenzalkoniumChlorideBkc />} />
          <Route path="/poly-aluminium-chloride" element={<PolyAluminiumChloride />} />
          <Route path="/chromic-acid-flakes" element={<ChromicAcidFlakes />} />
          <Route path="/tannic-acid-99" element={<TannicAcid99 />} />
          <Route path="/tween-20-80" element={<Tween2080 />} />
          <Route path="/ferric-chloride-powder" element={<FerricChloridePowder />} />
          <Route path="/stearic-acid-powder" element={<StearicAcidPowder />} />
          <Route path="/boric-acid-powder" element={<BoricAcidPowder />} />
          <Route path="/ammonium-chloride" element={<AmmoniumChloride />} />
          <Route path="/fulvic-acid-powder" element={<FulvicAcidPowder />} />
          <Route path="/amino-acid-powder" element={<AminoAcidPowder />} />
          <Route path="/ferrous-sulphate-heptahydrate" element={<FerrousSulphateHeptahydrate />} />
          <Route path="/magnesium-edta-chelated" element={<MagnesiumEdtaChelated />} />
          <Route path="/manganese-edta-chelated" element={<ManganeseEdtaChelated />} />
          <Route path="/zinc-edta-chelated" element={<ZincEdtaChelated />} />
          <Route path="/copper-edta-chelated" element={<CopperEdtaChelated />} />
          <Route path="/calcium-edta-chelated" element={<CalciumEdtaChelated />} />
          <Route path="/zinc-chloride-powder" element={<ZincChloridePowder />} />
          <Route path="/calcium-chloride" element={<CalciumChloride />} />
          <Route path="/calcium-nitrate-granular" element={<CalciumNitrateGranular />} />

          {/* Product Categories */}
          <Route path="/categories" element={<ProductCategories />} />
          <Route path="/category/industrial-chemical" element={<IndustrialChemical />} />
          <Route path="/category/water-treatment-chemical" element={<WaterTreatmentChemical />} />
          <Route path="/category/laboratory-chemical" element={<LaboratoryChemical />} />
          <Route path="/category/specialty-chemical" element={<SpecialtyChemical />} />

          

        </Routes>
        
        
        {/* <PopupBoxes /> */}
        {/* Footer should be inside the main container */}
        <Footer />

      </div>
      
    </Router>
  );
};

export default App;
