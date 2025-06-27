import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/OurBranches.css";

const branchesData = [
    { name: "Satara", address: "123 Business Park, Satara", phone: "9876543210", email: "satara@svtrading.com" },
    { name: "Kolhapur", address: "456 Trade Center, Kolhapur", phone: "9876543211", email: "kolhapur@svtrading.com" },
    { name: "Pune", address: "789 Industrial Estate, Pune", phone: "9876543212", email: "pune@svtrading.com" },
    { name: "Nagar", address: "101 Commerce Hub, Nagar", phone: "9876543213", email: "nagar@svtrading.com" },
    { name: "Indapur", address: "212 Market Row, Indapur", phone: "9876543214", email: "indapur@svtrading.com" },
    { name: "Hubali (KA)", address: "333 Tech Park, Hubali", phone: "9876543215", email: "hubali@svtrading.com" },
    { name: "Bangalore", address: "555 Silicon Avenue, Bangalore", phone: "9876543216", email: "bangalore@svtrading.com" },
    { name: "Mumbai", address: "777 Financial District, Mumbai", phone: "9876543217", email: "mumbai@svtrading.com" },
];

const OurBranches = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="branches-section">
            <div className="container">
                <h2 className="branches-title">Our Nationwide Presence</h2>
                <div className="branches-slider">
                    <Slider {...settings}>
                        {branchesData.map((branch, index) => (
                            <div className="branch-slide" key={index}>
                                <div className="branch-card">
                                    <div className="branch-card-header">
                                        <h3>{branch.name}</h3>
                                    </div>
                                    <div className="branch-card-body">
                                        <p>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="branch-icon" />
                                            {branch.address}
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faPhoneAlt} className="branch-icon" />
                                            {branch.phone}
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faEnvelope} className="branch-icon" />
                                            {branch.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default OurBranches;
