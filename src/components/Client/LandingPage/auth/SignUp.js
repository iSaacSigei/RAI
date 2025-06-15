import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebook, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "../../../../styles/auth.css"; // Fixed the path to go up one more level

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
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
    if (name === 'confirmPassword' && value && value !== formData.password) {
      errors.confirmPassword = 'Passwords do not match';
    } else if (name === 'confirmPassword') {
      delete errors.confirmPassword;
    }
    setValidationErrors(errors);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const getPasswordStrength = (password) => {
    if (!password) return "";
    if (password.length < 8) return "weak";
    if (password.length < 12) return "medium";
    return "strong";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate all fields
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!validateEmail(formData.email)) errors.email = 'Please enter a valid email';
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!acceptedTerms) errors.terms = 'Please accept the terms and conditions';

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess("Account created successfully!");
      navigate("/signIn");
    } catch (err) {
      setError("Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic here
    console.log(`Signing up with ${provider}`);
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="auth-container">
      <div className="auth-form">
        <div className="auth-header">
          <img src="/Logo.png" alt="RAI Alliance" className="auth-logo" />
          <h1>Join RAI Alliance</h1>
          <p>Create your account to get started</p>
        </div>

        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="auth-input-container">
            <FaUser className="auth-input-icon" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="auth-input"
              placeholder="Enter your full name"
              required
            />
          </div>
          {validationErrors.fullName && (
            <div className="auth-error">{validationErrors.fullName}</div>
          )}

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
              placeholder="Create a password"
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
          {formData.password && (
            <div className={`password-strength ${passwordStrength}`}>
              <span>Password strength:</span>
              <span>{passwordStrength}</span>
            </div>
          )}
          {validationErrors.password && (
            <div className="auth-error">{validationErrors.password}</div>
          )}

          <div className="password-input-container">
            <FaLock className="auth-input-icon" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="auth-input"
              placeholder="Confirm your password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {validationErrors.confirmPassword && (
            <div className="auth-error">{validationErrors.confirmPassword}</div>
          )}

          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <label htmlFor="terms">
              I agree to the{' '}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </label>
          </div>
          {validationErrors.terms && (
            <div className="auth-error">{validationErrors.terms}</div>
          )}

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className="social-login">
          <p>Or continue with</p>
          <div className="social-buttons">
            <button
              type="button"
              className="social-button google"
              onClick={() => handleSocialLogin('Google')}
            >
              <FcGoogle size={20} />
              Google
            </button>
            <button
              type="button"
              className="social-button facebook"
              onClick={() => handleSocialLogin('Facebook')}
            >
              <FaFacebook />
              Facebook
            </button>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          Already have an account?{' '}
          <Link to="/signIn" className="auth-link">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;