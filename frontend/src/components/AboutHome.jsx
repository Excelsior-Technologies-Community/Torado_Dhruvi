import React, { useEffect, useState } from "react";
import axios from "axios";

function AboutTeam() {

    const [team, setTeam] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/about")
            .then(res => {
                if (res.data && res.data.team) {
                    setTeam(res.data.team);
                }
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <section className="team-section">

            <div className="container-fluid">

                <p className="team-subtitle">OUR TEAM</p>

                <h2 className="team-title">Meet Our Team Member</h2>

                <div className="row">

                    {team.map((member, index) => (

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

            </div>

        </section>
    );
}

export default AboutTeam;