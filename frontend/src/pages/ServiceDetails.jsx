import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Style.css";

import servicesdetails from "../assets/service-details.jpg";

const ServiceDetails = () => {

    const { id } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        if (!id || id === 'null' || id === 'undefined') return;

        axios.get(`http://localhost:5000/api/services/${id}`)
            .then(res => {
                if (res.data) setService(res.data);
            })
            .catch(err => console.error(err));

    }, [id]);

    return (

        <div className="serviceDetails-wrapper">

            <div className="serviceDetails-hero">

                <div className="container">

                    <p className="serviceDetails-breadcrumb">
                        Home | <span>Service Details</span>
                    </p>

                    <h1 className="serviceDetails-title">
                        Service Details
                    </h1>

                </div>

            </div>

            <div className="container serviceDetails-body">

                <div className="row">

                    <div className="col-lg-8">

                        <h2 className="serviceDetails-heading">
                            {service.title}
                        </h2>

                        <p className="serviceDetails-text">
                            {service.description}
                        </p>

                        <img
                            src={service.image}
                            alt=""
                            className="serviceDetails-mainimg"
                        />

                    </div>

                    <div className="col-lg-4">

                        <div className="serviceDetails-sidebar">

                            <div className="serviceDetails-searchBox">

                                <input
                                    placeholder="Search Here"
                                    className="serviceDetails-searchInput"
                                />

                                <button className="serviceDetails-searchBtn">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>

                            </div>

                            <div className="serviceDetails-category">

                                <h4>Category</h4>

                                <ul>

                                    <li>Financial Analysis <i className="fa-solid fa-arrow-right-long"></i></li>
                                    <li>Taxation Planning <i className="fa-solid fa-arrow-right-long"></i></li>
                                    <li>Investment Trading <i className="fa-solid fa-arrow-right-long"></i></li>
                                    <li>Wealth Marketing <i className="fa-solid fa-arrow-right-long"></i></li>
                                    <li>Planning Strategies <i className="fa-solid fa-arrow-right-long"></i></li>

                                </ul>

                            </div>

                        </div>


                        <div className="serviceDetails-contactCard">

                            <div className="serviceDetails-logo">
                                <span className="logo-circle"></span>
                                <h4>Torado</h4>
                            </div>

                            <h3 className="contact-title">
                                Need Service?
                            </h3>

                            <button className="contact-btn">
                                CONTACT US
                            </button>

                        </div>




                    </div>

                </div>

            </div>

            <div className="container serviceDetails-extra-section">
                <div className="row">

                    <div className="col-lg-8">

                        <h3 className="serviceDetails-subtitle">
                            Manage Business Solutions
                        </h3>

                        <p className="serviceDetails-desc">
                            Cras enim urna, interdum nec porttitor vitae, sollicitudin eu eros.
                            Praesent eget mollis nulla, non lacinia urnaonec sit amet neque
                            auctor, ornare dui rutrum, condimentum justois dictum ex accumsan
                            eleifend.
                        </p>

                        <div className="row align-items-center serviceDetails-middle">

                            <div className="col-md-6">
                                <img
                                    src={servicesdetails}
                                    alt="service"
                                    className="img-fluid serviceDetails-mid-img"
                                />
                            </div>

                            <div className="col-md-6">

                                <p className="serviceDetails-desc">
                                    Cras enim urna, interdum nec porttitor vitaesoicit
                                    eueros. Praesent eget mollis nulla non lacinia urna csit
                                    amet neque auctor, ornare dui rutrum condij ustoius
                                    dictum ex accumsan eleifend.
                                </p>

                                <div className="serviceDetails-feature">
                                    <span className="dot"></span>
                                    Get Your Final Result
                                </div>

                                <div className="serviceDetails-feature">
                                    <span className="dot"></span>
                                    Project Monitoring
                                </div>

                                <div className="serviceDetails-feature">
                                    <span className="dot"></span>
                                    Core Project Monitoring
                                </div>

                            </div>

                        </div>

                        <p className="serviceDetails-desc mt-3">
                            Cras enim urna, interdum nec porttitor vitae, sollicitudin eu eros.
                            Praesent eget mollis nulla, non lacinia urnaonec sit amet neque
                            auctor, ornare dui rutrum, condimentum justois dictum ex accumsan
                            eleifend.
                        </p>

                        <h3 className="serviceDetails-subtitle mt-4">
                            Digital Service strategy
                        </h3>

                        <p>
                            Cras enim urna, interdum nec porttitor vitae, sollicitudin eu eros. 
                            Praesent eget mollis nulla, non lacinia urnaone csit amet neque auctor, 
                            ornare dui rutrum, condimentum justouis dictum ex accumsan eleifend.
                        </p>

                    
                    </div>




                </div>
            </div>

        </div>

    );

};

export default ServiceDetails;