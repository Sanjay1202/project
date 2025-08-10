import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Courses = () => {
  const coursesData = [
    {
      title: "Python | Data Science | AI | ML",
      category: "Development",
      badgeColor: "success",
      image:
        "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Cutting-edge training in Python programming, Data Science, and AI/ML to prepare learners for tomorrow’s tech-driven world.",
    },
    {
      title: "Full Stack Java",
      category: "Development",
      badgeColor: "success",
      image:
        "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Empowering learners to design, develop, and deploy modern web applications with Java Full Stack expertise.",
    },
    {
      title: "Digital Marketing Mastery",
      category: "Marketing",
      badgeColor: "warning",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Complete digital marketing course covering SEO, social media, PPC, and content marketing strategies.",
    },
    {
      title: "MERN Stack",
      category: "Development",
      badgeColor: "success",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "The Course includes the basic front-end to advanced using the frameworks like Reactjs and the backend using Nodejs, Expressjs and covering the MongoDB for the database.",
    },
    {
      title: "Mobile App Development",
      category: "Development",
      badgeColor: "success",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Unlock the world of mobile technology! Our course teaches you to build engaging apps for Android and iOS, transforming your ideas into powerful smartphone experiences.",
    },
    {
      title: "DBMS",
      category: "Skills",
      badgeColor: "danger",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "This covers the trending tech stack like MySQL and MongoDB with basic concepts to advanced topics and experience in the real time database management.",
    },
    {
      title: "Tally Prime with GST",
      category: "Skills",
      badgeColor: "danger",
      image:
        "https://images.pexels.com/photos/7567561/pexels-photo-7567561.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Master accounting and GST compliance with Tally Prime. From basics to advanced features for modern business finance.",
    },
    {
      title: "Power BI",
      category: "Skills",
      badgeColor: "danger",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Turn complex data into clear visuals. Learn to build interactive dashboards and reports with Microsoft Power BI.",
    },
    {
      title: "Advanced MS Office",
      category: "Skills",
      badgeColor: "danger",
      image:
        "https://images.pexels.com/photos/4144144/pexels-photo-4144144.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Boost your productivity with advanced skills in Excel, Word, and PowerPoint. Become an office superstar.",
    },
    {
      title: "Spoken English",
      category: "Skills",
      badgeColor: "danger",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Enhance your communication skills and speak English fluently and confidently in personal and professional settings.",
    },
    {
      title: "Adobe Photoshop",
      category: "Skills",
      badgeColor: "danger",
      image:
        "https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "From photo editing to digital art, master the world's leading imaging software. Unleash your creativity with Photoshop.",
    },
    {
      title: "UI/UX Design",
      category: "Skills",
      badgeColor: "danger",
      image:
        "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Learn to design intuitive and beautiful user interfaces and experiences. Create products that users love.",
    },
  ];

  return (
    <>
      <section id="courses" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h1 mb-3">Courses Provided</h2>
            <p className="lead text-muted">
              Explore our courses designed by industry experts
            </p>
          </div>
          <div className="row">
            {coursesData.map((course) => (
              <div className="col-lg-4 col-md-6 mb-4" key={course.title}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={course.image}
                    className="card-img-top"
                    alt={course.title}
                  />
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className={`badge bg-${course.badgeColor}`}>
                        {course.category}
                      </span>
                    </div>
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text text-muted flex-grow-1">
                      {course.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
