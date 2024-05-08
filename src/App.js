import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Welcome from './Components/Welcome';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import PrivateRoute from './Components/PrivateRoute';


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
