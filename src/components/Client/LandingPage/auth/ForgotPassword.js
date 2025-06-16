import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../../styles/auth.css"; // Adjust the path if needed

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    setLoading(true);
    try {
      // Replace with your API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess("Password reset link sent to your email!");
      setEmail("");
    } catch (err) {
      setError("Failed to send reset link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2 className="auth-heading">Forgot Password</h2>
        <p className="auth-linkText" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <input
          className="auth-input"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          required
        />
        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}
        <button className="auth-button" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
        <p className="auth-linkText">
          Remembered your password? <Link to="/signIn">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;