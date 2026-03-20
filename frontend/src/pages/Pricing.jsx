import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style1.css";

export default function Pricing() {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/pricing")
            .then(res => setPlans(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="serviceDetails-hero">

                <div className="container">

                    <p className="serviceDetails-breadcrumb">
                        Home | <span>Pricing Plan</span>
                    </p>

                    <h1 className="serviceDetails-title">
                        Pricing Plan
                    </h1>

                </div>

            </div>

            <div className="container py-5">
                <h5 className="text-danger">HOW WE CHARGE</h5>
                <h1 className="fw-bold mb-5">Pricing Plans</h1>

                <div className="row">
                    {plans.map((plan, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card pricing-card text-center">

                                <div className="card-header bg-light">
                                    <h5 className="text-danger">{plan.title}</h5>
                                </div>

                                <div className="price-box text-white">
                                    <h1>${plan.price}</h1>
                                    <p>/{plan.duration}</p>
                                </div>

                                <div className="card-body">
                                    {plan.features.map((f, i) => (
                                        <p key={i}>{f}</p>
                                    ))}
                                </div>

                                <div className="pb-4">
                                    <button className="btn btn-outline-danger">
                                        GET STARTED
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

