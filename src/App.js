
import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import AppTanja from './components/AppTanja';
import Quiz from './components/Quiz';
import Levels from './components/Levels-page/Levels';
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
          <Route path="/apptanja" exact element={<AppTanja />} />
          <Route path="/quiz" exact element={<Quiz />} />
          <Route path="/levels" exact element={<Levels />} />
          <Route path="/login" element={<Login />} />
          <Route path="/level1" element={<Quiz />}/>
          <Route path="/levels" element={<Levels />}/>
          <Route path="user" element={<PrivateRoute>
            <Route path="/levels" element={<Levels />} />
          </PrivateRoute>} />
      </Routes> 
      
    </BrowserRouter>   
    </div>
  );
}

export default App;

