import React from 'react';
import '../styles/Home.css';
import heroBg from '../assests/heroBg.jpg'; 
import ev1 from '../assests/hyundai.jpg';
import ev2 from '../assests/tesla.jpg';
import ev3 from '../assests/kia.jpg';


const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero" style={{backgroundImage: `url(${heroBg})`}}>
                <h1>Future Wheels⚡</h1>
                <p>Revolutionizing Mobility with Smart & Sustainable Electric Vehicles</p><p>Pioneering a Greener, Cleaner, and More Connected Future of Transportation.</p>
                <a href="#explore" className="btn-primary">Explore Now</a>
            </section>

            {/* Featured EVs Section */}
            <section id="explore" className="featured-evs">
                <h2>Our Top Electric Vehicles</h2>
                <div className="ev-container">
                    <div className="ev-card">
                        <img src={ev1} alt="EV Car 1"/>
                        <h3>Future Wheels X1</h3>
                        <p>Range: 400 miles | Price: $45,000</p>
                    </div>
                    <div className="ev-card">
                        <img src={ev2} alt="EV Car 2"/>
                        <h3>Future Wheels Y3</h3>
                        <p>Range: 350 miles | Price: $39,000</p>
                    </div>
                    <div className="ev-card">
                        <img src={ev3} alt="EV Car 3"/>
                        <h3>Future Wheels Z5</h3>
                        <p>Range: 500 miles | Price: $55,000</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose">
                <h2>Why Choose Future Wheels? 🤔</h2>
                <div className="features">
                    <div className="feature">
                        <i className="fas fa-battery-full"></i>
                        <h4>Long Battery Life</h4>
                        <p>Advanced battery technology with a lifespan of over 10 years.</p>
                    </div>
                    <div className="feature">
                        <i className="fas fa-leaf"></i>
                        <h4>Eco-Friendly</h4>
                        <p>Zero emissions, contributing to a cleaner environment.</p>
                    </div>
                    <div className="feature">
                        <i className="fas fa-bolt"></i>
                        <h4>Fast Charging</h4>
                        <p>Charge up to 80% in just 30 minutes.</p>
                    </div>
                    <div className="feature">
                        <i className="fas fa-car"></i>
                        <h4>Futuristic Design</h4>
                        <p>State-of-the-art aesthetics for the modern driver.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta">
                <h2>Ready to Drive the Future? 🚀</h2>
                <p>Join us in the EV revolution today. Experience the best in electric mobility.</p>
                <a href="#contact" className="btn-primary">Get Started</a>
            </section>
        </div>
    );
};

export default Home;


