import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style1.css";

const OnlyServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/onlyservices")
            .then(res => setServices(res.data))
            .catch(err => console.log(err));
    }, []);

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

    return (
        <>
            <div className="serviceDetails-hero">

                <div className="container">

                    <p className="serviceDetails-breadcrumb">
                        Home | <span>Our Srvices</span>
                    </p>

                    <h1 className="serviceDetails-title">
                        Our Services
                    </h1>

                </div>

            </div>
            <div className="container py-5">

                <h2 className="text-center mb-5">Our Services</h2>

                <div className="row">
                    {services.map((item, index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>

                            <div className="service-card">

                                <div className="img-wrapper">
                                    <img src={item.image} alt="" className="service-img" />

                                    {/* ICON */}
                                    <div className="service-icon">
                                        <i className="bi bi-gear"></i>
                                    </div>
                                </div>

                                <div className="service-content">
                                    <h5>{item.title}</h5>
                                    <p>{item.description}</p>

                                    <button className="btn-read">
                                        READ MORE →
                                    </button>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>

            </div>

            <div className="services-hero">

                <img
                    src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=1600"
                    alt=""
                    className="hero-bg"
                />

                <div className="hero-overlay"></div>

                <div className="hero-content text-center">

                    <div className="play-btn">
                        <i className="fa-solid fa-play"></i>
                    </div>

                    <p className="hero-subtitle">GLOBALLY RENOWNED & TRUSTED</p>

                    <h1>
                        We Deliver Solution With <br /> The Goal Of
                    </h1>

                    <button className="hero-btn" onClick={handleHelpClick}>
                        CONTACT US
                    </button>

                </div>

            </div>

            <div className="process-section text-center">

                <p className="process-subtitle">PROCESS</p>
                <h2>We Follow Some Easy Steps To Developed Projects</h2>

                <div className="row mt-5">

                    <div className="col-md-4">
                        <div className="process-box">
                            <div className="process-icon">
                                <i className="fa-solid fa-headset"></i>
                            </div>
                            <h5>Our Consultation</h5>
                            <p>Praesent sed erat cursus leifend mi vitae lacinia.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="process-box">
                            <div className="process-icon">
                                <i className="fa-solid fa-diagram-project"></i>
                            </div>
                            <h5>Perfect Solutions</h5>
                            <p>Praesent sed erat cursus leifend mi vitae lacinia.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="process-box">
                            <div className="process-icon">
                                <i className="fa-solid fa-chart-line"></i>
                            </div>
                            <h5>Business Growth</h5>
                            <p>Praesent sed erat cursus leifend mi vitae lacinia.</p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
};

export default OnlyServices;