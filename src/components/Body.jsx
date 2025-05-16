import React from 'react'
import Category from './partials/Category'
const Body = (props) => {
  return (
    <>
    <section className="hero">
        <div className="container">
            <div className="hero-content">
                <h2>Delicious Food Delivered To Your Door</h2>
                <p>Order your favorite meals from the comfort of your home</p>
                <a href="#menu" className="btn">Order Now</a>
            </div>
        </div>
    </section>
    <section id="menu" className='menu-section'>
        <div className="container">
            <h2 className='section-title'>Our Menu</h2>
            {props.category.map((category) => (
                <Category
                    key={category.id}
                    name={category.name}
                    products={category.products}
                />
            ))}
        </div>
    </section>
    </>
  )
}

export default Body