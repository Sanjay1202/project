import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Courses from "./courses";
import Features from "./Features";
import Contact from "./Contact";
import SsdLogo from "./logo/logo-bg.png";

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <img
              src={SsdLogo}
              alt="SSD Education Logo"
              style={{ height: "30px", width: "auto" }}
              className="d-inline-block align-top me-2 rounded-circle"
            />
            SSD Education
          </Link>
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
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <h5 className="mb-3 d-flex align-items-center">
                <img
                  src={SsdLogo}
                  alt="SSD Education Logo"
                  style={{ height: "24px", width: "auto" }}
                  className="me-2 rounded-circle"
                />
                <span>SSD Education</span>
              </h5>
              <p className="lead mb-4">
                Empowering learners worldwide with quality education and
                cutting-edge technology. Your success is our mission.
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="text-white" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="text-center">
            <p className="text-lead mb-0">
              &copy; 2025 SSD Education. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
