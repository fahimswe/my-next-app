// LandingPage.tsx
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            MyBrand
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero bg-light text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Our Product</h1>
          <p className="lead">A simple and modern landing page built with Bootstrap.</p>
          <a href="#contact" className="btn btn-primary btn-lg">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features text-center py-5">
        <div className="container">
          <h2>Features</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <h4>Fast</h4>
              <p>Experience lightning-fast performance and loading times.</p>
            </div>
            <div className="col-md-4">
              <h4>Responsive</h4>
              <p>Looks great on any device with responsive design.</p>
            </div>
            <div className="col-md-4">
              <h4>Customizable</h4>
              <p>Fully customizable to suit your brand and business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center py-5 bg-light">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            Email us at <a href="mailto:info@example.com">info@example.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-white bg-dark py-3">
        <div className="container">
          <p className="mb-0">&copy; 2025 MyBrand. All rights reserved.</p>
        </div>
      </footer>

      {/* Bootstrap JS Bundle */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        defer
      ></script>
    </>
  );
};

export default LandingPage;
