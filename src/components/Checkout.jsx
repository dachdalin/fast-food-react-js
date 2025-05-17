import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
const OrderConfirmationModal = ({ orderNumber, onClose }) => {
    return (
        <div
            className="modal"
            style={{
                display: 'block',
                position: 'fixed',
                zIndex: 1000,
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                overflow: 'auto',
                backgroundColor: 'rgba(0,0,0,0.4)',
            }}
            onClick={onClose}
        >
            <div
                className="modal-content"
                style={{
                    backgroundColor: '#fff',
                    margin: '15% auto',
                    padding: 20,
                    borderRadius: 8,
                    width: '80%',
                    maxWidth: 400,
                    position: 'relative',
                }}
                onClick={e => e.stopPropagation()}
            >
                <span
                    className="close"
                    style={{ position: 'absolute', right: 15, top: 10, cursor: 'pointer', fontSize: 24 }}
                    onClick={onClose}
                >
                    &times;
                </span>

                <div className="confirmation-message" style={{ textAlign: 'center' }}>
                    <i className="fas fa-check-circle" style={{ fontSize: 48, color: 'green' }}></i>
                    <h3>Order Placed Successfully!</h3>
                    <p>Your order has been received and is being processed.</p>
                    <p>
                        Order #: <strong>{orderNumber}</strong>
                    </p>
                    <p>Thank you for shopping with FastFood!</p>
                    <a href="/" className="btn" style={{ display: 'inline-block', marginTop: 20 }}>
                        Continue Shopping
                    </a>
                </div>
            </div>
        </div>
    );
};
const Checkout = () => {
    const { cart , clearCart} = useContext(CartContext);
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryFee = subtotal >= 5 ? 0 : 2.99;
    const [showModal, setShowModal] = useState(false);
    const [orderNumber, setOrderNumber] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    // check input name payment method
    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
        const creditCardDetails = document.getElementById('credit-card-details');
        if (e.target.value === 'credit-card') {
            creditCardDetails.style.display = 'block';
        } else {
            creditCardDetails.style.display = 'none';
        }
    };
    const handlePlaceOrder = (e) => {
        e.preventDefault();

        const generatedOrderNumber = Math.floor(100000 + Math.random() * 900000);

        setOrderNumber(generatedOrderNumber);
        setShowModal(true);
        // clear the cart
        clearCart();

    };

    const closeModal = () => setShowModal(false);

    return (
        <>
            <section className="checkout-section">
                <div className="container">
                    <h2 className="section-title">Checkout</h2>

                    <div className="checkout-container">
                        <div className="checkout-form">
                            <h3>Delivery Information</h3>
                            <form id="checkout-form" onSubmit={handlePlaceOrder}>
                                <div className="form-group">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input type="text" id="fullname" name="fullname" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address">Delivery Address</label>
                                    <input type="text" id="address" name="address" required />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input type="text" id="city" name="city" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="zipcode">Zip Code</label>
                                        <input type="text" id="zipcode" name="zipcode" required />
                                    </div>
                                </div>

                                <h3>Payment Method</h3>
                                <div className="payment-methods">
                                    <div className="payment-method">
                                        <input type="radio" id="credit-card" onChange={handlePaymentMethodChange} name="payment" value="credit-card" checked={paymentMethod === 'credit-card'} />
                                        <label htmlFor="credit-card">Credit Card</label>
                                    </div>

                                    <div className="payment-method">
                                        <input type="radio" id="paypal" onChange={handlePaymentMethodChange} name="payment" value="paypal" checked={paymentMethod === 'paypal'} />
                                        <label htmlFor="paypal">PayPal</label>
                                    </div>

                                    <div className="payment-method">
                                        <input type="radio" id="cash" onChange={handlePaymentMethodChange} name="payment" value="cash" checked={paymentMethod === 'cash'} />
                                        <label htmlFor="cash">Cash on Delivery</label>
                                    </div>
                                </div>

                                <div id="credit-card-details">
                                    <div className="form-group">
                                        <label htmlFor="card-number">Card Number</label>
                                        <input type="text" id="card-number" name="card-number"
                                            placeholder="1234 5678 9012 3456" />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="expiry">Expiry Date</label>
                                            <input type="text" id="expiry" name="expiry" placeholder="MM/YY" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="cvv">CVV</label>
                                            <input type="text" id="cvv" name="cvv" placeholder="123" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="notes">Order Notes (Optional)</label>
                                    <textarea id="notes" name="notes" rows="3"></textarea>
                                </div>

                                <button type="submit" className="btn" id="place-order-btn">Place Order</button>
                            </form>
                        </div>

                        <div className="order-summary">
                            <h3>Order Summary</h3>
                            <div id="checkout-items">
                                {cart.map((item) => (
                                    <div className="checkout-item" key={item.id}>
                                        <div className="checkout-item-info">
                                            <h4>{item.name}</h4>
                                            <p>Quantity: {item.quantity}</p>
                                        </div>
                                        <div className="checkout-item-price">
                                            <p>${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="summary-totals">
                                <div className="summary-row">
                                    <span>Subtotal:</span>
                                    <span id="checkout-subtotal">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Delivery Fee:</span>
                                    <span id="checkout-delivery">${deliveryFee.toFixed(2)}</span>
                                </div>
                                <div className="summary-row total">
                                    <span>Total:</span>
                                    <span id="checkout-total">${(subtotal + deliveryFee).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {showModal && <OrderConfirmationModal orderNumber={orderNumber} onClose={closeModal} />}
        </>
    )
}

export default Checkout