import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style.css";

import aboutImg from "../assets/about1.png";

function About() {

    const [about, setAbout] = useState({});

    useEffect(() => {

        axios.get("http://localhost:5000/api/about")
            .then(res => {
                setAbout(res.data);
            })
            .catch(err => {
                console.log(err);
            });

    }, []);

    return (

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

    );

}

export default About;