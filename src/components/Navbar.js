import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';  // Import Close Icon

const Navbar = () => {
    const [data, setData] = useState(false);  // For search input
    const [menu, setMenu] = useState(false);  // For sidebar visibility
    const sidebarRef = useRef(null);  // Reference for sidebar div

    const inputHandler = () => {
        setData(!data);  // Toggles the search bar visibility
    };

    const menuHandler = () => {
        setMenu(!menu);  // Toggles the sidebar visibility
    };

    // Function to handle clicks outside the sidebar
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if click was outside the sidebar and not on the menu icon
            if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('.menu_icon')) {
                setMenu(false); // Close the sidebar
            }
        };

        // Add event listener for click events
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Cleanup the event listener when the component unmounts
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="navbar_container">
            <div className="navbar_div">
                {/* Search bar (centered in desktop view) */}
                <div className={data ? "search_input_active" : "search_input"}>
                    <input className="" type="text" placeholder="Search here" />
                    {data ? (
                        <CloseIcon onClick={inputHandler} className="close_icon" />  // Show CloseIcon when active
                    ) : (
                        <SearchIcon onClick={inputHandler} className="search_icon"  />  // Show SearchIcon when inactive
                    )}
                </div>

                {/* Navigation links (right-aligned in desktop view) */}
                <div className="nav_links">
                    <Link to="/" className="nav_link">Home</Link>
                    <Link to="/about" className="nav_link">About Us</Link>
                    <Link to="/products" className="nav_link">Products</Link>
                    <Link to="/contact" className="nav_link">Contact</Link>
                </div>

                {/* Icons for Mobile View (Menu + Search) */}
                <div className="icons_container">
                    <SearchIcon onClick={inputHandler} className="mobile_search_icon" />
                    <MenuIcon onClick={menuHandler} className="menu_icon" />
                </div>
            </div>

            {/* Sidebar Section */}
            <div ref={sidebarRef} className={`sidebar ${menu ? 'active' : ''}`}>
                <Link to="/" className="sidebar_link">Home</Link>
                <Link to="/about" className="sidebar_link">About Us</Link>
                <Link to="/products" className="sidebar_link">Products</Link>
                <Link to="/contact" className="sidebar_link">Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;
