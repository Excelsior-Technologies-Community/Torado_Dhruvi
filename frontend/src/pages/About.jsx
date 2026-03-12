import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style.css";

import aboutImg from "../assets/about1.png";

function About() {

    const [about, setAbout] = useState({});

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        axios.get("http://localhost:5000/api/about")
            .then(res => {
                setAbout(res.data);
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

                                            <a href="#" className="torado-read-btn">
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

        </>

    );

}

export default About;