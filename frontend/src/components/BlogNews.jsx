import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "../Style.css";

import blog1 from "../assets/n1.jpg";
import blog2 from "../assets/n2.jpg";
import blog3 from "../assets/n3.jpg";

const BlogNews = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/blognews")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const getImage = (img) => {
    if (img === "n1.jpg") return blog1;
    if (img === "n2.jpg") return blog2;
    if (img === "n3.jpg") return blog3;
  };

  return (
    <div className="container blog-section">
      
      <div className="text-center mb-5">
        <p className="text-danger fw-bold">BLOG & NEWS</p>
        <h2 className="fw-bold">Consulter Latest Blog & News</h2>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            
            <div className="blog-card">

              <div className="blog-img">
                <img src={getImage(item.image)} alt="" />

                <div className="date-box">
                  <h4>{item.date.split(" ")[0]}</h4>
                  <span>{item.date.split(" ")[1]}</span>
                  <small>{item.date.split(" ")[2]}</small>
                </div>
              </div>

              <div className="blog-content">
                <p className="category">{item.category}</p>
                <h5>{item.title}</h5>

                <button 
    className="read-btn"
    onClick={() => navigate(`/blogdetails/${item._id}`)}
  >
    Read More <i className="fa fa-arrow-right"></i>
  </button>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default BlogNews;