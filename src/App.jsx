import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  GraduationCap,
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

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <GraduationCap className="d-inline-block me-2" /> SSD Education
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
              <h5 className="mb-3">
                <GraduationCap className="d-inline-block me-2" />
                SSD Education
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
