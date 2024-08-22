import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';


const testimonials = [
  {
    content: "Zoho Inventory is one of the most easy to implement inventory management solution we have come across, with frequent updates that add more features with each iteration.",
    name: "Ashish Verma",
    designation: "Operations & Logistics Manager, BOHECO",
    image: "ashish-verma.png",
    summary: "Quick product updates",
    backgroundColor: "#f9c74f"
  },
  {
    content: "The Zoho Inventory app has been really helpful in tracking the movement of key SKUs and the team has been very kind in providing us with solutions to our queries.",
    name: "Team OYO Homes",
    designation: "OYO Homes",
    image: "oyo-homes.png",
    summary: "Active support team",
    backgroundColor: "#90be6d"
  },
  {
    content: "Zoho Inventory is an awesome software. It's automation feature is really nice. Most of the daily operations can be managed with the use of different APIs.",
    name: "Shubham Chopra",
    designation: "Owner, Chopra Lighthouse",
    image: "shubham.jpg",
    summary: "Automations via API",
    backgroundColor: "#f94144"
  },
  {
    content: "We manage all our inventory, sales, and purchases using Zoho Inventory and Zoho Books. They are easy to learn, easy to apply, and the support team is very helpful. We like Zoho very much!.",
    name: "Venkateswara Rao",
    designation: "Managing Director, Azole Rasayanas Pvt. Ltd.",
    image: "azole-rasayanas.jpeg",
    summary: "Zoho Books integration",
    backgroundColor: "#577590"
  },
  {
    content: "Zoho Inventory has helped us to manage our inventory and customers efficiently and automate many of our business processes. Its effortless to navigate and its seamless integration with other Zoho products has proven to be very helpful.",
    name: "Sharad Nawalgaria",
    designation: "Director, Fida India",
    image: "fida-india.jpg",
    summary: "Easy-to-use interface",
    backgroundColor: "#f3722c"
  }
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % testimonials.length);
    }, 5000); // Change slide every 2 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
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
      <div>
        <header className="hero">
          <h1>Inventory management software designed for small businesses</h1>
          <p>Manage orders. Track inventory. Handle GST billing. Oversee warehouses. One inventory management software to run all your inventory operations.</p>
          <button className="cta-button">Get Started</button>
        </header>

        <div class="ratings-section">
              <div class="rating-1 rating-block">
                <span class="rating-name">
                  <img src="capterra-logo.svg" alt="https://www.capterra.com/p/146241/Zoho-Inventory/" width="88.845px"/>
                </span>
                <span class="rating-stars">
                  <img src="4dot5rating.svg" alt="Capterra Review -  Zoho Inventory" width="88.845px"/>
                </span>
                <span class="rating-number">4.5/<small>5</small></span>
              </div>
              <div class="separation-line"></div>
              <div class="rating-1 rating-block">
                <span class="rating-name">
                  <img src="g2-crowd.svg" alt="https://www.capterra.com/p/146241/Zoho-Inventory/" width="78px"/>

                </span>
                <span class="rating-stars">
                  <img src="4dot5rating.svg" alt="G2-Crowd Review -  Zoho Inventory" width="88.845px"/>

                </span>
                <span class="rating-number">4.5/<small>5</small></span>
              </div>
              <div class="separation-line"></div>
              <div class="rating-1 rating-block">
                <span class="rating-name">
                  <img src="software_advice.svg" alt="https://www.capterra.com/p/146241/Zoho-Inventory/" width="130px" height="30px"/>
                </span>
                <span class="rating-stars">
                  <img src="4dot5rating.svg" alt="Software Advice Review -  Zoho Inventory" width="88.845px"/>
                </span>
                <span class="rating-number">4.7/<small>5</small></span>
              </div>
              
              <div class="header-img-section">
                <img src="common-dashboard-1x.png" srcset="common-dashboard-1x.png 1x, common-dashboard-2x.png 2x" alt="Inventory Management Software - Zoho Inventory" class="desktop-view"/>
                <a href="#">Watch the demo</a>
              </div>
          </div>     
      </div>
      </section>
      </div>
      
      
      <section>
      <div class="app-store-section">
          <div class="app-store-section-wrap">
            <h2>Download our mobile app for free</h2>
            <a href="#">
            <img class="mobile-badge zoom" src="appstore.png" alt="IOS nventory App - App Store| Zoho Inventory" target="_blank" rel="noopener noreferrer"/>
            </a>
            <a href="#">
            <img class="mobile-badge zoom" src="playstore.png" alt="Android Inventory App - App Store| Zoho Inventory" target="_blank" rel="noopener noreferrer"/>
            </a>
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
                  <h6>What they like about Zoho Inventory</h6>
                  <h2>{testimonial.summary}</h2>
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
        
      </>
  );
};

export default HomePage;
