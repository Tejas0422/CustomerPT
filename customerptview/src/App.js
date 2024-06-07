import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Signup from './Signup';
import Login from './login';
import Dashboard from './dashboard';


const App = () => {
  return (
    <Router>
      <Routes>
      
       <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
