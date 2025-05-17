import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryFee = subtotal >= 5 ? 0 : 2.99;
    const deliveryText = subtotal >= 5 ? 'Free Delivery' : 'Delivery Fee';
    const total = subtotal + deliveryFee;
    const handleRemove = (id) => {
        removeFromCart(id);
    }
    const handleUpdateQuantity = (id, quantity) => {
        updateQuantity(id, quantity);
    }
  return (
    <>
    <section className="cart-section">
        <div className="container">
            <h2 className="section-title">Your Shopping Cart</h2>
            
            <div id="cart-items-container">
                <div className="cart-headers">
                    <div className="cart-header-item">Product</div>
                    <div className="cart-header-item">Price</div>
                    <div className="cart-header-item">Quantity</div>
                    <div className="cart-header-item">Total</div>
                    <div className="cart-header-item">Action</div>
                </div>
                
                <div id="cart-items">
                    {cart.map((item) => (
                        
                   <div className="cart-item" key={item.id}>
                    <div className="cart-product">
                        <img src={item.image} alt="" />
                        <div className="cart-product-info">
                            <h4>{item.name}</h4>
                        </div>
                    </div>
                    <div className="cart-price">${item.price}</div>
                    <div className="cart-quantity">
                        <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} className="decrease-cart-quantity" data-id={item.id}>-</button>
                        <input type="number" value={item.quantity} min="1" max="10" data-id={item.id} className="cart-quantity-input"/>
                        <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)} className="increase-cart-quantity" data-id={item.id}>+</button>
                    </div>
                        <div className="cart-item-total"></div>
                        <div className="cart-item-action">
                            <span className="remove-item" data-id={item.id} onClick={() => handleRemove(item.id)}><i className="fas fa-trash"></i></span>
                        </div>
                   </div>
                    ))}
                <div id="cart-empty-message" className={cart.length === 0 ? '' : 'd-none'}>
                    <i className="fas fa-shopping-cart"></i>
                    <p>Your cart is empty. <Link to="/">Continue shopping</Link></p>
                </div>
                </div>
                
                <div className="cart-summary">
                    <div className="cart-totals">
                        <div className="cart-total-row">
                            <span>Subtotal:</span>
                            <span id="cart-subtotal">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="cart-total-row">
                            <span>Delivery Fee:</span>
                            <span id="delivery-fee">${deliveryFee.toFixed(2)}</span>
                        </div>
                        <div className="cart-total-row total">
                            <span>Total:</span>
                            <span id="cart-total">${total.toFixed(2)}</span>
                        </div>
                    </div>
                    
                    <div className="cart-actions">
                        <Link to="/" id="continue-shopping-btn" className="btn-secondary">Continue Shopping</Link>
                        <Link to="/checkout" id="checkout-btn" className="btn" style={!cart.length ? { pointerEvents: 'none' } : {}} disabled={!cart.length}>Proceed to Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Cart