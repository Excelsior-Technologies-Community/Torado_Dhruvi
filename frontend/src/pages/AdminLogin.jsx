import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style.css"; // Reuse torado styles

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("adminToken", response.data.token);
      navigate("/admin");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name: "Admin User",
        email,
        password,
      });
      handleLogin(e);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0c2240" }}>
       
       <div style={{ background: "#fff", width: "100%", maxWidth: "420px", padding: "40px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
          
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <h2 style={{ color: "#0c2240", fontWeight: "bold", margin: 0 }}>Secure Admin Access</h2>
            <p style={{ color: "#6c757d", fontSize: "14px", marginTop: "5px" }}>Please log in to manage your data</p>
          </div>

          {error && <div style={{ background: "#ffccd5", borderLeft: "4px solid #ff2e63", color: "#d50032", padding: "10px", marginBottom: "20px", fontSize: "14px" }}>{error}</div>}
          
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", color: "#333", fontWeight: "600", marginBottom: "8px" }}>Email</label>
              <input
                className="torado-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ background: "#f8f9fa" }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <label style={{ display: "block", color: "#333", fontWeight: "600", marginBottom: "8px" }}>Password</label>
              <input
                className="torado-input"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ background: "#f8f9fa" }}
              />
            </div>

            <button type="submit" className="torado-send-btn" style={{ width: "100%", padding: "14px", fontSize: "16px", borderRadius: "8px" }}>
              Login to Dashboard
            </button>
            
            <div style={{ textAlign: "center", marginTop: "20px" }}>
               <span style={{ color: "#666", fontSize: "14px" }}>Don't have an admin account?</span>
               <p onClick={handleRegister} style={{ color: "#ff2e63", fontWeight: "bold", cursor: "pointer", marginTop: "5px" }}>Create one automatically</p>
            </div>
            
          </form>

       </div>

    </div>
  );
};

export default AdminLogin;
