import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Style.css";

import aboutImg from "../assets/about1.png";

import img1 from "../assets/p1.jpg";
import img2 from "../assets/p2.jpg";
import img3 from "../assets/p3.jpg";
import img4 from "../assets/p4.jpg";

function About() {

    const [about, setAbout] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [firstService, setFirstService] = useState(null);
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {

        axios.get("http://localhost:5000/api/about")
            .then(res => {
                setAbout(res.data);
            })
            .catch(err => {
                console.log(err);
            });

        axios.get("http://localhost:5000/api/services")
            .then(res => {
                if (res.data && res.data.length > 0) {
                    setFirstService(res.data[0]._id);
                }
            })
            .catch(err => {
                console.log(err);
            });

    }, []);

    const nextSlide = () => {

        if (!about.provides) return;

        if (currentIndex < about.provides.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }

    };

    const prevSlide = () => {

        if (!about.provides) return;

        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }

    };

    const projects = [
        { img: img1, title: "Business Consulting", cat: "Business & Finance" },
        { img: img2, title: "Business Tax Reforms", cat: "Business & Finance" },
        { img: img3, title: "Financial Planning", cat: "Business & Finance" },
        { img: img4, title: "Market Strategy", cat: "Business & Finance" }
    ];

    const nextTestimonial = () => {
        if (!about.testimonials) return;

        if (testimonialIndex < about.testimonials.length - 2) {
            setTestimonialIndex(testimonialIndex + 1);
        }
    };

    const prevTestimonial = () => {
        if (testimonialIndex > 0) {
            setTestimonialIndex(testimonialIndex - 1);
        }
    };

    return (
        <>

            <div className="about-section">

                <div className="serviceDetails-hero">

                    <div className="container">

                        <p className="serviceDetails-breadcrumb">
                            Home | <span>About Us</span>
                        </p>

                        <h1 className="serviceDetails-title">
                            About Us
                        </h1>

                    </div>

                </div>

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-6 col-md-12 mb-4">

                            <div className="about-image-placeholder">
                                <img src={aboutImg} alt="About Us" className="about-img" />
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-12">

                            <span className="about-subtitle">ABOUT TORADO</span>

                            <h2 className="about-title">
                                {about.title}
                            </h2>

                            <p className="about-desc">
                                {about.description}
                            </p>

                            <ul className="about-list">
                                <li>Communicate orthogonal process</li>
                                <li>Professionally grow cutting-edge paradigms</li>
                            </ul>

                            <div className="about-progress">

                                <div className="progress-item">
                                    <div className="circle">
                                        {about.clientSatisfaction}%
                                    </div>
                                    <p>Clients<br />Satisfactions</p>
                                </div>

                                <div className="progress-item">
                                    <div className="circle">
                                        {about.financeConsulting}%
                                    </div>
                                    <p>Business & Finance Consulting</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <section className="torado-provide-section">

                <div className="container">

                    <p className="torado-provide-subtitle">
                        WHAT WE PROVIDES
                    </p>

                    <h2 className="torado-provide-title">
                        Get Exceptional Service For Growth
                    </h2>

                    <div className="torado-slider-wrapper">

                        <button
                            className="torado-prev-btn"
                            onClick={prevSlide}
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>

                        <div className="torado-slider-container">

                            <div
                                className="torado-slider-track"
                                style={{
                                    transform: `translateX(-${currentIndex * 33.33}%)`
                                }}
                            >

                                {about.provides?.map((item, index) => (

                                    <div className="torado-service-card" key={index}>

                                        <div className="torado-service-img">

                                            <img
                                                src={`http://localhost:5000/images/${item.image}`}
                                                alt=""
                                                className="img-fluid"
                                            />

                                        </div>

                                        <div className="torado-service-content">

                                            <div className="torado-service-icon">
                                                <i className={item.icon}></i>
                                            </div>

                                            <h4>{item.title}</h4>

                                            <p>{item.description}</p>

                                            <a
                                                href="#"
                                                className="torado-read-btn"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (firstService) {
                                                        navigate(`/service/${firstService}`);
                                                    }
                                                }}
                                            >
                                                Read More →
                                            </a>
                                        </div>
                                    </div>

                                ))}

                            </div>

                        </div>

                        <button
                            className="torado-next-btn"
                            onClick={nextSlide}
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>

                    </div>

                </div>

            </section>

            <section className="port11-section">

                <div className="container">


                    <div className="port11-header">

                        <div className="port11-title-area">

                            <div className="port11-subtitle">
                                <span>OUR PORTFOLIO</span>
                                <div className="port11-line"></div>
                            </div>

                            <h2>Success Work Stories</h2>

                        </div>

                        <button
                            className="port11-btn"
                            onClick={() => navigate("/portfolio")}
                        >
                            VIEW ALL PROJECT
                        </button>

                    </div>



                    <div className="row">

                        {projects.map((item, index) => (

                            <div className="col-lg-3 col-md-6 col-12" key={index}>

                                <div className="port11-card">

                                    <img src={item.img} alt="" />

                                    <div className="port11-overlay">

                                        <div className="port11-text">

                                            <div className="port11-category">
                                                <div className="port11-small-line"></div>
                                                <span>{item.cat}</span>
                                            </div>

                                            <h5>{item.title}</h5>

                                        </div>

                                        <div className="port11-arrow">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            <section className="wm-section">

                <div className="container text-center">

                    <p className="wm-subtitle">
                        GLOBALY RENOWNED & TRUSTED
                        <span className="wm-line"></span>
                    </p>

                    <h2 className="wm-title">
                        Torado's Working <br /> Everywhere
                    </h2>

                </div>


                <div className="wm-map">


                    <span className="wm-dot dot1"></span>
                    <span className="wm-dot dot2"></span>
                    <span className="wm-dot dot3"></span>
                    <span className="wm-dot dot4"></span>
                    <span className="wm-dot dot5"></span>
                    <span className="wm-dot dot6"></span>


                    <div className="wm-info">

                        <div className="wm-icon">
                            <i className="fa-solid fa-chart-pie"></i>
                        </div>

                        <div>
                            <p>Serve you to reach best</p>
                            <small>profits & goals</small>
                        </div>

                    </div>

                </div>



                <div className="container">

                    <div className="wm-stats">

                        <div className="row text-center">

                            <div className="col-lg col-md-4 col-6">
                                <h3>10k</h3>
                                <p>Global Customers</p>
                            </div>

                            <div className="col-lg col-md-4 col-6">
                                <h3>5k+</h3>
                                <p>Global Customers</p>
                            </div>

                            <div className="col-lg col-md-4 col-6">
                                <h3>96+</h3>
                                <p>Global Customers</p>
                            </div>

                            <div className="col-lg col-md-6 col-6">
                                <h3>370</h3>
                                <p>Global Customers</p>
                            </div>

                            <div className="col-lg col-md-6 col-6">
                                <h3>75+</h3>
                                <p>Global Customers</p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="testimonial-section">

                <div className="container">

                    <div className="testimonial-header">

                        <p className="testimonial-subtitle">TESTIMONIAL</p>

                        <h2 className="testimonial-title">
                            What User Say About <br /> Our Torado
                        </h2>

                        <div className="testimonial-nav">
                            <button onClick={prevTestimonial}>
                                <i className="fa-solid fa-arrow-left"></i>
                            </button>
                            <button onClick={nextTestimonial}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>

                    </div>

                    <div className="testimonial-slider">

                        <div
                            className="testimonial-track"
                            style={{
                                transform: `translateX(-${testimonialIndex * 50}%)`
                            }}
                        >

                            {about.testimonials?.map((item, index) => (

                                <div className="testimonial-card" key={index}>

                                    <div className="testimonial-top">

                                        <img src={item.image} alt="" />
                                        <div>
                                            <h5>{item.name}</h5>
                                            <p>{item.role}</p>
                                        </div>

                                    </div>

                                    <p className="testimonial-text">
                                        {item.message}
                                    </p>

                                    <div className="testimonial-stars">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <i key={i} className="fa-solid fa-star"></i>
                                        ))}
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>

            <section className="team-section">

                <div className="container-fluid">

                    <p className="team-subtitle">OUR TEAM</p>

                    <h2 className="team-title">Meet Our Team Member</h2>

                    <div className="row">

                        {about.team?.map((member, index) => (

                            <div className="col-lg-3 col-md-6 col-12 mb-4" key={index}>

                                <div className="team-card">

                                    <div className="team-img">
                                        <img src={member.image} alt="" />
                                    </div>

                                    <div className="team-content">

                                        <h5>{member.name}</h5>
                                        <p>{member.role}</p>

                                        <div className="team-social">

                                            <a href={member.facebook}>
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>

                                            <a href={member.twitter}>
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>

                                            <a href={member.instagram}>
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>

                                            <a href={member.linkedin}>
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                    <p className="team-bottom-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <span> View All Team Member →</span>
                    </p>

                </div>

            </section>


        </>

    );

}

export default About;