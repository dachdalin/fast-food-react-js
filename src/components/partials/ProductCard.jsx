import React, { useContext} from 'react'
import { CartContext } from '../../context/CartContext';

const ProductCard = (props) => {
   const { addToCart } = useContext(CartContext);
const handleAddToCart = () => {
    addToCart({
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
    });
  };

  return (
         <div className='cont'>
            <div className="product-card">
                   <div className="product-card__image">
                        <img src={props.image} alt={props.name} />
                   </div>
                   <div className="product-card__info">
                     <h2 className='product-card__title'>{props.name}</h2>
                     <p className="product-card__description">{props.description}</p>
                     <div className="product-card__price-row">
                        <span className="product-card__price">{props.price}</span>
                        <button type="button" className="btn product-card__btn add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
                     </div>
                   </div>

            </div>
         </div>
  )
}

export default ProductCard