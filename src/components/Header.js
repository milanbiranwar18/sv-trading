import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../sv_assets/svtradinglogo.jpg';
import '../css/HeaderNavbar.css';

const Header = () => {
    return (  
        <header className="header">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} className="logo" alt="SV Trading Logo" />
                </Link>
            </div>
            <h1 className="header-title">SV Trading</h1>
            <p></p>
        </header>
    );
}

export default Header;
