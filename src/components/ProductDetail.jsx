import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = (props) => {
  const { addToCart, updateQuantity, cart } = useContext(CartContext);
  const { id } = useParams();

  const product = productById(id);
  const relatedProducts = fectRelatedProducts(id);

  // Get quantity from cart or default 1
  const cartItem = cart.find(item => item.id === product?.id);
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);

  // Sync local quantity state if cart changes externally
  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);

  // Handle increasing/decreasing quantity locally and in context
  const handleQuantityChange = (change) => {
    let newQty = quantity + change;
    if (newQty < 1) newQty = 1;
    if (newQty > 10) newQty = 10; // max limit

    setQuantity(newQty);
    updateQuantity(product.id, newQty);
  };

  // Add product to cart with current quantity
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity, // use local quantity
    });
  };

  function productById(Id) {
    for (const cat of props.category) {
      const prod = cat.products.find(p => p.id === Number(Id));
      if (prod) return prod;
    }
    return null;
  }

  function fectRelatedProducts(Id) {
    for (const cat of props.category) {
      const prods = cat.products.filter(p => p.id !== Number(Id));
      if (prods.length) return prods;
    }
    return [];
  }

  if (!product) return <p>Product not found</p>;

  return (
    <section className="product-detail">
      <div className="container">
        <div className="product-container">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <h2 id="detail-name">{product.name}</h2>
            <div className="product-price" id="detail-price">${product.price}</div>
            <div className="product-description" id="detail-description">{product.description}</div>

            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <div className="quantity-controls">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="decrease-cart-quantity"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  min="1"
                  max="10"
                  onChange={e => {
                    let val = Number(e.target.value);
                    if (val < 1) val = 1;
                    if (val > 10) val = 10;
                    setQuantity(val);
                    updateQuantity(product.id, val);
                  }}
                />
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="increase-cart-quantity"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <button id="detail-add-to-cart" className="btn" onClick={handleAddToCart}>
              Add to Cart
            </button>

            <div className="additional-info">
              <div className="info-item">
                <i className="fas fa-truck"></i>
                <span>Free delivery on orders over $30</span>
              </div>
              <div className="info-item">
                <i className="fas fa-clock"></i>
                <span>Delivery within 30-45 minutes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="related-products">
          <h3>You May Also Like</h3>
          <div className="products">
            {relatedProducts.map((prod) => (
              <div className="cont" key={prod.id}>
                <div className="product-card">
                  <Link to={`/product/${prod.id}`}>
                    <div className="product-card__image">
                      <img src={prod.image} alt={prod.name} />
                    </div>
                  </Link>
                  <div className="product-card__info">
                    <h2 className="product-card__title">{prod.name}</h2>
                    <p className="product-card__description">{prod.description}</p>
                    <div className="product-card__price-row">
                      <span className="product-card__price">${prod.price}</span>
                      <button
                        type="button"
                        className="btn product-card__btn add-to-cart"
                        onClick={() => addToCart(prod)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
