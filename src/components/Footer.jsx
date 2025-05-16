import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>FastFood</h3>
                    <p>Delicious food delivered to your doorstep</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>123 Food Street, Tasty City</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@fastfood.com</p>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2025 FastFood. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
}
export default Footer;