import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './loginform.css'; 
import bgImage from './components/logo.jpg';
import avatarImage from './components/avatar.svg';

const LoginForm = () => {
  const [userType, setUserType] = useState('admin');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType && userId && password) {
      navigate(`/${userType}`);
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <div>
      <div className="container">
        <div className="logo-container"> {/* Updated class name */}
          <img src={bgImage} alt="background" className="logo" />
          <p className="slogan">Smart and Efficient Healthcare Assistance Technology</p> {/* Moved text below logo */}
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src={avatarImage} alt="avatar" />
            <h2 className="title">Welcome</h2>
            <table className="form-table">
              <tbody>
                <tr>
                  <td className="label">User Type</td>
                  <td>
                    <select
                      id="userType"
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                      className="input select-input"
                    >
                      <option value="admin">Admin</option>
                      <option value="local">Patient</option>
                      <option value="doctor">Doctor</option>
                      <option value="pharmacy">Pharmacy</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="label">User ID</td>
                  <td>
                    <input
                      type="text"
                      className="input"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td className="label">Password</td>
                  <td>
                    <input
                      type="password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="forgot-password">
                    <a href="#">Forgot Password?</a> | 
                    <Link to="/signupform" className="signup-link">Sign Up</Link>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <input type="submit" className="btn" value="Login" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
