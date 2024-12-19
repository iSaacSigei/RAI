import React, { useState } from "react";
import "../../styles/AdminLogin.css"; // Assuming you want to add custom styles for the login page

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation (you can enhance this)
    if (!username || !password) {
      setError("Please fill out both fields.");
      return;
    }
    
    // Here you can add your authentication logic
    if (username === "admin" && password === "admin123") {
      setError("");
      // Redirect or update state to indicate successful login
      console.log("Logged in successfully");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="login-container">
        <h2 className="admin_h2">Admin Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              className="admin_input" 
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              className="admin_input"  
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="admin_button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
