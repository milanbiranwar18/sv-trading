// HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="main-container">
            <div className="wrapper">
                <header className="header-home">
                    <p className="tagline">Some fresh tagline comes here...</p>
                    <nav className="navigation">
                        <ul className="menu">
                            <li><a href="index.html" className="menu-link active">Home</a></li>
                            <li><a href="portfolio.html" className="menu-link">Portfolio</a></li>
                            <li><a href="services.html" className="menu-link">Services</a></li>
                            <li><a href="about.html" className="menu-link">About</a></li>
                            <li><a href="contact.html" className="menu-link">Contact</a></li>
                        </ul>
                    </nav>
                </header>
                <div className="landing-content">
                    <div className="welcome-section">
                        <h2>Welcome!</h2>
                        <p className="welcome-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <a href="about.html" className="more-button">
                            <img src="images/more-btn.jpg" alt="Learn More"/>
                        </a>
                    </div>
                </div>
                <div className="content-section">
                    <div className="featured-work">
                        <img src="images/work.jpg" alt="Work Showcase"/>
                        <h4>Business Designz</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="services-overview">
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <ul>
                            <li>Web Designing</li>
                            <li>Web Development</li>
                            <li>SEO</li>
                            <li>Rich Internet Applications</li>
                        </ul>
                    </div>
                </div>
                <footer className="footer">
                    <p>
                        <a href="#">Home</a> | <a href="#">Portfolio</a> | 
                        <a href="#">Services</a> | <a href="#">About Us</a> | 
                        <a href="#">Contact Us</a>
                    </p>
                    <p>&copy; 2024 DesignzStudio Pvt. Ltd.</p>
                </footer>
            </div>
        </div>


    //     <div class="slide-item" data-slide-index="0" style="width: 815px;">                        
    //     <video muted playsinline autoplay class="slide-video" width="100%" height="100%">
    //         <source src="/upload/file/main-banner/1_re_low[0].mp4" type="video/mp4">
    //     </video>
    //     <div class="overlay"></div>
    //     <div class="content-area">
    //         <h2 class="heading-title">Towards Top Global Science Company</h2>
    //         <p class="subtitle">We connect science to life for a better future.</p>
    //         <a href="https://www.lgchem.com/company/company-information/about" class="link-arrow">
    //             <div class="arrow-icon"></div>
    //         </a>
    //     </div>      
    // </div>
    

    );
};

export default HomePage;



