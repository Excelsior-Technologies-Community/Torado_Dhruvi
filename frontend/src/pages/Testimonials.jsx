import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style1.css";

const Testimonials = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/testimonials")
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            <div className="serviceDetails-hero">

                <div className="container">

                    <p className="serviceDetails-breadcrumb">
                        Home | <span>Testimonials</span>
                    </p>

                    <h1 className="serviceDetails-title">
                        Testimonials
                    </h1>

                </div>

            </div>

            <div className="container py-5">

                <div className="row">

                    {data.map((item) => (
                        <div className="col-lg-4 col-md-6 mb-4">

                            <div className="testimonial-card">

                                <div className="stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>

                                <p className="message">
                                    {item.message}
                                </p>

                                <div className="client">

                                    <img
                                        src={`http://localhost:5000/images/${item.image}`}
                                        alt=""
                                        className="client-img"
                                    />

                                    <div>
                                        <h5>{item.name}</h5>
                                        <p>{item.role}</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </>

    )

}

export default Testimonials;