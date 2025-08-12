import React from "react";
import { Link } from "react-router-dom";
import SsdLogo from "./logo/SSD.jpg";

const Home = () => (
  <section
    className="hero-section bg-gradient-primary text-white d-flex align-items-center"
    id="home"
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-4 display-lg-3 fw-bolder mb-4">
            Transform Your Future with
            <span className="text-warning"> Quality Education</span>
          </h1>
          <p className="lead mb-4">
            Join thousands of students who have achieved their dreams through
            our comprehensive online learning platform. Expert instructors,
            interactive content, and flexible scheduling.
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
            <Link to="/courses" className="btn btn-warning btn-lg px-4 fw-bold">
              Explore Courses
            </Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg px-4">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0">
          <div className="position-relative">
            <img
              src={SsdLogo}
              alt="SSD Edutech Logo"
              className="img-fluid rounded-circle shadow-lg border border-5 border-white mx-auto d-block hero-image-animation"
              style={{ maxWidth: "400px" }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
