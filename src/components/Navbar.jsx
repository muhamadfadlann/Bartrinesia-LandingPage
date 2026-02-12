import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="navbar-container">
                <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <img src="img/logo-bartrinesia.png" alt="Logo" />
                    <span>BARTRINESIA</span>
                </div>

                <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
                    <li className="active" onClick={() => scrollToSection("about")}>About</li>
                    <li onClick={() => scrollToSection("choose")}>Choose</li>
                    <li onClick={() => scrollToSection("services")}>Services</li>
                    <li onClick={() => scrollToSection("contact")}>Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
