import React from 'react'

const Contact = () => {
  return (
    <>
     <section className="page-banner">
        <div className="container">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you</p>
        </div>
    </section>

    <section className="contact-section">
        <div className="container">
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Get In Touch</h3>
                    <p>Have questions, suggestions, or feedback? We're here to help! Fill out the form or use the contact information below to reach us.</p>
                    
                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>Our Location</h4>
                            <p>123 Food Street, Tasty City, TC 12345</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <i className="fas fa-phone-alt"></i>
                        <div>
                            <h4>Phone Number</h4>
                            <p>Customer Service: (123) 456-7890</p>
                            <p>Order Support: (123) 456-7891</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <h4>Email Address</h4>
                            <p>General Inquiries: info@fastfood.com</p>
                            <p>Support: support@fastfood.com</p>
                        </div>
                    </div>
                    
                    <div className="info-item">
                        <i className="fas fa-clock"></i>
                        <div>
                            <h4>Business Hours</h4>
                            <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
                            <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                        </div>
                    </div>
                    
                    <div className="social-links">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                
                <div className="contact-form-container">
                    <h3>Send Us a Message</h3>
                    <form id="contact-form">
                        <div className="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" id="name" name="name" required/>
                        </div>
                        
                        <div className="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email" required/>
                        </div>
                        
                        <div className="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone"/>
                        </div>
                        
                        <div className="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required/>
                        </div>
                        
                        <div className="form-group">
                            <label for="message">Your Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>
            </div>
            
            <div className="faq-section">
                <h3>Frequently Asked Questions</h3>
                <div className="faq-container">
                    <div className="faq-item">
                        <div className="faq-question">
                            <h4>What is the delivery area?</h4>
                            <span className="faq-toggle"><i className="fas fa-plus"></i></span>
                        </div>
                        <div className="faq-answer">
                            <p>We currently deliver to all areas within a 10-mile radius of our location. You can check if your address is within our delivery zone by entering your zip code on our homepage.</p>
                        </div>
                    </div>
                    
                    <div className="faq-item">
                        <div className="faq-question">
                            <h4>How long does delivery take?</h4>
                            <span className="faq-toggle"><i className="fas fa-plus"></i></span>
                        </div>
                        <div className="faq-answer">
                            <p>Our average delivery time is 30-45 minutes, depending on your location and the time of day. During peak hours, delivery might take slightly longer. You can track your order in real-time through our website.</p>
                        </div>
                    </div>
                    
                    <div className="faq-item">
                        <div className="faq-question">
                            <h4>What payment methods do you accept?</h4>
                            <span className="faq-toggle"><i className="fas fa-plus"></i></span>
                        </div>
                        <div className="faq-answer">
                            <p>We accept all major credit cards, PayPal, and cash on delivery. For online payments, your transaction is secured with industry-standard encryption.</p>
                        </div>
                    </div>
                    
                    <div className="faq-item">
                        <div className="faq-question">
                            <h4>Can I modify or cancel my order?</h4>
                            <span className="faq-toggle"><i className="fas fa-plus"></i></span>
                        </div>
                        <div className="faq-answer">
                            <p>You can modify or cancel your order within 5 minutes of placing it. After that, the order goes into preparation and cannot be changed. Please contact our customer service immediately if you need to make changes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Contact