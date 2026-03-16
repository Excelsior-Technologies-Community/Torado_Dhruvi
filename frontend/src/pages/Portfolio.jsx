import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style.css";

const Portfolio = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:5000/api/portfolio")
            .then(res => setData(res.data))
            .catch(err => console.log(err));

    }, []);

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

                     {data.map((item, index) => (

                        <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>

                            <div className="portfolio-card">

                                <img src={item.image} alt="" />

                                <div className="portfolio-content">
                                    <div className="portfolio-text">
                                        <div className="portfolio-category">
                                            <div className="portfolio-small-line"></div>
                                            <span>{item.category}</span>
                                        </div>
                                        <h5>{item.title}</h5>
                                    </div>

                                    <button className="arrow-btn">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </>
    )
}

export default Portfolio;