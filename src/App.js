
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Report from './Report';
import Dashboard from './components/Dashboad1'
import Home from './comp/Home'
import Login from './comp/Login'
import Register from './comp/Register'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/report" element={<Report/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        {/* <Route path="/register" element={<Register/>} /> */}
      </Routes>
    </Router>
    // <Report/>
  );
}

export default App;


