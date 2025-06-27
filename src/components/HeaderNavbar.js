import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/HeaderNavbar.css";
import { FaSearch, FaFlask, FaVial, FaMicroscope, FaAtom } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import svTradingLogo from '../sv_assets/svtradinglogo.jpg';

const HeaderNavbar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [menu, setMenu] = useState(false);
    const sidebarRef = useRef(null);
    const searchRef = useRef(null);

    const navigationData = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "About Us", link: "/about" },
        { id: 3, name: "Products", link: "/products" },
        { id: 4, name: "Contact", link: "/contact" },
    ];

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.trim()) {
            const filteredResults = navigationData.filter((item) =>
                item.name.toLowerCase().includes(value.toLowerCase())
            );
            setResults(filteredResults);
        } else {
            setResults([]);
        }
    };

    const handleSearchResultClick = () => {
        setQuery("");
        setResults([]);
        setMenu(false);
    };

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest(".menu_icon")) {
                setMenu(false);
            }
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setResults([]);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="header-navbar-container">
            <header className="header-modern">
                <div className="header-left">
                    <div className="logo-tagline-row">
                        <Link to="/" className="logo-link" onClick={closeMenu}>
                            <img src={svTradingLogo} className="logo-modern" alt="S V Trading Logo" />
                        </Link>
                        <div className="brand-text-row">
                            <span className="brand-name">S. V. TRADING CO.</span>
                            <span className="brand-tagline-row">CHEMICAL SUPPLIER AND TRADER</span>
                        </div>
                    </div>
                </div>
                <div className="header-icons">
                    <FaFlask className="chem-icon" />
                    <FaVial className="chem-icon" />
                    <FaMicroscope className="chem-icon" />
                    <FaAtom className="chem-icon" />
                </div>
                <nav className="nav-modern">
                    {navigationData.map((item) => (
                        <Link key={item.id} to={item.link} className="nav_link-modern" onClick={closeMenu}>
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="header-actions">
                    <div className="input-wrapper-modern" ref={searchRef}>
                        <FaSearch className="search-icon-modern" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={query}
                            onChange={handleSearch}
                        />
                        {results.length > 0 && (
                            <div className="search-results-modern">
                                {results.map((result) => (
                                    <Link
                                        key={result.id}
                                        to={result.link}
                                        className="search-result-item-modern"
                                        onClick={handleSearchResultClick}
                                    >
                                        {result.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <Link to="/contact" className="cta-btn-modern">Get a Quote</Link>
                    <MenuIcon onClick={toggleMenu} className="menu_icon-modern" />
                </div>
            </header>
            {/* Mobile Sidebar */}
            <div ref={sidebarRef} className={`sidebar-modern ${menu ? "show" : ""}`}>
                <div className="sidebar-header-modern">
                    <Link to="/" onClick={closeMenu}>
                        <img src={svTradingLogo} className="logoimage-modern" alt="S V Trading Logo" />
                    </Link>
                </div>
                <div className="sidebar-links-modern">
                    {navigationData.map((item) => (
                        <Link key={item.id} to={item.link} onClick={closeMenu} className="sidebar_link-modern">
                            {item.name}
                        </Link>
                    ))}
                    <Link to="/contact" onClick={closeMenu} className="cta-btn-modern sidebar-cta">Get a Quote</Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderNavbar;
