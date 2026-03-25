import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style.css"; 

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("users");
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();

  const collections = [
    { key: "users", label: "Users", icon: "fa-users" },
    { key: "contacts", label: "Contacts", icon: "fa-address-book" },
    { key: "services", label: "Services", icon: "fa-cogs" },
    { key: "portfolios", label: "Portfolios", icon: "fa-briefcase" },
    { key: "teams", label: "Team Members", icon: "fa-user-tie" },
    { key: "blogs", label: "Blogs", icon: "fa-blog" },
    { key: "testimonials", label: "Testimonials", icon: "fa-comment-dots" },
    { key: "faqs", label: "FAQs", icon: "fa-question-circle" }
  ];

  const fetchDashboardData = async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin-login");
      return;
    }
    try {
      const response = await axios.get("http://localhost:5000/api/admin/dashboard", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStats(response.data);
    } catch (error) {
      console.error("Dashboard fetch error:", error);
      if (error.response?.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin-login");
      }
    } finally {
      setLoading(false);
    }
  };

  const loadListData = async (collectionName) => {
    setActiveTab(collectionName);
    const token = localStorage.getItem("adminToken");
    try {
      const resp = await axios.get(`http://localhost:5000/api/admin/${collectionName}/list`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setListData(resp.data);
    } catch (err) {
      console.log(err);
      setListData([]); // reset on error
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    const token = localStorage.getItem("adminToken");
    try {
      await axios.delete(`http://localhost:5000/api/admin/${activeTab}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      loadListData(activeTab);
      fetchDashboardData();
    } catch (err) {
      console.error(err);
      alert("Failed to delete record.");
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [navigate]);

  useEffect(() => {
    if (!loading) {
      loadListData(activeTab);
    }
  }, [loading]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  if (loading) return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8f9fa" }}>
      <h2>Loading Admin Panel...</h2>
    </div>
  );

  return (
    <div style={{ background: "#f4f6f9", minHeight: "100vh", paddingBottom: "50px" }}>
      
      <div style={{ background: "#0c2240", color: "#fff", padding: "15px 30px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}><i className="fas fa-shield-alt" style={{ marginRight: '10px' }}></i> Torado Admin</h2>
        <div className="profile-wrapper">
           <div className="profile-circle" title="Admin">A</div>
           <button onClick={handleLogout} className="login-btn ms-3" style={{ background: "transparent", color: "#fff", border: "1px solid #ff2e63" }}>Logout</button>
        </div>
      </div>

      <div className="container" style={{ marginTop: "40px", maxWidth: "1200px" }}>
        
        <div className="row">
          {collections.map((col) => (
            <div className="col-md-3 mb-4" key={col.key}>
              <div 
                style={{ 
                  background: activeTab === col.key ? '#ff3b5c' : '#fff', 
                  color: activeTab === col.key ? '#fff' : '#0c2240', 
                  padding: "20px", 
                  borderRadius: "10px", 
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)", 
                  cursor: "pointer", 
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
                onClick={() => loadListData(col.key)}
              >
                <div>
                  <p style={{ margin: 0, fontSize: "14px", fontWeight: "600", color: activeTab === col.key ? '#f4f4f4' : '#6c757d' }}>{col.label}</p>
                  <h3 style={{ margin: 0, fontSize: "28px", fontWeight: "bold" }}>{stats[col.key] || 0}</h3>
                </div>
                <i className={`fas ${col.icon}`} style={{ fontSize: "32px", color: activeTab === col.key ? '#fff' : '#ff2e63', opacity: "0.8" }}></i>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "#fff", padding: "30px", borderRadius: "10px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", marginTop: "10px" }}>
          
          <h4 style={{ color: "#0c2240", fontWeight: "bold", marginBottom: "20px", borderBottom: "2px solid #f4f6f9", paddingBottom: "15px", textTransform: 'capitalize' }}>
             {collections.find(c => c.key === activeTab)?.label} Data
          </h4>

          <div className="table-responsive">
            <table className="table table-hover" style={{ verticalAlign: 'middle' }}>
              <thead style={{ background: "#f4f6f9", color: "#0c2240" }}>
                {!listData.length ? (
                   <tr><th style={{ padding: "15px", border: "none" }}>Information</th></tr>
                ) : (
                  <tr>
                    {Object.keys(listData[0])
                      .filter(k => !['_id', '__v', 'password', 'image'].includes(k))
                      .slice(0, 4)
                      .map(k => (
                         <th key={k} style={{ padding: "15px", border: "none" }}>{k.toUpperCase()}</th>
                      ))
                    }
                    <th style={{ padding: "15px", border: "none", textAlign: 'right' }}>ACTIONS</th>
                  </tr>
                )}
              </thead>
              <tbody>
                {listData.length > 0 ? (
                  listData.map((item) => {
                    const keys = Object.keys(item).filter(k => !['_id', '__v', 'password', 'image'].includes(k)).slice(0, 4);
                    return (
                      <tr key={item._id} style={{ borderBottom: "1px solid #f4f6f9" }}>
                        {keys.map(k => {
                           // Generic renderer properly converts arrays etc
                           let val = item[k];
                           if (val == null) val = "";
                           else if (Array.isArray(val)) val = val.join(', ');
                           else if (typeof val === 'object') val = JSON.stringify(val);
                           const displayVal = String(val).substring(0, 50) + (String(val).length > 50 ? '...' : '');

                           return (
                             <td key={k} style={{ padding: "15px", color: "#444", border: "none" }}>
                                {displayVal || '-'}
                             </td>
                           )
                        })}
                        <td style={{ padding: "15px", border: "none", textAlign: 'right' }}>
                          <button 
                            onClick={() => handleDelete(item._id)} 
                            style={{ background: "#ff1e4d", color: "#fff", border: "none", padding: "8px 15px", borderRadius: "6px", fontWeight: "600", fontSize: "12px", transition: "0.2s" }}
                          >
                            <i className="fas fa-trash-alt me-1"></i> Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr><td colSpan="5" style={{ padding: "20px", textAlign: "center", color: "#888" }}>No records found in this category.</td></tr>
                )}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
