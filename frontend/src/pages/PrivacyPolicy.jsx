import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style1.css";

function PrivacyPolicy() {
    const [policy, setPolicy] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/privacy")
            .then(res => setPolicy(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="serviceDetails-hero">

                <div className="container">

                    <p className="serviceDetails-breadcrumb">
                        Home | <span>Privacy & Policy</span>
                    </p>

                    <h1 className="serviceDetails-title">
                        Privacy & Policy
                    </h1>
                </div>
            </div>

            <div className="container py-5">

                {policy.map((item, index) => (
                    <div key={index} className="mb-4">
                        <h4 className="fw-bold">{item.title}</h4>
                        <p className="text-muted">{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default PrivacyPolicy;