import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-left">
                    <h2>Bartrinesia</h2>
                    <p>Inovate Your Digital Business With US.</p>
                </div>

                <div className="footer-right">
                    <h3>Contact Us</h3>
                    <p>GKM Green Tower, Level 20</p>
                    <p>Jl. TB Simatupang. Kav. 89G</p>
                    <p>Kebagusan, Jakarta Selatan</p>
                    <p>Daerah Khusus Jakarta 12520</p>
                    <p><strong>Phone:</strong> +6221-21277626</p>
                    <p><strong>Email:</strong> sapa[at]rekonesia.co.id</p>
                </div>
            </div>

            <div className="footer-bottom">
                © Copyright 2026, <strong>Bartrinesia</strong>. All Rights Reserved
            </div>
        </footer>
    );
}
