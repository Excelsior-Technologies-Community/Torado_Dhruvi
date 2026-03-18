import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style.css";
import logo from "../assets/logo.svg";


const Contact = () => {
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

    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {

        const name = localStorage.getItem("name");
        const email = localStorage.getItem("email");

        if (name && email) {
            setUser({ name, email });
        }

    }, []);

    const handleLogin = async () => {
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await res.json();

        if (data.token) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("name", data.name);
            localStorage.setItem("email", data.email);

            setUser(data);
            setShowLogin(false);
        } else {
            alert("Login Failed");
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

    const handleContactSubmit = async () => {

        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login to send message");
            return;
        }

        const res = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                email,
                subject,
                phone,
                message
            })
        });

        const data = await res.json();

        if (res.status === 401 || res.status === 400) {
            alert("Session expired or invalid. Please login again.");
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            localStorage.removeItem("email");
            setUser(null);
            return;
        }

        if (data.success) {
            alert("Message sent successfully");

            setSubject("");
            setPhone("");
            setMessage("");

        } else {
            alert(data.message || "Something went wrong");
        }

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
                                        <a href="#">About Us</a>
                                        <a href="#">Pricing Plan</a>
                                        <a href="#">FAQs</a>
                                        <a href="#">Testimonials</a>
                                        <div className="dropdown-submenu">
                                            <div
                                                className="dropdown-submenu-btn"
                                                onClick={(e) => { e.stopPropagation(); setPortfolioDropdown(!portfolioDropdown); }}
                                            >
                                                <span style={{ color: portfolioDropdown ? '#ff2e63' : 'inherit' }}>Portfolio</span>
                                                <i className="fas fa-plus" style={{ color: portfolioDropdown ? '#ff2e63' : 'inherit' }}></i>
                                            </div>

                                            {portfolioDropdown && (
                                                <div className="sub-menu">
                                                    <a href="#" style={{ color: '#ff2e63' }}>Our Portfolio</a>
                                                    <a href="#">Portfolio Details</a>
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


            <div className="torado-contact-wrapper">

                <div className="torado-breadcrumb">

                    <Link to="/" className="breadcrumb-home">
                        Home
                    </Link>

                    <span className="breadcrumb-separator"> | </span>

                    <span className="breadcrumb-current">
                        Contact Us
                    </span>

                </div>

                <div className="torado-map-section">

                    <iframe
                        title="map"
                        src="https://www.google.com/maps?q=Ahmedabad&output=embed"
                        className="torado-map"
                    />

                </div>

                <div className="container torado-contact-cards">

                    <div className="row">

                        <div className="col-md-4">

                            <div className="torado-contact-card">

                                <i className="fa-solid fa-phone torado-contact-icon"></i>

                                <h4>Phone Number</h4>

                                <p>+91 98765 43210</p>
                                <p>+91 90123 45678</p>

                            </div>

                        </div>


                        <div className="col-md-4">

                            <div className="torado-contact-card">

                                <i className="fa-solid fa-envelope torado-contact-icon"></i>

                                <h4>Email Address</h4>

                                <p>hello@torado.com</p>
                                <p>info@torado.com</p>

                            </div>

                        </div>


                        <div className="col-md-4">

                            <div className="torado-contact-card">

                                <i className="fa-solid fa-location-dot torado-contact-icon"></i>

                                <h4>Address</h4>

                                <p>66 Road Brooklyn</p>
                                <p>New York, USA</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="container torado-contact-form-section">

                <div className="row">

                    <div className="col-md-6 mb-4">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="torado-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                    </div>

                    <div className="col-md-6 mb-4">

                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="torado-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                    <div className="col-md-6 mb-4">

                        <input
                            type="text"
                            placeholder="Your Subject"
                            className="torado-input"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />

                    </div>

                    <div className="col-md-6 mb-4">

                        <input
                            type="text"
                            placeholder="Your Phone Number"
                            className="torado-input"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                    </div>

                    <div className="col-md-12 mb-4">

                        <textarea
                            placeholder="Enter Your Message"
                            className="torado-textarea"
                            rows="6"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>

                    </div>

                    <div className="col-md-12 text-center">

                        <button
                            className="torado-send-btn"
                            onClick={handleContactSubmit}
                        >
                            SEND MESSAGE
                        </button>

                    </div>

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

export default Contact;