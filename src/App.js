
import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Welcome from './components/Welcome';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (

    <div >
      <BrowserRouter>
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

