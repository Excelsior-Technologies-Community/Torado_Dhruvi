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


            <div className="torado-contact-wrapper">

                <div className="serviceDetails-hero">

                    <div className="container">

                        <p className="serviceDetails-breadcrumb">
                            Home | <span>Contact Us</span>
                        </p>

                        <h1 className="serviceDetails-title">
                            Contact Us
                        </h1>

                    </div>

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