import React, { useState } from "react";
import { FaBook, FaCalendarAlt, FaEnvelope, FaImages, FaUserCog, FaEdit, FaUserFriends, FaUser, FaSignOutAlt } from "react-icons/fa";
import "../../styles/Admin.css";
import ManageCourses from "./AdminRenderedComponents/ManageCourses";
const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("stats");
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate login state

  const sidebarItems = [
    { id: "courses", name: "Manage Courses", icon: <FaBook /> },
    { id: "events", name: "Manage Events", icon: <FaCalendarAlt /> },
    { id: "bookings", name: "Manage Bookings", icon: <FaUserCog /> },
    { id: "gallery", name: "Manage Gallery", icon: <FaImages /> },
    { id: "blogs", name: "Manage Blogs", icon: <FaEdit /> },
    { id: "teams", name: "Manage Teams", icon: <FaUserFriends /> },
    { id: "messages", name: "View Messages", icon: <FaEnvelope /> },
  ];

  const stats = [
    { label: "Total Courses", value: 45, icon: <FaBook />, background: "#FF5733" }, // Orange
    { label: "Total Events", value: 12, icon: <FaCalendarAlt />, background: "#33B5FF" }, // Blue
    { label: "Total Bookings", value: 102, icon: <FaUserFriends />, background: "#28A745" }, // Green
    { label: "New Messages", value: 8, icon: <FaEnvelope />, background: "#FFC107" }, // Yellow
  ];

  const handleLogout = () => {
    // Simulate logout functionality
    setIsLoggedIn(false);
    alert("Logged out successfully!");
  };

  return (
    <div className="admin-page" style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div style={{ width: "250px", background: "#800080", color: "white", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <h2>Admin Panel</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {sidebarItems.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 15px",
                  margin: "10px 0",
                  cursor: "pointer",
                  background: activeTab === item.id ? "#993399" : "transparent",
                  borderRadius: "5px",
                }}
                onClick={() => setActiveTab(item.id)}
              >
                <span style={{ marginRight: "10px" }}>{item.icon}</span>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div
            style={{
                marginTop: "auto",
                padding: "10px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
                backgroundColor: "#993399",
                borderRadius: "5px",
                padding: "10px",
            }}
            >
            {/* User Icon */}
            <FaUser style={{ fontSize: "20px", color: "white", marginLeft: "10px" }} />

            {/* Admin and Logout */}
            <div style={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ color: "white", fontSize: "16px" }}>Admin</div>
                {isLoggedIn && (
                <button
                    onClick={handleLogout}
                    style={{
                    padding: "8px 15px",
                    background: "#FF5733",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    }}
                >
                    <FaSignOutAlt />
                    Logout
                </button>
                )}
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        {/* Stats Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            gap: "20px",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                padding: "15px",
                background: stat.background,
                color: "white",
                textAlign: "center",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "bold",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: "30px", marginBottom: "10px" }}>{stat.icon}</div>
              <div>{stat.label}</div>
              <div style={{ fontSize: "24px", marginTop: "10px" }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Conditionally Rendered Content */}
        <div>
          {activeTab === "courses" && <ManageCourses />}
          {activeTab === "events" && <h2>Manage Events Section</h2>}
          {activeTab === "bookings" && <h2>Manage Bookings Section</h2>}
          {activeTab === "gallery" && <h2>Manage Gallery Section</h2>}
          {activeTab === "blogs" && <h2>Manage Blogs Section</h2>}
          {activeTab === "teams" && <h2>Manage Teams Section</h2>}
          {activeTab === "messages" && <h2>View Messages Section</h2>}
          {activeTab === "stats" && <h2>Stats Overview</h2>}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
