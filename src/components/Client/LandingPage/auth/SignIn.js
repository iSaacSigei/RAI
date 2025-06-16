import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebook, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "../../../../styles/auth.css"; // Adjust the path if needed

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    const errors = { ...validationErrors };
    if (name === 'email' && value && !validateEmail(value)) {
      errors.email = 'Please enter a valid email address';
    } else if (name === 'email') {
      delete errors.email;
    }
    setValidationErrors(errors);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate all fields
    const errors = {};
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!validateEmail(formData.email)) errors.email = 'Please enter a valid email';
    if (!formData.password) errors.password = 'Password is required';

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess("Sign in successful!");
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic here
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <div className="auth-header">
          <img src="/Logo.png" alt="RAI Alliance" className="auth-logo" />
          <h1>Welcome Back</h1>
          <p>Sign in to continue to RAI Alliance</p>
        </div>

        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="auth-input-container">
            <FaEnvelope className="auth-input-icon" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="auth-input"
              placeholder="Enter your email"
              required
            />
          </div>
          {validationErrors.email && (
            <div className="auth-error">{validationErrors.email}</div>
          )}

          <div className="password-input-container">
            <FaLock className="auth-input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="auth-input"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {validationErrors.password && (
            <div className="auth-error">{validationErrors.password}</div>
          )}

          <Link
            to="/forgot-password"
            className="auth-link"
            style={{ display: "block", textAlign: "right", marginTop: "0.5rem" }}
          >
            Forgot Password?
          </Link>
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="social-login">
          <p>Or continue with</p>
          <div className="social-buttons">
            <button
              type="button"
              className="social-button google"
              onClick={() => handleSocialLogin("Google")}
            >
              <FcGoogle size={20} />
              Google
            </button>
            <button
              type="button"
              className="social-button facebook"
              onClick={() => handleSocialLogin("Facebook")}
            >
              <FaFacebook />
              Facebook
            </button>
          </div>
        </div>

        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Don't have an account?{" "}
          <Link to="/signUp" className="auth-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;