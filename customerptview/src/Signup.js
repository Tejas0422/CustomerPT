import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './stylesignup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [createdBy, setCreatedBy] = useState('Admin');
  const [createdAt, setCreatedAt] = useState(new Date().toISOString().slice(0, 16));
  const [updatedBy, setUpdatedBy] = useState('Admin');
  const [updatedAt, setUpdatedAt] = useState(new Date().toISOString().slice(0, 16));

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (data.error && data.error === 'Email already exists') {
        alert('Email already exists');
      } else {
        console.log(data);
        alert('Signup successful');
        navigate('/view/index.html');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Signup failed');
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="name">Full Name:</label><br />
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />
        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <label htmlFor="password">Password:</label><br />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <label htmlFor="confirm_password">Confirm Password:</label><br />
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        /><br /><br />
        <label htmlFor="created_by">Created By:</label><br />
        <select
          type="text"
          id="created_by"
          name="created_by"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          required>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
        </select><br /><br />
         <label htmlFor="created_at">Created At:</label><br />
        <input
          type="datetime-local"
          id="created_at"
          name="created_at"
          value={createdAt}
          onChange={(e) => setCreatedAt(e.target.value)}
          required
        /><br /><br />
        <label htmlFor="updated_by">Updated By:</label><br />
        <select
          type="text"
          id="updated_by"
          name="updated_by"
          value={updatedBy}
          onChange={(e) => setUpdatedBy(e.target.value)}
          required>
            <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          </select>
        <br /><br />
         <label htmlFor="updated_at">Updated At:</label><br />
        <input
          type="datetime-local"
          id="updated_at"
          name="updated_at"
          value={updatedAt}
          onChange={(e) => setUpdatedAt(e.target.value)}
          required
        /><br /><br />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default Signup;
