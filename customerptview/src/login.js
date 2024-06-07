import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styleindex.css'; 

const Login = () => {
  debugger;
  
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [data1,setData1]=useState({email:"",password:""});
  const navigate = useNavigate();

  function handleChange(e){
    console.log("e.value:",e.target.value);
    setData1({ ...data1, [e.target.name]: e.target.value });
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const email=data1.email;
    const password=data1.password;


    try {
      const response = await fetch('http://localhost:3001/login', { // Adjust the endpoint as necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {email,password} )
        // body:(data)
      });

      const data = await response.json();

      if (data.error) {
        alert('Login failed');
      } else {
        console.log("data:",data);
        alert('Login successful');
        localStorage.setItem('token', data.token);
        navigate('/dashboard'); // Adjust the redirection as necessary
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed');
    }
  };

  const onSignIn = (googleUser) => {
    // Handle Google Sign-In
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());
  };

  return(<>
    <div id="login-box">
      <span className="close-btn" id="close-btn">&times;</span>
      <h1>Login</h1>
      <form id="loginForm" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>  
          <input
            type="email"
            id="email"
            name="email"
            value={data1.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={data1.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Signin" />
        </div>
      </form>
      <br />
      <hr />
      <br />
      <div className="g-signin2" data-onsuccess={onSignIn}></div>
      <div className="g-signin2"></div>
      <p>Don't have an account? <Link to="/signup" style={{ backgroundColor: 'rgba(236, 217, 9, 0.982)' }}>Signup</Link></p>
    </div>
    </>
  );
};

export default Login;
