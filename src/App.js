
import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import AppTanja from './components/AppTanja';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';
import Levels from './components/Levels-page/Levels';


function App() {
  return (

    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/apptanja" element={<AppTanja />} />
          <Route path="/login" element={<Login />} />
          <Route path="/level1" element={<Quiz />}/>
          <Route path="user" element={<PrivateRoute>
            <Route path="/levels" element={<Levels />} />
          </PrivateRoute>} />
      </Routes> 
      
    </BrowserRouter>   
    </div>
  );
}

export default App;

