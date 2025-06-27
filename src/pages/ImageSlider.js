import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../css/ImageSlider.css';

// Import images
import bg1 from '../sv_assets/homepage1.png';
import bg2 from '../sv_assets/homepage2.png';
import bg3 from '../sv_assets/homepage3.png';
import bg4 from '../sv_assets/homepage4.png';

const slides = [
    {
        bg: bg1,
        subtitle: 'SV Trading',
        title: 'Welcomes You',
        text: 'We are a leading wholesaler and importer of high-quality industrial chemicals, committed to delivering excellence and reliability.'
    },
    {
        bg: bg2,
        subtitle: 'SV Trading',
        title: 'Industrial Chemicals',
        text: 'Ensure quality and efficiency with our comprehensive range of industrial chemicals, designed for various manufacturing processes.'
    },
    {
        bg: bg3,
        subtitle: 'SV Trading',
        title: 'Water Treatment',
        text: 'Advanced and eco-friendly solutions for water treatment, ensuring safety and compliance for industrial and municipal use.'
    },
    {
        bg: bg4,
        subtitle: 'SV Trading',
        title: 'Quality & Service',
        text: 'Our commitment to quality and service ensures you receive the best products and support for your business needs.'
    }
];

const NextArrow = ({ onClick }) => (
    <button onClick={onClick} className="slick-arrow slick-next">
        <FaArrowRight />
    </button>
);

const PrevArrow = ({ onClick }) => (
    <button onClick={onClick} className="slick-arrow slick-prev">
        <FaArrowLeft />
    </button>
);


const ImageSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className="hero-slider-wrapper hero-1">
            <Slider {...settings} className="hero-slider-1">
                {slides.map((slide, index) => (
                    <div key={index} className="themeholy-hero-slide">
                        <div className="themeholy-hero-bg" style={{ backgroundImage: `url(${slide.bg})` }}>
                        </div>
                        <div className="hero-slide-content">
                            <div className="container">
                                <div className="hero-style1">
                                    <span className="sub-title slideinleft">{slide.subtitle}</span>
                                    <h1 className="hero-title slideinleft">{slide.title}</h1>
                                    <p className="hero-text slideinleft">{slide.text}</p>
                                    <div className="btn-group slideinleft">
                                        <Link to="/about" className="themeholy-btn style3">About Us<FaArrowRight className="ms-2" /></Link>
                                        <Link to="/contact" className="themeholy-btn style2">CONTACT US<FaArrowRight className="ms-2" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;

