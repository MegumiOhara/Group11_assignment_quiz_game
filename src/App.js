import React from 'react';
import Home from './components/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '/components/Register';
import Login from '/components/Login';
import Navbar from '/components/Navbar';
import PrivateRoute from '/components/PrivateRoute';
import Welcome from '/components/Welcome';

function App() {
  return (

    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="user" element={<PrivateRoute>
            <Route path="welcome" element={<Welcome />} />
          </PrivateRoute>} />
      </Routes> 
      
    </BrowserRouter>   
    </div>
  );
}

export default App;