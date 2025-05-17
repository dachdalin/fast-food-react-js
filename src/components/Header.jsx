import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
const Header = () => {
  const { cart } = useContext(CartContext);
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header>
        <div className="container">
            <div className="logo">
                <h1>FastFood</h1>
            </div>
            <nav id="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <div className="cart-icon">
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span id="cart-count">{count}</span>
                </Link>
            </div>
            <div className="menu-toggle" id="menu-toggle">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </header>
  );
}
export default Header;