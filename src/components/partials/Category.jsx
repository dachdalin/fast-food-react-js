import React from 'react'
import ProductCard from './ProductCard'
const Category = (props) => {
  return (
    <div className='category'>
      <h2>{props.name}</h2>
       <div className='products'>
        {props.products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
       </div>
    </div>
  )
}

export default Category