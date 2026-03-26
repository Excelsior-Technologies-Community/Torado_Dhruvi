import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Style.css";

const PortfolioDetails = () => {

    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/api/portfolio-details/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <>
            <div className="serviceDetails-hero">
                <div className="container">
                    <p className="serviceDetails-breadcrumb">
                        Home | <span>Portfolio Details</span>
                    </p>
                    <h1 className="serviceDetails-title">
                        Portfolio Details
                    </h1>
                </div>
            </div>

            <div className="container portfolio-details-page my-5">
                <div className="row">

                    <div className="col-lg-8 pe-lg-5">

                        <div className="portfolio-details-img">
                            <img src={data.image} alt="" />
                            
                            <div className="portfolio-info-box">
                                <p><strong>Client :</strong> {data.client}</p>
                                <p><strong>Date :</strong> {data.date}</p>
                                <p><strong>Category :</strong> {data.category}</p>
                                <p className="share-icons">
                                    <strong>Share :</strong> 
                                    <i className="fab fa-facebook-f"></i> 
                                    <i className="fab fa-twitter"></i> 
                                    <i className="fab fa-instagram"></i> 
                                    <i className="fab fa-linkedin-in"></i>
                                </p>
                            </div>
                        </div>

                        <div className="portfolio-details-content mt-4">
                            <h3 className="mb-3">Here to Know About This Project</h3>
                            <p className="text-muted" style={{lineHeight: "1.8"}}>
                                Cras enim urna, interdum nec porttitor vitae, sollicitudin eu eros. Praesent eget mollis nulla, non lacinia urna. 
                                Donec sit amet neque auctor, ornare dui rutrum, condimentum justo. Duis dictum, ex accumsan eleifend eleifen 
                                ex justo aliquam nunc, in ultrices ante quam eget massa. Sed scelerisque, odio eu tempor pulvinar magna tortor 
                                finibus lorem, ut mattis tellus nunc ut quam. Curabitur quis ornare leo. Suspendisse bibendum nibh non turpis 
                                vestibulum pellentesque consectetur adipisci lorem ipsum dolor sit amet.
                            </p>
                            <p className="text-muted mb-4" style={{lineHeight: "1.8"}}>
                                Cras enim urna, interdum nec porttitor vitae, sollicitudin eu eros. Praesent eget mollis nulla, non lacinia urna 
                                csit amet neque auctor, ornare dui rutrum, condimentum justouis dictum ex accumsan eleifend.
                            </p>

                            <h4 className="mb-3">The Challenge</h4>
                            <p className="text-muted" style={{lineHeight: "1.8"}}>
                                Cras enim urna, interdum nec porttitor vitae, sollicitudin eu eros. Praesent eget mollis nulla, non lacinia urna 
                                csit amet neque auctor, ornare dui rutrum, condimentum justouis dictum ex accumsan eleifend.
                            </p>

                            <ul className="portfolio-points mt-3">
                                <li><i className="fa-solid fa-check"></i> It's Essential To Work With Business Consultants Who Have</li>
                                <li><i className="fa-solid fa-check"></i> Business Consultants May Charge By The Project Or Hour, Or You May Need To Pay Daily Or Monthly</li>
                            </ul>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-lg-4 mt-5 mt-lg-0">

                        <div className="sidebar-search-box shadow-sm mb-4">
                            <input type="text" placeholder="Search Here" />
                            <button><i className="fa fa-search"></i></button>
                        </div>

                        <div className="sidebar-category-box mb-4">
                            <h5 className="category-title mb-4">Category</h5>
                            <ul className="category-list">
                                <li>
                                    <span>Financial Analysis</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </li>
                                <li>
                                    <span>Taxation Planning</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </li>
                                <li>
                                    <span>Investment Trading</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </li>
                                <li>
                                    <span>Wealth Marketing</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </li>
                                <li>
                                    <span>Planning Strategies</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar-contact-box">
                            <div className="logo d-flex justify-content-center align-items-center text-white mb-3" style={{ fontSize: "28px", fontWeight: "700" }}>
                                <span className="logo-icon" style={{ width: "24px", height: "24px", marginRight: "10px" }}></span> 
                                Torado
                            </div>
                            <h3 className="text-white mb-4" style={{ fontWeight: "700" }}>Need Service?</h3>
                            <button className="contact-btn">CONTACT US</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default PortfolioDetails;