import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Style.css";
import logo from "../assets/logo.svg";
import heroImg from "../assets/herohome.jpg";

import img1 from "../assets/trending1.jpg";
import img2 from "../assets/trending2.jpg";
import img3 from "../assets/trending3.jpg";

import aboutimg from "../assets/about1.png";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import services1 from "../assets/service1.jpg";
import services2 from "../assets/service2.jpg";
import services3 from "../assets/service3.jpg";
import services4 from "../assets/service4.jpg";
import services5 from "../assets/service1.jpg";

const Home = () => {

  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);
  const [teamDropdown, setTeamDropdown] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false);
  const [portfolioDropdown, setPortfolioDropdown] = useState(false);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const [firstService, setFirstService] = useState(null);

  useEffect(() => {

    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    if (name && email) {
      setUser({ name, email });
    }

  }, []);


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

  const handleLogin = async () => {

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.name);
      localStorage.setItem("email", data.email);

      setUser(data);
      setShowLogin(false);
    } else {
      alert(data.message || "Login Failed");
    }

  } catch (error) {
    console.log(error);
    alert("Server Error");
  }
};

  const handleRegister = async () => {

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    const data = await res.json();

    alert("Registered Successfully");

    setShowRegister(false);
    setShowLogin(true);

  };

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");

    setUser(null);

    window.location.reload();

  };

  const servicessection = [
    {
      img: services1,
      title: "Business Tax Reforms",
      icon: "fa-solid fa-gears"
    },
    {
      img: services2,
      title: "Process Development",
      icon: "fa-solid fa-clipboard-list"
    },
    {
      img: services3,
      title: "Manage Investment",
      icon: "fa-solid fa-gear"
    },
    {
      img: services4,
      title: "Financial Strategy",
      icon: "fa-solid fa-chart-line"
    },
    {
      img: services5,
      title: "Market Analysis",
      icon: "fa-solid fa-chart-pie"
    }
  ];

  const navigate = useNavigate();

  const handleHelpClick = async () => {

    try {

      const res = await axios.get("http://localhost:5000/api/help");

      if (res.data.success) {
        navigate("/contact");
      }

    } catch (error) {

      console.log("API ERROR", error);

    }

  };

  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:5000/api/services")
      .then(res => {

        setServicesData(res.data);

        if (res.data.length > 0) {
          setFirstService(res.data[0]._id);
        }

      });

  }, []);

  const handleAboutClick = async () => {

    try {

      const res = await axios.get("http://localhost:5000/api/about");

      if (res.data) {
        navigate("/about");
      }

    } catch (error) {
      console.log("API Error", error);
    }

  };

  const handlePortfolioClick = () => {
    navigate("/portfolio");
  };




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

            {user ? (

              <div className="profile-wrapper">

                <div
                  className="profile-circle ms-2"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>

                {showProfileMenu && (

                  <div className="profile-dropdown">

                    <div className="profile-info">
                      <p><strong>{user.name}</strong></p>
                      <p>{user.email}</p>
                    </div>

                    <button
                      className="logout-btn"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>

                  </div>

                )}

              </div>

            ) : (

              <i className="fa-regular fa-user ms-2"></i>

            )}
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
<Link to="/onlyservices">Services</Link>                    
<Link to={`/service/${firstService}`}>
                      Service Details
                    </Link>
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
                    <a href="#" onClick={handleAboutClick}>About Us</a>
                    <a href="#">Pricing Plan</a>
                    <a href="#">FAQs</a>
                    <a href="#">Testimonials</a>

                    <div className="dropdown-submenu">
                      <div
                        className="dropdown-submenu-btn"
                        onClick={(e) => { e.stopPropagation(); setPortfolioDropdown(!portfolioDropdown); }}
                      >
                        <span style={{ color: portfolioDropdown ? '#ff2e63' : 'inherit' }} onClick={handlePortfolioClick}>Portfolio</span>
                        <i className="fas fa-plus" style={{ color: portfolioDropdown ? '#ff2e63' : 'inherit' }}></i>
                      </div>

                      {portfolioDropdown && (
                        <div className="sub-menu">
                          <a style={{ color: '#ff2e63' }} onClick={handlePortfolioClick}>Our Portfolio</a>
                          <a onClick={() => navigate(`/portfolio-details/${someId}`)}>
              Portfolio Details
</a>
                        </div>
                      )}
                    </div>

                    <a href="#">Privacy & Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">404 Error Page</a>
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
                    <a href="#">Our Team</a>
                    <a href="#">Team Details</a>
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

              {!user && (
                <button
                  className="login-btn ms-2"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </button>
              )}



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

              <button className="hero-btn" onClick={handleHelpClick}>
                <i className="fa-solid fa-circle-question me-2"></i>
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

          {servicesData.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
              <div className="card-box">

                <img src={item.image} alt="" className="card-img" />

                <div className="card-content">
                  <h4>{item.title}</h4>
                  <span
                    className="read-more"
                    onClick={() => navigate(`/service/${item._id}`)}
                  >
                    READ MORE →
                  </span>
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

      <div className="about-section container-fluid">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 col-md-12 mb-4">
              <div className="about-img1">
                <img src={aboutimg} alt="team" className="img-fluid" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">

              <p className="about-small-title">ABOUT TORADO</p>

              <h1 className="about-title">
                Business Planning Strategy <br /> & Execution
              </h1>

              <p className="about-text">
                Pellentesque at posuere tellus. Ut sed dui justo. Phasellus
                scelerisque turpis arcu ut pulvinar lectus tristique non.
                Nam laoreet risus vel laoreet laoreet, mauris risus porta velit
                imperdiet ante nisi in ante.
              </p>

              <div className="about-points">
                <p><i className="fa-solid fa-arrow-right"></i> Communicate orthogonal process</p>
                <p><i className="fa-solid fa-arrow-right"></i> Professionally grow cutting-edge paradigms</p>
              </div>

              <div className="row mt-4">

                <div className="col-6 text-center">
                  <div className="circle-progress">
                    <span>85%</span>
                  </div>
                  <h6>Clients Satisfactions</h6>
                </div>

                <div className="col-6 text-center">
                  <div className="circle-progress">
                    <span>95%</span>
                  </div>
                  <h6>Business & Finance Consulting</h6>
                </div>

              </div>

              <button className="btn about-btn mt-4" onClick={handleAboutClick}>
                MORE ABOUT US
              </button>

            </div>

          </div>

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

      {showLogin && (

        <div className="auth-modal">

          <div className="auth-box">

            <h3>Login</h3>

            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin} className="login-btn">
              Login
            </button>

            <p>
              Don't have account ?

              <span
                onClick={() => {
                  setShowLogin(false);
                  setShowRegister(true);
                }}
              >
                Register
              </span>

            </p>

          </div>

        </div>

      )}


      {showRegister && (

        <div className="auth-modal">

          <div className="auth-box">

            <h3>Register</h3>

            <input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleRegister} className="login-btn">
              Register
            </button>

          </div>

        </div>

      )}

    </>
  );
};

export default Home;