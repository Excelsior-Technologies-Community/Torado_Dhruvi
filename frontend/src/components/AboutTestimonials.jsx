import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style.css";

function AboutTestimonials() {

    const [testimonials, setTestimonials] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:5000/api/about")
            .then(res => {
                if (res.data && res.data.testimonials) {
                    setTestimonials(res.data.testimonials);
                }
            })
            .catch(err => console.log(err));
    }, []);

    const next = () => {
        if (index < testimonials.length - 2) {
            setIndex(index + 1);
        }
    };

    const prev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <section className="testimonial-section">

            <div className="container">

                <div className="testimonial-header">

                    <p className="testimonial-subtitle">TESTIMONIAL</p>

                    <h2 className="testimonial-title">
                        What User Say About <br /> Our Torado
                    </h2>

                    <div className="testimonial-nav">
                        <button onClick={prev}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button onClick={next}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>

                </div>

                <div className="testimonial-slider">

                    <div
                        className="testimonial-track"
                        style={{
                            transform: `translateX(-${index * 50}%)`
                        }}
                    >

                        {testimonials.map((item, i) => (

                            <div className="testimonial-card" key={i}>

                                <div className="testimonial-top">

                                    <img src={`http://localhost:5000/images/${item.image}`} alt="" />

                                    <div>
                                        <h5>{item.name}</h5>
                                        <p>{item.role}</p>
                                    </div>

                                </div>

                                <p className="testimonial-text">
                                    {item.message}
                                </p>

                                <div className="testimonial-stars">
                                    {[...Array(item.rating)].map((_, starIndex) => (
                                        <i key={starIndex} className="fa-solid fa-star"></i>
                                    ))}
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default AboutTestimonials;