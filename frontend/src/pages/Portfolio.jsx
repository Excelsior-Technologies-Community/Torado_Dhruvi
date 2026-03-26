import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "../Style.css";
import heroImg from "../assets/service-details.jpg";

const Portfolio = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        axios.get("http://localhost:5000/api/portfolio")
            .then(res => {
                setData(res.data);
                setError(null);
            })
            .catch(err => {
                console.error("Portfolio API error:", err);
                setError("Unable to load portfolio at this time.");
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);
    const navigate = useNavigate();

    return (
        <>
            <div className="serviceDetails-hero">
                <div className="container">
                    <p className="serviceDetails-breadcrumb">
                        Home | <span>Portfolio</span>
                    </p>
                    <h1 className="serviceDetails-title">
                        Portfolio
                    </h1>
                </div>
            </div>

            <div className="container portfolio-page">

                <div className="row">

                {loading ? (
                    <div className="text-center m-4">Loading portfolio...</div>
                ) : error ? (
                    <div className="text-center text-danger m-4">{error}</div>
                ) : data.length === 0 ? (
                    <div className="text-center m-4">
                        No portfolio items yet. Please add portfolio docs in MongoDB or connect to the correct backend.
                    </div>
                ) : (
                    data.map((item, index) => {
                        let imgSrc = "";
                        if (item.image) {
                            if (item.image.startsWith("http") || item.image.startsWith("/")) {
                                imgSrc = item.image;
                            } else {
                                imgSrc = `/images/${item.image}`;
                            }
                        }
                        return (
                            <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>

                                <div className="portfolio-card">

                                    {imgSrc ? <img src={imgSrc} alt={item.title} /> : <div className="image-placeholder">Image not available</div>}

                                    <div className="portfolio-content">
                                        <div className="portfolio-text">
                                            <div className="portfolio-category">
                                                <div className="portfolio-small-line"></div>
                                                <span>{item.category}</span>
                                            </div>
                                            <h5>{item.title}</h5>
                                        </div>

                                        <button
                                            className="arrow-btn"
                                            onClick={() => navigate(`/portfolio-details/${item._id}`)}
                                        >
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>

                                </div>

                            </div>
                        );
                    })
                )}

            </div>

            </div>
        </>
    )
}

export default Portfolio;