import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Style1.css";

import blog1 from "../assets/n1.jpg";
import blog2 from "../assets/n2.jpg";
import blog3 from "../assets/n3.jpg";

const BlogDetails = () => {

    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/api/blogdetails/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const getImage = (img) => {
        if (img === "n1.jpg") return blog1;
        if (img === "n2.jpg") return blog2;
        if (img === "n3.jpg") return blog3;
    };

    return (
        <>
            <div className="serviceDetails-hero">

                <div className="container">

                    <p className="serviceDetails-breadcrumb">
                        Home | <span>Blog Details</span>
                    </p>

                    <h1 className="serviceDetails-title">
                        Blog Details
                    </h1>

                </div>
            </div>

            <div className="container blogdetails-container">
                <div className="row">

                    <div className="col-lg-8">

                        <div className="blogdetails-main">

                            <div className="blogdetails-img">
                                <img src={getImage(data.image)} alt="" />

                                <div className="blogdetails-date">
                                    <h4>{data?.date?.split(" ")[0]}</h4>
                                    <span>{data?.date?.split(" ")[1]}</span>
                                    <small>{data?.date?.split(" ")[2]}</small>
                                </div>
                            </div>

                            <p className="blogdetails-category">{data.category}</p>

                            <h2 className="blogdetails-title">{data.title}</h2>

                            <p className="blogdetails-desc">{data.description}</p>

                            <p className="blogdetails-desc">{data.description}</p>

                            <div className="blogdetails-tags-share">
                                <div>
                                    <strong>Tags:</strong>
                                    {data.tags?.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="social-icons">
                                    <i className="fa fa-facebook"></i>
                                    <i className="fa fa-twitter"></i>
                                    <i className="fa fa-instagram"></i>
                                    <i className="fa fa-linkedin"></i>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-4">

                        <div className="sidebar-box">
                            <input type="text" placeholder="Search Here" className="search-box" />
                        </div>

                        <div className="sidebar-box">
                            <h5>Category</h5>
                            {["Financial Analysis", "Taxation Planning", "Investment Trading", "Wealth Marketing", "Planning Strategies"]
                                .map((cat, i) => (
                                    <div key={i} className="category-item">
                                        {cat} <i className="fa fa-arrow-right"></i>
                                    </div>
                                ))}
                        </div>

                        <div className="sidebar-box service-box">
                            <h4>Torado</h4>
                            <h5>Need Service?</h5>
                            <button className="contact-btn">CONTACT US</button>
                        </div>

                        <div className="sidebar-box">
                            <h5>Tags</h5>
                            {["Consulting", "Agency", "Digital", "Experience", "Technology", "SEO", "Business", "Development"]
                                .map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
};

export default BlogDetails;