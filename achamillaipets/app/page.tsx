'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Mobile menu functions
    function toggleMobileMenu() {
      const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
      const mobileNav = document.querySelector('.mobile-nav');
      mobileMenuBtn?.classList.toggle('open');
      mobileNav?.classList.toggle('open');
    }

    function closeMobileMenu() {
      const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
      const mobileNav = document.querySelector('.mobile-nav');
      mobileMenuBtn?.classList.remove('open');
      mobileNav?.classList.remove('open');
    }

    // FAQ toggle function
    function toggleFaq(btn: HTMLElement) {
      const answer = btn.nextElementSibling as HTMLElement;
      const isOpen = answer.classList.contains("open");
      document.querySelectorAll(".faq-a").forEach(a => a.classList.remove("open"));
      document.querySelectorAll(".faq-q").forEach(b => b.classList.remove("open"));
      if (!isOpen) { 
        answer.classList.add("open"); 
        btn.classList.add("open"); 
      }
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 10) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        const target = document.querySelector(href ?? '');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Intersection Observer for smooth section entrances
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    // Attach functions to window for onclick handlers
    (window as any).toggleMobileMenu = toggleMobileMenu;
    (window as any).closeMobileMenu = closeMobileMenu;
    (window as any).toggleFaq = toggleFaq;
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="nav-left">
              <img 
                src="/Logo.jpg" 
                alt="Achamillai Pets Logo" 
                style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'cover' }} 
              />
              <div>
                <div className="nav-brand">Achamillai Pets</div>
                <div className="nav-subtitle">Thanjavur · Est. 2018</div>
              </div>
            </div>
            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#breeds">Breeds</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="nav-right">
              <a href="tel:8825961124" className="cta-button">Call Now</a>
              <button className="mobile-menu-btn" onClick={() => (window as any).toggleMobileMenu()}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="social-links">
                <a href="https://www.facebook.com/p/Achamillaipets-thanjavur-100079921733845/" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/achamillai_pets/" className="social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mobile-nav">
            <a href="#home" onClick={() => (window as any).closeMobileMenu()}>Home</a>
            <a href="#services" onClick={() => (window as any).closeMobileMenu()}>Services</a>
            <a href="#breeds" onClick={() => (window as any).closeMobileMenu()}>Breeds</a>
            <a href="#about" onClick={() => (window as any).closeMobileMenu()}>About</a>
            <a href="#contact" onClick={() => (window as any).closeMobileMenu()}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="container">
          <div className="badge">Trusted Since 2018</div>
          <h1>Thanjavur&apos;s Most Trusted <em>Pet Shop</em></h1>
          <p className="hero-subtext">Your trusted partner for finding perfect companion. We specialize in healthy, vaccinated puppies and kittens with complete documentation.</p>
          <div className="hero-buttons">
            <a href="#breeds" className="btn-primary">Browse Breeds</a>
            <a href="tel:8825961124" className="btn-outline">Call Us Now</a>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="stat-value">4.9★</div>
              <div className="stat-label">Rating</div>
            </div>
            <div className="stat">
              <div className="stat-value">147+</div>
              <div className="stat-label">Reviews</div>
            </div>
            <div className="stat">
              <div className="stat-value">7+</div>
              <div className="stat-label">Years</div>
            </div>
            <div className="stat">
              <div className="stat-value">13+</div>
              <div className="stat-label">Breeds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-label">Our Services</div>
          <h2 className="section-title">What We Offer</h2>
          <div className="section-underline"></div>
          <div className="services-grid">
            <div className="card service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 64 64" fill="var(--gold)">
                  <path d="M53 18c-1.1 0-2 .9-2 2v2h-3v-3c0-2.2-1.8-4-4-4h-2.2C40.4 10.3 36.5 8 32 8s-8.4 2.3-9.8 7H20c-2.2 0-4 1.8-4 4v3h-3v-2c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2h3v2c0 1.1.9 2 2 2h2v8c0 1.1.9 2 2 2h4v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4h8v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4h2c1.1 0 2-.9 2-2v-8h2c1.1 0 2-.9 2-2v-2h3c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zM28 28c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </div>
              <h3>Dog Sales</h3>
              <p>Healthy, vaccinated puppies of various breeds with complete health records and documentation. All dogs are properly socialized and ready for their forever homes.</p>
            </div>
            <div className="card service-card">
              <div className="service-icon">
                <svg width="32" height="32" viewBox="0 0 64 64" fill="var(--gold)">
                  <path d="M48 10h-4l-4-6-4 10H28L24 4l-4 6h-4C9.8 10 6 13.8 6 18v20c0 8.8 7.2 16 16 16h20c8.8 0 16-7.2 16-16V18c0-4.2-3.8-8-10-8zM26 34c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm12 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-6 8c-4 0-7-1.5-8-4h16c-1 2.5-4 4-8 4z"/>
                </svg>
              </div>
              <h3>Cat & Kitten Sales</h3>
              <p>Adorable kittens and cats with proper vaccination records. We ensure all our felines are healthy, well-cared for, and ready to become part of your family.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Breeds */}
      <section className="breeds" id="breeds">
        <div className="container">
          <div className="section-label">Available Breeds</div>
          <h2 className="section-title">Find Your Perfect Companion</h2>
          <div className="section-underline"></div>
          <div className="breeds-grid">
            <div className="card breed-card">
              <div className="breed-name">Labrador</div>
              <div className="breed-tagline">Friendly & Loyal</div>
              <div className="available-badge">Available</div>
            </div>
            <div className="card breed-card">
              <div className="breed-name">Pomeranian</div>
              <div className="breed-tagline">Fluffy & Playful</div>
              <div className="available-badge">Available</div>
            </div>
            <div className="card breed-card">
              <div className="breed-name">German Shepherd</div>
              <div className="breed-tagline">Intelligent & Brave</div>
              <div className="available-badge">Available</div>
            </div>
            <div className="card breed-card">
              <div className="breed-name">Pug</div>
              <div className="breed-tagline">Charming & Gentle</div>
              <div className="available-badge">Available</div>
            </div>
            <div className="card breed-card">
              <div className="breed-name">Kittens</div>
              <div className="breed-tagline">Cute & Cuddly</div>
              <div className="available-badge">Available</div>
            </div>
            <div className="card breed-card">
              <div className="breed-name">Shih Tzu</div>
              <div className="breed-tagline">Affectionate & Calm</div>
              <div className="available-badge">Available</div>
            </div>
            <div className="card breed-card">
              <div className="breed-name">Beagle</div>
              <div className="breed-tagline">Curious & Energetic</div>
              <div className="available-badge">Available</div>
            </div>
            <div className="card breed-card">
              <div className="breed-name">Rottweiler</div>
              <div className="breed-tagline">Strong & Loyal</div>
              <div className="available-badge">Available</div>
            </div>
            <div className="card breed-card">
              <div className="breed-name">Lhasa Apso</div>
              <div className="breed-tagline">Regal & Watchful</div>
              <div className="available-badge">Available</div>
            </div>
            <div className="card breed-card">
              <div className="breed-name">Bully Puppy</div>
              <div className="breed-tagline">Confident & Strong</div>
              <div className="available-badge">Available</div>
            </div>
            <div className="card breed-card">
              <div className="breed-name">Terrier Puppy</div>
              <div className="breed-tagline">Energetic & Bold</div>
              <div className="available-badge">Available</div>
            </div>
            <div className="card breed-card">
              <div className="breed-name">Golden Retriever</div>
              <div className="breed-tagline">Gentle & Playful</div>
              <div className="available-badge">Available</div>
            </div>
            <div className="card breed-card">
              <div className="breed-name">Dachshund</div>
              <div className="breed-tagline">Brave & Curious</div>
              <div className="available-badge">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-label">About Us</div>
          <h2 className="section-title">Your Trusted Pet Partner Since 2018</h2>
          <div className="section-underline"></div>
          <p style={{maxWidth: "800px", margin: "0 auto 50px", lineHeight: "1.8", color: "var(--text-mid)"}}>
            Achamillai Pets And Dog Sales In Thanjavur has been serving the community since 2018, providing healthy, vaccinated pets to loving families. We specialize in dog sales and cat & kitten sales, ensuring each pet receives proper care, nutrition, and socialization before finding their forever home. Our commitment to quality and customer satisfaction has earned us a 4.9-star rating with over 147 positive reviews on JustDial.
          </p>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--gold)">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div className="feature-title">Health Guaranteed</div>
              <div className="feature-desc">All pets are healthy and vaccinated</div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--gold)">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="feature-title">All Breeds Available</div>
              <div className="feature-desc">Wide variety of breeds to choose from</div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--gold)">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <div className="feature-title">Vaccination Records</div>
              <div className="feature-desc">Complete documentation provided</div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--gold)">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="feature-title">Expert Guidance</div>
              <div className="feature-desc">Professional advice on pet care</div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--gold)">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
              </div>
              <div className="feature-title">Affordable Pricing</div>
              <div className="feature-desc">Competitive rates for all breeds</div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--gold)">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="feature-title">Post-Sale Support</div>
              <div className="feature-desc">Continued assistance after purchase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title">The Achamillai Difference</h2>
          <div className="section-underline"></div>
          <div className="why-grid">
            <div className="card why-card">
              <div className="why-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Quality Assurance</h3>
              <p>Every pet undergoes thorough health checks and vaccinations before being made available for adoption.</p>
            </div>
            <div className="card why-card">
              <div className="why-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Trusted by Thousands</h3>
              <p>Over 147 positive reviews and a 4.9-star rating speak to our commitment to customer satisfaction.</p>
            </div>
            <div className="card why-card">
              <div className="why-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 9.99 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0C.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5C2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
              </div>
              <h3>Expert Care</h3>
              <p>Our team provides professional care and attention to ensure every pet is healthy and well-socialized.</p>
            </div>
            <div className="card why-card">
              <div className="why-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3>Loving Environment</h3>
              <p>All pets are raised in a caring environment with proper nutrition, exercise, and socialization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews">
        <div className="container">
          <div className="reviews-header">
            <div className="section-label">Customer Reviews</div>
            <div className="rating-badge">4.9★ JustDial Rating</div>
          </div>
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="section-underline"></div>
          <div className="reviews-grid">
            <div className="card review-card">
              <div className="review-quote">"</div>
              <div className="review-rating">★★★★★</div>
              <div className="review-author">Prabu Sakthi</div>
              <div className="review-date">13 Oct 2024</div>
              <div className="review-text">Good quality puppies, super delivery.</div>
            </div>
            <div className="card review-card">
              <div className="review-quote">"</div>
              <div className="review-rating">★★★★★</div>
              <div className="review-author">Verified Customer</div>
              <div className="review-date">21 Jan 2025</div>
              <div className="review-text">Excellent experience — very happy with my new pet.</div>
            </div>
            <div className="card review-card">
              <div className="review-quote">"</div>
              <div className="review-rating">★★★☆☆</div>
              <div className="review-author">Pet Lover</div>
              <div className="review-date">21 Apr 2024</div>
              <div className="review-text">Good selection of pets. Staff were helpful and knowledgeable.</div>
            </div>
          </div>
          <div className="justdial-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--green)" style={{verticalAlign: "middle", marginRight: "8px"}}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Rated on JustDial with 147+ Reviews
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="section-label">Frequently Asked Questions</div>
          <h2 className="section-title">Got Questions? We Have Answers</h2>
          <div className="section-underline"></div>
          <div className="faq-item">
            <div className="faq-q" onClick={(e) => (window as any).toggleFaq(e.currentTarget)}>
              Do you sell other types of pets besides cats and dogs?
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
            <div className="faq-a">
              No, we specialize exclusively in dog sales and cat & kitten sales. We focus on providing the best quality puppies and kittens with proper health records and vaccinations.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={(e) => (window as any).toggleFaq(e.currentTarget)}>
              Is home delivery available?
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
            <div className="faq-a">
              Yes, we offer home delivery services within reasonable distance. Please contact us to discuss delivery options and associated costs for your location.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={(e) => (window as any).toggleFaq(e.currentTarget)}>
              What are your shop timings?
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
            <div className="faq-a">
              We are open Monday through Saturday, 24 hours. We are closed on Sundays. However, we recommend calling ahead before visiting to ensure availability.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={(e) => (window as any).toggleFaq(e.currentTarget)}>
              Is it safe to bring home a dog if I have a newborn or infant?
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
            <div className="faq-a">
              Yes, it can be safe with proper precautions. We recommend choosing breeds known for being gentle with children, ensuring the pet is fully vaccinated, and maintaining proper hygiene. We can guide you on best practices for introducing a pet to a home with infants.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={(e) => (window as any).toggleFaq(e.currentTarget)}>
              Do you offer breeding services?
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
            <div className="faq-a">
              No, we do not offer breeding services. We focus solely on selling healthy, well-cared-for puppies and kittens from reputable sources.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-q" onClick={(e) => (window as any).toggleFaq(e.currentTarget)}>
              Can I board my pet here during a vacation?
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
            <div className="faq-a">
              No, we do not provide pet boarding or grooming services. Our focus is exclusively on pet sales. We can recommend local boarding facilities if needed.
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <div className="container">
          <div className="section-label">Visit Us</div>
          <h2 className="section-title">Find Our Location</h2>
          <div className="section-underline"></div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.062013061879!2d79.13556249999999!3d10.8065625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baac7002fbf1ecb%3A0x8007d4ef2ceabe3e!2sAchamillai%20pets%20and%20sale%20Thanjavur%2C%20South%20Rampart%2C%20Thanjavur%2C%20Tamil%20Nadu%20613002!5e0!3m2!1sen!2sin!4v1774074903051!5m2!1sen!2sin" 
              width="100%" 
              height="420" 
              style={{border: "0"}} 
              allowFullScreen 
              loading="lazy"
            />
          </div>
          <div className="map-info">
            <div>
              <strong>No.18, Kasi Pandithar Kulam Street, Near Vijay Lakshmi Rice Mills, Karanthai, Thanjavur – 613002, Tamil Nadu</strong>
            </div>
            <a href="https://maps.app.goo.gl/oRJbYD7b1dFo1oAk7" className="btn-primary" target="_blank">Open in Google Maps</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Contact Information</h2>
          <div className="section-underline"></div>
          <div className="contact-grid">
            <div className="card contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="contact-title">Phone</div>
              <div className="contact-value">88259 61124</div>
              <div className="contact-value">72003 26420</div>
            </div>
            <div className="card contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.044 23.5l5.788-1.517A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.677-.513-5.207-1.401l-.374-.222-3.439.902.916-3.349-.243-.386A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </div>
              <div className="contact-title">WhatsApp</div>
              <div className="contact-value">88259 61124</div>
              <div className="contact-value">72003 26420</div>
            </div>
            <div className="card contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 9.99 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0C.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5C2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <div className="contact-title">Hours</div>
              <div className="contact-value">Monday - Saturday: 24 Hours</div>
              <div className="contact-value">Sunday: Closed</div>
            </div>
            <div className="card contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="contact-title">Address</div>
              <div className="contact-value">No.18, Kasi Pandithar Kulam Street</div>
              <div className="contact-value">Near Vijay Lakshmi Rice Mills</div>
              <div className="contact-value">Karanthai, Thanjavur – 613002</div>
            </div>
          </div>
          <div className="social-buttons">
            <a href="https://www.facebook.com/p/Achamillaipets-thanjavur-100079921733845/" className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: "middle", marginRight: "8px"}}>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Follow on Facebook
            </a>
            <a href="https://www.instagram.com/achamillai_pets/" className="social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: "middle", marginRight: "8px"}}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-brand">Achamillai Pets And Dog Sales In Thanjavur</div>
          <div className="footer-info">
            No.18, Kasi Pandithar Kulam Street, Near Vijay Lakshmi Rice Mills<br />
            Karanthai, Thanjavur – 613002, Tamil Nadu<br />
            Established in 2018 | Trusted Since 2018
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/p/Achamillaipets-thanjavur-100079921733845/" className="social-link" style={{background: "var(--brown2)"}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/achamillai_pets/" className="social-link" style={{background: "var(--brown2)"}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
            </a>
          </div>
          <div className="footer-copyright">
            &copy; 2025 Achamillai Pets And Dog Sales. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}
