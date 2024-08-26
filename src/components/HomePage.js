import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';

const testimonials = [
  {
    content: "Zoho Inventory is one of the most easy to implement inventory management solution we have come across, with frequent updates that add more features with each iteration.",
    name: "Ashish Verma",
    designation: "Operations & Logistics Manager, BOHECO",
    image: "review.png",
    summary: "Quick product updates",
    backgroundColor: "#d2f3f3"
  },
  {
    content: "The Zoho Inventory app has been really helpful in tracking the movement of key SKUs and the team has been very kind in providing us with solutions to our queries.",
    name: "Team OYO Homes",
    designation: "OYO Homes",
    image: "oyo-homes.png",
    summary: "Active support team",
    backgroundColor: "#ffeeee"
  },
  {
    content: "Zoho Inventory is an awesome software. It's automation feature is really nice. Most of the daily operations can be managed with the use of different APIs.",
    name: "Shubham Chopra",
    designation: "Owner, Chopra Lighthouse",
    image: "download--3--300.webp",
    summary: "Automations via API",
    backgroundColor: "#e6e3f3"
  },
  {
    content: "We manage all our inventory, sales, and purchases using Zoho Inventory and Zoho Books. They are easy to learn, easy to apply, and the support team is very helpful. We like Zoho very much!.",
    name: "Venkateswara Rao",
    designation: "Managing Director, Azole Rasayanas Pvt. Ltd.",
    image: "satisfaction.png",
    summary: "Zoho Books integration",
    backgroundColor: "#ebe1bb"
  },
  {
    content: "Zoho Inventory has helped us to manage our inventory and customers efficiently and automate many of our business processes. Its effortless to navigate and its seamless integration with other Zoho products has proven to be very helpful.",
    name: "Sharad Nawalgaria",
    designation: "Director, Fida India",
    image: "good-review.png",
    summary: "Easy-to-use interface",
    backgroundColor: "#bbdeeb"
  }
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length);
  };

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="home-container">
        <section>
          <header className="hero">
            <h1>Inventory management software designed for small businesses</h1>
            <p>Manage orders. Track inventory. Handle GST billing. Oversee warehouses. One inventory management software to run all your inventory operations.</p>
            <button className="cta-button">Get Started</button>
          </header>

          <div className="ratings-section">
            <div className="rating-1 rating-block">
              <span className="rating-name">
                <img src="capterra-logo.svg" alt="Capterra Review" width="88.8448px" />
              </span>
              <span className="rating-stars">
                <img src="4dot5rating.svg" alt="Capterra Review - Zoho Inventory" width="88.8448px" />
              </span>
              <span className="rating-number">4.5/<small>5</small></span>
            </div>
            <div className="separation-line"></div>
            <div className="rating-1 rating-block">
              <span className="rating-name">
                <img src="g2-crowd.svg" alt="G2-Crowd Review" width="78px" />
              </span>
              <span className="rating-stars">
                <img src="4dot5rating.svg" alt="G2-Crowd Review - Zoho Inventory" width="88.8448px" />
              </span>
              <span className="rating-number">4.5/<small>5</small></span>
            </div>
            <div className="separation-line"></div>
            <div className="rating-1 rating-block">
              <span className="rating-name">
                <img src="software_advice.svg" alt="Software Advice Review" width="130px" height="30px" />
              </span>
              <span className="rating-stars">
                <img src="4dot5rating.svg" alt="Software Advice Review - Zoho Inventory" width="88.8448px" />
              </span>
              <span className="rating-number">4.7/<small>5</small></span>
            </div>

            <div className="header-img-section">
              <img src="common-dashboard-1x.png" srcSet="common-dashboard-1x.png 1x, common-dashboard-2x.png 2x" alt="Inventory Management Software - Zoho Inventory" className="desktop-view" />
              <a href="#">Watch the demo</a>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="app-store-section">
          <div className="app-store-section-wrap">
            <p>Still doing your Inventory</p>
            <p>Management on Excel?</p>
            <br />
            <h4>Join With Us & Grow your Business with Us</h4>
          </div>
        </div>
      </section>

      <section className="carousel-section">
        <div className="carousel">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`carousel-content ${index === currentSlide ? 'active' : ''}`}
            >
              <div
                className="testimonial-block"
                style={{ backgroundColor: testimonial.backgroundColor }}
              >
                <p className="testimonial-content">{testimonial.content}</p>
                <div className="customer-section">
                  <img src={testimonial.image} alt={`Customer ${testimonial.name}`} />
                  <div className="customer-details">
                    <p className="customer-name">{testimonial.name}</p>
                    <p className="customer-designation">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-summary">
                <h2>What they like about Zoho Inventory</h2>
                <p>{testimonial.summary}</p>
              </div>
            </div>
          ))}
          <button className="prev-arrow" onClick={prevSlide}>&#10094;</button>
          <button className="next-arrow" onClick={nextSlide}>&#10095;</button>
        </div>
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      <section className="features">
        <h1>Features</h1>

        <div className="features-container">
          <div className="feature">
            <div className="feature-icon">
              <img src="OrderIcon.png" alt="Order Management Icon" />
            </div>
            <div className="feature-text">
              <h2>Order Management</h2>
              <p>Handle all your sales and purchases activities, manage invoices and bills, and track payments. Our Inventory will help you to track everything.</p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <img src="analysis.png" alt="Reports Icon" />
            </div>
            <div className="feature-text">
              <h2>Reports</h2>
              <p>Know your inventory aging, vendor payments, sales details, and inventory valuation from a range of reports that can be generated, downloaded, and shared easily.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-p1">
        <div className="col">
          <img className="logo" src="no/favicon.ico" alt="logo" />
        </div>
        <div className="col">
          <h4>Features</h4>
          <a href="#">Order Management Software</a>
          <a href="#">Inventory Management System</a>
          <a href="#">Inventory Control</a>
          <a href="#">Inventory Reports</a>
          <a href="#">All features</a>
        </div>
        <div className="col">
          <h4>About</h4>
          <a href="#">My Account</a>
          <a href="#">Sign In</a>
          <a href="#">View Inventory</a>
          <a href="#">Get Support</a>
        </div>
        <div className="col">
          <p>Secured Payment Gateways</p>
          <img src="pay.png" alt="Payment Gateways" />
        </div>
      </footer>
    </>
  );
};

export default HomePage;
