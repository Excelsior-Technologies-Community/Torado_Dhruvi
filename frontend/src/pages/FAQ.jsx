import { useEffect, useState } from "react";
import axios from "axios";
import "../Style1.css";

import faq1 from "../assets/faq1.jpg";
import faq2 from "../assets/faq2.jpg";

export default function FAQ() {
    const [faqs, setFaqs] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/faqs")
            .then(res => setFaqs(res.data))
            .catch(err => console.log(err));
    }, []);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const mid = Math.ceil(faqs.length / 2);

    const leftFaqs = faqs.slice(0, mid);
    const rightFaqs = faqs.slice(mid);

    const [user, setUser] = useState(null);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const name = localStorage.getItem("name");
        const email = localStorage.getItem("email");

        if (name && email) {
            setUser({ name, email });
        }
    }, []);

    const handleSubmit = async () => {

        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login then try to fill the form");
            return;
        }

        try {

            const res = await fetch("http://localhost:5000/api/faqs/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    name,
                    phone,
                    email,
                    message
                })
            });

            const data = await res.json();

            if (res.status === 401) {
                alert("Your session has expired or your token is invalid. Please log in again.");
                localStorage.removeItem("token");
                return;
            }

            if (res.ok && data.success) {
                alert("Form submitted successfully");

                setName("");
                setPhone("");
                setEmail("");
                setMessage("");
            } else {
                alert(data.message || "Failed to submit form");
            }

        } catch (err) {
            console.log(err);
            alert("Something went wrong. Check console for details.");
        }
    };
    

    return (
        <>


            <div className="serviceDetails-hero">

                <div className="container">

                    <p className="serviceDetails-breadcrumb">
                        Home | <span>FAQ'S</span>
                    </p>

                    <h1 className="serviceDetails-title">
                        FAQ'S
                    </h1>

                </div>

            </div>


            <div className="faq-wrapper container py-5">
                <div className="faq-wrapper container py-5">
                    <div className="row">

                        <div className="col-lg-6">
                            {leftFaqs.map((faq, index) => (
                                <div className="faq-item mb-3" key={faq._id}>
                                    <div
                                        className="faq-header"
                                        onClick={() => toggle(index)}
                                    >
                                        <h6>{faq.question}</h6>
                                        <i className={`fa-solid ${openIndex === index ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                    </div>

                                    <div className={`faq-body ${openIndex === index ? "show" : ""}`}>
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="col-lg-6">
                            {rightFaqs.map((faq, index) => {
                                const actualIndex = index + mid;

                                return (
                                    <div className="faq-item mb-3" key={faq._id}>
                                        <div
                                            className="faq-header"
                                            onClick={() => toggle(actualIndex)}
                                        >
                                            <h6>{faq.question}</h6>
                                            <i className={`fa-solid ${openIndex === actualIndex ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                        </div>

                                        <div className={`faq-body ${openIndex === actualIndex ? "show" : ""}`}>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>

            <div className="faq-section container py-5">

                <div className="row align-items-center">

                    <div className="col-lg-6">

                        <p className="faq-subtitle">FAQ QUESTIONS</p>
                        <h1 className="faq-title">
                            Have Any Question And Any Answers?
                        </h1>

                        <div className="faq-form">

                            <div className="row">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>

                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <textarea
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />

                            <button className="faq-btn" onClick={handleSubmit}>
                                SEND MESSAGE
                            </button>

                        </div>
                    </div>

                    <div className="col-lg-6 position-relative">

                        <img src={faq1} className="faq-img1" alt="" />
                        <img src={faq2} className="faq-img2" alt="" />

                        <div className="faq-card">
                            <h2>170k</h2>
                            <p>Clients Satisfaction Survey In Consulting Organization</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}