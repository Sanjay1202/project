import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const phones = ["919488294500", "919442571156"];
    const text = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    phones.forEach((phone) => {
      const url = `https://wa.me/${phone}?text=${text}`;
      window.open(url, "_blank");
    });
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5 bg-white">
              <div className="row g-4 align-items-stretch">
                <div className="col-md-6 border-end d-flex flex-column justify-content-center">
                  <div className="mb-4 text-center text-md-start">
                    <h2 className="h1 mb-3 text-primary">Get in Touch</h2>
                    <p className="lead text-muted mb-4">
                      Have questions? We'd love to hear from you.
                      <br />
                      Send us a message and we'll respond as soon as possible.
                    </p>
                  </div>
                  <div className="mb-3 d-flex align-items-start">
                    <div className="w-100">
                      <div className="mb-3 d-flex align-items-start">
                        <MapPin
                          className="text-primary flex-shrink-0 me-3 mt-1"
                          size={24}
                        />
                        <div>
                          <h6 className="mb-1 fw-bold">Visuvasapuram Branch</h6>
                          <span>
                            SSD Education, Visuvasapuram, Bustop, Coimbatore-35
                          </span>
                        </div>
                      </div>
                      <div className="mb-3 d-flex align-items-center">
                        <Phone
                          className="text-primary flex-shrink-0 me-3"
                          size={24}
                        />
                        <a
                          href="tel:+919488294500"
                          className="text-body text-decoration-none"
                        >
                          +91 9488294500
                        </a>
                      </div>
                      <div className="mb-3 d-flex align-items-center">
                        <Mail
                          className="text-primary flex-shrink-0 me-3"
                          size={24}
                        />
                        <a
                          href="mailto:swagatskilldevelopment@gmail.com?subject=Inquiry%20from%20Website"
                          className="text-body text-decoration-none"
                        >
                          swagatskilldevelopment@gmail.com
                        </a>
                      </div>
                      <div className="mb-3 d-flex align-items-start">
                        <MapPin
                          className="text-success flex-shrink-0 me-3 mt-1"
                          size={24}
                        />
                        <div>
                          <h6 className="mb-1 fw-bold">Saravanapatti Branch</h6>
                          <span>
                            SSD Education, No:242, Saravanapatti, Coimbatore-35
                          </span>
                        </div>
                      </div>
                      <div className="mb-3 d-flex align-items-center">
                        <Phone
                          className="text-success flex-shrink-0 me-3"
                          size={24}
                        />
                        <a
                          href="tel:+919442571156"
                          className="text-body text-decoration-none"
                        >
                          +91 9442571156
                        </a>
                      </div>
                      <div className="mb-3 d-flex align-items-center">
                        <Mail
                          className="text-success flex-shrink-0 me-3"
                          size={24}
                        />
                        <a
                          href="mailto:swagatskilldevelopment@gmail.com?subject=Inquiry%20from%20Website"
                          className="text-body text-decoration-none"
                        >
                          swagatskilldevelopment@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 d-flex align-items-center">
                    <Clock
                      className="text-primary flex-shrink-0 me-3"
                      size={24}
                    />
                    <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                  <div>
                    <h6 className="mb-2">Follow Us</h6>
                    <a
                      href="#"
                      className="text-primary me-3"
                      aria-label="Facebook"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-primary me-3"
                      aria-label="Twitter"
                    >
                      <Twitter size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-primary me-3"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a href="#" className="text-primary" aria-label="Instagram">
                      <Instagram size={24} />
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <form
                    className="h-100 d-flex flex-column justify-content-center"
                    onSubmit={handleWhatsAppSend}
                  >
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label fw-semibold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        placeholder="Enter your name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        placeholder="Enter your email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="subject"
                        className="form-label fw-semibold"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="subject"
                        placeholder="Subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="message"
                        className="form-label fw-semibold"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control form-control-lg"
                        id="message"
                        rows="5"
                        placeholder="Type your message..."
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100 mt-2 shadow-sm"
                    >
                      Send Message via WhatsApp
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
