import React from 'react'

import ourRest from '../assets/images/our_res.jpg'
const About = () => {
  return (
    <>
    <section className="page-banner">
        <div className="container">
            <h2>About Us</h2>
            <p>Learn more about FastFood and our journey</p>
        </div>
    </section>

    <section className="about-section">
        <div className="container">
            <div className="about-content">
                <div className="about-image">
                    <img src={ourRest} alt="Our Restaurant"/>
                </div>
                <div className="about-text">
                    <h3>Our Story</h3>
                    <p>FastFood was founded in 2015 with a simple mission: to deliver delicious, high-quality food to people's homes and offices. What started as a small family business has grown into one of the most loved food delivery services in the region.</p>
                    <p>Our journey began when our founder, Chef Michael Rodriguez, noticed a gap in the market for restaurant-quality food delivered to people's doorsteps. Having worked in some of the finest restaurants across the country, Chef Michael wanted to bring that same level of culinary excellence to home dining.</p>
                    <p>Today, we partner with over 50 local restaurants and employ a team of dedicated delivery professionals committed to bringing you the best food experience possible.</p>
                </div>
            </div>

            <div className="mission-values">
                <h3>Our Mission & Values</h3>
                <div className="values-container">
                    <div className="value-card">
                        <i className="fas fa-utensils"></i>
                        <h4>Quality Food</h4>
                        <p>We partner only with restaurants that meet our strict quality standards. Every dish must be prepared with fresh ingredients and proper culinary techniques.</p>
                    </div>
                    <div className="value-card">
                        <i className="fas fa-shipping-fast"></i>
                        <h4>Fast Delivery</h4>
                        <p>We understand that timing is crucial when it comes to food delivery. Our team works efficiently to ensure your food arrives hot and fresh.</p>
                    </div>
                    <div className="value-card">
                        <i className="fas fa-leaf"></i>
                        <h4>Sustainability</h4>
                        <p>We're committed to reducing our environmental impact by using eco-friendly packaging and optimizing delivery routes to minimize carbon emissions.</p>
                    </div>
                    <div className="value-card">
                        <i className="fas fa-heart"></i>
                        <h4>Community Focus</h4>
                        <p>We believe in supporting local businesses and giving back to the community. A portion of our profits goes to local food banks and community initiatives.</p>
                    </div>
                </div>
            </div>

            <div className="team-section">
                <h3>Meet Our Team</h3>
                <div className="team-container">
                    <div className="team-member">
                        <img src="https://placehold.co/600x400" alt="Michael Rodriguez"/>
                        <h4>Michael Rodriguez</h4>
                        <p className="member-title">Founder & CEO</p>
                        <p>Chef Michael brings over 20 years of culinary experience to FastFood. His passion for food and service excellence drives our company vision.</p>
                    </div>
                    <div className="team-member">
                        <img src="https://placehold.co/600x400" alt="Sarah Johnson"/>
                        <h4>Sarah Johnson</h4>
                        <p className="member-title">Operations Director</p>
                        <p>Sarah ensures that our delivery operations run smoothly and efficiently. Her background in logistics helps us maintain our promise of timely deliveries.</p>
                    </div>
                    <div className="team-member">
                        <img src="https://placehold.co/600x400" alt="David Chen"/>
                        <h4>David Chen</h4>
                        <p className="member-title">Restaurant Partnership Manager</p>
                        <p>David works closely with our restaurant partners to ensure menu quality and variety. He's constantly on the lookout for new culinary talents to join our platform.</p>
                    </div>
                </div>
            </div>

            <div className="testimonials-section">
                <h3>What Our Customers Say</h3>
                <div className="testimonials-container">
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <p>"FastFood has been a lifesaver during busy workweeks. The food is always fresh, and the delivery is consistently on time. I recommend them to all my colleagues!"</p>
                        </div>
                        <div className="testimonial-author">
                            <img src="/placeholder.svg?height=60&width=60" alt="Customer"/>
                            <div>
                                <h5>Jennifer Adams</h5>
                                <p>Marketing Executive</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <p>"As someone who loves good food but doesn't always have time to cook, FastFood has been a game-changer. The variety of restaurants available is impressive, and the quality never disappoints."</p>
                        </div>
                        <div className="testimonial-author">
                            <img src="/placeholder.svg?height=60&width=60" alt="Customer"/>
                            <div>
                                <h5>Robert Thompson</h5>
                                <p>Software Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className="testimonial-content">
                            <p>"I've tried many food delivery services, but FastFood stands out for their attention to detail. The food is always well-packaged, and their customer service is exceptional."</p>
                        </div>
                        <div className="testimonial-author">
                            <img src="/placeholder.svg?height=60&width=60" alt="Customer" />
                            <div>
                                <h5>Maria Garcia</h5>
                                <p>Teacher</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <div className="cta-content">
                <h3>Ready to Experience FastFood?</h3>
                <p>Order now and discover why thousands of customers trust us for their food delivery needs.</p>
                <a href="index.html#menu" className="btn">Order Now</a>
            </div>
        </div>
    </section>
    </>
  )
}
export default About