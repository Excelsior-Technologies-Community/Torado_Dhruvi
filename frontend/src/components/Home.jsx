import React, { useState } from "react";
import "../Style.css";
import logo from "../assets/logo.svg";
import heroImg from "../assets/herohome.jpg";

import img1 from "../assets/trending1.jpg";
import img2 from "../assets/trending2.jpg";
import img3 from "../assets/trending3.jpg";
const Home = () => {

  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);
  const [teamDropdown, setTeamDropdown] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false);

  const services = [
    {
      title: "Financial Analysis",
      img: img1,
      read: true
    },
    {
      title: "Taxation Planning",
      img: img2
    },
    {
      title: "Investment Trading",
      img: img3
    }
  ];

  return (
    <>
      <div className="topbar">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="topbar-left">
            <i className="fas fa-map-marker-alt"></i> 838 Andy Street, Madison, NJ 08003
            <span className="ms-4">
              <i className="fas fa-envelope"></i> hello@torado.com
            </span>
          </div>

          <div className="topbar-right">
            <a href="#">Help</a>
            <a href="#">Support</a>
            <a href="#">Contact</a>

            <i className="fab fa-facebook-f ms-3"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg main-navbar">
        <div className="container">

          <a className="navbar-brand logo" href="#">
            <img src={logo} alt="Logo" />

          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav mx-auto">

              <li className="nav-item dropdown-custom">
                <span className="nav-link">
                  Home
                  <i
                    className="fas fa-plus ms-1"
                    onClick={() => setHomeDropdown(!homeDropdown)}
                  ></i>
                </span>

                {homeDropdown && (
                  <div className="dropdown-menu-custom">
                    <a href="#">Home One</a>
                    <a href="#">Home Two</a>
                    <a href="#">Home Three</a>
                  </div>
                )}
              </li>

              <li className="nav-item dropdown-custom">
                <span className="nav-link">
                  Services
                  <i
                    className="fas fa-plus ms-1"
                    onClick={() => setServicesDropdown(!servicesDropdown)}
                  ></i>
                </span>

                {servicesDropdown && (
                  <div className="dropdown-menu-custom">
                    <a href="#">Service One</a>
                    <a href="#">Service Two</a>
                  </div>
                )}
              </li>

              <li className="nav-item dropdown-custom">
                <span className="nav-link">
                  Pages
                  <i
                    className="fas fa-plus ms-1"
                    onClick={() => setPagesDropdown(!pagesDropdown)}
                  ></i>
                </span>

                {pagesDropdown && (
                  <div className="dropdown-menu-custom">
                    <a href="#">About</a>
                    <a href="#">Pricing</a>
                  </div>
                )}
              </li>

              <li className="nav-item dropdown-custom">
                <span className="nav-link">
                  Team
                  <i
                    className="fas fa-plus ms-1"
                    onClick={() => setTeamDropdown(!teamDropdown)}
                  ></i>
                </span>

                {teamDropdown && (
                  <div className="dropdown-menu-custom">
                    <a href="#">Team One</a>
                    <a href="#">Team Two</a>
                  </div>
                )}
              </li>

              <li className="nav-item dropdown-custom">
                <span className="nav-link">
                  Blog
                  <i
                    className="fas fa-plus ms-1"
                    onClick={() => setBlogDropdown(!blogDropdown)}
                  ></i>
                </span>

                {blogDropdown && (
                  <div className="dropdown-menu-custom">
                    <a href="#">Blog Grid</a>
                    <a href="#">Blog Details</a>
                  </div>
                )}
              </li>

              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>

            </ul>

            <div className="navbar-right d-flex align-items-center">

              <div className="contact-box">
                <i className="fas fa-phone"></i>
                <div>
                  <small>Contact Us</small>
                  <p>(+212)-226-3126</p>
                </div>
              </div>

              <i className="fas fa-search ms-4"></i>

              <button className="consult-btn ms-4">
                BOOK A CONSULTATION
              </button>

              

            </div>

          </div>
        </div>
      </nav>

      <section className="hero-section">

        <div className="container-fluid p-0">
          <div className="row g-0 align-items-center">

            <div className="col-lg-6 hero-left">

              <span className="hero-tag">
                Get On The <span>Right</span> Way
              </span>

              <h1 className="hero-title">
                Financial Assistance <br />
                With True Purpose
              </h1>

              <p className="hero-text">
                Miena sipu del inora aid consectetur adipiscing elit.
                Ut elit tellus luctus nec ullamc orperm nutka pulvinar
                dapibus leo della pierrano set amuse.
              </p>

              <button className="hero-btn">
                HOW CAN WE HELP
              </button>

            </div>

            <div className="col-lg-6 hero-right">

              <div className="hero-image">
                <img src={heroImg} alt="hero" />
              </div>

            </div>

          </div>
        </div>

      </section>

      <div className="container service-section">
        <div className="row">

          {services.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
              <div className="card-box">

                <img src={item.img} alt="" className="card-img" />

                <div className="card-content">
                  <h4>{item.title}</h4>
                  <span className="read-more">READ MORE →</span>
                </div>

              </div>
            </div>
          ))}

        </div>

        <div className="info-box">
          TORADO started its march with providing assistants in
          <span className="year"> 1999</span>. Initially they provide financial assistance within the country.
        </div>
      </div>


      <div className="floating-buttons">

        <div className="float-box">
          <i className="fas fa-layer-group"></i>
          <span>Demos</span>
        </div>

        <div className="float-box">
          <i className="fas fa-file-alt"></i>
          <span>Docs</span>
        </div>

        <div className="float-box">
          <i className="fas fa-shopping-bag"></i>
          <span>Buy Now</span>
        </div>

      </div>

    </>
  );
};

export default Home;