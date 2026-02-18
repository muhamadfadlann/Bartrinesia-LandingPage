import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSction = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            setIsOpen(false);
        }
    }

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src="/img/logo-bartrinesia.png" alt="logo" />
                    <span>BARTRINESIA</span>
                </div>

                <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
                    <li className="active" onClick={() => scrollToSction("home")}>Home</li>
                    <li className="active" onClick={() => scrollToSction("about")}>About</li>
                    <li className="active" onClick={() => scrollToSction("services")}>Service</li>
                </ul>

                <div className="menu-contact">
                    <button className="contact-btn" onClick={() => scrollToSction("contact")}>Contact us</button>
                </div>

                <div
                    className={`hamburger ${isOpen ? "active" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
