import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style1.css";

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
      const response = await axios.get(
        "http://localhost:5000/api/admin/dashboard",
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

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
      const resp = await axios.get(
        `http://localhost:5000/api/admin/${collectionName}/list`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      setListData(resp.data);
    } catch (err) {
      console.log(err);
      setListData([]);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?"))
      return;

    const token = localStorage.getItem("adminToken");

    try {
      await axios.delete(
        `http://localhost:5000/api/admin/${activeTab}/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

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

  if (loading)
    return (
      <div className="admin-loading">
        <h2>Loading Admin Panel...</h2>
      </div>
    );

  return (
    <div className="admin-page">
      
      <div className="admin-header">
        <h2 className="admin-title">
          Torado Admin
        </h2>

        <div className="profile-wrapper d-flex align-items-center">
          <div className="profile-circle" title="Admin">
            A
          </div>

          <button onClick={handleLogout} className="logout-btn ms-3">
            Logout
          </button>
        </div>
      </div>

      <div className="container dashboard-container mt-5">

        <div className="row">
          {collections.map((col) => (
            <div className="col-md-3 mb-4" key={col.key}>
              <div
                className={`dashboard-card ${
                  activeTab === col.key ? "active" : ""
                }`}
                onClick={() => loadListData(col.key)}
              >
                <div>
                  <p>{col.label}</p>
                  <h3>{stats[col.key] || 0}</h3>
                </div>

                <i className={`fas ${col.icon} card-icon`}></i>
              </div>
            </div>
          ))}
        </div>

        <div className="data-section">

          <h4 className="section-title">
            {collections.find((c) => c.key === activeTab)?.label} Data
          </h4>

          <div className="table-responsive">
            <table className="table table-hover">

              <thead>
                {!listData.length ? (
                  <tr>
                    <th>Information</th>
                  </tr>
                ) : (
                  <tr>
                    {Object.keys(listData[0])
                      .filter(
                        (k) =>
                          !["_id", "__v", "password", "image"].includes(k)
                      )
                      .slice(0, 4)
                      .map((k) => (
                        <th key={k}>{k.toUpperCase()}</th>
                      ))}

                    <th className="text-end">ACTIONS</th>
                  </tr>
                )}
              </thead>

              <tbody>
                {listData.length > 0 ? (
                  listData.map((item) => {
                    const keys = Object.keys(item)
                      .filter(
                        (k) =>
                          !["_id", "__v", "password", "image"].includes(k)
                      )
                      .slice(0, 4);

                    return (
                      <tr key={item._id}>
                        {keys.map((k) => {
                          let val = item[k];

                          if (val == null) val = "";
                          else if (Array.isArray(val)) val = val.join(", ");
                          else if (typeof val === "object")
                            val = JSON.stringify(val);

                          const displayVal =
                            String(val).substring(0, 50) +
                            (String(val).length > 50 ? "..." : "");

                          return <td key={k}>{displayVal || "-"}</td>;
                        })}

                        <td className="text-end">
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="delete-btn"
                          >
                            <i className="fas fa-trash-alt me-1"></i>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No records found in this category.
                    </td>
                  </tr>
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