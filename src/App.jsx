import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Register from './pages/Register/register';
import Login from './pages/Login/login';
import HomePage from './pages/Home/homePage';

import MainLayout from './Layouts/mainLayout';
import Menu from './pages/Menu/menu';
import Recipies from './pages/Recipies/recepies';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <HomePage />
              </MainLayout>
            }
          />
          <Route
            path="/menu"
            element={
              <MainLayout>
                <Menu />
              </MainLayout>
            }
          />
          <Route
            path="/recipie"
            element={
              <MainLayout>
                <Recipies />
              </MainLayout>
            }
          />
      
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;