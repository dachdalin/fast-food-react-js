import React from 'react'

const ProductCard = (props) => {
  return (
         <div className='cont'>
            <div className="product-card">
                <a href="http://">
                   <div className="product-card__image">
                        <img src={props.image} alt={props.name} />
                   </div>
                   <div className="product-card__info">
                     <h2 className='product-card__title'>{props.name}</h2>
                     <p className="product-card__description">{props.description}</p>
                     <div className="product-card__price-row">
                        <span className="product-card__price">{props.price}</span>
                        <button className="btn product-card__btn add-to-cart" data-image={props.image} data-id={props.id} data-name={props.name} data-price={props.price}>Add to Cart</button>
                     </div>
                   </div>
                </a>
            </div>
         </div>
  )
}

export default ProductCard