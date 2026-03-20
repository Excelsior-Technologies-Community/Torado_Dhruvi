import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Style1.css";

import blog1 from "../assets/n1.jpg";
import blog2 from "../assets/n2.jpg";
import blog3 from "../assets/n3.jpg";

import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";

const BlogDetails = () => {

    const { id } = useParams();
    const [data, setData] = useState({});
    const [comments, setComments] = useState([]);

    const fetchComments = () => {
        axios.get("http://localhost:5000/api/comments")
            .then(res => setComments(res.data))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        axios.get(`http://localhost:5000/api/blogdetails/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));

        fetchComments();
    }, [id]);

    const getImage = (img) => {
        if (img === "n1.jpg") return blog1;
        if (img === "n2.jpg") return blog2;
        if (img === "n3.jpg") return blog3;
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {

        const token = localStorage.getItem("token");

        // ✅ LOGIN CHECK
        if (!token) {
            alert("Please login first & then try to submit comment");
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/api/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ name, email, message })
            });

            const data = await res.json();

            if (res.status === 401) {
                alert("Session expired or invalid. Please login again.");
                localStorage.removeItem("token");
                localStorage.removeItem("name");
                localStorage.removeItem("email");
                return;
            }

            if (res.ok) {
                alert("Comment submitted successfully ");

                setName("");
                setEmail("");
                setMessage("");
                fetchComments();
            } else {
                alert(data.message || "Error submitting comment");
            }

        } catch (err) {
            console.log(err);
            alert("Server error");
        }
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

                            <div className="blogdetails-tags-share">
                                <div>
                                    <strong>Tags:</strong>
                                    {data.tags?.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="social-icons">
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i className="fa-brands fa-instagram"></i>
                                    <i className="fa-brands fa-linkedin"></i>
                                </div>
                            </div>

                        </div>

                        <div className="comments-wrapper container">

                            <div className="row top-cards">
                                <div className="col-md-6 mb-3">
                                    <div className="top-card">
                                        Consulted Admitting Wooded Is Power Acuteness
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="top-card text-end">
                                        Popular Consultants are Big Meetup 2025
                                    </div>
                                </div>
                            </div>

                            <h2 className="comments-title">{comments.length} Comments</h2>

                            {comments.map((comment, index) => (
                                <React.Fragment key={index}>
                                    <div className="comment-box d-flex">
                                        <div className="comment-img">
                                            <img src={index % 2 === 0 ? user1 : user2} alt="user" />
                                        </div>

                                        <div className="comment-content">
                                            <h5 className="comment-name">{comment.name}</h5>
                                            <span className="comment-role">User</span>
                                            <p className="comment-text">{comment.message}</p>
                                        </div>
                                    </div>
                                    {index !== comments.length - 1 && <hr />}
                                </React.Fragment>
                            ))}

                        </div>

                        <div className="comment-form-section container">

                            <h2 className="form-title">Leave a Comment</h2>

                            <div className="row">

                                <div className="col-md-6 mb-3">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="form-input"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <input
                                        type="email"
                                        placeholder="Your Email Address"
                                        className="form-input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="col-12 mb-3">
                                    <textarea
                                        placeholder="Enter Message..."
                                        className="form-textarea"
                                        rows="5"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>

                                <div className="col-12">
                                    <button className="submit-btn" onClick={handleSubmit}>
                                        SUBMIT MESSAGE
                                    </button>
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