import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Style1.css";

export default function AboutHome(){
        const [about, setAbout] = useState({});
    
    return(
        <>
            <section className="team-section">

                <div className="container-fluid">

                    <p className="team-subtitle">OUR TEAM</p>

                    <h2 className="team-title">Meet Our Team Member</h2>

                    <div className="row">

                        {about.team?.map((member, index) => (

                            <div className="col-lg-3 col-md-6 col-12 mb-4" key={index}>

                                <div className="team-card">

                                    <div className="team-img">
                                        <img src={member.image} alt="" />
                                    </div>

                                    <div className="team-content">

                                        <h5>{member.name}</h5>
                                        <p>{member.role}</p>

                                        <div className="team-social">

                                            <a href={member.facebook}>
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>

                                            <a href={member.twitter}>
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>

                                            <a href={member.instagram}>
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>

                                            <a href={member.linkedin}>
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                    <p className="team-bottom-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <span> View All Team Member →</span>
                    </p>

                </div>

            </section>

        </>
    )
}

