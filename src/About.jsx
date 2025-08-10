import React from "react";
import {
  Users,
  BookOpen,
  Presentation,
  Award,
  Target,
  Eye,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => (
  <div className="bg-light">
    {/* Hero Section */}
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-8 col-md-10 mx-auto">
          <h1 className="display-4 fw-bold">About SSD Education</h1>
          <p className="lead text-muted mt-3">
            We are dedicated to making quality education accessible to everyone,
            everywhere. Our platform combines cutting-edge technology with
            proven pedagogical methods to foster a new generation of innovators
            and leaders.
          </p>
        </div>
      </div>
    </section>

    {/* Main Content with Image */}
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center gx-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our Team"
              className="img-fluid rounded-3 shadow-lg"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="h1 mb-3">Who We Are</h2>
            <p className="text-muted">
              SSD Education was founded on the principle that education should
              be a right, not a privilege. We are a team of passionate
              educators, tech enthusiasts, and industry experts committed to
              breaking down barriers to learning.
            </p>
            <p className="text-muted">
              Our goal is to provide an engaging, flexible, and effective online
              learning environment where students can thrive and achieve their
              career aspirations. We believe in learning by doing, which is why
              our courses are packed with real-world projects and hands-on
              exercises.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-5">
      <div className="container">
        <div className="row text-center g-4">
          {[
            { icon: Users, value: "250+", label: "Active Students", color: "primary" },
            { icon: BookOpen, value: "10+", label: "Courses Available", color: "success" },
            { icon: Presentation, value: "100+", label: "Expert Instructors", color: "warning" },
            { icon: Award, value: "95%", label: "Success Rate", color: "info" },
          ].map((stat) => (
            <div className="col-lg-3 col-md-6" key={stat.label}>
              <div className="card h-100 border-0 shadow-sm p-4 about-stat-card">
                <div className={`bg-${stat.color}-soft text-${stat.color} rounded-circle p-3 mx-auto mb-3 d-inline-flex align-items-center justify-content-center feature-icon-lg`}>
                  <stat.icon size={36} />
                </div>
                <h3 className="fw-bold display-6">{stat.value}</h3>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission and Vision Section */}
    <section className="py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-success-soft text-success rounded-circle p-3 me-3 d-flex align-items-center justify-content-center">
                <Target size={28} />
              </div>
              <h2 className="h3 mb-0">Our Mission</h2>
            </div>
            <p className="text-muted">
              To empower individuals with the skills and knowledge needed to
              succeed in the digital age. We strive to deliver high-quality,
              affordable, and accessible education that bridges the gap between
              ambition and achievement.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-info-soft text-info rounded-circle p-3 me-3 d-flex align-items-center justify-content-center">
                <Eye size={28} />
              </div>
              <h2 className="h3 mb-0">Our Vision</h2>
            </div>
            <p className="text-muted">
              To be a leading global platform for online education, recognized
              for our innovative teaching methods, comprehensive curriculum, and
              commitment to student success. We envision a world where anyone
              can build a better future through learning.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="h1 mb-3">Ready to Start Your Journey?</h2>
            <p className="lead text-muted mb-4">
              Join a community of learners and start building the skills for the
              future you want. Explore our courses and find your path to
              success today.
            </p>
            <Link to="/courses" className="btn btn-primary btn-lg px-5 py-3 d-inline-flex align-items-center">
              Explore Our Courses <ArrowRight className="ms-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
