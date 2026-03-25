import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Style1.css";
import teamImg from "../assets/team-details1.jpg";

const TeamDetails = () => {

    const { id } = useParams();
    const [team, setTeam] = useState({});

    useEffect(() => {

        axios.get(`http://localhost:5000/api/team/${id}`)
            .then(res => setTeam(res.data))
            .catch(err => console.log(err));

    }, [id]);

    const [name, setName] = useState(localStorage.getItem("name") || "");
    const [email, setEmail] = useState(localStorage.getItem("email") || "");
    const [teamSubject, setTeamSubject] = useState("");
    const [teamPhone, setTeamPhone] = useState("");
    const [teamMessage, setTeamMessage] = useState("");

    const handleTeamFormSubmit = async () => {

        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login & then try again");
            return;
        }

        const res = await fetch("http://localhost:5000/api/teamForm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                email,
                subject: teamSubject,
                phone: teamPhone,
                message: teamMessage
            })
        });

        const data = await res.json();

        if (res.status === 401 || res.status === 400) {
            alert("Session expired. Please login again.");
            localStorage.clear();
            setUser(null);
            return;
        }

        if (data.success) {
            alert("Team message submitted successfully");

            setTeamSubject("");
            setTeamPhone("");
            setTeamMessage("");

            fetchTeamData();
        } else {
            alert(data.message);
        }
    };

    return (
        <>

            <div className="serviceDetails-hero">

                <div className="container">

                    <p className="serviceDetails-breadcrumb">
                        Home | <span>Team Single</span>
                    </p>

                    <h1 className="serviceDetails-title">
                        Team Single
                    </h1>

                </div>

            </div>

            <div className="container team-details">

                <div className="row align-items-center">

                    <div className="col-lg-5">
                        <img
                            src={teamImg}
                            className="img-fluid team-img"
                            alt=""
                        />
                    </div>

                    <div className="col-lg-7">

                        <h2 className="team-name">{team.name}</h2>
                        <h6 className="team-role">{team.role}</h6>

                        <p className="team-desc">{team.description}</p>

                        <p>
                            <i className="fa fa-phone icon"></i>
                            <b> Phone No:</b> {team.phone}
                        </p>

                        <p>
                            <i className="fa fa-envelope icon"></i>
                            <b> Email:</b> {team.email}
                        </p>

                        <div className="social-icons">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>

                    </div>

                </div>


                <hr />


                <div className="row mt-5">

                    <div className="col-lg-6">

                        <h3>Personal Experience</h3>

                        <p>
                            Pellentesque at posuere tellus. Ut sed dui justo.
                            Phasellus scelerisque turpis pulvinar lectus tristique non.
                        </p>

                    </div>

                    <div className="col-lg-6">

                        <div className="skill">

                            <p>Technology <span>{team.technology}%</span></p>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: team.technology + "%" }}></div>
                            </div>

                            <p>Marketing <span>{team.marketing}%</span></p>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: team.marketing + "%" }}></div>
                            </div>

                            <p>Business <span>{team.business}%</span></p>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: team.business + "%" }}></div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="team-form-wrapper">

                <p className="team-subtitle">CONTACT WITH US NOW</p>

                <h2 className="team-title">
                    Feel Free to Write Our <br /> Technology Experts
                </h2>

                <div className="container">
                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="team-input"
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="team-input"
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <input
                                type="text"
                                placeholder="Your Subject"
                                className="team-input"
                                value={teamSubject}
                                onChange={(e) => setTeamSubject(e.target.value)}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <input
                                type="text"
                                placeholder="Your Phone Number"
                                className="team-input"
                                value={teamPhone}
                                onChange={(e) => setTeamPhone(e.target.value)}
                            />
                        </div>

                        <div className="col-md-12 mb-3">
                            <textarea
                                placeholder="Enter Your Message"
                                className="team-textarea"
                                rows="6"
                                value={teamMessage}
                                onChange={(e) => setTeamMessage(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="col-md-12 text-center">

                            <button
                                className="team-btn me-2"
                                onClick={handleTeamFormSubmit}
                            >
                                SEND MESSAGE
                            </button>

                            <button
                                className="team-btn reset-btn"
                                onClick={() => {
                                    setTeamSubject("");
                                    setTeamPhone("");
                                    setTeamMessage("");
                                }}
                            >
                                RESET
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default TeamDetails;